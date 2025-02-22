import type { About } from '@/types'

const about: About = {
  title: 'Acerca de',
  summary:
    'De día, soy un ingeniero de software con un talento especial para convertir problemas complejos en soluciones simples. De noche, soy un aficionado a los memes finos y un aspirante a astronauta. Con un gusto por los juegos de palabras y un profundo amor por todo lo relacionado con la tecnología, he logrado convencer a mis plantas de que tuiteen cuando necesitan agua. \n\n Un experimentado malabarista de tareas y un entusiasta de la tecnología, he dominado el arte de convertir el téa en código y el caos en orden.',
  education: {
    title: 'Educación',
    list: [
      {
        title: 'Licenciatura en Ingeniería Informática',
        institution: 'Universidad de Tecnología de Bandung',
        url: 'https://www.utb-univ.ac.id/',
        description:
          "Como estudiante de Ingeniería Informática, veo cada línea de código como una oportunidad para crear algo significativo. Trabajo activamente en diversos proyectos, desde desarrollo web hasta exploración de inteligencia artificial, siempre buscando conectar la teoría con la práctica. Más allá de las clases, aprendo de forma autónoma, me mantengo al día con las últimas tendencias tecnológicas y colaboro en comunidades de desarrolladores. Para mí, la Ingeniería Informática no se trata solo de comprender algoritmos, sino de construir soluciones impactantes y evolucionar en el mundo digital.",
        startDate: '2016-08',
        endDate: '2020-07',
        courses: [
          'IoT',
          'Desarrollo Móvil',
          'Desarrollo Web',
          'DevOps',
        ]
      }
    ]
  },
  achievements: {
    title: 'Logros',
    list: [
      {
        title: "1er Lugar en la Competencia de Juegos Móviles de Cimahi IT",
        date: '2018-07',
        url: '#',
        awarder: 'Oficina de Comunicación e Información de la Ciudad de Cimahi',
        summary:
          "Premiado por desarrollar un juego atractivo y educativo que cumplía con los criterios del concurso."
      }
    ]
  }
}

export default about
