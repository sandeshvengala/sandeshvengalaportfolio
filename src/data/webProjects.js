export const webProjectCategories = ['All', 'Full Stack', 'E-Commerce', 'MERN Stack'];


export const webProjects = [
  {
    id: 101,
    title: 'The Student Spot - Community Platform',
    description: 'Multi-functional student community platform with authentication and AI assistant.',
    category: 'Full Stack',
    progress: 100,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/assets/images/thestudentspot-main.jpg',
    completed: true,
    link: 'https://www.thestudentspot.app/',
    note: "I designed a part of this website's frontend."
  },
  {
    id: 102,
    title: 'Snack Villa - E-Commerce Platform',
    description: 'Full-featured e-commerce platform for snack products with payment integration.',
    category: 'E-Commerce',
    progress: 100,
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    image: '/assets/images/Snack Villa logo.png',
    completed: true,
    link: 'https://snackvilla.vercel.app/',
    note: 'Backend connections are in progress for this website.'
  }
];

export const inProgressWebProjects = [];
