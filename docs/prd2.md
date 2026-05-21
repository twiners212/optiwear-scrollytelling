Product Requirements Document (PRD)
Proyek: Halaman E-Commerce Kacamata (Storefront UI)
Fase: Pengembangan Frontend & Interaksi UI/UX (Portfolio Optimized)
Routing: Halaman Terpisah (e.g., /shop)

1. Ringkasan & Tujuan Proyek
Mengembangkan antarmuka e-commerce khusus untuk produk kacamata yang berdiri sendiri di halaman terpisah (/shop), terpisah dari landing page utama. Proyek ini berfokus pada keunggulan implementasi frontend, estetika UI/UX, dan penyediaan simulasi aliran transaksi (checkout flow) yang realistis untuk kebutuhan portofolio profesional.

2. Ruang Lingkup Produk (Product Scope)
Kategori Produk: Terbatas pada penjualan frame kacamata dan kacamata normal/lensa standar (fashion/plano). Tidak menyediakan fitur input resep dokter atau kustomisasi lensa medis (minus/plus/silinder).

Media & Visual: Menggunakan galeri foto statis berkualitas tinggi dari berbagai sudut produk. Tidak mencakup fitur Virtual Try-On berbasis Augmented Reality (AR).

Sistem Transaksi: Menggunakan simulasi/demo checkout flow penuh di sisi frontend. Tidak ada integrasi dengan Payment Gateway asli (seperti Midtrans atau Xendit) maupun pengiriman eksternal pada fase ini.

3. Kebutuhan Fungsional (Functional Requirements)
A. Katalog Produk (/shop)
Grid Display: Menampilkan daftar produk kacamata dengan kartu produk (product card) yang bersih, memuat nama produk, harga, dan foto utama.

Filter & Sorting: Pengguna dapat menyaring produk berdasarkan kategori dasar (Pria, Wanita, Unisex) atau bentuk frame, serta mengurutkan berdasarkan harga.

B. Halaman Detail Produk (PDP - Product Detail Page)
Image Carousel: Galeri foto statis yang menampilkan produk dari sudut depan, samping, dan detail material.

Variant Selector: Fitur interaktif untuk memilih variasi warna frame yang tersedia.

CTA Button: Tombol "Tambah ke Keranjang" (Add to Cart) yang responsif.

C. Simulasi Checkout Flow (Cart to Success Page)
Shopping Cart Drawer/Page: Menampilkan daftar kacamata yang dipilih, kuantitas, ringkasan harga, dan tombol untuk melanjutkan ke checkout.

Mock Checkout Form: Halaman pengisian data pengiriman simulasi (Nama, Alamat, Pilihan Kurir).

Mock Payment Screen: Halaman yang menampilkan animasi pemrosesan pembayaran (loading payment screen) untuk meniru impresi transaksi asli.

Success Page: Halaman konfirmasi bahwa transaksi simulasi telah berhasil, dilengkapi dengan nomor pesanan fiktif dan ringkasan belanja.

4. Arsitektur Teknis & Skalabilitas Masa Depan
Arsitektur Frontend: Antarmuka ini dibangun menggunakan React untuk memastikan manajemen state (terutama pada keranjang belanja dan formulir) berjalan dengan efisien dan modular.

Konektivitas Inventaris: Struktur data komponen dikondisikan agar siap (ready) diintegrasikan dengan API eksternal, seperti sistem dashboard manajemen stok "OptiDash", guna mendukung sinkronisasi data CRUD barang secara real-time di masa mendatang.

Kesiapan Produksi (Production Readiness): Arsitektur kode pada modul checkout dirancang secara modular. Jika proyek ini akan ditingkatkan ke tahap produksi (production), bagian modul simulasi pembayaran dapat diganti dengan integrasi Payment Gateway asli atau dialihkan menjadi sistem order otomatis ke WhatsApp admin tanpa harus merombak ulang struktur UI.

5. Kebutuhan Non-Fungsional (Non-Functional Requirements)
Micro-Interactions: Penerapan animasi halus (transition & hover effects) pada tombol, kartu produk, dan perpindahan halaman untuk meningkatkan nilai estetika portofolio UI/UX.

Mobile-First Responsiveness: Memastikan tampilan /shop hingga halaman success sangat optimal dan nyaman digunakan saat diakses melalui smartphone.
