# Proven Design Patterns

> Pattern yang sudah terbukti konsisten dan bisa di-reuse.
> Claude harus **refer ke sini** sebelum membuat organism baru.
> Tambahkan pattern baru setiap kali menemukan kombinasi yang berhasil.

---

## Cara Membaca File Ini

Setiap pattern berisi:
- **Komposisi**: atom/molecule apa yang digunakan
- **Layout**: bagaimana elemen disusun
- **Spacing**: jarak antar elemen (dalam token)
- **Rules**: constraint khusus pattern ini
- **Jangan**: hal yang tidak boleh dilakukan di pattern ini

---

## Pattern Library

### Card/Assessment
**Digunakan di**: Dashboard user publik, halaman daftar asesmen
**Komposisi**:
  - Badge/Primary — kategori tes
  - Typography heading-3 — judul tes
  - Typography body-sm — deskripsi singkat
  - Icon + text — durasi (lucide: timer)
  - Button/Primary kecil — CTA "Mulai"
**Layout**: vertical, body padding 20px, footer border-top dengan space_between
**Spacing**: gap 8px di body, padding [12,20] di footer
**Rules**:
  - Selalu pakai shadow-sm + hover shadow-md
  - Radius radius-lg (12px)
  - Footer selalu ada border-top #E9D8F5
**Jangan**:
  - Jangan flood purple di card body
**File**: `admin-panel-2/design-system.pen` → ID: `IJ10N`

### Card/Result
**Digunakan di**: Dashboard psikolog, halaman hasil asesmen
**Komposisi**:
  - Header: Avatar + nama + tanggal (bg: surface #FAF5FF)
  - Body: judul tes + skor + badge status
**Layout**: vertical, header bg surface, body padding 20px
**Spacing**: header padding [16,20], body gap 12px
**Rules**:
  - Header selalu pakai surface color (#FAF5FF) sebagai bg
  - Skor pakai primary color + font-display bold
**File**: `admin-panel-2/design-system.pen` → ID: `rpcrT`

### Navbar/Landing
**Digunakan di**: Landing page (pre-login)
**Komposisi**: Logo mark + brand name | Nav links (3) | Login ghost btn + Register primary btn
**Layout**: horizontal, space_between, height 64px, padding [0,32]
**Rules**:
  - Border bottom #E9D8F5 thickness 1
  - Logo mark: 32×32 radius-md fill primary
  - CTA: ghost "Masuk" + primary "Daftar Gratis"
**File**: `admin-panel-2/design-system.pen` → ID: `V5jB3`

### Navbar/Dashboard
**Digunakan di**: Semua halaman post-login
**Komposisi**: Logo | Bell icon button + Avatar dropdown
**Layout**: horizontal, space_between, height 64px, padding [0,32]
**Rules**:
  - Bell button: 36×36 radius-md fill surface
  - Avatar dropdown: pill shape, surface bg, nama user + chevron
**File**: `admin-panel-2/design-system.pen` → ID: `ALf1l`

### Hero Section
**Digunakan di**: Landing page
**Komposisi**: Badge pill + Headline display-lg + Subtext body-lg + CTA row | Visual placeholder
**Layout**: horizontal, space_between, padding [80,64], gap 64
**Spacing**: left col width 560, right visual 480×360
**Rules**:
  - Headline: Plus Jakarta Sans 44px weight 700
  - Badge: pill #F3E8FF + purple icon + label
  - CTA: primary + ghost side by side
  - Visual area: surface bg dengan border, placeholder untuk ilustrasi
**File**: `admin-panel-2/design-system.pen` → ID: `25ApZ`

### Feature Section (3-col)
**Digunakan di**: Landing page
**Komposisi**: Centered header (headline + subtext) + 3-col card grid
**Layout**: vertical, centered, padding [64,64], bg surface #FAF5FF
**Rules**:
  - Header max-width 640, text-align center
  - Feature cards: icon container 44×44 radius-10 + title + desc
  - Icon container: #F3E8FF bg, primary icon
  - Cards: fill white, border #E9D8F5, radius-lg
**File**: `admin-panel-2/design-system.pen` → ID: `qBoDM`

### Footer/Full
**Digunakan di**: Landing page
**Komposisi**: Brand col (logo + desc) + Link cols (Produk, Perusahaan) | Bottom bar (copyright + links)
**Layout**: vertical — main row + bottom bar
**Rules**:
  - Background: #1A0A2E (near-black purple)
  - Text: white untuk heading, #6B5F7A untuk body/links
  - Bottom bar: border-top #2D1F3D
**File**: `admin-panel-2/design-system.pen` → ID: `X3wJm`

### Alert Pattern
**Digunakan di**: Form feedback, notifikasi sistem
**Komposisi**: Icon (16×16) + text (fill_container)
**Layout**: horizontal, gap 12, padding [12,16], radius-md
**Rules**:
  - Setiap variant punya bg tint + border warna semantic yang sama
  - Info: #DBEAFE bg + #3B82F6 border/icon
  - Success: #DCFCE7 bg + #16A34A border/icon
  - Warning: #FEF9C3 bg + #F59E0B border/icon
  - Error: #FEE2E2 bg + #DC2626 border/icon
**File**: `admin-panel-2/design-system.pen` → IDs: `mGhiH`, `i5BCL`, `x9nwq`, `4Nujs`

### NavItem Pattern
**Digunakan di**: Sidebar navigation
**Komposisi**: Icon (18×18) + Label
**Layout**: horizontal, gap 10, padding [10,12], radius-md, width fill_container
**Rules**:
  - Default: transparent bg, muted text/icon
  - Active: #F3E8FF bg, primary text/icon, left bar indicator 3px
  - Hover: #FAF5FF bg, primary text/icon
**File**: `admin-panel-2/design-system.pen` → IDs: `XEVb5`, `VHvGQ`, `9DYzq`

---

## Template Entry Pattern Baru

```
### [Nama Pattern]
**Digunakan di**: [organism/template apa]
**Komposisi**: 
  - [Atom/Molecule 1] — [perannya]
  - [Atom/Molecule 2] — [perannya]
**Layout**: [deskripsi susunan — e.g. "flex column, gap-4, align-start"]
**Spacing**: [token yang dipakai — e.g. "padding: space-6, gap antar elemen: space-3"]
**Rules**:
  - [rule 1]
  - [rule 2]
**Jangan**:
  - [anti-pattern 1]
**Contoh file**: [path ke .pen file jika ada]
```