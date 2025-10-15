import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is your AI different from general-purpose chat tools?",
    answer:
      "Briefing Engine is trained on video production workflows. Instead of open-ended prompting, you complete guided fields and receive a storyboard with scenes, copy, and platform specs automatically aligned to your brief."
  },
  {
    question: "How quickly will I see a storyboard?",
    answer:
      "Most teams review a polished storyboard during their first session. The Studio team joins as soon as you’re happy with the direction so production planning can start immediately."
  },
  {
    question: "Do I need AI expertise to use this?",
    answer:
      "No. The intake is written in plain language—campaign goal, audience, tone, references, approvals. We translate that into production-ready outputs so you never have to write prompts."
  },
  {
    question: "What makes the storyboard production-ready?",
    answer:
      "Each delivery includes a scene-by-scene outline, suggested copy, camera and motion notes, aspect-ratio crops, and downloadable assets so directors and editors can move straight into execution."
  },
  {
    question: "Can I use the storyboard without hiring your Studio?",
    answer:
      "Yes. Export the PDF and share it with any internal or external crew. When you want our Studio involved, the same storyboard hands off directly into their workflow."
  },
  {
    question: "How customizable are the visual directions?",
    answer:
      "You can start from curated directions and then tweak palette, typography, motion cues, and references until it reflects your brand. Nothing is locked to templates."
  },
  {
    question: "Can agencies manage multiple clients?",
    answer:
      "Absolutely. Each brief keeps its own guardrails, approvers, and visual direction so you can maintain separate client workstreams without context overlap."
  },
  {
    question: "How do you handle different industries?",
    answer:
      "The intake captures industry context and compliance requirements. Our team reviews the output alongside the AI so regulated or niche sectors still receive accurate messaging."
  },
  {
    question: "What support do I get from the Studio team?",
    answer:
      "A producer schedules your kickoff, a creative director validates the narrative, and specialists oversee color, motion, and sound so the final video matches the storyboard."
  },
  {
    question: "How can I experience the platform?",
    answer:
      "Start a brief to see the workflow end-to-end, then book a call with our Studio to plan production, pricing, and rollout."
  }
]

const BriefingFAQ = () => {
  return (
    <section className="relative isolate mx-auto max-w-[920px] px-4 py-20">
      <div className="absolute inset-0 -z-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-black/65 via-black/55 to-black/70" aria-hidden />
      <div className="flex flex-col gap-8">
        <div className="text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">Frequently Asked</p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Answers Before You Get Started
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            The briefing engine is designed for clarity. These are the questions we hear most often from agencies and brands before they press “Start Your Brief.”
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur"
            >
              <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold text-white hover:bg-white/5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default BriefingFAQ;
