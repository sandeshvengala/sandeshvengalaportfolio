export const webProjectCategories = ['All', 'Full Stack', 'E-Commerce', 'MERN Stack'];

export const webProjects = [
  {
    id: 101,
    slug: 'the-student-spot-platform',
    title: 'The Student Spot - Community Platform',
    category: 'Full Stack',
    year: '2026',
    client: 'The Student Spot',
    shortDescription: 'Multi-functional student community platform with authentication and AI assistant.',
    description:
      'A comprehensive student community platform designed to empower students through organized resources, community engagement, and AI-assisted planning. Built with modern UX principles and scalable architecture.',
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&q=80'
    ],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-computer-keyboard-4093-large.mp4',
    liveLink: 'https://www.thestudentspot.app/',
    caseStudy: {
      challenge: 'Students needed a centralized platform for resources, community, and intelligent planning.',
      solution: 'Built a full-stack MERN application with secure authentication, scalable routing, and AI-assistant integration for workflow automation.',
      impact: 'Created a platform that connects students with resources and provides smart assistance for better planning and engagement.',
      features: [
        'User authentication and profile management',
        'Resource organization and categorization',
        'Community engagement features',
        'AI-powered assistant for planning',
        'Responsive design for all devices',
        'Real-time notifications'
      ]
    }
  },
  {
    id: 102,
    slug: 'snack-villa-ecommerce',
    title: 'Snack Villa - E-Commerce Platform',
    category: 'E-Commerce',
    year: '2026',
    client: 'Snack Villa',
    shortDescription: 'Full-featured e-commerce platform for snack products with payment integration.',
    description:
      'A modern e-commerce platform specializing in snack products with complete ordering, payment processing, and inventory management. Features a sleek design optimized for mobile shopping.',
    tools: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
      'https://images.unsplash.com/photo-1563062975-d0ec014b8e72?w=800&q=80',
      'https://images.unsplash.com/photo-1555849318-6e7db68fbb94?w=800&q=80'
    ],
    video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-shopping-online-using-mobile-4114-large.mp4',
    liveLink: 'https://snackvilla.vercel.app',
    caseStudy: {
      challenge: 'Create an intuitive e-commerce platform that makes snack shopping easy and enjoyable.',
      solution: 'Developed a full-stack e-commerce solution with product catalog, cart system, secure payment integration, and admin dashboard for inventory management.',
      impact: 'Delivered a professional, user-friendly shopping experience that drives sales and customer satisfaction.',
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and checkout system',
        'Stripe payment integration',
        'User accounts and order history',
        'Admin dashboard for inventory',
        'Mobile-responsive design',
        'Order tracking and notifications'
      ]
    }
  }
];
