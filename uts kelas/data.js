// ===== Tailwind: definisi warna kustom (dipakai index.html & detail.html) =====
tailwind.config = { theme: { extend: { colors: {
  forest:'#1f3d2b', moss:'#6b8f3a', marigold:'#e8a317', soil:'#3b2f22', mist:'#eef3ec', sky:'#4f9bb5' } } } };

// ===== Data kegiatan (dipakai oleh daftar kegiatan, galeri, dan halaman detail) =====
const activities = [
  { title:'Aksi Cilik Cegah Banjir di SDN 060905', category:'Edukasi', date:'3 September 2026', place:'SDN 060905, Jl. Brigjen Katamso, Medan',
    img:'img/kegiatan-1.jpeg',
    text:[
      'BSI NewNormal berkolaborasi dengan Beasiswa Japfa mengadakan edukasi ke SDN 060905 Jl. Brigjen Katamso dengan tema "Aksi Cilik Cegah Banjir: Edukasi Pilah Sampah, Biopori, dan Hidroponik di Sekolah Dasar".',
      'Anak-anak diperkenalkan pada hubungan antara sampah dan banjir: sampah yang menumpuk menyumbat saluran air, sehingga air hujan meluap ke permukiman. Lewat materi yang dikemas sederhana, siswa belajar memilah sampah sejak dari kelas, mengenal lubang resapan biopori, dan mencoba menanam dengan sistem hidroponik.'],
    benefits:['Menanamkan kebiasaan memilah sampah sejak usia sekolah dasar','Mengenalkan biopori sebagai cara sederhana menyerap air hujan','Mengajak siswa mengenal hidroponik untuk lahan sempit','Siswa bisa menjadi "duta kecil" yang menularkan kebiasaan baik ke rumah'] },
  { title:'Penanaman Bibit Mangrove di Belawan', category:'Penanaman Pohon', date:'8 Oktober 2025', place:'Kampung Nelayan Indah, Belawan',
    img:'img/kegiatan-2.jpeg',
    text:[
      'Penanaman bibit mangrove dilakukan di Kampung Nelayan Indah Belawan bersama PT Pertamina.',
      'Mangrove tumbuh di pesisir yang berlumpur, sehingga relawan harus turun langsung ke lokasi untuk menancapkan bibit satu per satu. Hutan mangrove menjadi benteng alami yang melindungi permukiman nelayan dari abrasi dan gelombang pasang.'],
    benefits:['Mencegah abrasi dan mengurangi dampak gelombang pasang','Menjadi rumah bagi ikan, kepiting, dan udang sehingga menguntungkan nelayan','Menyerap karbon lebih banyak dibanding hutan di daratan','Menjaga kualitas air dan ekosistem pesisir'] },
  { title:'Penanaman Pohon Pelindung bersama KSO - PP URBAN', category:'Penanaman Pohon', date:'31 Oktober 2025', place:'Medan dan sekitarnya',
    img:'img/kegiatan-3.jpeg',
    text:[
      'Penanaman pohon pelindung dilakukan bersama KSO - PP URBAN. Bibit pohon dibawa ke lokasi dalam polybag, lalu ditanam satu per satu oleh relawan.',
      'Pohon pelindung berfungsi menaungi area sekitarnya, menahan tanah agar tidak mudah longsor, dan menyerap air hujan. Kegiatan ini juga menjadi contoh kerja sama komunitas dan perusahaan untuk lingkungan.'],
    benefits:['Memberi keteduhan dan menurunkan suhu di sekitar lokasi','Akar pohon membantu menahan tanah dan menyerap air','Menyerap polusi udara dan menambah oksigen','Menambah ruang hijau untuk warga'] },
  { title:'Penjemputan Sampah ke Sekolah NAMIRA', category:'Bank Sampah', date:'28 September 2025', place:'Sekolah NAMIRA, Medan',
    img:'img/kegiatan-4.jpeg',
    text:[
      'Tim Bank Sampah melakukan penjemputan sampah ke sekolah NAMIRA. Sampah yang sudah dikumpulkan siswa dan guru dimasukkan ke dalam karung besar, lalu diangkut menggunakan kendaraan operasional.',
      'Sistem jemput sampah memudahkan sekolah yang sudah rutin memilah, sehingga sampah anorganik bernilai seperti plastik dan kertas langsung masuk ke jalur daur ulang.'],
    benefits:['Mengurangi sampah yang berakhir di tempat pembuangan akhir','Sekolah terbiasa memilah dan mengumpulkan sampah secara rutin','Sampah bernilai bisa diolah kembali dan menghasilkan poin atau uang','Menumbuhkan kepedulian lingkungan di kalangan pelajar'] },
  { title:'Bank Sampah Menerima Sampah Terpilah dari Nasabah', category:'Bank Sampah', date:'7 November 2025', place:'BSI New Normal, Medan',
    img:'img/kegiatan-5.jpeg',
    text:[
      'BSI New Normal menerima sampah terpilah dari nasabah dan juga dari Bank Sampah Unit Yonkav 6/NK, BSU YonZipur, BSU Ate Keleng, serta beberapa hotel dan OYO.',
      'Sampah yang diterima sudah terpilah sehingga mudah ditimbang dan dicatat. Kerja sama banyak pihak, dari bank sampah unit sampai pelaku usaha penginapan, menunjukkan bahwa pengelolaan sampah bisa dilakukan bersama-sama.'],
    benefits:['Sampah yang sudah terpilah lebih mudah didaur ulang','Nasabah mendapat nilai tambah dari sampah yang dikumpulkan','Beban sampah kota berkurang','Melibatkan unit militer, hotel, dan masyarakat dalam satu gerakan'] },
  { title:'Edukasi Pembuatan Kompos dari Sampah Rumah Tangga', category:'Edukasi', date:'8 November 2025', place:'Sekolah dasar, Medan',
    img:'img/kegiatan-6.jpeg',
    text:[
      'Pada 8 November 2025 diadakan edukasi tentang pembuatan kompos dari sampah rumah tangga. Para relawan mahasiswa memberi materi di depan kelas dan siswa diajak mempraktikkannya.',
      'Sisa sayur, buah, dan daun yang biasanya langsung dibuang dapat diolah menjadi pupuk kompos untuk tanaman di sekolah maupun di rumah.'],
    benefits:['Mengurangi sampah organik yang menjadi sumber bau dan gas metana','Menghasilkan pupuk alami gratis untuk tanaman','Melatih siswa berpikir kreatif memanfaatkan limbah','Mengajarkan bahwa sampah rumah tangga masih bisa berguna'] },
  { title:'Gotong Royong World Cleanup Day 2025 di SMPN 1 Bandar Sribhawono', category:'Clean Up Day', date:'2025', place:'SMPN 1 Bandar Sribhawono, Lampung Timur',
    img:'img/kegiatan-7.jpeg',
    text:[
      'Warga sekolah SMPN 1 Bandar Sribhawono melakukan gotong royong membersihkan lingkungan sekolah dalam rangka mendukung World Cleanup Day (WCD) Indonesia tahun 2025.',
      'World Cleanup Day atau Hari Bersih-Bersih Sedunia adalah gerakan aksi sosial global tahunan untuk menyatukan orang-orang di seluruh dunia dalam upaya membersihkan sampah dari lingkungan hidup. Guru dan siswa bersama-sama menyapu, mengangkut sampah, dan merapikan area sekolah.'],
    benefits:['Lingkungan sekolah menjadi bersih, sehat, dan nyaman untuk belajar','Melatih kerja sama dan rasa memiliki terhadap lingkungan','Ikut menjadi bagian dari gerakan kebersihan dunia','Menjadi contoh nyata bagi siswa bahwa menjaga kebersihan adalah tanggung jawab bersama'],
    source:{ label:'Baca berita lengkap di smpn1bansri.sch.id', url:'https://smpn1bansri.sch.id/gotong-royong-membersihkan-lingkungan-sekolah-dalam-rangka-mendukung-world-cleanup-day-wcd-indonesia-tahun-2025/' } },
  { title:'World Cleanup Day 2021: Pilah Sampah dari Pondok Pesantren', category:'Clean Up Day', date:'2021', place:'Pondok Pesantren Modern Darul Istiqamah Putra, Kab. Hulu Sungai Tengah',
    img:'img/kegiatan-8.jpeg',
    text:[
      'Pondok Pesantren Modern Darul Istiqamah Putra mencanangkan pilah sampah dari pondok pesantren dalam rangka World Cleanup Day 2021, dengan tema "Aksi Hari Bersih-Bersih Sedunia dan Pilah Sampah dari Rumah".',
      'Langkah ini mendapat apresiasi dari Dinas Lingkungan Hidup dan Perhubungan Kabupaten HST. Santri, pengurus, dan pihak dinas berfoto bersama di depan spanduk kegiatan sebagai tanda komitmen menjaga kebersihan.'],
    benefits:['Pilah sampah dari lingkungan sendiri memudahkan pengelolaan sampah berikutnya','Pesantren menjadi contoh bagi lembaga pendidikan lain','Kolaborasi dengan dinas terkait memperkuat dampak kegiatan','Menanamkan kebiasaan hidup bersih sebagai bagian dari akhlak sehari-hari'],
    source:{ label:'Baca berita lengkap di darulistiqamah.ponpes.id', url:'https://darulistiqamah.ponpes.id/berita-ppmdi/world-cleanup-day-2021-dinas-lingkungan-hidup-dan-perhubungan-kab-hst-apresiasi-pondok-pesantren-modern-darul-istiqamah-putra-yang-canangkan-pilah-sampah-dari-pondok-pesantren/' } }
];
