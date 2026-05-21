Product Requirements Document (PRD)
Proyek: Halaman Optiwear Heritage (Editorial Storytelling UI)
Fase: Pengembangan Frontend & Tata Letak Estetik
Routing: Halaman Terpisah (e.g., /heritage)

1. Ringkasan & Tujuan Proyek
Mengembangkan halaman "Heritage" pada web Optiwear untuk membangun kedekatan emosional dengan calon konsumen melalui cerita di balik brand. Halaman ini berfokus pada penyajian sejarah, nilai keahlian tangan (craftsmanship), dan evolusi desain kacamata. Menggunakan pendekatan tata letak editorial majalah fashion kelas atas yang minimalis, bersih, dan mengutamakan kekuatan tipografi serta visual statis berkualitas tinggi.

2. Kebutuhan Fungsional (Functional Requirements)
A. Tata Letak Editorial (Magazine-Style Layout)
Asymmetric Grid: Menyajikan kombinasi teks dan gambar menggunakan grid asimetris (tidak kaku) untuk memberikan kesan artistik dan premium.

Typographic Focus: Penggunaan teks kutipan besar (large pull-quotes) dengan font Serif (seperti pada headline toko kamu) sebagai elemen visual utama penilai estetika halaman.

B. Struktur Konten & Komponen Halaman
Halaman dibagi menjadi 3 seksi utama yang mengalir secara vertikal:

The Manifesto (Hero Section): * Pembuka halaman yang menampilkan foto hitam-putih berskala besar (misal: detail tangan pengrajin atau studio desain).

Teks berukuran besar yang menyatakan filosofi dasar Optiwear tentang keabadian sebuah desain (timeless design).

The Craftsmanship Pillars (Feature Sections):

Dua atau tiga baris blok konten bergantian (Gambar Kiri - Teks Kanan, lalu Teks Kiri - Gambar Kanan).

Menjelaskan proses pembuatan spesifik, seperti Hand-Polishing (pemolesan manual) dan Material Selection (pemilihan bahan asetat organik dan titanium jepang).

The Evolution Timeline Grid (Baris Waktu Minimalis):

Sebuah seksi interaktif statis yang menampilkan evolusi bentuk bingkai ikonik (Bulat, Kotak, Aviator).

Pengguna dapat melihat transisi bentuk bingkai dari fungsi historisnya hingga menjadi produk modern premium yang ada di halaman /shop.

C. Navigasi Internal (Contextual CTA)
Di akhir halaman, wajib terdapat tombol ajakan bertindak (Call to Action) minimalis namun kontras yang mengarahkan pengguna kembali ke halaman toko. Contoh: "Explore the Collection ──►".

3. Kebutuhan Non-Fungsional (Non-Functional Requirements)
A. Animasi Mikro & Transisi (Framer Motion / Pure CSS)
Karena tidak menggunakan GSAP, efek kemunculan teks dan gambar saat pengguna melakukan scroll ke bawah menggunakan transisi CSS Intersection Observer API (atau komponen dasar framer-motion jika menggunakan React).

Efek yang digunakan harus sangat halus: fade-in-up (teks memudar naik perlahan) dan image-reveal (gambar muncul dengan transisi halus). Jangan ada animasi yang terlalu cepat atau menghentak.

B. Optimasi Gambar Statis
Mengingat halaman ini mengandalkan foto-foto editorial berukuran besar, semua aset gambar wajib menggunakan format modern (WebP) dengan kompresi optimal untuk memastikan waktu pemuatan halaman (page load time) tetap instan di bawah 2 detik.

C. Responsivitas Editorial
Tata letak asimetris pada desktop harus secara dinamis berubah menjadi tata letak satu kolom (single-column vertical stack) yang rapi saat diakses melalui perangkat mobile, tanpa memotong bagian penting dari foto produk.

4. Alur Pengguna (User Flow)
Navigasi: Pengguna mengklik "Heritage" pada header. Halaman terbuka dengan transisi halaman yang halus (page transition fade).

Imersi Visual: Pengguna disuguhkan dengan visual pembuka yang emosional (The Manifesto) dan mulai membaca cerita brand sembari menggulir halaman ke bawah.

Eksplorasi Nilai: Gambar dan teks tentang keahlian pengrajin muncul bergantian secara elegan seiring kecepatan scroll pengguna.

Konversi: Pengguna mencapai bagian akhir sejarah (Evolution Grid), melihat dedikasi di balik produk, dan diarahkan oleh tombol CTA untuk mulai berbelanja di halaman /shop.

5. Matriks Keberhasilan Portofolio (Portfolio Value Metrics)
Visual Harmony: Desain halaman terasa kokoh, menyatu, dan memiliki brand identity yang sama persis dengan halaman toko (/shop) dan halaman teknologi (/technology).

Clean Code Structure: Komponen React dipisahkan secara modular (misalnya: membuat komponen pembungkus <ScrollReveal> yang dapat digunakan berulang kali untuk teks maupun gambar).

Typography Hierarchy: Skala tipografi yang matang, membuktikan kemampuan dalam menyusun hierarki visual teks (H1, H2, Body Text, dan Quotes) pada standar web profesional.
