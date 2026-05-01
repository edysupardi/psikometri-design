# Redesign Plan — Psikometri HTML Mockups

## Tujuan

Membuat ulang seluruh halaman aplikasi Psikometri sebagai **HTML mockup** berkualitas tinggi —
clean, professional, design-system-consistent — sebagai referensi visual untuk revamp aplikasi nyata.

**Design reference:** Kualitas setara `claude-design/screens/*.jsx` (Claude Design aesthetic)
**Technical reference:** 34 screenshot di `claude-design/uploads/`
**Design tokens:** `claude-design/design-token-and-atoms.md`

---

## Keputusan Teknis

### Format Output: HTML + Vanilla JavaScript
- Setiap halaman = 1 file HTML (bisa dibuka langsung di browser, no build step)
- Shared sidebar/topbar via `_shared/shell.js` (vanilla JS injection) — tidak repeat 35x
- Shared utilities via `_shared/utils.js` (modal open/close, tab switching, accordion)
- Modal bisa dibuka, tab bisa diswitch, multi-step wizard bisa di-navigate dalam 1 file

### Struktur Folder Output
```
claude-design/redesign/
├── index.html                    ← gallery semua screens (navigasi antar file)
├── _shared/
│   ├── styles.css                ← copy + extend dari claude-design/styles.css
│   ├── shell.js                  ← 3 shared components: Sidebar + Topbar + Content wrapper
│   │                               (satu file, dipakai semua logged-in pages)
│   └── utils.js                  ← modal, tab, accordion, stepper, toggle utilities
└── [HTML files per screen]
```

### 3 Shared Components untuk Logged-In Pages

Semua halaman yang memerlukan login menggunakan **satu set layout** yang terdiri dari:

```
┌──────────────────────────────────────────────────┐
│  TOPBAR (52px, sticky top)                        │
│  [≡ toggle] [Logo + nama] ......... [🔔] [avatar] │
├──────────┬───────────────────────────────────────┤
│          │                                        │
│ SIDEBAR  │  CONTENT AREA                         │
│ (kiri,   │  (scrollable, padding 24px,            │
│ 240px    │   background surface)                  │
│ atau     │                                        │
│ 48px     │  ← slot diisi HTML per halaman →      │
│ collapsed│                                        │
│)         │                                        │
└──────────┴───────────────────────────────────────┘
```

**Sidebar** (kiri):
- Expanded: 240px lebar, tampilkan icon + label menu
- Collapsed: 48px lebar, tampilkan icon saja (hover = tooltip label)
- Toggle button ada di topbar kiri (icon hamburger/panel)
- Menu berbeda per role (4 konfigurasi), tapi struktur & style identik

**Topbar/Header** (atas, sticky, 52px):
- Kiri: toggle sidebar button + logo "Psikometri" (hilang saat collapsed)
- Tengah: search bar (opsional per role)
- Kanan: notification bell + avatar + nama user + role label

**Content Area** (wrapper, bukan konten):
- Padding: 24px
- Background: `var(--color-surface)`
- Overflow: `auto` (scrollable secara mandiri)
- Bukan component dalam arti "konten" — hanya wrapper/slot

**Konfigurasi menu per role** (di dalam `shell.js`):
```js
const MENUS = {
  admin: [
    { section: 'MENU UTAMA', items: [{ icon: 'layout-dashboard', label: 'Dashboard', href: '10-admin-dashboard.html' }] },
    { section: 'KELOLA', items: [
      { icon: 'users', label: 'Manajemen User', href: '11-admin-manajemen-user.html' },
      { icon: 'book-open', label: 'Bank Soal', href: '12-admin-bank-soal.html' },
      { icon: 'package', label: 'Paket Asesmen', href: '18-admin-paket-asesmen.html' },
      { icon: 'receipt', label: 'Biaya', href: '19-admin-biaya.html' },
      { icon: 'tag', label: 'Diskon', href: '20-admin-voucher.html' },
      { icon: 'file-text', label: 'Template Laporan', href: '21-admin-template-laporan.html' },
    ]},
    { section: 'PESANAN', items: [
      { icon: 'briefcase', label: 'Pesanan B2B', href: '22-admin-pesanan-b2b.html' },
      { icon: 'user', label: 'Pesanan Publik', href: '24-admin-pesanan-publik-detail.html' },
      { icon: 'credit-card', label: 'Pembayaran', href: '25-admin-pembayaran.html' },
    ]},
    { section: 'SISTEM', items: [
      { icon: 'activity', label: 'Log Audit', href: '26-admin-log-aktivitas.html' },
      { icon: 'settings', label: 'Pengaturan', href: '#' },
    ]},
  ],
  b2b: [ ... ],
  psikolog: [ ... ],
  publik: [ ... ],
}
```

### Login Page: 1 File Shared (Semua Role)
Satu halaman login dipakai semua role. Diferensiasi terjadi setelah login via redirect
ke dashboard masing-masing. Tidak ada login page terpisah per role.

### Screens yang Sudah Ada di `screens/*.jsx`
File-file ini sudah dibangun dalam pendekatan JSX (Babel CDN). Untuk konsistensi
dengan output HTML baru, akan **dibuatkan ulang dalam HTML** agar seluruh mockup
berada dalam format yang sama dan dapat digunakan tanpa React.
- `screens/landing.jsx` → `01-landing.html`
- `screens/auth.jsx` (LoginPage, OtpPage) → `02-login.html`, `04-otp.html`
- `screens/admin-dashboard.jsx` → `10-admin-dashboard.html`
- `screens/test-interface.jsx` → `35-test-interface.html`
- `screens/review-detail.jsx` → sebagian dipakai sebagai referensi `28-psikolog-review-detail.html`

---

## Task List

> **Urutan:** Non-login → Admin/Superadmin → B2B → User Publik → Psikolog
> **Konvensi nama file:** `[no]-[role]-[nama-halaman].html`

---

### ⚙️ PHASE 0 — Setup & Shared Components
*Harus selesai sebelum phase lain bisa dimulai. Output phase ini dipakai oleh semua 36 HTML pages.*

#### 0.1 — Folder & CSS
- [x] **0.1a** Buat folder `claude-design/redesign/` dan subfolder `_shared/`
- [x] **0.1b** Buat `_shared/styles.css`
  - Copy semua CSS variables + base rules dari `claude-design/styles.css`
  - Tambah: layout shell (sidebar + topbar + content area positioning)
  - Tambah: sidebar collapsed state (`.sidebar--collapsed` class, width 48px, icon-only)
  - Tambah: sidebar transition (`transition: width 0.2s ease`)
  - Tambah: tooltip untuk icon-only mode (hover label di sidebar collapsed)
  - Tambah: modal overlay + modal container
  - Tambah: stepper component (step indicator + connector line)
  - Tambah: tab system (tab bar + tab panel)
  - Tambah: upload dropzone
  - Tambah: OTP input grid (6 boxes)
  - Tambah: rich text toolbar
  - Tambah: number stepper (−/value/+)
  - Tambah: category filter tabs (pill style)

#### 0.2 — Sidebar Component
- [x] **0.2** Buat `_shared/shell.js` — **3 shared components** untuk semua logged-in pages:

  **Component 1: Sidebar** (kiri, collapsible)
  - Width expanded: `240px` | Width collapsed: `48px`
  - Toggle button di topbar kiri (icon `panel-left`) — satu klik collapse/expand
  - Expanded mode: icon + label menu item
  - Collapsed mode: icon only, hover = tooltip dengan label
  - Logo + "Psikometri" text di bagian atas (text hilang saat collapsed)
  - User profile card di bagian bawah (avatar + nama + role, menjadi hanya avatar saat collapsed)
  - Menu bervariasi per role: 4 konfigurasi (`admin`, `b2b`, `psikolog`, `publik`)
  - Active item highlight (default: `filled` variant — primary bg, white text)

  **Component 2: Topbar/Header** (atas, sticky, 52px)
  - Kiri: tombol toggle sidebar (icon panel-left) + logo area
  - Tengah: search bar (muncul di admin & psikolog, tidak di B2B & publik)
  - Kanan: notification bell + badge angka merah + avatar + nama + role chip
  - Border bottom: `1px solid var(--color-divider)`
  - Background: `var(--color-surface-lowest)` dengan slight blur

  **Component 3: Content Area wrapper**
  - Posisi: kanan sidebar, bawah topbar
  - Padding: `24px`
  - Background: `var(--color-surface)`
  - Overflow-y: `auto` (konten bisa scroll, sidebar & topbar tetap)
  - Fungsi `initShell(role, activeHref)` dipanggil di setiap HTML page

  **API penggunaan di setiap HTML file:**
  ```html
  <script src="../_shared/shell.js"></script>
  <script>initShell('admin', '11-admin-manajemen-user.html')</script>
  ```

#### 0.3 — Utilities
- [x] **0.3** Buat `_shared/utils.js` — utility functions:
  - `openModal(id)` / `closeModal(id)` / `closeModalOnBackdrop(e)`
  - `switchTab(groupId, tabId)` — tab panel switching
  - `nextStep(id)` / `prevStep(id)` — multi-step wizard navigation
  - `toggleAccordion(id)` — expand/collapse accordion
  - `toggleSwitch(el)` — toggle on/off switch visual
  - `initOtpInput()` — auto-focus next OTP box on input
  - `initNumberStepper()` — +/− button handlers

#### 0.4 — Gallery Index
- [x] **0.4** Buat `index.html` — gallery navigasi semua 36 screens:
  - Dikelompokkan per section: Non-Login / Admin / B2B / Publik / Psikolog
  - Setiap card: nomor file + nama halaman + link ke HTML file
  - Tanpa shell (standalone page)

---

### 🌐 PHASE 1 — Non-Login Pages
*Halaman yang bisa diakses tanpa login*

- [ ] **1.1** `01-landing.html`
  - Ref: `pasted-1777307549577-0`
  - Sections: navbar sticky + hero (headline, 2 CTA) + 3 feature cards + 4 test type cards + footer
  - No shell (full-page layout)

- [ ] **1.2** `02-login.html`
  - Ref: `pasted-1777307567756-0`
  - Sections: card login (email input + password input + forgot password link + login button + register link)
  - Shared untuk semua role, no shell

- [ ] **1.3** `03-register.html`
  - Ref: `screens/auth.jsx` (RegisterPage component) — tidak ada di uploads
  - Sections: card register (nama, email, password, confirm password + requirements checklist + submit)
  - No shell

- [ ] **1.4** `04-otp.html`
  - Ref: `pasted-1777307587001-0`
  - Sections: card OTP (6-digit input boxes + timer countdown + resend link + back link)
  - No shell

---

### 🔐 PHASE 2 — Admin / Superadmin Pages
*Semua halaman yang diakses oleh role admin atau superadmin*

- [ ] **2.1** `10-admin-dashboard.html`
  - Ref: `pasted-1777307634014-0`
  - Sections: 5 KPI cards + Pipeline Funnel card + Revenue Trend chart + B2B Health metrics + Log Audit Terbaru list
  - Shell: `shell-admin.js`

- [ ] **2.2** `11-admin-manajemen-user.html`
  - Ref: `pasted-1777307649476-0` (list) + `pasted-1777307666097-0` (modal tambah)
  - Sections: page header + search/filter bar + table (avatar + nama + email + role badge + status badge + aksi) + pagination
  - Interaktif: tombol "+ Tambah User" membuka modal; modal berisi form (nama, email, role select, status, tanggal lahir, jenis kelamin, password)
  - Shell: `shell-admin.js`

- [ ] **2.3** `12-admin-bank-soal.html`
  - Ref: `pasted-1777307680394-0`
  - Sections: page header + search/filter + table (no, kode link, nama paket, jumlah tes, status badge, aksi icon) + pagination
  - Shell: `shell-admin.js`

- [ ] **2.4** `13-admin-tambah-jenis-tes.html`
  - Ref: `pasted-1777307695605-0`
  - Sections: breadcrumb + page title + form card (nama tes, kode, slug URL, kategori select, tipe scoring select, deskripsi textarea, instruksi rich-text editor, status toggle, estimasi waktu)
  - Shell: `shell-admin.js`

- [ ] **2.5** `14-admin-tambah-soal-wwq.html`
  - Ref: `pasted-1777307760574-0`
  - Sections: breadcrumb + page title + form card (no soal, tipe scoring select, status toggle, pertanyaan textarea, checkbox grid skala 1-8, character counter)
  - Shell: `shell-admin.js`

- [ ] **2.6** `15-admin-tambah-soal-papikostick.html`
  - Ref: `pasted-1777307739450-0`
  - Sections: breadcrumb + page title + card "Informasi Soal" (no soal, status toggle) + card "Konten Soal" (pernyataan A textarea, pernyataan B textarea, character counter x2) + card "Mapping Faktor" (faktor A select, faktor B select, kontribusi A/B pill buttons)
  - Shell: `shell-admin.js`

- [ ] **2.7** `16-admin-tambah-soal-ist.html`
  - Ref: `pasted-1777307782005-0`
  - Sections: breadcrumb + page title + card (no soal, pertanyaan textarea, upload dropzone gambar, opsi jawaban A–E rows, jawaban benar select, character counter)
  - Shell: `shell-admin.js`

- [ ] **2.8** `17-admin-tambah-lajur-kraepelin.html`
  - Ref: `pasted-1777307718285-0`
  - Sections: breadcrumb + page title + card (no lajur, keterangan input, data angka textarea monospace, counter "0 angka terdeteksi", info note)
  - Shell: `shell-admin.js`

- [ ] **2.9** `18-admin-paket-asesmen.html`
  - Ref: `pasted-1777307807434-0`
  - Sections: breadcrumb + page title + card "Tambah Paket Tes" (nama, kode, slug auto, nama laporan, template select, deskripsi, harga IDR, status toggle) + card "Tes dalam Paket" (checklist 4 tes dengan badge kategori) + card "Fitur Paket" (tambah fitur link)
  - Shell: `shell-admin.js`

- [ ] **2.10** `19-admin-biaya.html`
  - Ref: `pasted-1777307821966-0`
  - Sections: page title + card PPN (status toggle row + tarif input) + card Biaya Layanan (status toggle row + tipe select + nilai input + batas bawah/atas) + card Biaya Transaksi (tombol tambah metode + tabel metode pembayaran dengan toggle per row + edit/delete) + card Contoh Rincian (kalkulasi total)
  - Interaktif: toggle PPN/Biaya Layanan show/hide form fields
  - Shell: `shell-admin.js`

- [ ] **2.11** `20-admin-voucher.html`
  - Ref: `pasted-1777307840596-0`
  - Sections: page title + 4 KPI stat cards + tabel voucher (kode, tipe, nilai, pemakaian, berlaku, stacking, status, aksi) + pagination
  - Interaktif: tombol "Buat Voucher" membuka modal (kode input, tipe select, nilai, maks diskon, tipe pemakaian, kuota, stacking, berlaku dari–hingga date pickers, aktif toggle)
  - Shell: `shell-admin.js`

- [ ] **2.12** `21-admin-template-laporan.html`
  - Ref: `pasted-1777307866351-0`
  - Sections: breadcrumb + page title + card "Informasi Dasar" (nama template, deskripsi, jadikan default toggle) + card "Sections" dengan section accordion (judul ID/EN, tipe section select, test type select, aspek list) + tombol tambah section
  - Interaktif: accordion expand/collapse, tambah section
  - Shell: `shell-admin.js`

- [ ] **2.13** `22-admin-pesanan-b2b.html`
  - Ref: `pasted-1777307877860-0`
  - Sections: page title + 4 KPI cards (total revenue, total order, rata-rata, menunggu bayar) + filter row (company, paket, tipe, semua status) + tabel pesanan (order ID, perusahaan, paket, tes, peserta, total, status badge, tanggal, aksi) + pagination
  - Shell: `shell-admin.js`

- [ ] **2.14** `23-admin-pesanan-b2b-detail.html`
  - Ref: `pasted-1777307890711-0`
  - Sections: breadcrumb + order ID mono + status badge + 2-column layout (kiri: info perusahaan card, detail paket card, daftar peserta table | kanan: rincian pembayaran card) + search peserta + export CSV button
  - Shell: `shell-admin.js`

- [ ] **2.15** `24-admin-pesanan-publik-detail.html`
  - Ref: `pasted-1777307906012-0`
  - Sections: breadcrumb + order ID mono + badge PUBLIC + badge Selesai + 2-column (kiri: info user card, detail paket card, status asesmen card | kanan: rincian pembayaran card, hasil asesmen card dengan lihat laporan button)
  - Shell: `shell-admin.js`

- [ ] **2.16** `25-admin-pembayaran.html`
  - Ref: `pasted-1777307918867-0`
  - Sections: page title + 4 KPI cards (revenue, pending, completed, failed) + filter row (search, tipe, status, date range) + tabel transaksi (order ID, customer, tipe, jumlah, status, tanggal, aksi) + pagination + export button
  - Shell: `shell-admin.js`

- [ ] **2.17** `26-admin-log-aktivitas.html`
  - Ref: `pasted-1777307931003-0`
  - Sections: page title + subtitle + search input + filter role select + tabel (aktivitas mono, aktor, role badge, IP address, waktu) + pagination
  - Shell: `shell-admin.js`

- [ ] **2.18** `27-shared-profil.html`
  - Ref: `pasted-1777307946451-0`
  - Sections: breadcrumb + page title + card "Informasi Akun" (email + role + status profil badge) + card "Data Pribadi" (nama, NIK current disabled, NIK baru, helper text)
  - Note: Halaman ini dipakai semua role (sidebar berbeda per role, konten sama)
  - Shell: parameter `role` → inject sidebar yang sesuai

---

### 🏢 PHASE 3 — B2B User Pages
*Semua halaman yang diakses oleh role B2B (perusahaan/klien)*

- [ ] **3.1** `30-b2b-dashboard.html`
  - Ref: `pasted-1777308120168-0`
  - Sections: welcome greeting + 4 KPI cards (total order, order aktif, total peserta, belum kerjakan) + tabel "Order Terkini" (paket, qty, total, status badge, tanggal, aksi) + grid "Paket Asesmen" (4 package cards dengan CTA)
  - Shell: `shell-b2b.js`

- [ ] **3.2** `31-b2b-paket-asesmen.html`
  - Ref: `pasted-1777308133591-0`
  - Sections: page title + subtitle + category tab filter (Semua/Intelligence/Personality/Psychometric) + search input + grid 4 package cards (judul, deskripsi, test badge, harga, CTA "Pilih Paket", bestseller badge)
  - Interaktif: tab filter mengubah tampilan grid
  - Shell: `shell-b2b.js`

- [ ] **3.3** `32-b2b-buat-order.html`
  - Ref: `pasted-1777308150692-0`
  - Sections: page title + step indicator (3 steps: Detail Order → Review & Biaya → Pembayaran) + step 1 content (nama paket, tes dalam paket card, tujuan pemeriksaan textarea, jumlah peserta number stepper) + CTA "Lanjut ke Review"
  - Interaktif: next/prev step via stepper, step indicator updates
  - Shell: `shell-b2b.js`

- [ ] **3.4** `33-b2b-monitoring.html`
  - Ref: `pasted-1777308164971-0`
  - Sections: page title + button download + 5 KPI cards (total, sudah kerjakan, belum kerjakan, belum daftar, sudah review — warna berbeda) + filter section (pilih order select, status select, download hasil button) + statistik mini cards (4 items) + tabel peserta (nama, email, status tes badge, status review badge, selesai pada) + pagination
  - Shell: `shell-b2b.js`

---

### 👤 PHASE 4 — User Publik Pages
*Semua halaman yang diakses oleh user publik (melakukan asesmen mandiri)*

- [ ] **4.1** `40-publik-dashboard.html`
  - Ref: `pasted-1777308199399-0`
  - Sections: welcome banner "Halo, [Nama]" + 4 KPI cards (total tes + trend, selesai + %, menunggu, assignment) + card "Beli Paket Asesmen" CTA + grid paket asesmen + riwayat asesmen mini table
  - Shell: `shell-publik.js`

- [ ] **4.2** `41-publik-paket-asesmen.html`
  - Ref: `pasted-1777308216107-0`
  - Sections: page title + category tab filter + search + card "Sesi Tes Aktif" (package cards dengan status Gagal + "Mulai Tes Baru") + grid paket available (test-code badge, durasi, harga, CTA "Mulai Tes")
  - Interaktif: tab filter, card active session
  - Shell: `shell-publik.js`

- [ ] **4.3** `42-publik-paket-detail.html`
  - Ref: `pasted-1777308230415-0`
  - Sections: breadcrumb + page title + subtitle + card "Tes dalam Paket" (tes item: icon + nama + badge + jumlah soal + estimasi + deskripsi + instruksi) + card "Fitur Paket" (5 feature cards grid) + card "Harga Paket" (harga besar + CTA "Mulai Tes" + trust indicators) + info alert "Tips"
  - Shell: `shell-publik.js`

- [ ] **4.4** `43-publik-riwayat-asesmen.html`
  - Ref: `pasted-1777308242389-0`
  - Sections: page title + subtitle + 3 stat summary blocks (total, menunggu, selesai) + search + date picker button + tabel riwayat (nama tes link, penyedia, tanggal mulai, tanggal selesai, status badge, aksi download+view)
  - Shell: `shell-publik.js`

- [ ] **4.5** `44-publik-sesi-tes.html`
  - Ref: `pasted-1777308463759-0`
  - Sections: breadcrumb + page title + ringkasan (4 stat: total, selesai, belum, expired) + progress bar (X dari Y selesai = %) + daftar tes list (icon status circle + nama tes + test badge + paket + tanggal + status badge BELUM/SELESAI/EXPIRED + CTA button)
  - Shell: `shell-publik.js`

- [ ] **4.6** `45-test-interface.html`
  - Ref: `screens/test-interface.jsx` (existing) + design dari test-interface screen
  - Sections: full-screen mode (no sidebar) — topbar test (nama tes, session ID badge, timer, pause) + progress (counter + bar) + question card (overline + question text + helper) + answer buttons (YA/TIDAK dengan keyboard shortcut) + bottom nav (prev/next + indicator dots)
  - Interaktif: pilih jawaban toggle, next/prev question, indicator dots update
  - No shell (full-screen layout)

---

### 🧠 PHASE 5 — Psikolog Pages
*Semua halaman yang diakses oleh role psikolog*

- [ ] **5.1** `50-psikolog-antrian-review.html`
  - Ref: `pasted-1777307979392-0`
  - Sections: page title + subtitle + 4 KPI stat cards (perlu direview, sedang direview, menunggu TTD, selesai — icon + warna berbeda) + search input + status filter select + tabel antrian (no, nama peserta, paket tes, kode paket, status badge, tanggal selesai, aksi view+download) + pagination
  - Shell: `shell-psikolog.js`

- [ ] **5.2** `51-psikolog-review-detail.html`
  - Ref: `pasted-1777307995739-0`
  - Sections: breadcrumb + nama peserta + status badge "MENUNGGU REVIEW" + tab switcher (nama tes | Summary Final) + tab 1 content: header card tes (judul + kode + klasifikasi badge) + scoring table (no, resume, jumlah × bobot = nilai, %, kategori badge) + 3 KPI cards (total nilai, nilai akhir, status)
  - Interaktif: tab switch ke summary final (52 content)
  - Shell: `shell-psikolog.js`

- [ ] **5.3** `52-psikolog-summary-final.html`
  - Ref: `pasted-1777308008115-0`
  - Sections: (lanjutan dari tab "Summary Final" di 51) — heading "Kesimpulan Klinis" + kategori hasil screening radio cards (Normal/Kecenderungan/Gangguan, bilingual) + warning info note (perubahan belum disimpan) + kesimpulan textarea + character counter + heading "Rekomendasi Akhir" + checkbox list (Layak Disarankan / Layak Dipertimbangkan / Tidak Layak)
  - Note: Bisa digabung dengan `51-psikolog-review-detail.html` sebagai satu file dengan 2 tab
  - Shell: `shell-psikolog.js`

---

## Mapping Upload → HTML Output

| Upload File | Screen | HTML Output |
|-------------|--------|-------------|
| `pasted-1777307549577-0` | Landing Page | `01-landing.html` |
| `pasted-1777307567756-0` | Login Page | `02-login.html` |
| *(tidak ada di uploads)* | Register Page | `03-register.html` |
| `pasted-1777307587001-0` | Verifikasi OTP | `04-otp.html` |
| `pasted-1777307634014-0` | Admin Dashboard | `10-admin-dashboard.html` |
| `pasted-1777307649476-0` | Manajemen User (list) | `11-admin-manajemen-user.html` |
| `pasted-1777307666097-0` | Tambah User Modal | `11-admin-manajemen-user.html` (modal state) |
| `pasted-1777307680394-0` | Bank Soal (list) | `12-admin-bank-soal.html` |
| `pasted-1777307695605-0` | Tambah Jenis Tes | `13-admin-tambah-jenis-tes.html` |
| `pasted-1777307718285-0` | Tambah Lajur Kraepelin | `17-admin-tambah-lajur-kraepelin.html` |
| `pasted-1777307739450-0` | Tambah Soal PAPIKOSTICK | `15-admin-tambah-soal-papikostick.html` |
| `pasted-1777307760574-0` | Tambah Soal WWQ | `14-admin-tambah-soal-wwq.html` |
| `pasted-1777307782005-0` | Tambah Soal IST-SE | `16-admin-tambah-soal-ist.html` |
| `pasted-1777307807434-0` | Tambah Paket Tes | `18-admin-paket-asesmen.html` |
| `pasted-1777307821966-0` | Biaya Tambahan | `19-admin-biaya.html` |
| `pasted-1777307840596-0` | Voucher (list + modal) | `20-admin-voucher.html` |
| `pasted-1777307866351-0` | Tambah Template Laporan | `21-admin-template-laporan.html` |
| `pasted-1777307877860-0` | Pesanan B2B (list) | `22-admin-pesanan-b2b.html` |
| `pasted-1777307890711-0` | Pesanan B2B Detail | `23-admin-pesanan-b2b-detail.html` |
| `pasted-1777307906012-0` | Pesanan Publik Detail | `24-admin-pesanan-publik-detail.html` |
| `pasted-1777307918867-0` | Manajemen Pembayaran | `25-admin-pembayaran.html` |
| `pasted-1777307931003-0` | Log Aktivitas | `26-admin-log-aktivitas.html` |
| `pasted-1777307946451-0` | Profil Saya | `27-shared-profil.html` |
| `pasted-1777307979392-0` | Antrian Review (Psikolog) | `50-psikolog-antrian-review.html` |
| `pasted-1777307995739-0` | Detail Review WWQ | `51-psikolog-review-detail.html` |
| `pasted-1777308008115-0` | Summary Final / Klinis | `52-psikolog-summary-final.html` |
| `pasted-1777308120168-0` | B2B Dashboard | `30-b2b-dashboard.html` |
| `pasted-1777308133591-0` | B2B Paket Asesmen | `31-b2b-paket-asesmen.html` |
| `pasted-1777308150692-0` | B2B Buat Order | `32-b2b-buat-order.html` |
| `pasted-1777308164971-0` | B2B Monitoring Peserta | `33-b2b-monitoring.html` |
| `pasted-1777308199399-0` | Public Dashboard | `40-publik-dashboard.html` |
| `pasted-1777308216107-0` | Public Paket Asesmen | `41-publik-paket-asesmen.html` |
| `pasted-1777308230415-0` | Public Paket Detail | `42-publik-paket-detail.html` |
| `pasted-1777308242389-0` | Public Riwayat Asesmen | `43-publik-riwayat-asesmen.html` |
| `pasted-1777308463759-0` | Public Sesi Tes Saya | `44-publik-sesi-tes.html` |
| *(dari screens/test-interface.jsx)* | Test Interface | `45-test-interface.html` |

**Total: 36 HTML files** (34 dari uploads + register page + test interface) + shared files + index

---

## Standar Kualitas per File

Setiap HTML file harus memenuhi:

1. **Token compliance** — Semua warna dari CSS variables (`--color-primary`, dll), tidak ada hardcode hex
2. **Spacing** — Kelipatan 4px atau 8px, konsisten dengan design-token-and-atoms.md
3. **Typography** — Sesuai type scale (overline untuk header tabel, t-body untuk cell, dll)
4. **States** — Setiap interactive element punya hover state (via CSS) dan focus state
5. **Dummy data** — Isi dengan data realistis (nama, email, ID, tanggal, angka — bukan "Lorem ipsum")
6. **Responsive awareness** — Sidebar collapsible di lebar < 1024px (minimal toggle class)
7. **No framework dependency** — Hanya HTML + CSS + vanilla JS, bisa dibuka offline

---

## Urutan Prioritas Eksekusi

```
Phase 0 (setup)  →  Phase 1 (non-login)  →  Phase 2 (admin)
→  Phase 3 (B2B)  →  Phase 4 (publik)  →  Phase 5 (psikolog)
```

Phase 0 harus selesai dulu. Phase 2–5 bisa dikerjakan paralel setelah Phase 0 dan 1 selesai.

---

*Plan dibuat: 2026-05-01 | Total: 36 HTML mockup pages*
