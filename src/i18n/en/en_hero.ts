import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Coding the Future, Connecting the World!',
  subtitle:
    "I'm Roni, a passionate Software Engineer who thrives on exploring, coding, and caffeine-fueled creativity. To me, every line of code is more than just text—it’s a key to solving problems and making the world a better place. I build systems that don’t just function, but enhance lives. Let’s push boundaries, innovate, and create the future together!",
  name: 'Roni RS',
  url: 'https://roni.web.id/',
  contact_button: 'Get in touch',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'https://linkedin.com/in/roni-setiawan/',
    github: 'https://github.com/ronisky',
    youtube: 'https://youtube.com/ronierone',
    twitter: 'https://twitter.com/roni_erone',
    instagram: 'https://instagram.com/roni_erone',
    facebook: 'https://facebook.com/iyeuroni'
  },
  home: 'Home'
}

export default hero
