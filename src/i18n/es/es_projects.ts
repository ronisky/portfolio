import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Proyectos',
  source: 'GitHub',
  website: 'Sitio web',
  main: [
    {
      name: 'Portafolio',
      techstack: ['Vuejs', 'i18n', 'TypeScript', 'Tailwind CSS'],
      image: 'portfolio_cover.webp',
      description:
        'Una plantilla de portafolio construida con Vue.js, i18n y TypeScript. Es altamente personalizable, fácil de configurar y está completamente optimizada para rendimiento, SEO y accesibilidad.',
      src: 'https://github.com/ronisky/portfolio',
      url: 'https://github.com/ronisky/portfolio'
    },
    {
      name: 'Perbakin',
      techstack: ['PHP', 'Blade', 'Postgres'],
      image: 'project_cover.webp',
      description:
        'Este sistema está diseñado para apoyar la gestión de Perbakin (Asociación de Tiro y Caza de Indonesia) con funciones como el registro de miembros, la gestión de permisos de armas de fuego, los horarios de entrenamiento y el monitoreo de competiciones de tiro. Su objetivo es mejorar la eficiencia administrativa y la transparencia dentro de la organización. 🎯🔫',
      src: 'https://github.com/ronisky/perbakin',
      url: 'https://github.com/ronisky/perbakin'
    },
    {
      name: 'SIMUS',
      techstack: ['Javascript', 'PHP', 'CSS'],
      image: 'project_cover.webp',
      description:
        'Esta aplicación web es parte de mi investigación titulada "Sistema de Información y Gobernanza de Gestión de Visitantes para Museos Usando el Método FIFO."',
      url: 'https://github.com/ronisky/simus',
      src: 'https://github.com/ronisky/simus'
    }
  ],
  other: [
    {
      name: 'slack-age-bot',
      techstack: ['Go'],
      description:
        "Slack Age Bot es un bot ligero para Slack que calcula y responde con la edad del usuario según su entrada. Diseñado para una integración sencilla, permite a los usuarios determinar rápidamente edades a partir de fechas de nacimiento mediante comandos de Slack. ¡Perfecto para diversión en equipo o cálculos rápidos! 🎂🤖",
      url: 'https://github.com/ronisky/slack-age-bot',
      src: 'https://github.com/ronisky/slack-age-bot'
    },
    {
      name: 'shayna-backend',
      techstack: ['PHP', 'Blade', 'Vue', 'Mysql'],
      description:
        'Aplicación revolucionaria que utiliza lo último en tecnologías web para escanear la radiación cósmica de fondo en microondas en busca de señales alienígenas. Perfecta para astrónomos aficionados y entusiastas de la ciencia ficción que quieren ser los primeros en twittear sobre el contacto extraterrestre.',
      src: 'https://github.com/ronisky/shayna-backend',
      url: 'https://github.com/ronisky/shayna-backend/'
    },
    {
      name: 'go-bookstore',
      techstack: ['Go', 'Mysql'],
      description:
        'Book Store API es una API sencilla y escalable para gestionar libros, autores y transacciones de clientes. Diseñada con eficiencia en mente, proporciona endpoints para explorar libros, buscar por categoría o autor y realizar operaciones CRUD básicas. Perfecto para construir una librería en línea o un sistema de gestión de bibliotecas. 📚🚀',
      url: 'https://github.com/ronisky/go-bookstore',
      src: 'https://github.com/ronisky/go-bookstore'
    },
    {
      name: 'Go Movies Basic',
      techstack: ['Go'],
      description:
        "Go Movies Basic es una API ligera y eficiente para gestionar datos de películas, construida con Golang. Proporciona endpoints para recuperar detalles de películas, buscar filmes y realizar operaciones CRUD básicas. Ideal para desarrolladores que buscan una solución rápida y escalable para una base de datos de películas. 🚀",
      url: 'https://github.com/ronisky/Go-Movies-Basic',
      src: 'https://github.com/ronisky/Go-Movies-Basic'
    },
  ]
}

export default projects
