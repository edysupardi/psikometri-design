Saya membutuhkan re-design lengkap untuk "Psikometri" — platform asesmen psikologi online berbasis web. Saya ingin design yang clean, modern, minimalis, dan profesional. Design saat ini terasa bulky: form terlalu besar, card terlalu gemuk, padding berlebihan, border kurang refined, dan secara keseluruhan proporsinya tidak seimbang. Saya ingin hasil akhir yang terasa sleek, ringan, dan breathable — seperti standar SaaS modern (Linear, Vercel, Stripe Dashboard).

---

## 0. TENTANG APLIKASI PSIKOMETRI

### Apa itu Psikometri?
Psikometri adalah platform asesmen psikologi online yang digunakan oleh perusahaan, institusi, dan individu untuk melakukan tes psikologi terstandar. Platform ini menangani seluruh lifecycle asesmen: dari pembelian paket tes, pengerjaan soal, scoring otomatis, review oleh psikolog profesional, hingga penerbitan laporan resmi dengan tanda tangan elektronik (TTE).

### Jenis Tes yang Tersedia
- **WWQ (Woodworth's Questionnaire)**: Tes kepribadian 75 soal dengan format YA/TIDAK, mengukur 8 skala psikologis
- **Papikostick**: Tes kepribadian kerja dengan 20 faktor (N, G, A, L, P, I, T, V, X, S, B, O, R, D, C, Z, E, K, F, W)
- **IST (Intelligenz Struktur Test)**: Tes inteligensi dengan subtest dan data normatif
- **Kraepelin**: Tes kecepatan dan ketelitian kerja

### 4 Role Pengguna

**1. Publik (Peserta Tes)**
Individu yang mengerjakan tes psikologi. Bisa beli paket sendiri atau mendapat assignment dari perusahaan (B2B). Flow utama: Daftar → Beli/Claim paket → Bayar → Kerjakan tes → Tunggu review → Download hasil PDF.
- Kebutuhan UX: Proses tes harus calming dan fokus (full-screen, minim distraksi). Dashboard harus simple dan task-oriented.

**2. B2B Admin (Perusahaan/Institusi)**
HR atau admin perusahaan yang membeli paket asesmen secara bulk untuk kandidat karyawan. Contoh: PT ABC ingin asesmen psikologi untuk 50 calon karyawan.
- Flow: Buat order bulk → Bayar → Upload daftar NIK kandidat → Generate voucher → Monitor progress peserta → Download semua hasil.
- Kebutuhan UX: Dashboard monitoring yang data-dense, tabel dengan banyak filter, bulk actions.

**3. Psikolog**
Psikolog profesional yang me-review hasil asesmen, menulis clinical summary, mengisi checklist klinis, dan memberikan rekomendasi (Direkomendasikan / Dipertimbangkan / Tidak Direkomendasikan). Setelah submit, sistem memproses tanda tangan elektronik (TTE) pada laporan PDF.
- Kebutuhan UX: Interface review harus efisien untuk throughput tinggi — data skor di kiri, form review di kanan. Chart psikometri (percentile, T-Score, STEN, radar) harus readable dan compact.

**4. Administrator (Superadmin)**
Mengelola seluruh sistem: manajemen user, tipe tes, bank soal, paket asesmen, verifikasi pembayaran, voucher, report template, tiered pricing, biaya/fee, dan audit log.
- Kebutuhan UX: Banyak halaman CRUD dengan data table. Harus efisien untuk navigasi antar banyak menu. Dashboard dengan KPI dan chart overview.

### Alur Bisnis Utama
```
[Peserta/B2B] Beli Paket → [Peserta] Bayar → [Admin] Verifikasi Pembayaran
→ [Peserta] Kerjakan Tes → [Sistem] Scoring Otomatis
→ [Psikolog] Review & Clinical Summary → [Sistem] TTE (Tanda Tangan Elektronik)
→ [Peserta/B2B] Download Laporan PDF Resmi
```

### Sistem Pembayaran
- Multiple metode: Virtual Account, QRIS, E-Wallet, Kartu Kredit (via Midtrans)
- Fee structure: Gateway fee + Platform fee + PPN per metode pembayaran
- Voucher system: Persentase atau nominal tetap, dengan quota dan masa berlaku
- B2B: Order bulk dengan tiered pricing (diskon berdasarkan quantity)

### Konteks Penting untuk Design
- Ini platform **psikologi profesional** — user harus merasa percaya dan aman. Bukan e-commerce biasa.
- Peserta tes bisa dalam kondisi **nervous** (tes rekrutmen kerja) — interface tes harus tenang dan tidak intimidating.
- Psikolog memproses **banyak review per hari** — efisiensi dan scanability adalah prioritas.
- B2B admin perlu **monitoring real-time** progress puluhan/ratusan peserta.
- Admin mengelola **banyak entitas berbeda** — navigasi sidebar harus jelas dan terorganisir.

---

## 1. BRAND & COLOR SYSTEM

Pertahankan palet warna ini, JANGAN ubah:
- Primary: #3B1FA3 (Deep Indigo)
- Secondary: #C5B8F5 (Light Lavender)
- Tertiary/Accent: #FFD600 (Bright Yellow)
- Neutral: #F0EFF8
- Surface: #FAF8FF
- Surface Lowest: #FFFFFF
- Surface Low: #F4F3FC
- Surface High: #E8E7F0
- On-Surface: #1A1B22
- On-Surface Variant: #474551
- Outline: #C8C4D3
- Error: #BA1A1A
- Success: #059669

Brand personality: Profesional, terpercaya, clinical-grade tapi tetap approachable. Bukan corporate kaku, tapi juga bukan playful. Think: "dokter muda yang ramah dan kompeten."

---

## 2. TYPOGRAPHY

- Heading font: Manrope (weights: 500, 600, 700)
- Body font: Inter (weights: 400, 500, 600)
- Scale yang lebih compact dan proporsional:
  - Display/Hero: 48px / line-height 1.1
  - H1 (Page title): 24px / semibold
  - H2 (Section title): 18px / semibold
  - H3 (Card title): 15px / semibold
  - Body: 14px / regular
  - Body Small: 13px / regular
  - Caption: 12px / medium
  - Overline: 11px / semibold / uppercase / letter-spacing 0.5px

PENTING: Jangan gunakan font size yang terlalu besar. Page title cukup 24px, bukan 28-36px. Metric value cukup 28-32px, bukan 48px. Ini kunci agar tidak terasa "gemuk".

---

## 3. SPACING & LAYOUT SYSTEM

Base unit: 4px grid

Spacing scale:
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px
- 3xl: 48px

Layout rules:
- Page padding: 24px (desktop), 16px (mobile)
- Section gap: 24px
- Card padding: 16px (compact) / 20px (standard)
- Form field gap: 16px
- Input height: 36px (BUKAN 40-44px)
- Button height: 32px (sm) / 36px (md) / 40px (lg)
- Table row height: 44px
- Sidebar width: 240px (BUKAN 256px)
- Navbar height: 56px (BUKAN 64px)

PRINSIP UTAMA: Gunakan whitespace secara intentional, bukan berlebihan. Setiap elemen harus "breathe" tapi tidak "float". Compact tapi tidak cramped.

---

## 4. BORDER & ELEVATION

- Border radius: 6px (small/input), 8px (card/medium), 12px (large/modal), 9999px (pill/badge)
- Border: Gunakan SANGAT MINIMAL. Prefer tonal layering (perbedaan warna surface) daripada border.
  - Jika harus pakai border: 1px solid dengan opacity rendah (outline color at 40-60% opacity)
  - Table: Hanya horizontal divider, TANPA border luar
  - Card: Tanpa border, gunakan subtle shadow atau surface color difference
- Shadow system:
  - Elevation 0: none (flat, tonal difference only)
  - Elevation 1: 0 1px 2px rgba(0,0,0,0.04) — card default
  - Elevation 2: 0 2px 8px rgba(0,0,0,0.06) — hover/dropdown
  - Elevation 3: 0 4px 16px rgba(0,0,0,0.08) — modal/popover

---

## 5. DESIGN TOKENS (Atoms)

Buatkan design token lengkap untuk:

### 5a. Buttons
- Primary: bg #3B1FA3, text white, hover darken 8%
- Secondary: bg #C5B8F5, text #3B1FA3, hover darken 5%
- Outline: border #C8C4D3, text #1A1B22, hover bg #F4F3FC
- Ghost: no bg, text #474551, hover bg #F4F3FC
- Danger: bg #BA1A1A, text white
- Semua button: font-weight 500, font-size 13px, border-radius 6px, padding horizontal 16px
- Icon button: 32x32px (sm), 36x36px (md)

### 5b. Inputs
- Height: 36px
- Border: 1px solid #C8C4D3
- Border radius: 6px
- Font size: 14px
- Focus: border #3B1FA3, ring 2px #C5B8F5 at 30% opacity
- Error: border #BA1A1A, helper text #BA1A1A
- Label: 13px, font-weight 500, color #474551, margin-bottom 4px
- Placeholder: #9E9BA8

### 5c. Cards
- Background: #FFFFFF
- Border: NONE (gunakan shadow elevation 1)
- Border radius: 8px
- Padding: 16px atau 20px
- Hover (jika clickable): elevation 2

### 5d. Badges / Status
- Border radius: 9999px (pill)
- Padding: 2px 8px
- Font size: 11px, font-weight 600
- Variants: Completed (#3B1FA3 bg, white text), In Progress (#FFD600 bg, #1A1B22 text), Pending (#F4F3FC bg, #474551 text), Error (#FEE2E2 bg, #BA1A1A text), Success (#ECFDF5 bg, #059669 text)

### 5e. Table
- Header: bg #F4F3FC, font 12px semibold uppercase, color #474551, letter-spacing 0.5px
- Row: height 44px, font 13px, color #1A1B22
- Alternating rows: TIDAK. Gunakan hover highlight saja (bg #F4F3FC)
- Divider: 1px solid #E8E7F0 (horizontal only)
- Container: border-radius 8px, NO outer border, subtle shadow

### 5f. Navigation
- Sidebar item: height 36px, font 13px, border-radius 6px, padding 8px 12px
- Active: bg #C5B8F5 at 30% opacity, text #3B1FA3, font-weight 600
- Hover: bg #F4F3FC
- Section label: 11px, uppercase, letter-spacing 0.8px, color #9E9BA8, margin-top 20px

### 5g. Modal
- Max-width: 480px (small), 640px (medium), 800px (large)
- Border radius: 12px
- Padding: 24px
- Overlay: black at 40% opacity
- Header: 18px semibold, with close button

### 5h. Toast / Notification
- Border-radius: 8px
- Padding: 12px 16px
- Shadow: elevation 2
- Icon + text layout, font 13px

---

## 6. MOLECULES & ORGANISMS

### 6a. Metric Card (KPI)
- Layout: Icon (32x32, rounded 6px, tinted bg) + Value (28px semibold) + Label (12px, color variant)
- Compact: Semua dalam satu baris horizontal ATAU vertical stack yang tight
- JANGAN buat card yang terlalu besar. Min-width 160px, padding 16px.

### 6b. Data Table (Advanced)
- Toolbar: Search input (left) + Filter buttons + Action button (right)
- Compact header, compact rows
- Pagination: Simple "1-10 of 50" + prev/next arrows
- Sort indicators: Subtle chevron icons
- Action column: Icon buttons (eye, edit, trash) — 28x28px

### 6c. Form Layout
- Max-width form: 480px (single column) atau 640px (two column)
- Field spacing: 16px vertical gap
- Section divider: 24px gap + optional section title
- Submit area: Sticky bottom atau inline, right-aligned buttons

### 6d. Page Header
- Layout: Breadcrumb (top, 12px) → Page Title (24px) + Optional subtitle (13px) + Action buttons (right)
- Margin bottom: 24px

### 6e. Sidebar + Content Layout
- Sidebar: 240px fixed, bg white, border-right 1px #E8E7F0
- Content: flex-1, bg #FAF8FF, padding 24px
- Navbar: 56px height, bg white, border-bottom 1px #E8E7F0

---

## 7. HALAMAN YANG PERLU DI-DESIGN

### GRUP A: Non-Login Pages (Landing & Auth)

**A1. Landing Page**
Sections:
- Navbar: Logo (left) + nav links (Produk, Harga, Tentang) + Login/Daftar buttons (right)
- Hero: Headline besar + subtitle + 2 CTA buttons (Mulai Asesmen / Lihat Produk) + hero illustration/abstract shape
- Keunggulan: 3-column grid (Valid & Terstandar, Hasil Instan, Data Aman) — icon + title + description
- Jenis Tes: 4 cards (WWQ, Papikostick, IST, Kraepelin) — icon/illustration + nama + deskripsi singkat + badge "75 soal" dll
- Testimoni: Carousel atau grid 3 kolom
- Partner/Klien: Logo grid
- CTA Section: Full-width banner dengan CTA
- Footer: Logo + links + copyright

**A2. Login Page**
- Split layout: Left side = brand illustration/gradient, Right side = form
- Form: Email input + Password input (with toggle) + "Lupa Password?" link + Login button + "Belum punya akun? Daftar" link
- OTP step: 6-digit OTP input + countdown timer + resend link
- Form max-width: 360px

**A3. Register Page**
- Same split layout as login
- Form: Email + Password + Confirm Password + password requirements checklist
- OTP verification step

**A4. Forgot Password & Reset Password**
- Centered card layout, max-width 400px
- Simple form with clear success/error states

### GRUP B: Public User (Peserta Tes)

**B1. Dashboard**
- Welcome message (nama user)
- 4 Metric cards: Total Tes, Selesai, Dalam Proses, Menunggu Pembayaran
- Assignment card (jika ada dari B2B): Highlighted card dengan info assignment
- Quick action: "Beli Paket Asesmen" button
- Riwayat terbaru: Compact table (5 rows) dengan link "Lihat Semua"

**B2. Katalog Asesmen (/assessments)**
- Search bar + filter
- Package cards grid (2-3 columns): Nama paket + deskripsi + harga + jumlah tes + badge fitur + CTA button
- Active sessions section (jika ada)
- B2B assigned packages section (jika ada)

**B3. Detail Paket (/assessments/[slug])**
- Package info: Nama, deskripsi, harga, durasi
- Included tests list
- Features list
- CTA: "Mulai Asesmen" atau "Beli Paket"

**B4. Test Interface (/test/[code]/[sessionId])**
- Full-screen focused mode (no sidebar)
- Top bar: Progress bar + question counter "12/75" + timer
- Question card: Centered, max-width 640px, pertanyaan + 2 buttons (YA / TIDAK) atau multiple choice
- Navigation: Previous/Next buttons

**B5. Checkout (/checkout)**
- 2-column layout: Order summary (left) + Payment form (right)
- Payment methods: Radio cards (VA, QRIS, E-Wallet, Card)
- Fee breakdown: Subtotal, diskon, biaya layanan, PPN, total
- Voucher input field
- Pay button

**B6. Riwayat Asesmen (/results)**
- Data table: Nama paket, tanggal, status badge, action (download PDF)
- Search + filter by status

**B7. Riwayat Transaksi (/transactions)**
- Data table: ID, paket, jumlah, metode, status, tanggal

**B8. Profile (/profile)**
- Form: Nama, email (readonly), NIK, tanggal lahir, gender, pendidikan, pekerjaan
- Change password section
- 2-column form layout

### GRUP C: Psychologist

**C1. Dashboard**
- 4 KPI cards: Antrian, Dalam Review, TTE Progress, Selesai
- Review queue preview table

**C2. Review Queue (/psychologist/reviews)**
- Data table: Nama peserta, paket tes, tanggal, status badge, action
- Filter by status (QUEUE, IN_PROGRESS, TTE_PROGRESS, COMPLETED, TTE_FAILED)
- Search

**C3. Review Detail (/psychologist/review/[id])**
- 2-column layout: Left = test scores/charts, Right = review form
- Clinical summary textarea (rich text)
- Clinical checklist (checkboxes)
- Conclusion radio (RECOMMENDED / TO_BE_CONSIDERED / NOT_RECOMMENDED)
- Submit button
- Psychometric charts: Percentile bar, T-Score, STEN scale, Radar chart

**C4. Bank Soal (/psychologist/bank-soal)**
- Data table: Kode soal, teks soal, tipe tes, status
- CRUD actions

### GRUP D: B2B Admin

**D1. Dashboard**
- KPI cards: Total Order, Peserta Terdaftar, Tes Selesai, Menunggu Review
- Recent orders table

**D2. Katalog Paket B2B (/b2b/packages)**
- Package cards with bulk pricing info

**D3. Buat Order (/b2b/order)**
- Form: Pilih paket + jumlah peserta + tujuan asesmen
- Price calculation preview
- Upload bukti pembayaran

**D4. Daftar Order (/b2b/orders)**
- Data table: ID, paket, qty, total, status, tanggal
- Filter by status, search, date range

**D5. Detail Order (/b2b/orders/[id])**
- Order info card
- Upload NIK whitelist section
- Generate voucher section
- Participant list table

**D6. Monitoring Peserta (/b2b/monitoring)**
- Data table: Nama/NIK, paket, status tes, status review
- Filter by status
- Download all results button

### GRUP E: Administrator (Superadmin)

**E1. Dashboard**
- 5 KPI cards: Total User, Tes Aktif, Pembayaran Pending, Review Queue, Revenue
- Pipeline funnel chart
- Revenue trend chart
- Recent audit log

**E2. Manajemen User (/admin/users)**
- Data table: Nama, email, role badge, status, tanggal daftar
- Actions: Edit, detail, reset password, activate/deactivate
- Create user modal
- Filter by role, status

**E3. Manajemen Tipe Tes (/admin/tests)**
- Data table: Nama, kode, kategori, jumlah soal, status toggle
- CRUD pages: Add/Edit test type form

**E4. Manajemen Soal (/admin/tests/[id]/questions)**
- Data table: Nomor, teks soal, konfigurasi jawaban, status
- Add/Edit question form
- Bulk import

**E5. Manajemen Paket (/admin/packages)**
- Data table: Nama, kode, harga, jumlah tes, status toggle
- Add/Edit package form with test assignment

**E6. Verifikasi Pembayaran (/admin/payments)**
- Tabs: Publik / B2B
- Data table: ID, user, paket, jumlah, status, tanggal
- Detail modal: Bukti pembayaran image + approve/reject buttons

**E7. Biaya & Metode Pembayaran (/admin/fees)**
- Payment methods table: Nama, kode, gateway fee, platform fee, status toggle
- Global fee settings card (PPN rate, biaya layanan)
- Add/Edit payment method form

**E8. Voucher Management (/admin/vouchers)**
- Data table: Kode, tipe, nilai, usage, validity, status
- Create voucher form

**E9. Report Templates (/admin/report-templates)**
- Data table: Nama, tipe tes, versi, status
- Template editor (JSON-based config)

**E10. Activity Log (/admin/activity-log)**
- Data table: Timestamp, actor, action, entity, IP
- Filter by action type, date range

**E11. Tiered Pricing (/admin/tiered-pricing)**
- Table per package: Min qty, max qty, discount type, discount value
- Add/Edit pricing tier

---

## 8. DESIGN DELIVERABLES

Untuk setiap halaman, buatkan:
1. Desktop layout (1440px viewport, content max-width 1200px)
2. Gunakan design system components yang konsisten
3. Tampilkan state: default, hover, active, disabled, error, empty state, loading skeleton

Urutan prioritas design:
1. Design System Library (tokens, atoms, molecules) — INI PERTAMA
2. Landing Page + Login + Register
3. Public User pages (Dashboard → Assessments → Test → Checkout → Results)
4. Admin pages (Dashboard → Users → Tests → Packages → Payments → Fees)
5. Psychologist pages (Dashboard → Reviews → Review Detail)
6. B2B pages (Dashboard → Orders → Monitoring)

---

## 9. DESIGN PRINCIPLES (WAJIB DIIKUTI)

1. COMPACT, NOT CRAMPED: Kurangi padding dan font size dari design saat ini, tapi tetap readable
2. TONAL LAYERING > BORDERS: Gunakan perbedaan warna surface untuk hierarchy, bukan border
3. CONSISTENT RHYTHM: Semua spacing kelipatan 4px, semua elemen aligned ke grid
4. PURPOSEFUL WHITESPACE: Setiap whitespace punya alasan, bukan sekedar padding besar
5. VISUAL HIERARCHY: Gunakan size, weight, dan color untuk membedakan importance — bukan semuanya besar
6. SLIM PROPORTIONS: Elemen harus terasa "tall and lean", bukan "short and wide". Input 36px, bukan 44px. Card padding 16px, bukan 24px.
7. PROFESSIONAL TRUST: Design harus membuat user merasa "ini platform yang serius dan bisa dipercaya untuk asesmen psikologi"
8. MOBILE-AWARE: Sidebar collapse ke hamburger, content reflow ke single column

---

## 10. REFERENSI VISUAL

Ambil inspirasi dari:
- Linear.app (clean layout, compact tables, subtle colors)
- Vercel Dashboard (minimal borders, tonal layering, tight spacing)
- Stripe Dashboard (professional data tables, clear hierarchy)
- Notion (clean forms, readable typography)
- Untuk landing page: Lemon Squeezy, Cal.com (modern SaaS landing)

JANGAN ambil inspirasi dari:
- Material Design yang heavy (terlalu banyak shadow dan padding)
- Bootstrap default (terlalu generic)
- Design yang terlalu colorful/playful (ini platform psikologi profesional)