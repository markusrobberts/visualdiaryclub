import { Project, TeamMember, Service, NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Lumina Skincare",
    category: "Website Design",
    description:
      "A bespoke website for a luxury skincare brand, focused on storytelling and seamless product discovery.",
    image: "/images/placeholder.svg",
    year: "2025",
    client: "Lumina Skincare",
  },
  {
    id: "2",
    title: "Horizon Store Relaunch",
    category: "Ecommerce",
    description:
      "Full ecommerce strategy and platform redesign for a lifestyle brand, boosting conversion by 40%.",
    image: "/images/placeholder.svg",
    year: "2025",
    client: "Horizon Living",
  },
  {
    id: "3",
    title: "Solstice Retention Campaign",
    category: "Email Marketing",
    description:
      "Automated email flows and seasonal campaigns for a sustainable fashion label's subscriber base.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Solstice Fashion",
  },
  {
    id: "4",
    title: "Forma Architecture",
    category: "Website Design",
    description:
      "Website design and development for an award-winning architecture studio.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Forma Studio",
  },
  {
    id: "5",
    title: "Noctis Paid Campaign",
    category: "Paid Advertising",
    description:
      "Multi-platform paid advertising campaign driving ticket sales for an independent film festival.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Noctis Festival",
  },
  {
    id: "6",
    title: "Aura Product Launch",
    category: "Paid Advertising",
    description:
      "Paid search and social campaigns for a tech product launch, achieving 5x return on ad spend.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Aura Tech",
  },
  {
    id: "7",
    title: "Terracotta Social Growth",
    category: "Social Media",
    description:
      "Social media management and content strategy that grew an interiors brand's following by 200%.",
    image: "/images/placeholder.svg",
    year: "2023",
    client: "Terracotta Interiors",
  },
  {
    id: "8",
    title: "Voss Online Store",
    category: "Ecommerce",
    description:
      "E-commerce strategy and storefront design for a Scandinavian furniture brand.",
    image: "/images/placeholder.svg",
    year: "2023",
    client: "Voss Furniture",
  },
];

export const categories = [
  "All",
  "Website Design",
  "Ecommerce",
  "Email Marketing",
  "Paid Advertising",
  "Social Media",
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Creative Director",
    bio: "With over 15 years in visual storytelling, Alex leads our creative vision and ensures every project pushes boundaries.",
    image: "/images/placeholder.svg",
  },
  {
    id: "2",
    name: "Jordan Chen",
    role: "Head of Design",
    bio: "Jordan brings a meticulous eye for detail and a deep understanding of brand systems to every engagement.",
    image: "/images/placeholder.svg",
  },
  {
    id: "3",
    name: "Sam Okafor",
    role: "Lead Photographer",
    bio: "Sam's documentary-style approach to commercial photography gives our visual work its distinctive authenticity.",
    image: "/images/placeholder.svg",
  },
  {
    id: "4",
    name: "Maya Lindström",
    role: "Digital Strategist",
    bio: "Maya bridges the gap between creative ambition and digital execution, ensuring work performs as well as it looks.",
    image: "/images/placeholder.svg",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Website Design",
    description:
      "We design and build websites that are as beautiful as they are functional. From landing pages to full-scale platforms, every pixel serves a purpose.",
    features: [
      "Custom Website Design",
      "UI/UX Design",
      "Responsive Development",
      "CMS Integration",
      "Performance Optimization",
    ],
    icon: "website",
  },
  {
    id: "2",
    title: "Ecommerce Strategy",
    description:
      "We help brands sell smarter online. From platform selection to conversion optimization, we build ecommerce experiences that drive revenue.",
    features: [
      "Platform Selection & Setup",
      "Conversion Rate Optimization",
      "Product Page Design",
      "Checkout Flow Optimization",
      "Analytics & Reporting",
    ],
    icon: "ecommerce",
  },
  {
    id: "3",
    title: "Email Marketing",
    description:
      "We craft email campaigns that people actually want to open. Strategic segmentation meets compelling design to nurture leads and drive engagement.",
    features: [
      "Campaign Strategy",
      "Template Design",
      "Automation & Flows",
      "List Segmentation",
      "A/B Testing & Optimization",
    ],
    icon: "email",
  },
  {
    id: "4",
    title: "Paid Advertising",
    description:
      "We put your brand in front of the right audience at the right time. Data-driven campaigns across search and social that maximize your return on ad spend.",
    features: [
      "Google Ads Management",
      "Meta & Social Ads",
      "Campaign Strategy",
      "Creative & Copy",
      "Performance Reporting",
    ],
    icon: "ads",
  },
  {
    id: "5",
    title: "Social Media Management",
    description:
      "We build and manage social presences that grow communities and strengthen brands. Consistent content, authentic engagement, measurable results.",
    features: [
      "Content Strategy & Planning",
      "Content Creation",
      "Community Management",
      "Analytics & Insights",
      "Platform Growth",
    ],
    icon: "social",
  },
];
