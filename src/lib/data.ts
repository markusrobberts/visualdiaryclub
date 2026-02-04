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
    title: "Lumina Brand Identity",
    category: "Branding",
    description:
      "A complete visual identity system for a luxury skincare brand, from logo to packaging.",
    image: "/images/placeholder.svg",
    year: "2025",
    client: "Lumina Skincare",
  },
  {
    id: "2",
    title: "Horizon Editorial",
    category: "Editorial",
    description:
      "Art direction and photography for a travel magazine's anniversary edition.",
    image: "/images/placeholder.svg",
    year: "2025",
    client: "Horizon Magazine",
  },
  {
    id: "3",
    title: "Solstice Campaign",
    category: "Campaign",
    description:
      "Multi-platform advertising campaign for a sustainable fashion label's summer collection.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Solstice Fashion",
  },
  {
    id: "4",
    title: "Forma Architecture",
    category: "Digital",
    description:
      "Website design and development for an award-winning architecture studio.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Forma Studio",
  },
  {
    id: "5",
    title: "Noctis Film Festival",
    category: "Branding",
    description:
      "Visual identity and campaign materials for an independent film festival.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Noctis Festival",
  },
  {
    id: "6",
    title: "Aura Product Launch",
    category: "Campaign",
    description:
      "Launch campaign including film, photography, and digital assets for a tech product.",
    image: "/images/placeholder.svg",
    year: "2024",
    client: "Aura Tech",
  },
  {
    id: "7",
    title: "Terracotta Editorial",
    category: "Editorial",
    description:
      "Editorial shoot exploring the intersection of architecture and natural landscapes.",
    image: "/images/placeholder.svg",
    year: "2023",
    client: "Terracotta Press",
  },
  {
    id: "8",
    title: "Voss Digital Platform",
    category: "Digital",
    description:
      "E-commerce platform design for a Scandinavian furniture brand.",
    image: "/images/placeholder.svg",
    year: "2023",
    client: "Voss Furniture",
  },
];

export const categories = [
  "All",
  "Branding",
  "Editorial",
  "Campaign",
  "Digital",
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
    title: "Brand Identity",
    description:
      "We craft visual identities that tell your story. From logo design to comprehensive brand systems, we create cohesive visual languages that resonate with your audience.",
    features: [
      "Logo & Mark Design",
      "Brand Guidelines",
      "Visual Identity Systems",
      "Brand Strategy",
      "Naming & Verbal Identity",
    ],
    icon: "identity",
  },
  {
    id: "2",
    title: "Art Direction",
    description:
      "Our art direction brings concepts to life through carefully curated visual narratives. We oversee every detail to ensure your vision is executed with precision.",
    features: [
      "Creative Concepting",
      "Shoot Direction",
      "Visual Storytelling",
      "Mood & Style Development",
      "Post-Production Oversight",
    ],
    icon: "direction",
  },
  {
    id: "3",
    title: "Digital Design",
    description:
      "We design digital experiences that are as beautiful as they are functional. From websites to apps, every pixel serves a purpose.",
    features: [
      "Website Design",
      "UI/UX Design",
      "E-Commerce",
      "Motion Design",
      "Interactive Experiences",
    ],
    icon: "digital",
  },
  {
    id: "4",
    title: "Campaign & Content",
    description:
      "We produce campaigns that cut through the noise. Strategic thinking meets creative execution across every touchpoint.",
    features: [
      "Campaign Strategy",
      "Content Creation",
      "Social Media",
      "Photography",
      "Film & Video",
    ],
    icon: "campaign",
  },
];
