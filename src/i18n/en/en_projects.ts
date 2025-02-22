import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Portfolio',
      techstack: ['Vuejs', 'i18n', 'TypeScript', 'Tailwind CSS'],
      image: 'portfolio_cover.webp',
      description:
        'A portfolio template built with Vue.js, i18n, and TypeScript. It is highly customizable, easy to set up, and thoroughly optimized for performance, SEO, and accessibility.',
      src: 'https://github.com/ronisky/portfolio',
      url: 'https://github.com/ronisky/portfolio'
    },
    {
      name: 'Perbakin',
      techstack: ['PHP', 'Blade', 'Postgres'],
      image: 'project_cover.webp',
      description:
        'This system is designed to support the management of Perbakin (Indonesian Shooting and Hunting Association) with features such as member registration, firearm permit management, training schedules, and monitoring of shooting events and competitions. Its goal is to enhance administrative efficiency and transparency within the organization. 🎯🔫',
      src: 'https://github.com/ronisky/perbakin',
      url: 'https://github.com/ronisky/perbakin'
    },
    {
      name: 'SIMUS',
      techstack: ['Javascript', 'PHP', 'CSS'],
      image: 'project_cover.webp',
      description:
        'This web-based application is a part of my research titled "Information System and Visitor Management Governance for Museums Using the FIFO Method."',
      url: 'https://github.com/ronisky/simus',
      src: 'https://github.com/ronisky/simus'
    }
  ],
  // You can leave this array empty
  other: [
    {
      name: 'slack-age-bot',
      techstack: ['Go'],
      description:
        "Slack Age Bot is a lightweight Slack bot that calculates and responds with a user's age based on their input. Designed for easy integration, it allows users to quickly determine ages from birthdates through Slack commands. Perfect for team fun or quick calculations! 🎂🤖",
      url: 'https://github.com/ronisky/slack-age-bot',
      src: 'https://github.com/ronisky/slack-age-bot'
    },
    {
      name: 'shayna-backend',
      techstack: ['PHP', 'Blade', 'Vue','Mysql'],
      description:
        'Revolutionary app that uses the latest in web technologies to scan cosmic microwave background radiation for alien signals. Perfect for amateur astronomers and sci-fi enthusiasts who want to be the first to tweet about extraterrestrial contact.',
      src: 'https://github.com/ronisky/shayna-backend',
      url: 'https://github.com/ronisky/shayna-backend/'
    },
    {
      name: 'go-bookstore',
      techstack: ['Go', 'Mysql'],
      description:
        'Book Store API is a simple and scalable API for managing books, authors, and customer transactions. Built with efficiency in mind, it provides endpoints for browsing books, searching by category or author, and handling basic CRUD operations. Perfect for building an online bookstore or library management system. 📚🚀',
      url: 'https://github.com/ronisky/go-bookstore',
      src: 'https://github.com/ronisky/go-bookstore'
    },
    {
      name: 'Go Movies Basic',
      techstack: ['Go'],
      description:
        "Go Movies Basic is a lightweight and efficient API for managing movie-related data, built using Golang. It provides endpoints for retrieving movie details, searching for films, and handling basic CRUD operations. Ideal for developers looking for a fast and scalable movie database solution. 🚀",
      url: 'https://github.com/ronisky/Go-Movies-Basic',
      src: 'https://github.com/ronisky/Go-Movies-Basic'
    }
  ]
}

export default projects
