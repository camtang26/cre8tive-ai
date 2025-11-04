import { Shield, Globe, Server, Key, Headphones, Plug } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { GlassmorphicCard } from "./shared/GlassmorphicCard"

interface EnterpriseFeature {
  id: string
  icon: LucideIcon
  title: string
  description: string
  badge?: string
  accentColor: string
  accentGradient: string
  accentGlow: string
  marginTop: string
  animationDelay: number
}

const ENTERPRISE_FEATURES: EnterpriseFeature[] = [
  {
    id: "soc2",
    icon: Shield,
    title: "SOC 2 Type II Certified",
    description:
      "Enterprise-grade security controls audited by independent third parties. Your customer data is protected with the highest industry standards.",
    badge: "Certified",
    accentColor: "#10B981",
    accentGradient: "from-[rgba(16,185,129,0.36)] via-[rgba(16,185,129,0.12)] to-transparent",
    accentGlow: "rgba(16,185,129,0.28)",
    marginTop: "0",
    animationDelay: 0,
  },
  {
    id: "gdpr",
    icon: Globe,
    title: "GDPR Compliant",
    description:
      "Full compliance with European data protection regulations. Data residency options, right to erasure, and transparent data processing.",
    accentColor: "#14F195",
    accentGradient: "from-[rgba(20,241,149,0.36)] via-[rgba(20,241,149,0.12)] to-transparent",
    accentGlow: "rgba(20,241,149,0.28)",
    marginTop: "4rem",
    animationDelay: 150,
  },
  {
    id: "uptime",
    icon: Server,
    title: "99.9% Uptime SLA",
    description:
      "Guaranteed availability backed by contractual SLA. Multi-region redundancy, automatic failover, and 24/7 infrastructure monitoring.",
    badge: "Guaranteed",
    accentColor: "#34D399",
    accentGradient: "from-[rgba(52,211,153,0.36)] via-[rgba(52,211,153,0.12)] to-transparent",
    accentGlow: "rgba(52,211,153,0.28)",
    marginTop: "0",
    animationDelay: 300,
  },
  {
    id: "sso",
    icon: Key,
    title: "Enterprise SSO",
    description:
      "Single Sign-On integration with Okta, Azure AD, Google Workspace, and custom SAML providers. Streamline access management across your organization.",
    accentColor: "#6EE7B7",
    accentGradient: "from-[rgba(110,231,183,0.36)] via-[rgba(110,231,183,0.12)] to-transparent",
    accentGlow: "rgba(110,231,183,0.28)",
    marginTop: "4rem",
    animationDelay: 450,
  },
  {
    id: "support",
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "24/7 priority support with dedicated account management. Direct access to our engineering team for critical issues and custom requirements.",
    accentColor: "#10B981",
    accentGradient: "from-[rgba(16,185,129,0.36)] via-[rgba(16,185,129,0.12)] to-transparent",
    accentGlow: "rgba(16,185,129,0.28)",
    marginTop: "0",
    animationDelay: 600,
  },
  {
    id: "integrations",
    icon: Plug,
    title: "Custom Integrations",
    description:
      "Connect to your existing CRM, helpdesk, analytics, and business intelligence tools. Custom API development for unique integration requirements.",
    badge: "Unlimited",
    accentColor: "#14F195",
    accentGradient: "from-[rgba(20,241,149,0.36)] via-[rgba(20,241,149,0.12)] to-transparent",
    accentGlow: "rgba(20,241,149,0.28)",
    marginTop: "4rem",
    animationDelay: 750,
  },
]

export function ConversationalEnterpriseSection() {
  return (
    <section
      id="conversational-enterprise"
      aria-labelledby="conversational-enterprise-title"
      data-motion-group="enterprise-features"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_28%_20%,rgba(16,185,129,0.18),transparent_56%),radial-gradient(circle_at_72%_26%,rgba(20,241,149,0.16),transparent_60%),linear-gradient(142deg,rgba(4,18,30,0.99)0%,rgba(6,32,47,0.98)52%,rgba(4,19,31,0.99)100%)] py-24 md:py-32"
    >
      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Large glow orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.28)_0%,rgba(16,185,129,0)_70%)] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(20,241,149,0.26)_0%,rgba(20,241,149,0)_72%)] blur-[130px]" aria-hidden />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6 xl:px-0">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            Enterprise Ready
          </div>

          <h2
            id="conversational-enterprise-title"
            className="text-4xl font-black tracking-tight text-conversational-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            Built for Enterprise Scale
          </h2>

          <p className="text-lg leading-relaxed text-conversational-body md:text-[1.25rem]">
            Security, compliance, and reliability you need. Performance and support you expect. Deployed in minutes,
            not months.
          </p>
        </div>

        {/* Feature Grid - Desktop Asymmetric Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {ENTERPRISE_FEATURES.map((feature) => (
            <EnterpriseFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Feature Grid - Tablet 2-column */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:hidden">
          {ENTERPRISE_FEATURES.map((feature) => (
            <EnterpriseFeatureCardSimple key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Feature List - Mobile Vertical */}
        <div className="flex flex-col gap-8 md:hidden">
          {ENTERPRISE_FEATURES.map((feature) => (
            <EnterpriseFeatureCardSimple key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface EnterpriseFeatureCardProps {
  feature: EnterpriseFeature
}

function EnterpriseFeatureCard({ feature }: EnterpriseFeatureCardProps) {
  const Icon = feature.icon

  return (
    <div
      style={{
        marginTop: feature.marginTop,
        animation: `enterprise-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${feature.animationDelay}ms both`,
      }}
    >
      <GlassmorphicCard
        accentColor={feature.accentColor}
        accentGradient={feature.accentGradient}
        accentGlow={feature.accentGlow}
        className="h-full"
      >
        <div className="p-12">
          {/* Premium icon container - 80x80 with depth */}
          <div className="mb-8 inline-flex items-center gap-3">
            <div
              className="relative h-20 w-20 overflow-hidden rounded-3xl flex-shrink-0"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${feature.accentColor}80, ${feature.accentColor}30)`,
                boxShadow: `0 8px 32px ${feature.accentGlow}, inset 0 1px 2px rgba(255,255,255,0.15)`,
              }}
            >
              {/* Inner highlight for depth */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/12 via-transparent to-transparent" />

              {/* Icon centered and large */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="h-10 w-10 text-white" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} />
              </div>
            </div>

            {/* Badge overlay */}
            {feature.badge && (
              <div
                className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                style={{
                  borderColor: `${feature.accentColor}60`,
                  backgroundColor: `${feature.accentColor}20`,
                  color: feature.accentColor,
                }}
              >
                {feature.badge}
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="mb-5 text-xl font-black text-conversational-headline">{feature.title}</h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-conversational-body">{feature.description}</p>
        </div>
      </GlassmorphicCard>

      <style jsx>{`
        @keyframes enterprise-fade-in {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}

function EnterpriseFeatureCardSimple({ feature }: EnterpriseFeatureCardProps) {
  const Icon = feature.icon

  return (
    <div
      style={{
        animation: `enterprise-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${feature.animationDelay}ms both`,
      }}
    >
      <GlassmorphicCard
        accentColor={feature.accentColor}
        accentGradient={feature.accentGradient}
        accentGlow={feature.accentGlow}
      >
        <div className="p-10 md:p-12">
          {/* Premium icon container - responsive */}
          <div className="mb-8 inline-flex items-center gap-3">
            <div
              className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-3xl flex-shrink-0"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${feature.accentColor}80, ${feature.accentColor}30)`,
                boxShadow: `0 8px 32px ${feature.accentGlow}, inset 0 1px 2px rgba(255,255,255,0.15)`,
              }}
            >
              {/* Inner highlight for depth */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/12 via-transparent to-transparent" />

              {/* Icon centered and large */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} />
              </div>
            </div>

            {feature.badge && (
              <div
                className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                style={{
                  borderColor: `${feature.accentColor}60`,
                  backgroundColor: `${feature.accentColor}20`,
                  color: feature.accentColor,
                }}
              >
                {feature.badge}
              </div>
            )}
          </div>

          <h3 className="mb-5 text-lg md:text-xl font-black text-conversational-headline">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-conversational-body">{feature.description}</p>
        </div>
      </GlassmorphicCard>

      <style jsx>{`
        @keyframes enterprise-fade-in {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
