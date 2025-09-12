import { Helmet } from "react-helmet";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Cre8tive AI</title>
        <meta 
          name="description" 
          content="Privacy Policy for Cre8tive AI. Learn how we collect, use, and protect your personal information in compliance with GDPR, CCPA, and LinkedIn advertising requirements." 
        />
        <link rel="canonical" href="https://cre8tive.ai/privacy" />
      </Helmet>
      
      <div className="min-h-screen bg-[#111111] pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollFade>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8 font-geist">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/80 mb-6">
                <strong>Effective Date:</strong> January 15, 2025<br />
                <strong>Last Updated:</strong> January 15, 2025
              </p>

              <p className="text-white/80 mb-8">
                Cre8tive AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://cre8tive.ai" className="text-blue-400 hover:text-blue-300">cre8tive.ai</a>, use our services, or interact with our advertisements, including those on LinkedIn and other platforms.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">1.1 Information You Provide</h3>
                <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                  <li>Contact information (name, email address, phone number, company name)</li>
                  <li>Communications you send to us</li>
                  <li>Information submitted through contact forms, lead generation forms, or newsletter subscriptions</li>
                  <li>Professional information when you inquire about our services</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">1.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, click patterns)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Analytics data through Google Analytics and similar services</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">1.3 Information from Third Parties</h3>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>LinkedIn and other social media platforms when you interact with our ads</li>
                  <li>Marketing partners and advertising networks</li>
                  <li>Publicly available professional information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-white/80 mb-3">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>Provide and improve our AI-powered video production and content creation services</li>
                  <li>Respond to inquiries and communicate about our services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Personalize your experience and deliver targeted advertising</li>
                  <li>Analyze website usage and improve our offerings</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Protect against fraud and maintain security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. LinkedIn Advertising Disclosure</h2>
                <p className="text-white/80 mb-4">
                  When you interact with our advertisements on LinkedIn or submit information through LinkedIn Lead Gen Forms:
                </p>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>We receive the information you provide in the form</li>
                  <li>LinkedIn may share professional profile information based on your privacy settings</li>
                  <li>We use this information solely to provide requested services and communications</li>
                  <li>We do not sell or share Lead Gen Form data with third parties for their marketing purposes</li>
                  <li>Form data is retained for up to 365 days unless you request earlier deletion</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Cookie Policy</h2>
                <p className="text-white/80 mb-4">We use the following types of cookies:</p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
                <p className="text-white/80 mb-4">Required for website functionality and cannot be disabled.</p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
                <p className="text-white/80 mb-4">Help us understand how visitors interact with our website (Google Analytics, LinkedIn Insight Tag).</p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Marketing Cookies</h3>
                <p className="text-white/80 mb-4">Used to deliver relevant advertisements and track campaign performance.</p>
                
                <p className="text-white/80">
                  You can manage cookie preferences through your browser settings or by using our cookie consent tool.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-white/80 mb-3">We may share your information with:</p>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li><strong>Service Providers:</strong> Companies that help us operate our business (hosting, analytics, email services)</li>
                  <li><strong>Business Partners:</strong> When you request services that involve third parties</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                </ul>
                <p className="text-white/80 mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. Your Privacy Rights</h2>
                
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">6.1 GDPR Rights (European Union)</h3>
                <p className="text-white/80 mb-3">If you are in the EU, you have the right to:</p>
                <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">6.2 CCPA/CPRA Rights (California)</h3>
                <p className="text-white/80 mb-3">California residents have the right to:</p>
                <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                  <li>Know what personal information we collect and how it's used</li>
                  <li>Delete personal information (with certain exceptions)</li>
                  <li>Opt-out of the sale or sharing of personal information</li>
                  <li>Non-discrimination for exercising privacy rights</li>
                  <li>Correct inaccurate personal information</li>
                  <li>Limit use of sensitive personal information</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">6.3 Global Privacy Control</h3>
                <p className="text-white/80 mb-4">
                  We honor Global Privacy Control (GPC) signals. If your browser sends a GPC signal, we will treat it as a valid request to opt-out of the sale or sharing of your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="text-white/80 mb-4">We retain personal information for the following periods:</p>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>Contact information: Until you request deletion or 3 years after last interaction</li>
                  <li>LinkedIn Lead Gen Form data: Maximum 365 days</li>
                  <li>Marketing data: Until consent is withdrawn</li>
                  <li>Analytics data: 26 months</li>
                  <li>Legal compliance data: As required by applicable laws</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">8. Data Security</h2>
                <p className="text-white/80">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">9. International Data Transfers</h2>
                <p className="text-white/80">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer information internationally, we implement appropriate safeguards, including Standard Contractual Clauses approved by the European Commission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">10. Children's Privacy</h2>
                <p className="text-white/80">
                  Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">11. Updates to This Policy</h2>
                <p className="text-white/80">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For material changes, we may provide additional notice via email or through our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">12. Contact Us</h2>
                <p className="text-white/80 mb-4">
                  To exercise your privacy rights or if you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-white/80">
                    <strong className="text-white">Cre8tive AI</strong><br />
                    Email: <a href="mailto:privacy@cre8tive.ai" className="text-blue-400 hover:text-blue-300">privacy@cre8tive.ai</a><br />
                    Website: <a href="https://cre8tive.ai" className="text-blue-400 hover:text-blue-300">https://cre8tive.ai</a><br />
                    Contact Form: <a href="/contact" className="text-blue-400 hover:text-blue-300">https://cre8tive.ai/contact</a>
                  </p>
                </div>
                <p className="text-white/80 mt-4">
                  For GDPR inquiries, EU residents may also contact their local data protection authority.
                </p>
              </section>

              <section className="mb-8 border-t border-white/10 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Do Not Sell or Share My Personal Information</h2>
                <p className="text-white/80 mb-4">
                  Under the CCPA/CPRA, California residents have the right to opt-out of the sale or sharing of their personal information. While we do not sell personal information in the traditional sense, we may share information for targeted advertising purposes which may be considered a "sale" or "sharing" under California law.
                </p>
                <p className="text-white/80">
                  To opt-out, you may:
                </p>
                <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                  <li>Enable Global Privacy Control in your browser</li>
                  <li>Email us at <a href="mailto:privacy@cre8tive.ai" className="text-blue-400 hover:text-blue-300">privacy@cre8tive.ai</a></li>
                  <li>Use our contact form at <a href="/contact" className="text-blue-400 hover:text-blue-300">https://cre8tive.ai/contact</a></li>
                </ul>
              </section>
            </div>
          </ScrollFade>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;