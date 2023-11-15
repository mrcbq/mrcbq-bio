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
  carrent,
  jobit,
  tripguide,
  threejs,
  halliburton,
  microverse,
  mecl,
  ror,
  python,
  postgresql,
  coinmarket
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
    title: "Rails Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
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
    icon: ror,
  },
  {
    name: "Python",
    icon: python,
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
    icon: postgresql,
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
    icon: microverse,
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
    title: "Jr Software Developer",
    company_name: "DSteam",
    icon: "https://www.dsteamseguridad.com/pagina/templates/theme558/images/logo.png",
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Develop more than 5 API’s for intern client",
      "Collaborated in structuring and developing web applications for clients, leveraging React, and Redux to create dynamic user experiences.",
    ],
  },
  {
    title: "Sr Tech professional",
    company_name: "Halliburton",
    icon: halliburton,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Dec 2020",
    points: [
      "Developing transferable skills like Teamwork, Team Leadership, Client Focus, Mentoring Juniors", 
      "Received multiple promotions, in recognition of my high responsibility with a strong focus on cost considerations.",
      "Acted as a key point of contact for clients, explaining work procedures, and resolving any concerns or issues.",
    ],
  },
  // {
  //   title: "Production Engineer",
  //   company_name: "Mansarovar Energy",
  //   icon: mecl,
  //   iconBg: "#383E56",
  //   date: "Jan 2013 - Dec 2017",
  //   points: [
  //     "Won company innovation program twice for Algorithms and reports to optimize production, leveraging data from frequency inverters. And defined control logic to enhance surface facilities and optimize well production.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I am delighted to recommend Marco as an exceptional programmer. His in-depth knowledge of programming concepts and languages is truly impressive, ability to write clean, efficient, and well-documented code showcases their attention to detail and commitment to producing top-notch work. I am confident that Marco's technical prowess and dedication to continuous growth will make a significant impact wherever he goes.",
    name: "Ignacio Fino",
    designation: "Software Developer & Web Designer",
    company: "Microverse School",
    image: "https://media.licdn.com/dms/image/D4D35AQFn-7qRUfF9jw/profile-framedphoto-shrink_800_800/0/1687361640437?e=1700604000&v=beta&t=WlPPzQS6mbzFu6cYX3fXKZoZ4QP7GTT6f4CNV5T5n4A",
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
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mrcbq/rentals-app",
    live_code_link: "https://rentals-app-egry.onrender.com/",
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
    source_code_link: "https://github.com/mrcbq/space-travelers-capstone/",
    live_code_link: "https://mrcbq.github.io/space-travelers-capstone/",
  },
  {
    name: "Coinmarket",
    description:
      "SPA fully responsive, that displays information about the top 100 cryptocurrencies in the world. The application shows the top 100 and allows users to select a cryptocurrency to view more information about it",
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
    image: coinmarket,
    source_code_link: "https://github.com/mrcbq/coinmarket/",
    live_code_link: "https://mrcbq.github.io/coinmarket/#/",
  },
  {
    name: "R&M API",
    description:
      "Handles 2 APIs, for getting and posting data, and viewing the characters of TV shows in a playful way",
    tags: [
      {
        name: "javascript",
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
    source_code_link: "https://github.com/mrcbq/capstone-rick-and-morty-api/",
    live_code_link: "https://mrcbq.github.io/capstone-rick-and-morty-api/",
  },
];

export { services, technologies, experiences, testimonials, projects };
