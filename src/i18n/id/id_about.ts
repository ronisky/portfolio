import type { About } from '@/types'

const about: About = {
  title: 'Tentang',
  summary:
    "Di siang hari ☀️, saya seorang insinyur perangkat lunak yang gemar mengubah masalah kompleks menjadi solusi sederhana. Di malam hari 🌙, saya menjelma sebagai penikmat meme berkualitas dan calon astronot penuh harapan. Dengan selera humor yang tinggi dan kecintaan mendalam terhadap teknologi, saya bahkan berhasil membuat tanaman saya berkicau di Twitter saat mereka butuh disiram. \n\n Seorang ahli dalam menangani berbagai tugas sekaligus dan penggemar berat teknologi, saya telah menguasai seni mengubah teh ☕ menjadi kode serta kekacauan menjadi keteraturan.",
  education: {
    title: 'Pendidikan',
    list: [
      {
        title: 'Sarjana Teknik Informatika',
        institution: 'Universitas Teknologi Bandung',
        url: 'https://www.utb-univ.ac.id/',
        description:
          'Sebagai mahasiswa Teknik Informatika, saya melihat setiap baris kode sebagai peluang untuk menciptakan sesuatu yang berarti. Saya aktif mengerjakan berbagai proyek, mulai dari pengembangan aplikasi web hingga eksplorasi kecerdasan buatan, selalu mencari cara untuk menghubungkan teori dengan praktik. Selain perkuliahan, saya terus belajar secara mandiri, mengikuti tren teknologi terbaru, dan berkolaborasi dalam komunitas developer. Bagi saya, Teknik Informatika bukan hanya tentang memahami algoritma, tetapi tentang membangun solusi yang berdampak dan terus berkembang di dunia digital.',
        startDate: '2016-08',
        endDate: '2020-07',
        courses: [
          'IoT',
          'Mobile',
          'Web Developer',
          'DevOps',
        ]
      }
    ]
  },
  achievements: {
    title: 'Prestasi',
    list: [
      {
        title: "Juara 1 Mobile Games Cimahi IT",
        date: '2018-07',
        url: '#',
        awarder: 'Dinas Komunikasi dan Informatika Kota Cimahi',
        summary:
          "Diberikan karena telah membuat game yang menarik, dan edukatif dan sesuai dengan kriteria perlombaan."
      }
    ]
  }
}


export default about

