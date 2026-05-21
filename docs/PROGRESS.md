# Progress Report - Optiwear Heritage Experience

Dokumen ini berisi rangkuman pengerjaan fitur halaman *Heritage* yang telah diselesaikan pada hari ini, serta catatan untuk melanjutkan pekerjaan di esok hari.

## ✅ Pekerjaan yang Telah Selesai (Selesai Hari Ini)

### 1. Perancangan Struktur & Layout Halaman Heritage
- **Routing & Entry Point**: Menambahkan route baru pada `/heritage` menggunakan standar Next.js App Router di `src/app/heritage/page.tsx`.
- **Integrasi SEO & Global UI**: Menggabungkan halaman Heritage dengan komponen global seperti `Navigation` (dengan state aktif dinamis), `Footer`, `CartDrawer`, dan `MockCheckoutModal`.

### 2. Pembuatan Komponen Modular UI (di `src/pages/Heritage/`)
- **`ScrollReveal.tsx`**: Komponen wrapper *client-side* untuk efek animasi scroll (`fade-in-up` & `clip-path` image reveal).
- **`HeroManifesto.tsx`**: Section hero pembuka dengan gambar penuh, tata letak grid, dan tipografi serif.
- **`CraftsmanshipSection.tsx`**: Layout teks dan gambar bergantian untuk proses manufaktur dan material.
- **`EvolutionTimeline.tsx`**: Grid tiga kolom untuk sejarah evolusi bentuk kacamata.
- **`index.tsx`**: Merangkai semua komponen dan menambahkan CTA.

### 3. Penyesuaian Global Styles (`src/app/globals.css`)
- Menghapus kelas CSS custom `.reveal` / `.image-reveal` — kini animasi dikelola sepenuhnya oleh GSAP ScrollTrigger.

### 4. Perbaikan Build Produksi
- **Type-Safety (`src/app/shop/[id]/page.tsx`)**: Typing parameter `useParams()`.
- **Build Sukses**: `npm run build` sukses tanpa error.

### 5. Manajemen Aset Gambar & Fix Animasi Scroll
- **Masalah**: Gambar di halaman Heritage tidak tampil karena dua alasan:
  1. **Ekstensi file salah**: File `*.jpg` sebenarnya adalah PNG, menyebabkan browser gagal render.
  2. **Lenis smooth scrolling memblokir IntersectionObserver**: Lenis menggunakan CSS `transform` untuk scroll halus, sehingga `IntersectionObserver` pada `ScrollReveal` tidak pernah terpicu — elemen tetap di `opacity: 0`.
- **Solusi**:
  - Mengunduh semua aset dari Google Stitch URLs dan menyimpannya lokal dengan nama & ekstensi `.png` yang benar.
  - Mengganti `IntersectionObserver` dengan **GSAP ScrollTrigger** yang sudah terintegrasi dengan Lenis (`lenis.on("scroll", ScrollTrigger.update)`).
  - Memperbarui referensi gambar di `HeroManifesto.tsx`, `CraftsmanshipSection.tsx`, dan `EvolutionTimeline.tsx`.
- File di-*cleanup*: `craftsmanship_detail.jpg/png`, `evolution_timeline.jpg/png`, `hero_manifesto.jpg`.

---

## 🚀 Catatan & Tugas Lanjutan

- [ ] **Audit Responsivitas Mobile**: Uji animasi dan layout pada layar kecil.
- [ ] **Testing Silang (Cross-Browser)**: Cek efek `clip-path` pada Safari.
- [ ] **Tinjauan Akhir (QA)**: Periksa padding, jarak spasial, dan CLS.
