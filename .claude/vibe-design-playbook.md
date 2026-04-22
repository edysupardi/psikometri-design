# Vibe Design Prompt Playbook

> Kumpulan prompt siap pakai untuk melakukan vibe design secara efektif, efisien, dan konsisten —
> dari design token hingga menjadi website utuh.
>
> Setiap prompt tersedia dalam dua versi:
> - **[GENERIC]** — bisa dipakai untuk project apapun
> - **[PSIKOMETRI]** — contoh implementasi nyata untuk project Psikometri

---

## Cara Membaca Playbook Ini

1. Ikuti urutan — jangan loncat layer
2. Setiap prompt ada **placeholder** dalam format `[NAMA]` — ganti dengan konteks project kamu
3. Tanda `→` berarti "lanjutkan ke prompt berikutnya setelah ini selesai"
4. Bagian `⚠️ Anti-pattern` adalah hal yang sering salah — baca sebelum kirim prompt

---

## Daftar Isi

- [Fase 0 — Setup & Memory](#fase-0--setup--memory)
- [Fase 1 — Design Tokens](#fase-1--design-tokens)
- [Fase 2 — Atoms](#fase-2--atoms)
- [Fase 3 — Molecules](#fase-3--molecules)
- [Fase 4 — Organisms](#fase-4--organisms)
- [Fase 5 — Templates](#fase-5--templates)
- [Fase 6 — Pages](#fase-6--pages)
- [Utilitas — Review, Memory, Research](#utilitas)

---

## Fase 0 — Setup & Memory

### 0.1 Init Design Spec (Interview Mode)

Gunakan ini di awal project baru untuk mengisi `design-spec.md` secara interaktif.

```
/init-design-spec
```

> Claude akan menjalankan sesi interview 5 fase:
> Identitas → Warna → Tipografi → Spacing & Shape → Component Contracts

---

### 0.2 Orientasi Sesi (Gunakan di Awal Setiap Sesi Baru)

Karena Claude tidak punya memory antar sesi, mulai setiap sesi dengan prompt ini.

**[GENERIC]**
```
Kita akan melanjutkan design system untuk project [NAMA PROJECT].
Sebelum mulai, baca semua file memory berikut:
1. .claude/memory/design-spec.md
2. .claude/memory/patterns.md
3. .claude/memory/decisions.md

Setelah membaca, berikan ringkasan singkat:
- Token utama yang aktif
- Atom/molecule yang sudah selesai
- Pattern penting yang perlu diingat
- Layer mana yang sedang dikerjakan sekarang
```

**[PSIKOMETRI]**
```
Kita akan melanjutkan design system untuk project Psikometri.
Sebelum mulai, baca semua file memory berikut:
1. .claude/memory/design-spec.md
2. .claude/memory/patterns.md
3. .claude/memory/decisions.md

Setelah membaca, berikan ringkasan singkat:
- Token utama yang aktif (terutama color dan spacing)
- Atom/molecule yang sudah selesai
- Pattern penting yang perlu diingat
- Layer mana yang sedang dikerjakan sekarang
```

---

## Fase 1 — Design Tokens

Tokens adalah fondasi. Semua yang lain bergantung pada ini.
Jangan generate atom sebelum tokens dikonfirmasi.

### 1.1 Generate Token File

**[GENERIC]**
```
Berdasarkan design-spec.md yang sudah ada, generate file token lengkap
dalam format CSS custom properties (variables).

Requirements:
- Semua color tokens
- Semua typography tokens (font family, size scale, line height, letter spacing)
- Semua spacing tokens
- Radius, border, shadow, motion tokens
- Beri komentar section untuk setiap kategori
- Tambahkan contoh penggunaan di bawah setiap section

Format output: CSS file siap pakai

Setelah token dikonfirmasi, generate ke Pencil:
- Discover tools MCP Pencil yang tersedia
- Buat token sebagai Shared Styles atau Variables di Pencil sesuai tools yang ada
```

**[PSIKOMETRI]**
```
Berdasarkan design-spec.md project Psikometri, generate file token lengkap
dalam format CSS custom properties.

Requirements:
- Semua color tokens (primary #5F197B, surface, border, semantic colors)
- Typography scale (Plus Jakarta Sans display, Inter body, JetBrains Mono mono)
- Spacing scale berbasis 8px
- Radius (sm:4px, md:8px, lg:12px), border, shadow dengan purple undertone
- Motion tokens
- Beri komentar section untuk setiap kategori

Format output: CSS file (tokens.css) siap pakai
```

---

### 1.2 Validasi Token

**[GENERIC]**
```
Review token file yang baru dibuat. Cek:
1. Apakah ada nilai yang tidak konsisten secara visual? (misal: shadow terlalu gelap vs tone keseluruhan)
2. Apakah spacing scale memiliki "gap" yang aneh?
3. Apakah color contrast antara text-base dan bg memenuhi WCAG AA (minimum 4.5:1)?
4. Apakah ada token yang missing tapi kemungkinan akan dibutuhkan?

Tampilkan temuan dalam format:
✅ Sudah baik: [list]
⚠️ Perlu pertimbangan: [list + alasan]
❌ Perlu diperbaiki: [list + solusi]
```

---

## Fase 2 — Atoms

Atoms adalah komponen terkecil yang tidak bisa dipecah lagi.
Kerjakan satu per satu — jangan batch.

**Urutan yang disarankan:**
`Button → Input → Typography → Icon → Badge/Tag → Divider → Avatar → Spinner`

---

### 2.1 Generate Atom

**[GENERIC]**
```
Buat atom: [NAMA ATOM]

Sebelum generate, baca:
- .claude/memory/design-spec.md → ambil token dan component contract untuk [NAMA ATOM]
- .claude/memory/patterns.md → cek apakah ada pattern relevan

Constraints wajib:
- Variants yang diizinkan: [LIST VARIANT dari design-spec]
- Sizes: [LIST SIZE]
- States yang harus ada: [LIST STATE]
- Gunakan HANYA token yang terdefinisi — tidak ada hardcode value
- Mobile-first, responsive

Format response:
[CONTEXT CHECK] token dan contract yang digunakan
[DRAFT] hasil design
[SPEC REVIEW] checklist compliance
[MEMORY UPDATE] pattern yang perlu dicatat
[MCP EXECUTION] generate komponen ke Pencil via MCP tools
```

**[PSIKOMETRI] — Contoh: Button**
```
Buat atom: Button

Sebelum generate, baca:
- .claude/memory/design-spec.md → ambil token dan component contract untuk Button
- .claude/memory/patterns.md → cek apakah ada pattern relevan

Constraints wajib dari design-spec:
- Variants: primary | secondary | ghost | danger
- Sizes: sm | md | lg
- States: default | hover | active | disabled | loading
- Loading state wajib ada (banyak async: payment, submit asesmen)
- Full-width di mobile
- Gunakan --color-primary, --color-secondary, token spacing, radius
- Focus state wajib ada (aksesibilitas)
- Personality: clean, premium — tidak playful, tidak over-decorated

Format response:
[CONTEXT CHECK] token dan contract yang digunakan
[DRAFT] hasil design
[SPEC REVIEW] checklist compliance
[MEMORY UPDATE] pattern yang perlu dicatat
```

---

### 2.2 Review Atom Sebelum Finalize

**[GENERIC]**
```
Review atom [NAMA ATOM] sebelum finalize.

Checklist:
- [ ] Semua variant sudah ada sesuai contract di design-spec?
- [ ] Semua state sudah ada (hover, active, disabled, focus)?
- [ ] Tidak ada hardcode color atau spacing?
- [ ] Sudah mobile-first?
- [ ] Focus state visible dan accessible?
- [ ] Tone visual sesuai personality project?
- [ ] Ada hal yang perlu dicatat ke decisions.md?

Tampilkan hasil checklist, lalu berikan rekomendasi jika ada yang perlu diperbaiki.
```

---

### 2.3 Iterasi Atom (Jika Ada Revisi)

**[GENERIC]**
```
Revisi atom [NAMA ATOM]:

Yang perlu diubah:
- [DESKRIPSI PERUBAHAN SPESIFIK]

Yang TIDAK boleh berubah:
- [LIST YANG SUDAH BENAR DAN HARUS DIPERTAHANKAN]

Setelah revisi, tampilkan diff — apa yang berubah dan kenapa.
```

⚠️ **Anti-pattern:** Jangan bilang "perbaiki semua yang kurang" — selalu spesifik tentang apa yang berubah dan apa yang dipertahankan.

---

## Fase 3 — Molecules

Molecules adalah kombinasi 2+ atoms yang membentuk fungsi baru.
Atom yang dibutuhkan harus sudah selesai sebelum molecule dibuat.

**Contoh molecules umum:**
`SearchField → FormField → NavItem → PricingCard → AlertBanner → AvatarWithLabel`

---

### 3.1 Generate Molecule

**[GENERIC]**
```
Buat molecule: [NAMA MOLECULE]

Sebelum generate, baca:
- .claude/memory/design-spec.md
- .claude/memory/patterns.md

Komposisi:
- Atom yang digunakan: [LIST ATOM + PERANNYA]
- Contoh: "Button (primary, md) sebagai CTA" + "Input (text) sebagai field pencarian"

Behavior:
- [DESKRIPSI INTERAKSI — misal: "ketik di input → tombol search aktif"]

Constraints:
- Gunakan HANYA token yang terdefinisi
- Gunakan HANYA variant atom yang sudah ada di contract
- [CONSTRAINT TAMBAHAN SPESIFIK]

Format response:
[CONTEXT CHECK]
[DRAFT]
[SPEC REVIEW]
[MEMORY UPDATE]
```

**[PSIKOMETRI] — Contoh: FormField**
```
Buat molecule: FormField

Sebelum generate, baca:
- .claude/memory/design-spec.md
- .claude/memory/patterns.md

Komposisi:
- Typography (body-sm) sebagai label
- Input (text atau password) sebagai field utama
- Typography (caption) sebagai helper text atau error message
- Badge/Tag (status:error) sebagai indikator error state opsional

Behavior:
- Default: label di atas, input, helper text di bawah
- Error state: border merah, helper text berubah jadi error message
- Label wajib ada (aksesibilitas)

Constraints:
- Gunakan --color-error untuk error state
- Spacing antar elemen: --space-1 (8px)
- Personality: clean, tidak over-decorated

Format response:
[CONTEXT CHECK]
[DRAFT]
[SPEC REVIEW]
[MEMORY UPDATE]
```

---

### 3.2 Konsistensi Antar Molecule

Gunakan prompt ini setelah 3+ molecules selesai untuk cek konsistensi.

**[GENERIC]**
```
Bandingkan molecules yang sudah dibuat: [LIST NAMA MOLECULE]

Cek konsistensi:
1. Apakah spacing rhythm konsisten antar molecule?
2. Apakah ada perbedaan visual yang tidak disengaja?
3. Apakah semua menggunakan token yang sama untuk elemen sejenis?
4. Apakah ada pattern yang muncul dan perlu dicatat ke patterns.md?

Tampilkan temuan dan rekomendasi.
```

---

## Fase 4 — Organisms

Organisms adalah kombinasi molecules (dan atoms) yang membentuk section UI yang bermakna.
Ini adalah layer yang paling rentan inkonsistensi — inject context selalu.

**Contoh organisms:**
`Navbar → Hero → FeatureSection → PricingSection → Footer → Dashboard Sidebar → Assessment Card Grid`

---

### 4.1 Generate Organism

**[GENERIC]**
```
Buat organism: [NAMA ORGANISM]

CONTEXT INJECTION — baca sebelum generate:
- .claude/memory/design-spec.md
- .claude/memory/patterns.md
- .claude/memory/decisions.md

Komposisi:
- [MOLECULE/ATOM 1] — peran: [PERANNYA]
- [MOLECULE/ATOM 2] — peran: [PERANNYA]
- [dst]

Layout:
- Desktop: [DESKRIPSI LAYOUT DESKTOP]
- Mobile: [DESKRIPSI LAYOUT MOBILE]

Content:
- [DESKRIPSI KONTEN — bisa dummy tapi realistis]

Tone check:
- Personality yang harus tercermin: [PERSONALITY PROJECT]
- Yang harus dihindari: [ANTI-TONE]

Constraints:
- Max content width: [NILAI dari design-spec]
- Gunakan grid system dari design-spec
- Semua spacing dari token
- Referensi organism sebelumnya: [NAMA ORGANISM YANG SUDAH ADA]

Format response:
[CONTEXT CHECK]
[DRAFT]
[SPEC REVIEW]
[MEMORY UPDATE]
```

**[PSIKOMETRI] — Contoh: Landing Navbar**
```
Buat organism: LandingNavbar

CONTEXT INJECTION — baca sebelum generate:
- .claude/memory/design-spec.md
- .claude/memory/patterns.md
- .claude/memory/decisions.md

Komposisi:
- Logo (text "Psikometri" dengan --font-display, --color-primary)
- Navigation links (Typography body-md): Fitur, Harga, Tentang
- Button (ghost, md): Masuk
- Button (primary, md): Daftar Gratis

Layout:
- Desktop: flex row, logo kiri, nav tengah, CTA kanan, height 64px
- Mobile: logo kiri, hamburger menu kanan (nav collapse)

Behavior:
- Sticky saat scroll
- Background: --color-bg dengan shadow-sm saat sticky
- Active link: --color-primary dengan border-bottom

Tone check:
- Clean, premium — tidak playful
- Tidak over-decorated, tidak ada gradient di navbar

Constraints:
- Max content width: 1280px
- Padding horizontal: --space-4 (32px) desktop, --space-2 (16px) mobile
- Gunakan Navigation contract variant: landing

Format response:
[CONTEXT CHECK]
[DRAFT]
[SPEC REVIEW]
[MEMORY UPDATE]
```

---

### 4.2 Cek Konsistensi Organism

**[GENERIC]**
```
Kita sudah selesai membuat organisms: [LIST NAMA ORGANISM]

Lakukan consistency audit:
1. Baca .claude/memory/design-spec.md
2. Baca .claude/memory/patterns.md
3. Bandingkan semua organism yang sudah ada

Audit checklist:
- [ ] Spacing rhythm konsisten (terutama section padding)
- [ ] Typography hierarchy konsisten antar section
- [ ] Color usage konsisten
- [ ] Tidak ada organism yang "terasa beda" dari yang lain
- [ ] Layout grid digunakan konsisten

Output: laporan audit + rekomendasi perbaikan jika ada
```

---

## Fase 5 — Templates

Templates adalah layout skeleton — struktur halaman tanpa konten nyata.
Fokus pada grid, spacing, dan posisi organisms.

---

### 5.1 Generate Template

**[GENERIC]**
```
Buat template: [NAMA HALAMAN]

Template ini adalah skeleton layout — tanpa konten nyata, hanya struktur.

Organisms yang digunakan (dalam urutan dari atas):
1. [ORGANISM 1]
2. [ORGANISM 2]
3. [dst]

Layout rules:
- Max content width: [NILAI]
- Apakah full-width atau contained?
- Apakah ada sidebar?
- Bagaimana behavior di mobile?

Buat wireframe struktural yang menunjukkan:
- Posisi setiap organism
- Proporsi relatif antar section
- Breakpoint behavior
```

**[PSIKOMETRI] — Contoh: Landing Page Template**
```
Buat template: LandingPageTemplate

Organisms dalam urutan:
1. LandingNavbar (sticky)
2. HeroSection (full-width, contained content 1280px)
3. FeatureSection (contained, 3-col grid desktop / 1-col mobile)
4. HowItWorksSection (contained, step-by-step)
5. PricingSection (contained, 3-col cards)
6. CTASection (full-width, purple bg)
7. Footer (contained)

Layout rules:
- Max content width: 1280px
- Section vertical padding: --space-12 (96px) desktop, --space-8 (64px) mobile
- Tidak ada sidebar di landing
- Mobile: single column, semua section stack vertikal

Output: wireframe struktural + catatan spacing antar section
```

---

## Fase 6 — Pages

Pages adalah template yang sudah diisi konten nyata dan realistis.
Ini adalah output akhir yang siap dipresentasikan atau diimplementasikan.

---

### 6.1 Generate Page

**[GENERIC]**
```
Buat page: [NAMA PAGE] menggunakan template [NAMA TEMPLATE]

Sebelum generate, baca:
- .claude/memory/design-spec.md (semua token dan rules)
- .claude/memory/patterns.md (semua pattern yang sudah proven)

Isi dengan konten nyata dan realistis untuk project [NAMA PROJECT]:
- Copywriting yang sesuai tone dan target user
- Data/angka yang masuk akal
- Gambar: deskripsikan (placeholder) tapi jelaskan apa isinya

Cek sebelum finalize:
- [ ] Apakah setiap section terasa "connected" dengan section lainnya?
- [ ] Apakah visual hierarchy jelas (apa yang dilihat pertama, kedua, dst)?
- [ ] Apakah CTA jelas dan actionable?
- [ ] Apakah tone konsisten dari atas ke bawah?
```

**[PSIKOMETRI] — Contoh: Landing Page**
```
Buat page: LandingPage menggunakan LandingPageTemplate

Sebelum generate, baca semua file memory di .claude/memory/

Konten nyata untuk Psikometri:

HERO:
- Headline: benefit utama — asesmen psikologi yang valid, cepat, dan terpercaya
- Subheadline: untuk siapa (individu, perusahaan, lembaga)
- CTA primer: "Mulai Asesmen Gratis"
- CTA sekunder: "Lihat Demo"

FEATURES (3 fitur utama):
- Asesmen terstandarisasi (dibuat dan divalidasi psikolog bersertifikat)
- Hasil instan dengan interpretasi mendalam
- Cocok untuk rekrutmen, seleksi, pengembangan diri

HOW IT WORKS (3 langkah):
- Daftar & pilih asesmen
- Kerjakan dengan nyaman (bisa dari mana saja)
- Terima hasil + rekomendasi

PRICING (3 tier):
- Gratis: 1 asesmen dasar
- Personal: Rp 99.000/bulan — akses semua asesmen individu
- Business: Rp 499.000/bulan — assign ke tim, laporan agregat

CTA SECTION:
- Headline singkat yang mendorong aksi
- Single CTA button

Tone: profesional, trustworthy, tidak terlalu salesy
Target: individu yang ingin kenali diri + HR yang butuh tools rekrutmen

Cek sebelum finalize:
- [ ] Visual hierarchy jelas
- [ ] CTA actionable dan tidak ambigu
- [ ] Tone konsisten clean + premium sepanjang halaman
- [ ] Tidak ada elemen yang terasa playful atau childish
```

---

## Utilitas

### Review Design

```
/review-design [NAMA COMPONENT atau PATH FILE]
```

Atau manual:

**[GENERIC]**
```
Review [NAMA COMPONENT] untuk konsistensi dengan design-spec.

Baca .claude/memory/design-spec.md terlebih dahulu, kemudian audit:

Token compliance:
- [ ] Tidak ada hardcode color?
- [ ] Tidak ada hardcode spacing?
- [ ] Font sesuai yang terdefinisi?

Component contract:
- [ ] Hanya menggunakan variant yang diizinkan?
- [ ] Semua states sudah ada?

Personality check:
- [ ] Tone sesuai? (clean, premium, [PERSONALITY LAIN])
- [ ] Tidak ada elemen yang melanggar anti-tone?

Output: laporan dengan ✅ ⚠️ ❌
```

---

### Update Memory

```
/update-memory
```

Atau manual di akhir sesi:

**[GENERIC]**
```
Sesi ini kita sudah selesai mengerjakan: [RINGKASAN APA YANG DIKERJAKAN]

Tolong update semua memory files:

1. .claude/memory/patterns.md
   → Pattern baru apa yang ditemukan?
   → Ada pattern yang perlu direvisi?

2. .claude/memory/decisions.md
   → Keputusan design apa yang dibuat? Catat dengan alasannya.
   → Ada alternatif yang ditolak? Catat juga.

3. .claude/memory/design-spec.md
   → Ada token baru? Tambahkan.
   → Ada component contract yang perlu diupdate?
   → Update "Last updated" timestamp.

Tampilkan diff untuk setiap file — apa yang ditambahkan dan apa yang diubah.
```

---

### Research Log

```
/research-log [TEMUAN SINGKAT]
```

Atau manual:

**[GENERIC]**
```
Catat temuan research berikut ke .claude/commands/research-log.md:

Konteks: [SEDANG MENGERJAKAN APA]
Observasi: [APA YANG TERJADI]
Hipotesis: [KENAPA HAL ITU TERJADI]
Implikasi untuk methodology: [APA YANG BERUBAH DI WORKFLOW]
Action: [UPDATE APA YANG DILAKUKAN]

Tambahkan sebagai entry baru dengan format tanggal [YYYY-MM-DD].
```

---

### Prompt Debugging — Jika Output Tidak Konsisten

Gunakan ini ketika output Claude terasa "tidak sesuai" atau berbeda dari yang diharapkan.

**[GENERIC]**
```
Output yang dihasilkan tadi tidak konsisten dengan design system.
Spesifiknya: [DESKRIPSIKAN KETIDAKKONSISTENAN]

Sebelum generate ulang, konfirmasi dulu pemahaman kamu:
1. Apa personality project ini?
2. Apa token yang seharusnya digunakan untuk [ELEMEN BERMASALAH]?
3. Apakah ada pattern di patterns.md yang relevan?

Setelah konfirmasi, generate ulang dengan constraint yang lebih eksplisit.
```

---

## MCP Pencil — Cara Generate ke Pencil

Semua design HARUS di-execute ke Pencil via MCP — bukan hanya dideskripsikan sebagai teks.

### Urutan Wajib di Setiap Task Generate

```
1. Discover tools MCP Pencil yang tersedia di sesi ini
2. Identifikasi tool untuk: buat komponen, atur properti, tambah ke canvas
3. Generate design langsung di Pencil via tools tersebut
4. Konfirmasi berhasil dibuat sebelum lanjut ke review
```

### Tambahkan `[MCP EXECUTION]` di Setiap Response Generate

Setiap response yang menghasilkan design harus ada step kelima:

```
[CONTEXT CHECK] → token & pattern relevan
[DRAFT]         → rencana design
[SPEC REVIEW]   → checklist compliance
[MEMORY UPDATE] → update ke memory files
[MCP EXECUTION] → eksekusi ke Pencil via MCP tools
```

### Jika MCP Tidak Tersedia

- ❌ Jangan ganti dengan output HTML/CSS/teks sebagai workaround
- ✅ Pause dan informasikan ke user
- ✅ Tunggu instruksi sebelum lanjut

### Tips MCP

- Selalu discover ulang tools di awal sesi — jangan asumsikan nama tool dari sesi sebelumnya
- Jika ada tool yang ambigu fungsinya, tanya user sebelum digunakan
- Satu komponen selesai di Pencil dulu sebelum generate komponen berikutnya

---



## Quick Reference — Checklist Per Layer

| Layer | Sebelum Generate | Setelah Generate | MCP |
|-------|-----------------|-----------------|-----|
| Token | Baca design-spec.md | Validasi contrast ratio | Buat sebagai Shared Styles/Variables |
| Atom | Baca spec + contracts | Cek semua states + variants | Generate komponen ke Pencil |
| Molecule | Baca spec + patterns | Cek atom reuse + spacing rhythm | Generate ke Pencil, cek komposisi |
| Organism | Inject SEMUA memory files | Consistency audit vs organism lain | Generate ke Pencil, cek di canvas |
| Template | Baca semua + list organisms | Cek breakpoint behavior | Generate layout skeleton ke Pencil |
| Page | Baca semua + tone check | Visual hierarchy + CTA clarity | Generate full page ke Pencil |

---

## Tips Anti-Halusinasi

1. **Inject dulu, generate kemudian** — jangan generate tanpa baca memory
2. **Constraint-heavy prompt** — "gunakan --space-4 gap" lebih aman dari "beri jarak yang cukup"
3. **Sebut nama token, bukan nilai** — "gunakan --color-primary" bukan "gunakan warna ungu"
4. **Satu komponen per prompt** — jangan batch generate beberapa atom sekaligus
5. **Konfirmasi sebelum lanjut** — tanya "apakah ini sesuai?" sebelum masuk ke layer berikutnya
6. **Update memory segera** — jangan tunda, lakukan setelah setiap komponen selesai
7. **Catat yang gagal juga** — decisions.md harus isi "alternatif yang ditolak" — ini mencegah Claude mengusulkan hal yang sama lagi
8. **Discover MCP tools dulu** — jangan asumsikan nama tool Pencil, selalu discover di awal sesi
9. **Satu komponen selesai di Pencil dulu** — konfirmasi berhasil di-generate sebelum lanjut ke komponen berikutnya

---

_Playbook ini adalah living document — update seiring research kamu berkembang._
_Versi: 1.0 | Dibuat: 2026-04-22_