import { useState } from "react";
import { useForm } from "react-hook-form";
import { GradientButton } from "./ui/gradient-button";
import { toast } from "sonner";
import { FormField } from "./contact/FormField";
import DOMPurify from "dompurify";
import { Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Rate limiting implementation
const RATE_LIMIT_DURATION = 60000; // 1 minute
const MAX_SUBMISSIONS = 3;

const submissionHistory: number[] = [];

const isRateLimited = (): boolean => {
  const now = Date.now();
  // Clean up old submissions
  while (submissionHistory.length > 0 && submissionHistory[0] < now - RATE_LIMIT_DURATION) {
    submissionHistory.shift();
  }
  return submissionHistory.length >= MAX_SUBMISSIONS;
};

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({
    mode: "onChange"
  });

  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input.trim(), {
      ALLOWED_TAGS: [], // Strip all HTML tags
      ALLOWED_ATTR: [] // Strip all attributes
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form onSubmit triggered", data);

    if (!isValid) {
      toast.error("Please fix the form errors before submitting");
      return;
    }

    if (isRateLimited()) {
      toast.error("Too many submissions. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Add current timestamp to submission history
      submissionHistory.push(Date.now());

      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email).toLowerCase(),
        message: sanitizeInput(data.message),
      };

      // Validate email format
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(sanitizedData.email)) {
        throw new Error("Invalid email format");
      }

      // Submit the sanitized data to Getform using a FormData object
      const formData = new FormData();
      formData.append("name", sanitizedData.name);
      formData.append("email", sanitizedData.email);
      formData.append("message", sanitizedData.message);

      const endpointEnv = import.meta.env.VITE_GETFORM_ENDPOINT;
      const getformUrl = (endpointEnv && endpointEnv !== "undefined") ? endpointEnv : "https://getform.io/f/bzywlpya";
      const tokenEnv = import.meta.env.VITE_GETFORM_TOKEN;
      const getformToken = (tokenEnv && tokenEnv !== "undefined") ? tokenEnv : "tg2J6KHgPYeUXYfYcTRdFkCtLYeKgu6CjSlyfwCCgzkyYIj72i3njepH16GP";
      const response = await fetch(getformUrl, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${getformToken}`
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      console.log("Form submitted with sanitized data:", sanitizedData);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      encType="multipart/form-data"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 animate-fade-in"
      autoComplete="off"
      noValidate
    >
      <FormField
        name="name"
        label="Your name"
        placeholder="Your Name"
        register={register}
        rules={{
          required: "Name is required",
          minLength: { value: 2, message: "Name must be at least 2 characters" },
          maxLength: { value: 50, message: "Name must not exceed 50 characters" },
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: "Name can only contain letters and spaces"
          }
        }}
        error={errors.name}
      />

      <FormField
        name="email"
        label="Your email"
        type="email"
        placeholder="Your Email"
        register={register}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          },
          maxLength: { value: 100, message: "Email must not exceed 100 characters" }
        }}
        error={errors.email}
      />

      <FormField
        name="message"
        label="Your message"
        placeholder="Your Message"
        register={register}
        rules={{
          required: "Message is required",
          minLength: { value: 10, message: "Message must be at least 10 characters" },
          maxLength: { value: 1000, message: "Message must not exceed 1000 characters" }
        }}
        error={errors.message}
        isTextarea
      />

      <GradientButton
        type="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="w-full"
        size="lg"
        icon={<Send className="w-5 h-5" />}
        aria-label={isSubmitting ? "Sending message..." : "Send message"}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </GradientButton>
    </form>
  );
};