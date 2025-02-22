import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Proyek',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Portofolio',
      techstack: ['Vuejs', 'i18n', 'TypeScript', 'Tailwind CSS'],
      image: 'portfolio_cover.webp',
      description:
        'Template portofolio yang dibangun dengan Vue.js, i18n, dan TypeScript. Mudah disesuaikan, cepat diatur, serta dioptimalkan untuk performa, SEO, dan aksesibilitas.',
      src: 'https://github.com/ronisky/portfolio',
      url: 'https://github.com/ronisky/portfolio'
    },
    {
      name: 'Perbakin',
      techstack: ['PHP', 'Blade', 'Postgres'],
      image: 'project_cover.webp',
      description:
        'Sistem ini dirancang untuk mendukung pengelolaan organisasi Perbakin (Persatuan Menembak dan Berburu Indonesia) dengan fitur seperti pendaftaran anggota, manajemen izin senjata api, jadwal latihan, dan pemantauan kompetisi menembak. Tujuannya adalah untuk meningkatkan efisiensi administrasi dan transparansi dalam organisasi. 🎯🔫',
      src: 'https://github.com/ronisky/perbakin',
      url: 'https://github.com/ronisky/perbakin'
    },
    {
      name: 'SIMUS',
      techstack: ['Javascript', 'PHP', 'CSS'],
      image: 'project_cover.webp',
      description:
        'Aplikasi berbasis web ini merupakan bagian dari penelitian saya yang berjudul "Sistem Informasi dan Tata Kelola Pengunjung Museum Menggunakan Metode FIFO."',
      url: 'https://github.com/ronisky/simus',
      src: 'https://github.com/ronisky/simus'
    }
  ],
  other: [
    {
      name: 'slack-age-bot',
      techstack: ['Go'],
      description:
        "Slack Age Bot adalah bot ringan untuk Slack yang menghitung dan menampilkan usia pengguna berdasarkan input mereka. Dirancang untuk integrasi yang mudah, memungkinkan pengguna dengan cepat menentukan usia dari tanggal lahir melalui perintah Slack. Cocok untuk hiburan tim atau perhitungan cepat! 🎂🤖",
      url: 'https://github.com/ronisky/slack-age-bot',
      src: 'https://github.com/ronisky/slack-age-bot'
    },
    {
      name: 'shayna-backend',
      techstack: ['PHP', 'Blade', 'Vue', 'Mysql'],
      description:
        'Aplikasi revolusioner yang menggunakan teknologi web terbaru untuk memindai radiasi latar belakang gelombang mikro kosmik guna mendeteksi sinyal alien. Cocok untuk astronom amatir dan penggemar fiksi ilmiah yang ingin menjadi yang pertama memberi tahu dunia tentang kontak dengan makhluk luar angkasa.',
      src: 'https://github.com/ronisky/shayna-backend',
      url: 'https://github.com/ronisky/shayna-backend/'
    },
    {
      name: 'go-bookstore',
      techstack: ['Go', 'Mysql'],
      description:
        'Book Store API adalah API sederhana dan skalabel untuk mengelola buku, penulis, dan transaksi pelanggan. Didesain dengan efisiensi, menyediakan endpoint untuk menelusuri buku, mencari berdasarkan kategori atau penulis, serta menangani operasi CRUD dasar. Cocok untuk membangun toko buku online atau sistem manajemen perpustakaan. 📚🚀',
      url: 'https://github.com/ronisky/go-bookstore',
      src: 'https://github.com/ronisky/go-bookstore'
    },
    {
      name: 'Go Movies Basic',
      techstack: ['Go'],
      description:
        "Go Movies Basic adalah API ringan dan efisien untuk mengelola data film, dibangun menggunakan Golang. Menyediakan endpoint untuk mengambil detail film, mencari film, dan menangani operasi CRUD dasar. Ideal bagi pengembang yang mencari solusi basis data film yang cepat dan skalabel. 🚀",
      url: 'https://github.com/ronisky/Go-Movies-Basic',
      src: 'https://github.com/ronisky/Go-Movies-Basic'
    }
  ]
}

export default projects
