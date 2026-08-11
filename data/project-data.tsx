export interface Application {
  name: string;
  description: string;
}

export interface Specification {
  [key: string]: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies?: string[];
  githubLink?: string;
  websiteLink?: string;
  image?: string;
}

export type ProjectData = Record<string, ProjectDetails>;
export const ProjectData: ProjectData = {
  "propertyease": {
    id: 1,
    title: "PropertyEase",
    subtitle: "Real Estate Platform",
    description:
      "A modern real estate platform that allows users to explore, search, filter, and view detailed property listings, schedule visits, and explore properties through an interactive map.",
    image: "/propertyease.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "ijobs": {
    id: 2,
    title: "iJobs",
    subtitle: "Job Portal",
    description:
      "A frontend job portal where users can search and filter jobs, save opportunities, apply for jobs, upload resumes, and track application status. Admins can manage jobs and applications.",
    image: "/ijobs.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "LocalStorage",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "docpulse": {
    id: 3,
    title: "DocPulse",
    subtitle: "Healthcare Platform",
    description:
      "A healthcare application designed to simplify doctor and patient interactions with appointment booking and an intuitive user interface.",
    image: "/Docpulse.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "urban-spices": {
    id: 4,
    title: "Urban Spices",
    subtitle: "Restaurant Website",
    description:
      "A modern restaurant website featuring menu browsing, food details, reservations, and an online food ordering flow with customer and delivery information.",
    image: "/urban.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp Integration",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "furnicome": {
    id: 5,
    title: "Furnicome Furniture",
    subtitle: "Furniture Website",
    description:
      "A modern furniture website designed to showcase furniture products with categories, featured products, product details, and a responsive user interface.",
    image: "/furniture.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "soul-routes": {
    id: 9,
    title: "Soul Routes",
    subtitle: "Travel Booking App",
    description:
      "A travel planning app for discovering destinations, booking tours, and experiencing curated journeys with seamless itineraries.",
    image: "/souls.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "employee-management-system": {
    id: 10,
    title: "Employee Management System",
    subtitle: "HR Dashboard",
    description:
      "An employee management dashboard to manage staff profiles, attendance, and performance metrics in a single clean interface.",
    image: "/empmgnt.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "event-scheduler": {
    id: 11,
    title: "Event Scheduler",
    subtitle: "Event Planning Tool",
    description:
      "A scheduling platform for planning events, managing attendees, and automating reminders across calendars.",
    image: "/event.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "todo-app": {
    id: 6,
    title: "Todo App",
    subtitle: "Task Management Application",
    description:
      "A simple and responsive task management application that allows users to create, update, complete, and delete tasks.",
    image: "/projects/todo.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "patient-booking": {
    id: 7,
    title: "Patient Booking",
    subtitle: "Healthcare Booking Application",
    description:
      "A healthcare booking application that provides users with an easy way to manage doctor and patient appointment workflows.",
    image: "/projects/patient-booking.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },

  "shoe-mart": {
    id: 8,
    title: "Shoe Mart",
    subtitle: "E-Commerce Application",
    description:
      "An e-commerce application for browsing and managing shoe products with product listings, product details, and a structured shopping experience.",
    image: "/projects/shoe-mart.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "YOUR_GITHUB_LINK",
    websiteLink: "YOUR_WEBSITE_LINK",
  },
};