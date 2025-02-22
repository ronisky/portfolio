import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "By day ☀️, I'm a software engineer with a knack for turning complex problems into simple solutions. By night 🌙, I moonlight as a connoisseur of fine memes and a hopeful astronaut. With a penchant for puns and a deep love for all things tech, I've successfully convinced my plants to tweet when they need watering. \n\n A seasoned juggler of tasks and an enthusiast of all things tech, I've mastered the art of turning tea ☕ into code and chaos into order.",
  education: {
    title: 'Education',
    list: [
      {
        title: 'Bachelor of Computer Science',
        institution: 'Bandung University of Technology',
        url: 'https://www.utb-univ.ac.id/',
        description:
          "As a Computer Science student, I see every line of code as an opportunity to create something meaningful. I actively work on various projects, from web development to exploring artificial intelligence, always seeking ways to bridge theory and practice. Beyond coursework, I continuously learn independently, stay updated on the latest tech trends, and collaborate within developer communities. To me, Computer Science is not just about understanding algorithms but about building impactful solutions and evolving in the digital world.",
        startDate: '2016-08',
        endDate: '2020-07',
        courses: [
          'IoT',
          'Mobile',
          'Web Development',
          'DevOps',
        ]
      }
    ]
  },
  achievements: {
    title: 'Achievements',
    list: [
      {
        title: "1st Place in Cimahi IT Mobile Games Competition",
        date: '2018-07',
        url: '#',
        awarder: 'Cimahi City Communication and Information Office',
        summary:
          "Awarded for developing an engaging and educational game that met the competition criteria."
      }
    ]
  }
}

export default about