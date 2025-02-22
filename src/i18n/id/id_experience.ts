import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Pengalaman',
  description: 'Anda dapat mengunduh resume saya dengan mengeklik tombol di bawah.',
  download_button: 'Unduh CV',
  present: 'Sekarang',
  month: 'bulan | bulan',
  year: 'tahun | tahun',
  list: [
    {
      company: 'PT Satkomindo Mediyasa',
      position: 'Associate IT Project',
      url: 'https://www.satkomindo.com/',
      startDate: '2023-08',
      endDate: 'Sekarang',
      highlights: [
        'Memimpin pengembangan dan implementasi aplikasi untuk mengotomatisasi alur kerja dokumen administratif terkait jaringan komunikasi antara Kantor Pusat, Unit Kerja, dan Penyedia Layanan.',
        'Melakukan integrasi sistem untuk aplikasi tersebut, memastikan sinkronisasi data yang lancar dan proses administratif yang efisien.',
        'Meningkatkan efisiensi dengan mengotomatisasi proses alur kerja dokumen, mengurangi risiko kesalahan manual dan duplikasi data.',
        'Memungkinkan pengelolaan dokumen administratif yang lebih terorganisir dan terstruktur, dengan memisahkan dokumen-dokumen penting dari yang lainnya.',
        'Memastikan pemantauan data administratif secara real-time, memberikan visibilitas yang lebih baik terhadap status dan kemajuan dokumen.',
        'Menyediakan laporan detail untuk setiap permintaan atau penerbitan Izin Kerja kepada Pemimpin Tim dan Kepala Departemen, mendukung pengambilan keputusan yang lebih informasional.',
        'Dengan memanfaatkan aplikasi, secara signifikan mempercepat dan meningkatkan akurasi proses administratif, mendukung efisiensi operasional dan mengurangi beban tugas administratif manual.'
      ],
      description:
        "Saya memimpin pengembangan dan implementasi aplikasi untuk mengotomatisasi alur kerja dokumen administratif terkait jaringan komunikasi antara Kantor Pusat, Unit Kerja, dan Penyedia Layanan, melakukan integrasi sistem untuk memastikan sinkronisasi data yang lancar, meningkatkan efisiensi melalui otomatisasi yang mengurangi kesalahan manual dan duplikasi data, mengelola dokumen secara terstruktur, memastikan pemantauan data secara real-time, menyediakan laporan detail untuk mendukung pengambilan keputusan, serta secara signifikan mempercepat dan meningkatkan akurasi proses administratif untuk mendukung efisiensi operasional."
    },
    {
      company: 'Universitas Teknologi Bandung',
      position: 'Full-stack Developer',
      url: 'http://www.utb-univ.ac.id',
      startDate: '2020-10',
      endDate: '2023-07',
      highlights: [
        'Mengembangkan sistem pengelolaan nilai mahasiswa pada sistem akademik sehingga menghasilkan laporan transkrip dan nilai yang lebih mudah dibaca yang digunakan oleh petugas akademik. Dibangun menggunakan framework Codeigniter, PHP, Javascript, Bootstrap, dan CSS.',
        'Mengembangkan dan membangun Online Academics Information System yang digunakan mahasiswa untuk mengikuti pembelajaran di kampus. Dibangun menggunakan framework Codeigniter, Laravel, PHP, Javascript, NuxtJS, Bootstrap, dan CSS.',
        'Mengelola database, melakukan normalisasi dan destrukturisasi database.',
        'Mengembangkan dan membangun Elearning System yang digunakan oleh mahasiswa dan dosen selama mengikuti proses belajar mengajar di kampus. Dibangun menggunakan framework Codeigniter, Laravel, PHP, Javascript, NuxtJS, Bootstrap, dan CSS.',
        'Membangun aplikasi ujian online berbasis CBT yang digunakan untuk melakukan saringan masuk mahasiswa baru, sistem berisikan pengelolaan data jurusan, jenis ujian, dan penilaian. Dibangun menggunakan Laravel dan VueJS.',
        'Membangun Sistem Survey yang digunakan untuk melakukan survei terkait peningkatan kinerja dan pengelolaan kepuasan layanan. Sebagai backend developer, sistem dibangun menggunakan Laravel.',
        'Mengontrol kinerja rekan kerja pada bagian backend developer.'
      ],
      description:
        'Saya mengembangkan dan membangun berbagai sistem akademik, termasuk sistem pengelolaan nilai mahasiswa yang menghasilkan laporan transkrip mudah dibaca, Online Academics Information System untuk pembelajaran mahasiswa, dan Elearning System untuk proses belajar mengajar, menggunakan framework seperti Codeigniter, Laravel, PHP, JavaScript, NuxtJS, Bootstrap, dan CSS. Selain itu, saya membangun aplikasi ujian online berbasis CBT untuk saringan mahasiswa baru dan Sistem Survey untuk pengukuran kinerja dan kepuasan layanan, serta mengelola database dengan melakukan normalisasi dan destrukturisasi. Sebagai backend developer, saya juga bertanggung jawab mengontrol kinerja rekan kerja di tim backend.'
    },
  ]
};

export default experience
