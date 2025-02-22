import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'PT Satkomindo Mediyasa',
      position: 'Associate IT Project',
      url: 'https://www.satkomindo.com/',
      startDate: '2023-08',
      endDate: 'Present',
      highlights: [
        'Led the development and implementation of the application to automate administrative document workflows related to communication networks between the Head Office, Work Units, and Providers.',
        'Executed system integration for the application, ensuring seamless data synchronization and efficient administrative processes.',
        'Enhanced efficiency by automating document workflow processes, reducing the risk of manual errors and data duplication.',
        'Enabled more organized and structured management of administrative documents, keeping essential documents separate from others.',
        'Ensured real-time monitoring of all administrative data, providing better visibility into the status and progress of documents.',
        'Delivered detailed reports for each request or issuance of Work Permit to Team Leaders and Department Heads, supporting more informed decision-making.',
        'By leveraging the application, significantly accelerated and improved the accuracy of administrative processes, supporting operational efficiency and reducing the burden of manual administrative tasks.'
      ],
      description:
        "I led the development and implementation of an application to automate administrative document workflows related to communication networks between the Head Office, Work Units, and Providers, executed system integration to ensure seamless data synchronization, enhanced efficiency by automating workflows to reduce manual errors and data duplication, enabled structured document management, ensured real-time monitoring of administrative data, delivered detailed reports to support decision-making, and significantly accelerated and improved the accuracy of administrative processes to enhance operational efficiency."
    },
    {
      company: 'Bandung University of Technology',
      position: 'Full-stack Developer',
      url: 'http://www.utb-univ.ac.id',
      startDate: '2020-10',
      endDate: '2023-07',
      highlights: [
        'Developed a student grade management system within the academic system, producing easy-to-read transcript and grade reports for academic staff. Built using Codeigniter, PHP, JavaScript, Bootstrap, and CSS.',
        'Developed and built an Online Academics Information System used by students for campus learning. Built using Codeigniter, Laravel, PHP, JavaScript, NuxtJS, Bootstrap, and CSS.',
        'Managed databases, including normalization and restructuring.',
        'Developed and built an E-learning System used by students and lecturers during the teaching and learning process on campus. Built using Codeigniter, Laravel, PHP, JavaScript, NuxtJS, Bootstrap, and CSS.',
        'Built an online CBT-based exam application for new student admissions, including management of department data, exam types, and assessments. Built using Laravel and VueJS.',
        'Built a Survey System for conducting performance improvement and service satisfaction surveys. As a backend developer, the system was built using Laravel.',
        'Supervised the performance of backend developer team members.'
      ],
      description:
        'I developed and built various academic systems, including a student grade management system that produces easy-to-read transcript reports, an Online Academics Information System for student learning, and an E-learning System for teaching and learning processes, utilizing frameworks such as Codeigniter, Laravel, PHP, JavaScript, NuxtJS, Bootstrap, and CSS. Additionally, I created an online CBT-based exam application for new student admissions and a Survey System for performance evaluation and service satisfaction measurement, while also managing databases through normalization and restructuring. As a backend developer, I was responsible for overseeing the performance of my backend team members.'
    },
  ]
};

export default experience
