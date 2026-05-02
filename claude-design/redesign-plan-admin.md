# Plan: Phase 2 Admin Pages — 3 Iterasi

## Context

Melanjutkan dari Phase 1 (non-login pages selesai). Phase 2 mencakup 18 halaman admin/superadmin,
dipecah 3 iterasi agar reviewable dan tidak overwhelm. Setiap halaman menggunakan `initShell('admin', ...)`
dari `_shared/shell.js` yang sudah ada. Semua design reference ada di Pencil `.pen` files.

**Prinsip desain:** Rapi, profesional, terpercaya, simple, elegan. Tidak ada AI slop.
Rujukan utama: `claude-design/design-token-and-atoms.md` + Pencil designs sebagai ground truth visual.

---

## Temuan dari Pencil Files

| File                                 | Halaman yang didesain                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `pencil/admin-pages.pen`             | Dashboard (`6U5Dv`), Manajemen User (`jmLRq`), Pembayaran (`x2dam`) + semua modal user                             |
| `pencil/admin-pages-bank-soal.pen`   | Bank Soal list (`ao3dR`), Tambah Jenis Tes (`iSKEw`), form WWQ + PAPIKOSTICK (remaining nodes)                     |
| `pencil/admin-pages-bank-soal-2.pen` | IST teks (`avXNI`), IST gambar (`ftA7o`), Kraepelin (`xVYLG`)                                                      |
| `pencil/admin-pages-biaya.pen`       | Biaya Tambahan (`C4M6Y`), Voucher Diskon (`aCpx6`), Harga Bertingkat (`buX3h` — jadi tab), Log Aktivitas (`jc538`) |
| `pencil/admin-pages-paket-tes.pen`   | Paket list (`F51NM`), Form Add/Edit (`ZZiuI`)                                                                      |

**Halaman tanpa Pencil ref** (reference dari uploads only):

- `21-admin-template-laporan.html` → `pasted-1777307866351-0`
- `22-admin-pesanan-b2b.html` → `pasted-1777307877860-0`
- `23-admin-pesanan-b2b-detail.html` → `pasted-1777307890711-0`
- `24-admin-pesanan-publik-detail.html` → `pasted-1777307906012-0`
- `27-shared-profil.html` → `pasted-1777307946451-0`

---

## Perubahan dari Proposal User

| Issue                                                     | Keputusan                                                           |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| `25-admin-pembayaran` tidak ada di iterasi mana pun       | → Masuk **Iterasi 1** (satu paket pesanan+transaksi)                |
| `21-admin-template-laporan` tidak ada di iterasi mana pun | → Masuk **Iterasi 3** (konten config)                               |
| `27-shared-profil` tidak ada di iterasi mana pun          | → Masuk **Iterasi 3** (terakhir — lintas role)                      |
| Voucher Harga Bertingkat (ditemukan di Pencil)            | → Jadi **2 tab** dalam `20-admin-voucher.html`, bukan file terpisah |

---

## Pola Design yang Konsisten (dari Pencil)

Semua admin pages mengikuti pattern ini — WAJIB dipertahankan agar konsisten:

### Shell

```html
<link rel="stylesheet" href="../_shared/styles.css" />
<script src="../_shared/shell.js"></script>
<script src="../_shared/utils.js" defer></script>
<script>
  initShell({
    role: "admin",
    activeHref: "10-admin-dashboard.html",
    user: { name: "Superadmin", role: "Superadmin", initials: "AS" },
    notifCount: 6,
  });
</script>
```

### Page header pattern

```html
<div class="page-header">
  <div class="page-header-row">
    <div>
      <div class="page-header-title">Manajemen User</div>
      <div class="page-header-desc">Kelola pengguna dan hak akses mereka</div>
    </div>
    <button class="btn btn-primary">+ Tambah User</button>
  </div>
</div>
```

### Table pattern (dari Pencil: Table/Advanced component)

- Header: `background: var(--surface-low)`, font overline 11px/600, uppercase
- Row height: 44px, hover: `var(--surface-low)` + 2px primary left border
- Status badge: `badge-success` (Aktif), `badge-error` (Nonaktif), dll
- Actions column: icon buttons (edit ✏️, more ⋯)

### KPI Card (dari Pencil: Card/Metric component)

- Icon box 32px, colored bg per status
- Large number (font-display, 24px, bold)
- Label (12px, muted)
- Optional trend badge

---

## ITERASI 1 — Core Navigation & Transaksi

**6 halaman** | Pencil ref: `admin-pages.pen`

### Task List Iterasi 1

- [x] **I1-1** `10-admin-dashboard.html`
  - Pencil: `admin-pages.pen` / node `6U5Dv`
  - Layout: 4 KPI cards (Total Users, Orders, Revenue, Monthly Growth) → area chart (Platform Analytics, last 30 days) + 2-col (Quick Actions | Log Audit) → mini Manajemen User table
  - Interactive: chart time period buttons (7d / 30d / 90d), "Lihat Semua" links
  - Data: realistic dummy (2,847 users, Rp 156.8M revenue, dll)
  - Shell: `initShell('admin', '10-admin-dashboard.html')`

- [x] **I1-2** `11-admin-manajemen-user.html`
  - Pencil: `admin-pages.pen` / node `jmLRq` (page) + `rXhyr` (modal Peserta) + `G4ryZ` (modal Psikolog) + `l6QI3` (modal B2B) + `tfWOK` (modal Superadmin)
  - Layout: page header + toolbar (search + filter Role + filter Status) → tabel (avatar initials, Nama, Email, Role badge, Status badge, action icons) → pagination "Menampilkan 1-10 dari 155 pengguna"
  - Modal "Tambah User": Nama, Email, Role select (4 pilihan), Status select, Tanggal Lahir, Jenis Kelamin, Password sementara
  - **Role badges dari Pencil**: Admin (purple), Psikolog (gold/yellow), B2B (green), Publik (gray), Superadmin (deep purple)
  - Interactive: "Tambah User" buka modal; "⋯" buka action dropdown (Detail / Edit / Nonaktifkan / Reset Password)
  - Shell: `initShell('admin', '11-admin-manajemen-user.html')`

- [x] **I1-3** `22-admin-pesanan-b2b.html`
  - Ref: uploads `pasted-1777307877860-0`
  - Layout: page title + 4 KPI cards (Total Revenue, Total Order, Rata-rata/Order, Menunggu Bayar) → toolbar (search + filter Company + filter Paket + filter Status) → tabel pesanan (Order ID mono, Perusahaan, Paket, Tes badges, Peserta, Total, Status badge, Tanggal, aksi view) → pagination
  - Status badges: COMPLETED (green), CANCELLED (gray), EXPIRED (red), MENUNGGU (yellow)
  - Interactive: Export CSV button
  - Shell: `initShell('admin', '22-admin-pesanan-b2b.html')`

- [x] **I1-4** `23-admin-pesanan-b2b-detail.html`
  - Ref: uploads `pasted-1777307890711-0`
  - Layout: breadcrumb + Order ID (mono, large) + status badge → 2-col (kiri 60%: Informasi Perusahaan card + Detail Paket Tes card + Daftar Peserta table | kanan 40%: sticky Rincian Pembayaran card)
  - Daftar Peserta: search input + table (No, Nama, Email, Status badge, Selesai, aksi view) + Export CSV button
  - Shell: `initShell('admin', '22-admin-pesanan-b2b.html')` (aktif di Pesanan B2B)

- [x] **I1-5** `24-admin-pesanan-publik-detail.html`
  - Ref: uploads `pasted-1777307906012-0`
  - Layout: breadcrumb + Order ID (mono) + badge PUBLIC + badge status → 2-col (kiri: Info User card + Detail Paket card + Status Asesmen card | kanan: Rincian Pembayaran card + Hasil Asesmen card dengan "Lihat Laporan" button)
  - Shell: `initShell('admin', '24-admin-pesanan-publik-detail.html')` (aktif di Pesanan Publik)

- [x] **I1-6** `25-admin-pembayaran.html`
  - Pencil: `admin-pages.pen` / node `x2dam`
  - Layout: page title + 4 KPI cards (Total Revenue, Pending Payments, Completed Today, Failed) → toolbar (search + filter Status + filter 30 Hari Terakhir) → tabel Daftar Transaksi (Order ID mono link, User, Tipe badge B2B/PUBLIC, Jumlah, Status badge, Metode, Tanggal, aksi view) → pagination
  - CTA buttons: Export + Rekonsiliasi (outline)
  - Status badges: SELESAI (green), PENDING (yellow), GAGAL (red), ASSIGNED (purple)
  - Shell: `initShell('admin', '25-admin-pembayaran.html')`

---

## ITERASI 2 — Bank Soal Pages

**6 halaman** | Pencil ref: `admin-pages-bank-soal.pen` + `admin-pages-bank-soal-2.pen`

> Design insight: semua form soal menggunakan pola card-sections (Informasi Soal / Konten Soal / sub-section spesifik).
> Perbedaan hanya di section terakhir (mapping soal). Pattern ini harus konsisten.

### Task List Iterasi 2

- [ ] **I2-1** `12-admin-bank-soal.html`
  - Pencil: `admin-pages-bank-soal.pen` / node `ao3dR`
  - Layout: page title + subtitle → toolbar (search "Cari tipe asesmen..." + filter Semua Status) + "Tambah Tipe Soal" button → tabel Daftar Tipe Asesmen (No, Tipe Asesmen, Kode badge mono, Jumlah Soal, Status badge, Aksi) → pagination
  - Kode badges: WWQ, IST, PAPIKOSTICK, KRAEPELIN (mono font, colored bg per type)
  - Interactive: action dropdown per row (Detail / Tambah Soal / Edit / Nonaktifkan)
  - Shell: `initShell('admin', '12-admin-bank-soal.html')`

- [ ] **I2-2** `13-admin-tambah-jenis-tes.html`
  - Pencil: `admin-pages-bank-soal.pen` / node `iSKEw`
  - Layout: breadcrumb (Bank Soal > Tambah) + page title "Tambah Jenis Tes" → 1 form card: Nama Tes* + Kode* (2-col) + Slug URL* + Kategori select* + Tipe Scoring select* (2-col) + Deskripsi textarea + Instruksi Tes (rich text: B/I/List toolbar + textarea) + Status Aktif toggle row + Estimasi Waktu (menit)* + "\* Field wajib diisi" note → footer: Batal + Simpan
  - Shell: `initShell('admin', '12-admin-bank-soal.html')`

- [ ] **I2-3** `14-admin-tambah-soal-wwq.html`
  - Pencil: `admin-pages-bank-soal.pen` (remaining nodes) + ref upload `pasted-1777307760574-0`
  - Layout: breadcrumb (Bank Soal > WWQ > Tambah Soal) + page title → card "Informasi Soal" (No. Soal + Tipe Scoring select + Status toggle) → card "Konten Soal" (Pertanyaan/Statement textarea 0/50 karakter) → card "Mapping Skala" (2-col checkbox grid: Skala 1–8) → footer note + Batal + Simpan
  - Shell: `initShell('admin', '12-admin-bank-soal.html')`

- [ ] **I2-4** `15-admin-tambah-soal-papikostick.html`
  - Pencil: `admin-pages-bank-soal.pen` (remaining nodes) + ref upload `pasted-1777307739450-0`
  - Layout: breadcrumb (Bank Soal > PAPIKOSTICK > Tambah Soal) + page title → card "Informasi Soal" (No. Soal + Status toggle) → card "Konten Soal" (Pernyataan A textarea + Pernyataan B textarea, 2-col, 0/150 karakter each) → card "Mapping Faktor" (Faktor A select + Faktor B select + "Kontribusi pada Skor" A/B pill selector) → Batal + Simpan
  - Shell: `initShell('admin', '12-admin-bank-soal.html')`

- [ ] **I2-5** `16-admin-tambah-soal-ist.html`
  - Pencil: `admin-pages-bank-soal-2.pen` / node `avXNI` (teks) + `ftA7o` (gambar)
  - Layout: breadcrumb (Bank Soal > IST > SE > Tambah Soal) + page title → card "Informasi Soal" (No. Soal + karakter counter) + col kanan: Upload Gambar Soal (dropzone, opsional) → Opsi Jawaban A–E (pill letter + input berdampingan, 5 rows) → Jawaban Benar (select) → Batal + Simpan
  - Shell: `initShell('admin', '12-admin-bank-soal.html')`

- [ ] **I2-6** `17-admin-tambah-lajur-kraepelin.html`
  - Pencil: `admin-pages-bank-soal-2.pen` / node `xVYLG`
  - Layout: breadcrumb (Bank Soal > Kraepelin > Daftar Lajur > Tambah Lajur) + page title → card "Informasi Lajur" (No. Lajur + Keterangan optional, 2-col) → "Urutan Angka" section + Data Angka (monospace textarea, large, "5 0 3 7 2 6 4...") + counter "0 angka terdeteksi" + info note "Pisahkan angka dengan spasi, koma, atau titik" → Batal + Simpan
  - Shell: `initShell('admin', '12-admin-bank-soal.html')`

---

## ITERASI 3 — Content Config & Misc

**6 halaman** | Pencil ref: `admin-pages-paket-tes.pen` + `admin-pages-biaya.pen` + uploads only

### Task List Iterasi 3

- [ ] **I3-1** `18-admin-paket-asesmen.html`
  - Pencil: `admin-pages-paket-tes.pen` / node `F51NM` (list) + `ZZiuI` (form add/edit)
  - **Page list**: page title + "Tambah Paket" button → tabel (No, Kode mono, Nama Paket, Harga, Tes badges multiple, Status badge, Aksi) → pagination
  - **Form Add/Edit** (in same file, toggle view): breadcrumb + title "Tambah Paket Tes" → card form (Nama Paket, Kode, Slug auto, Nama Laporan, Template Laporan select, Deskripsi, Harga IDR, Status toggle) + card "Tes dalam Paket" (checklist 4 tes dengan drag handle + badge kategori) + card "Fitur Paket" (list fitur + Tambah Fitur link) → Batal + Simpan Paket
  - Interactive: checkbox tes, tambah fitur, toggle form vs list
  - Shell: `initShell('admin', '18-admin-paket-asesmen.html')`

- [ ] **I3-2** `19-admin-biaya.html`
  - Pencil: `admin-pages-biaya.pen` / node `C4M6Y`
  - Layout: page title + subtitle → card PPN (toggle aktif + Tarif PPN % input + info note formula) → card Biaya Layanan (toggle aktif + Tipe Biaya select + Nilai Biaya input + Batas Bawah/Atas inputs + info note) → card Biaya Transaksi (tabel metode pembayaran: Metode, Tipe, Nilai, Batas Bawah, Batas Atas, Aktif toggle, Aksi + "Tambah Metode" button) → card Contoh Rincian Pembayaran (kalkulasi live: Harga + Biaya Layanan + Biaya Transaksi + Subtotal + PPN = Total)
  - Interactive: PPN/Biaya Layanan toggle show/hide form fields; kalkulasi update
  - CTA: "Reset ke Default" (outline) + "Simpan Perubahan" (primary)
  - Shell: `initShell('admin', '19-admin-biaya.html')`

- [ ] **I3-3** `20-admin-voucher.html`
  - Pencil: `admin-pages-biaya.pen` / node `aCpx6` (Voucher Diskon) + `buX3h` (Harga Bertingkat) + modal `Jk20t` (Buat Voucher) + `5vufu` (Aturan Harga)
  - Layout: page title → 4 KPI stat cards (Total Voucher Diskon, Voucher Aktif, Total Aturan Bertingkat, Aturan Aktif) → **2 tabs** (Voucher Diskon | Harga Bertingkat) + "Buat Voucher / Tambah Aturan" button
  - Tab "Voucher Diskon": tabel (No, Kode mono, Tipe, Nilai %, Maks Diskon, Penggunaan, Berlaku, Stacking badge, Status, Aksi)
  - Tab "Harga Bertingkat": tabel aturan bertingkat (dari Pencil node buX3h)
  - Modal "Buat Voucher": Kode (uppercase auto), Tipe select, Nilai, Maks Diskon, Tipe Pemakaian select, Kuota, Stacking select, Berlaku Dari–Hingga date range, Aktif toggle
  - Interactive: tab switching, modal buka/tutup
  - Shell: `initShell('admin', '20-admin-voucher.html')`

- [ ] **I3-4** `21-admin-template-laporan.html`
  - Ref: uploads `pasted-1777307866351-0` (no Pencil reference — design dari scratch, ikuti pattern form pages)
  - **⚠️ Catatan**: Halaman ini paling kompleks di iterasi 3. Harus di-build terakhir setelah pattern lain established.
  - Layout: breadcrumb + page title "Tambah Template Laporan" → card "Informasi Dasar" (Nama Template\* + Deskripsi + "Jadikan default" toggle) → card "Sections" header + "Tambah Section" button → 1+ accordion "SECTION 1" (Judul ID + Judul EN + Tipe Section select + Test Type select + Aspek list "Belum ada aspek" + "Tambah Aspek" link + reorder ↑↓ + delete) → Batal + Simpan Template
  - Interactive: tambah section (append accordion), accordion expand/collapse, reorder (opsional display only)
  - Shell: `initShell('admin', '21-admin-template-laporan.html')`

- [ ] **I3-5** `26-admin-log-aktivitas.html`
  - Pencil: `admin-pages-biaya.pen` / node `jc538`
  - Layout: page title + subtitle "Pantau semua aktivitas sistem. Read-only." → toolbar (search + Grup Aksi select + Periode select + Export CSV button) → tabel (Waktu, Pelaku email, Aksi mono badge, Objek, IP Address, Tipe badge, Detail icon) → pagination
  - Aksi mono badges: `REVIEW_SUBMITTED`, `VOUCHER_CREATED`, `PAYMENT_APPROVED`, dll (monospace, uppercase, colored)
  - No shell action (read-only page)
  - Shell: `initShell('admin', '26-admin-log-aktivitas.html')`

- [ ] **I3-6** `27-shared-profil.html`
  - Ref: uploads `pasted-1777307946451-0`
  - Layout: breadcrumb (Dashboard > Profil) + page title + subtitle → card "Informasi Akun" (icon shield + Email dengan icon + Role badge + Status Profil "Lengkap" badge) → card "Data Pribadi" (icon person + Nama Lengkap input + NIK Saat Ini disabled + NIK Baru optional input + helper text) → Batal + Simpan Perubahan
  - **Shared**: halaman ini sama untuk semua role — shell menampilkan sidebar sesuai role yang sedang aktif
  - Cara pakai: `initShell({ role: 'admin', activeHref: '' })` (tidak ada item aktif di sidebar)
  - Shell: parameter `role` sesuai role user yang diakses

---

## Design Token & Atom Checklist per Halaman

Setiap file wajib memenuhi (dari `design-token-and-atoms.md`):

| Check        | Aturan                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------- |
| Color        | Semua dari CSS variables, NO hardcode hex                                                   |
| Spacing      | Kelipatan 4px atau 8px                                                                      |
| Typography   | Overline (11px/600/uppercase) untuk header tabel; `font-display` untuk page title           |
| States       | Hover + focus tersedia untuk semua interactive elements                                     |
| Data         | Dummy data realistis (nama Indonesia, ID psikometri, tanggal 2026, Rupiah)                  |
| Badge colors | success (Aktif/Selesai), warning (Pending/Menunggu), error (Nonaktif/Gagal), primary (info) |
| Responsive   | Sidebar collapsible, table horizontal scroll di mobile                                      |

---

## Referensi File

| Resource           | Path                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| Shared styles      | `claude-design/redesign/_shared/styles.css`                               |
| Shared shell       | `claude-design/redesign/_shared/shell.js`                                 |
| Shared utils       | `claude-design/redesign/_shared/utils.js`                                 |
| Design tokens      | `claude-design/design-token-and-atoms.md`                                 |
| Pencil admin pages | `pencil/admin-pages.pen`                                                  |
| Pencil bank soal   | `pencil/admin-pages-bank-soal.pen` + `pencil/admin-pages-bank-soal-2.pen` |
| Pencil biaya       | `pencil/admin-pages-biaya.pen`                                            |
| Pencil paket       | `pencil/admin-pages-paket-tes.pen`                                        |

---

## Update redesign-plan.md

Setelah setiap iterasi selesai:

1. Centang `[x]` task di `redesign-plan.md` untuk halaman yang selesai
2. Update progress counter di `index.html` (5/37 → up)
3. Update card status di `index.html` dari `todo` ke `done`
4. Commit dengan pesan: `feat: phase 2 iterasi [1/2/3] — [deskripsi singkat]`

---

_Plan dibuat: 2026-05-02 | Phase 2 total: 18 halaman admin dalam 3 iterasi_
