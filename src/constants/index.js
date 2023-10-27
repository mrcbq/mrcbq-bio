import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Ruby on Rails",
    icon: figma,
  },
  {
    name: "Python",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Highlighted Personal Projects",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Ruby on Rails, and other related technologies.",
      "Collaborating with other developers to create high-quality products, using pair programming and following requeriments and figma design.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sr Tech professional",
    company_name: "Halliburton",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Dec 2020",
    points: [
      "Developing transferable skills like Teamwork, Team Leadership, Client Focus, Mentoring Juniors", 
      "Received multiple promotions, in recognition of my high responsibility with a strong focus on cost considerations.",
      "Acted as a key point of contact for clients, explaining work procedures, and resolving any concerns or issues.",
    ],
  },
  {
    title: "Production Engineer",
    company_name: "Mansarovar Energy",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2013 - Dec 2017",
    points: [
      "Won company innovation program twice for Algorithms and reports to optimize production, leveraging data from frequency inverters. And defined control logic to enhance surface facilities and optimize well production.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am delighted to recommend Marco as an exceptional programmer. Marco's in-depth knowledge of programming concepts and languages is truly impressive. His ability to write clean, efficient, and well-documented code showcases their attention to detail and commitment to producing top-notch work. Marco's strong communication skills and collaborative approach make him an excellent team player. His unwavering work ethic, combined with a genuine passion for programming, sets him apart. I am confident that Marco's technical prowess and dedication to continuous growth will make a significant impact wherever he goes.",
    name: "Ignacio Fino",
    designation: "Software Developer & Web Designer",
    company: "Microverse School",
    image: "https://media.licdn.com/dms/image/D4D35AQFn-7qRUfF9jw/profile-framedphoto-shrink_800_800/0/1687361639786?e=1699027200&v=beta&t=Mr3hGbH3jUYBflPFIZM_RlQszKkY4aT52LrWQsrq0Gw",
  },
  {
    testimonial:
      "Marco is an incredibly experienced person, without a doubt a success in the workplace. He has professional ethics and is always looking to improve and expand his knowledge. He is one of the best project partners I've ever had and undoubtedly will become a great key piece for any company.",
    name: "Luis Valera",
    designation: "Full-stack Web Developer",
    company: "Microverse School",
    image: "https://media.licdn.com/dms/image/D4E03AQFbxCLJEjnn8Q/profile-displayphoto-shrink_800_800/0/1687885860703?e=1703721600&v=beta&t=xWaqpfHbyTi0MWI_2YzpMvUn7CDCm4Ax0IIKjBIPK4o",
  },
  {
    testimonial:
      "He is an outstanding professional, always willing to support his colleagues, and motivated to grow and learn constantly. He has a creative and collaborative mindset, along with excellent critical thinking skills. He is a reliable and committed individual, and I would recommend his involvement in any project without hesitation",
    name: "Cesar Herrera",
    designation: "Full Stack web Developer",
    company: "Microverse School",
    image: "https://media.licdn.com/dms/image/D4E03AQGvcq5c1085cA/profile-displayphoto-shrink_800_800/0/1684528492535?e=1703721600&v=beta&t=_Pl9_ntfqDpwWPIki-LqtMaTENZX4Tv5ajO0puTWgHs",
  },
];

const projects = [
  {
    name: "Luxury Speedsters",
    description:
      "Rentals web app, Add and remove cars with user authentication, handle reservations for normal users, and store information in a database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rails",
        color: "green-text-gradient",
      },
      {
        name: "Postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://rentals-app-egry.onrender.com/",
  },
  {
    name: "Space Travelers",
    description:
      "Web app that offers commercial and scientific space travel services, enables users to book rockets, and participate in selected space missions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://mrcbq.github.io/space-travelers-capstone/",
  },
  {
    name: "R&M API",
    description:
      "Handles 2 APIs, for getting and posting data, and viewing the characters of TV shows in a playful way",
    tags: [
      {
        name: "vanilla javascript",
        color: "blue-text-gradient",
      },
      {
        name: "jest",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://mrcbq.github.io/capstone-rick-and-morty-api/",
  },
];

export { services, technologies, experiences, testimonials, projects };
