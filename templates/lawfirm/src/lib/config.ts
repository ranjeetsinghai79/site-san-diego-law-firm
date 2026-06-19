import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "San Diego Law Firm, APC",
    tagline: "Justice for Your Personal Injury",
    phone: "(619) 900-0000",
    phoneHref: "tel:+16199000000",
    email: "info@sandiegolawfirm.com",
    address: "123 Main St",
    city: "San Diego",
    serviceAreas: ["San Diego", "Chula Vista", "Oceanside", "Escondido"],
    license: "California Bar #123456",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "navy",
    niche: "lawfirm",
  },

  services: [
    { icon: "shield-check", title: "Personal Injury Law", desc: "Aggressive representation for all types of personal injury claims.", urgent: false },
    { icon: "heart", title: "Wrongful Death Attorney", desc: "Compassionate legal support for families who have lost a loved one due to negligence.", urgent: false },
    { icon: "briefcase", title: "Sexual Harassment Lawyer", desc: "Protecting your rights and seeking justice in workplace sexual harassment cases.", urgent: false },
    { icon: "truck", title: "Auto Accident Lawyer", desc: "Expert legal counsel for victims of car, truck, and motorcycle accidents.", urgent: false },
    { icon: "wrench", title: "E-bike Collision Representation", desc: "Specialized legal help for injuries sustained in e-bike accidents.", urgent: false },
    { icon: "award", title: "Sexual Assault Representation", desc: "Dedicated advocacy for survivors of sexual assault, seeking accountability and compensation.", urgent: false }
  ],

  testimonials: [
    { name: "Maria S.", location: "San Diego", stars: 5, text: "After my car accident, I was overwhelmed. San Diego Law Firm, APC, handled everything with such professionalism and care. They secured a settlement that covered all my medical bills and lost wages. I felt truly supported throughout the entire process." },
    { name: "David L.", location: "Chula Vista", stars: 5, text: "My wrongful death case was incredibly sensitive, but the team at San Diego Law Firm, APC, treated my family with the utmost respect and compassion. Their strategic advocacy brought us a sense of closure and justice we desperately needed." },
    { name: "Jessica P.", location: "Oceanside", stars: 5, text: "I faced a difficult sexual harassment situation at work. This firm provided unwavering support and expert legal guidance. They fought tirelessly for my rights and achieved a positive outcome, allowing me to move forward with my life." }
  ],

  trustBadges: [
    "California Bar Licensed", "Free Case Review", "Client-Focused Advocacy", "No Win, No Fee", "Deep Community Roots", "Experienced Litigators"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Cases Won", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We act quickly to protect your rights and gather crucial evidence." },
    { icon: "dollar-sign", title: "No Win, No Fee", desc: "You pay nothing unless we win your case." },
    { icon: "award", title: "Experienced Litigators", desc: "Our attorneys have a proven track record of success in court." },
    { icon: "thumbs-up", title: "Client-Focused", desc: "We provide personalized guidance and unwavering support for every client." },
    { icon: "phone", title: "Free Consultation", desc: "Discuss your case with an attorney at no cost or obligation." },
    { icon: "shield-check", title: "Aggressive Advocacy", desc: "We fight tirelessly to secure the compensation and justice you deserve." }
  ],

  formServiceOptions: ["Personal Injury Law", "Wrongful Death Attorney", "Sexual Harassment Lawyer", "Auto Accident Lawyer", "E-bike Collision Representation", "Sexual Assault Representation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!