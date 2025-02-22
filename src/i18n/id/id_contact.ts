import type { Contact } from '@/types'

const contact: Contact = {
  title: 'Kontak',
  description:
    'Jika Anda ingin menghubungi saya, Anda dapat melakukannya melalui media sosial atau email.',
  social: 'Berikut akun media sosial saya dan alamat email saya:',
  //If a profile hast an empty string '', the button wont be rendered
  email: "ronisetiawant{'@'}gmail.com",
  copy: 'Salin',
  copied: 'Disalin',
  form: 'Atau, Anda dapat menggunakan formulir ini untuk mengirim pesan kepada saya:',
  name_label: 'Nama',
  name_placeholder: 'Masukkan Nama Anda',
  email_label: 'Email',
  email_placeholder: 'Masukkan Email Anda',
  message_label: 'Pesan',
  message_placeholder: 'Masukkan Pesan Anda',
  send: 'Kirim Pesan',
  sending: 'Mengirim...',
  restriction: 'Anda dapat mengirim satu pesan setiap 30 menit, harap tunggu.'
}

export default contact
