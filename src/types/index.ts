export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  client: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
