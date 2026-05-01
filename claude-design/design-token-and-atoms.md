# Design Tokens & Atoms — Psikometri

> **Sumber kebenaran tunggal:** `.claude/memory/design-spec.md` (Project Spec)
> Dimana ada konflik antara Claude Design (`styles.css`) dan Project Spec, Project Spec menang.
> File ini mendokumentasikan keduanya untuk kemudahan rekonsiliasi.

---

## BAGIAN 1 — MASTER LIST: DESIGN TOKENS

### 1.1 Color Tokens

| Token | Claude Design (styles.css) | Project Spec (design-spec.md) | Digunakan di |
|-------|---------------------------|-------------------------------|--------------|
| `--color-primary` | `#3B1FA3` (indigo) | `#5F197B` (HIMPSI purple) | Button primary, active nav, link, focus ring |
| `--color-primary-hover` | `#321A8B` | — | Button hover state |
| `--color-primary-active` | `#2A1675` | — | Button pressed state |
| `--color-secondary` | `#C5B8F5` (lavender) | — | Avatar bg, badge-info bg, focus ring overlay |
| `--color-tertiary` | `#FFD600` (yellow) | Gold accent | Badge-progress, accent elements |
| `--color-surface` | `#FAF8FF` | — | Page background default |
| `--color-surface-lowest` | `#FFFFFF` | — | Card bg, input bg, modal bg |
| `--color-surface-low` | `#F4F3FC` | — | Table header, row hover, sidebar bg |
| `--color-surface-high` | `#E8E7F0` | — | Divider, skeleton high |
| `--color-neutral` | `#F0EFF8` | — | Skeleton base, chip bg |
| `--color-on-surface` | `#1A1B22` | — | Body text, heading |
| `--color-on-surface-variant` | `#474551` | — | Label text, icon default |
| `--color-on-surface-muted` | `#6B6976` | — | Helper text, placeholder |
| `--color-on-surface-faint` | `#9E9BA8` | — | Nav section label, faint text, icon faint |
| `--color-outline` | `#C8C4D3` | — | Input border, divider line |
| `--color-outline-soft` | `rgba(200,196,211,0.5)` | — | Ring shadow overlay |
| `--color-divider` | `#E8E7F0` | — | Table row border, section divider |
| `--color-error` | `#BA1A1A` | — | Error text, danger button bg |
| `--color-error-bg` | `#FEE2E2` | — | Error badge bg, error input bg |
| `--color-success` | `#059669` | — | Success text, dot-success |
| `--color-success-bg` | `#ECFDF5` | — | Success badge bg |
| `--color-warning` | `#D97706` | — | Warning text, dot-warning |
| `--color-warning-bg` | `#FEF3C7` | — | Warning badge bg |
| `--color-info` | `var(--primary)` | — | Info text |
| `--color-info-bg` | `rgba(197,184,245,0.4)` | — | Info badge bg |

### 1.2 Typography Tokens

| Token | Nilai | Digunakan di |
|-------|-------|--------------|
| `--font-display` | `'Manrope'` / `'Plus Jakarta Sans'` | Heading, display, logo |
| `--font-body` | `'Inter'` | Body text, button, input, label |
| `--font-mono` | `'JetBrains Mono', 'SF Mono'` | Code, ID/kode, OTP input, Kraepelin data |
| `--font-size-display` | `56px` | Hero headline landing page |
| `--font-size-h1` | `24px` | Page title, modal title |
| `--font-size-h2` | `18px` | Section heading, card title |
| `--font-size-h3` | `15px` | Sub-section heading |
| `--font-size-body` | `14px` | Body text default |
| `--font-size-small` | `13px` | Button label, table cell, form label |
| `--font-size-caption` | `12px` | Caption, helper text, error message |
| `--font-size-overline` | `11px` | Badge label, table header, nav section |
| `--font-weight-regular` | `400` | Body text |
| `--font-weight-medium` | `500` | Body (Inter 500), label, badge |
| `--font-weight-semibold` | `600` | Heading, nav item, active state |
| `--font-weight-bold` | `700` | Display, logo text |
| `--line-height-tight` | `1.05` | Display heading |
| `--line-height-snug` | `1.25–1.35` | H1–H3 |
| `--line-height-normal` | `1.5` | Body text |
| `--letter-spacing-tight` | `-0.025em` | Display heading |
| `--letter-spacing-normal` | `-0.01em` | H1–H3 |
| `--letter-spacing-wide` | `0.06em` | Overline, table header |
| `--letter-spacing-wider` | `0.08em` | Nav section label |

### 1.3 Spacing Tokens

| Token | Claude Design (4px grid) | Project Spec (8px grid) |
|-------|--------------------------|-------------------------|
| `--sp-1` | `4px` | `8px` |
| `--sp-2` | `8px` | `16px` |
| `--sp-3` | `12px` | `24px` |
| `--sp-4` | `16px` | `32px` |
| `--sp-5` | `20px` | `40px` |
| `--sp-6` | `24px` | `48px` |
| `--sp-8` | `32px` | `64px` |
| `--sp-10` | `40px` | `80px` |
| `--sp-12` | `48px` | `96px` |

> **Catatan:** Claude Design pakai 4px grid, Project Spec pakai 8px grid. Semua spacing harus kelipatan salah satu.

### 1.4 Size Tokens (Density-aware)

| Token | Compact | Standard | Comfortable |
|-------|---------|----------|-------------|
| `--row-h` (table row height) | `36px` | `44px` | `52px` |
| `--input-h` (input height) | `32px` | `36px` | `40px` |
| `--card-pad` (card padding) | `12px` | `16px` | `20px` |

**Fixed sizes (tidak density-aware):**

| Token | Nilai | Digunakan di |
|-------|-------|--------------|
| `--height-btn-sm` | `32px` | Button sm |
| `--height-btn-md` | `36px` | Button default |
| `--height-btn-lg` | `40px` | Button lg |
| `--height-nav-item` | `32px` | Sidebar nav item |
| `--height-topbar` | `52px` | Topbar |
| `--width-sidebar` | `232px–240px` | Sidebar |
| `--size-icon-sm` | `14px` | Icon small (inline) |
| `--size-icon-md` | `16px` | Icon default |
| `--size-icon-lg` | `20px` | Icon large |
| `--size-icon-xl` | `24px` | Icon XL (illustration) |
| `--size-avatar-sm` | `24px` | Avatar small |
| `--size-avatar-md` | `28px` | Avatar default (topbar, nav) |
| `--size-avatar-lg` | `36px` | Avatar large |
| `--size-dot` | `6px` | Dot status indicator |

### 1.5 Radius Tokens

| Token | Nilai | Digunakan di |
|-------|-------|--------------|
| `--r-sm` | `6px` | Button, input, nav item, badge (small) |
| `--r-md` | `8px` | Card, table corner, modal inner |
| `--r-lg` | `12px` | Modal, large card, overlay |
| `--r-pill` | `9999px` | Badge, tag, chip, tab filter |

### 1.6 Shadow Tokens

| Token | Nilai | Digunakan di |
|-------|-------|--------------|
| `--shadow-1` | `0 1px 2px rgba(26,27,34,0.04), 0 0 0 1px rgba(200,196,211,0.4)` | Card default (ring shadow) |
| `--shadow-2` | `0 2px 8px rgba(26,27,34,0.06), 0 0 0 1px rgba(200,196,211,0.5)` | Elevated card, dropdown |
| `--shadow-3` | `0 8px 24px rgba(26,27,34,0.08), 0 0 0 1px rgba(200,196,211,0.5)` | Modal, popover, tooltip |

**Card style variants:**
- `flat` → `border: 1px solid var(--divider)`, no shadow
- `ring` → `box-shadow: 0 0 0 1px rgba(200,196,211,0.5)`, no border
- `shadow` → `box-shadow: var(--shadow-1)`, no border

### 1.7 Motion Tokens

| Token | Nilai | Digunakan di |
|-------|-------|--------------|
| `--duration-fast` | `100ms` | Microinteraction (dot, indicator) |
| `--duration-base` | `120ms` | Button, input, hover, nav item |
| `--duration-slow` | `200ms–300ms` | Modal open/close, sidebar transition |
| `--duration-skeleton` | `1.4s` | Skeleton shimmer animation |
| `--easing-base` | `ease` | Default transition |
| `--scale-hover` | `scale(1.02)` | Button hover (premium feel) |
| `--scale-active` | `scale(0.98)` | Button pressed |

### 1.8 Z-index Tokens

| Token | Nilai | Digunakan di |
|-------|-------|--------------|
| `--z-base` | `0` | Default stacking |
| `--z-dropdown` | `100` | Dropdown menu, select options |
| `--z-sticky` | `200` | Topbar, sticky header, sidebar |
| `--z-modal` | `300` | Modal/dialog overlay |
| `--z-toast` | `400` | Toast notification |
| `--z-tooltip` | `500` | Tooltip |

### 1.9 Breakpoint Tokens

| Token | Nilai | Digunakan di |
|-------|-------|--------------|
| `--bp-mobile` | `< 768px` | Mobile layout |
| `--bp-tablet` | `768px–1024px` | Tablet layout |
| `--bp-desktop` | `≥ 1280px` | Desktop layout (default) |

### 1.10 Grid Tokens

| Token | Nilai |
|-------|-------|
| `--grid-columns` | `12` |
| `--grid-gutter` | `24px` |
| `--grid-max-width` | `1280px` |
| `--grid-container-pad` | `24px` (mobile: `16px`) |

---

## BAGIAN 2 — MASTER LIST: ATOMS

### 2.1 Typography Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 1 | **Heading** | h1 (24px/600), h2 (18px/600), h3 (15px/600) | Font display, letter-spacing -0.01em |
| 2 | **Display Text** | — | 56px/700, letter-spacing -0.025em; hanya landing page hero |
| 3 | **Body Text** | md (14px), sm (13px); weight regular/medium | Font body Inter 500 |
| 4 | **Caption** | — | 12px, weight 500 |
| 5 | **Overline** | — | 11px, weight 600, uppercase, letter-spacing 0.06em |
| 6 | **Link** | inline, standalone | Underline on hover, primary color |
| 7 | **Mono Text** | — | JetBrains Mono; untuk kode, ID pesanan, data angka Kraepelin |
| 8 | **Page Title** | with subtitle | Heading h1 + caption subtitle; pattern: "Manajemen User" + deskripsi |

### 2.2 Button Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 9 | **Button** | primary / secondary / outline / ghost / danger | × sizes: sm(32px) / md(36px) / lg(40px); states: default/hover/active/disabled/loading |
| 10 | **Button with Icon** | prefix-icon + label; label + suffix-icon | Semua variants; gap 6px antara icon dan label |
| 11 | **Icon Button** | sm (28px) / md (32px) | Square, no label; untuk edit, delete, view, download |
| 12 | **CTA Button** | full-width | Button primary full-width; untuk form submit, login, checkout |

### 2.3 Input Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 13 | **Text Input** | default / focus / error / disabled | Height var(--input-h); border outline-color → primary on focus |
| 14 | **Password Input** | — | Eye icon toggle suffix |
| 15 | **Search Input** | — | Search icon prefix; placeholder "Cari..." |
| 16 | **Number Input** | — | Untuk harga, estimasi waktu, jumlah soal |
| 17 | **Number Stepper** | — | −/value/+ buttons; untuk jumlah peserta (B2B order) |
| 18 | **Textarea** | default / focus / error | Resize vertical; min-height 80px; untuk deskripsi, instruksi, kesimpulan klinis |
| 19 | **Select / Dropdown** | default / focus | Chevron icon suffix; untuk role, status, kategori, tipe scoring |
| 20 | **Date Input** | — | Format dd/mm/yyyy; untuk tanggal lahir, berlaku dari/hingga |
| 21 | **Date Range Picker** | — | Dua date input berdampingan (Berlaku Dari → Berlaku Hingga) |
| 22 | **OTP Input** | 6-digit | 6 kotak digit terpisah, auto-focus ke kotak berikutnya |
| 23 | **Currency Input** | — | Prefix "Rp"; untuk harga paket, biaya |
| 24 | **Upload Dropzone** | — | Drag-and-drop area; icon upload + label; untuk gambar soal IST |

### 2.4 Form Support Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 25 | **Form Label** | required / optional | 13px, weight 500, on-surface-variant; asterisk merah jika required |
| 26 | **Form Helper Text** | — | 12px, muted; contoh: "Min 10 karakter, max 150 karakter" |
| 27 | **Error Message** | — | 12px, error color; muncul di bawah input yang invalid |
| 28 | **Required Indicator** | — | Asterisk (*) merah setelah label |
| 29 | **Character Counter** | — | "0/150 karakter" format; muncul di pojok kanan bawah textarea |
| 30 | **Input Group** | prefix-icon / suffix-icon / suffix-button | Input dengan icon/elemen tambahan (search icon, eye toggle) |
| 31 | **Info Note** | — | Icon ⓘ + teks kecil; contoh "Soal akan disimpan ke Bank Soal WWQ" |

### 2.5 Selection Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 32 | **Checkbox** | default / checked / indeterminate / disabled | Standard square; untuk mapping skala WWQ, daftar tes dalam paket |
| 33 | **Checkbox with Label** | — | Inline label di kanan checkbox; untuk fitur/option list |
| 34 | **Radio Button** | default / selected / disabled | Untuk rekomendasi akhir (Layak Disarankan / Layak Dipertimbangkan / Tidak Layak) |
| 35 | **Radio Card** | default / selected | Radio + judul + deskripsi + teks bilingual; untuk kategori hasil review psikolog |
| 36 | **Toggle / Switch** | off / on / disabled | Biru saat aktif, abu saat nonaktif; untuk Status Aktif pada semua form |
| 37 | **Rich Text Toolbar Button** | Bold / Italic / List | Untuk input instruksi tes (Bank Soal > Tambah Tipe Tes) |
| 38 | **Category Tab Filter** | default / active | Pill tabs horizontal; untuk filter Semua/Intelligence/Personality/Psychometric |

### 2.6 Badge Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 39 | **Status Badge** | completed (primary) / progress (yellow) / pending (surface) / error (red-bg) / success (green-bg) / info (lavender) | Height 20px, font 11px/600, pill shape; dot indicator opsional |
| 40 | **Role Badge** | admin/superadmin (sama) / psikolog / b2b / user publik | 4 role, warna berbeda per role; untuk tabel manajemen user dan log aktivitas |
| 41 | **Test Code Badge** | WWQ / IST / PAPIKOSTICK / KRAEPELIN | Monospace, uppercase; muncul pada kartu paket |
| 42 | **Bestseller Badge** | "Terlaris" | Icon api + label; gold/yellow; overlay di pojok kartu paket B2B |
| 43 | **Notification Badge** | — | Angka merah overlay di pojok icon bell; max "9+" |

### 2.7 Avatar Atom

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 44 | **Avatar** | sm (24px) / md (28px) / lg (36px) | Circle; initials fallback (font secondary/primary color); background secondary lavender |

### 2.8 Icon Atom

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 45 | **Icon** | sm (14px) / md (16px) / lg (20px) / xl (24px) | Lucide icons; stroke-width 1.75; color inherit dari parent |

### 2.9 Status Indicator Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 46 | **Dot Indicator** | success (green) / warning (yellow) / error (red) | 6px circle; inline dengan teks status; muncul di topbar avatar (online) |
| 47 | **Status Toggle Row** | — | Label + subtitle + toggle switch dalam satu baris; untuk PPN, Biaya Layanan |
| 48 | **Step Indicator** | active / completed / upcoming | Wizard steps (1 → 2 → 3); angka dalam circle + label + garis connector |

### 2.10 Divider Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 49 | **Divider Horizontal** | — | 1px solid var(--divider); antara section, tabel rows |
| 50 | **Divider Vertical** | — | Inline separator; antara elemen di topbar atau filter row |
| 51 | **Nav Section Label** | — | 10px, weight 600, uppercase, letter-spacing 0.08em; contoh "KELOLA", "PESANAN" |

### 2.11 Loading Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 52 | **Skeleton Block** | — | Gradient shimmer animation; untuk card, gambar, area konten |
| 53 | **Skeleton Line** | — | Height 12–16px; untuk text placeholder |
| 54 | **Skeleton Circle** | — | Untuk avatar placeholder |
| 55 | **Spinner** | — | Rotating circle; untuk loading state inline atau overlay |

### 2.12 Data Display Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 56 | **Table Header Cell** | sortable / non-sortable | Height 36px; font overline 11px/600; bg surface-low; sort icon ↑↓ |
| 57 | **Table Body Cell** | — | Height var(--row-h); padding 0 12px; vertical-align middle |
| 58 | **Table Row** | default / hover / selected | Hover: surface-low bg + primary left inset border (2px); selected: surface-low |

### 2.13 Navigation Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 59 | **Nav Item** | default / hover / active | Height 32px; icon + label; active variants: filled/tonal/border |
| 60 | **Breadcrumb Item** | — | Small text + separator ">" ; terakhir bold; untuk halaman form/detail |
| 61 | **Pagination Button** | number / prev / next / active | Active: filled primary; disabled: faint; dengan angka dan arrow icons |
| 62 | **Pagination Info** | — | "Menampilkan 1-10 dari 71 aktivitas" teks; di bawah tabel |

### 2.14 Card Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 63 | **Card Container** | flat / ring / shadow | Surface-lowest bg; r-md; density-aware padding |
| 64 | **KPI Metric Card** | with icon / without icon / with trend | Large number + label + optional trend (↑+5 green); untuk admin/B2B dashboard |
| 65 | **Stat Summary Block** | 3-column horizontal | Stat besar horizontal (Total Tes / Menunggu / Selesai); untuk riwayat asesmen |
| 66 | **Package Card** | dengan badge / tanpa badge | Judul + test badge + deskripsi + harga + CTA button; untuk katalog paket |
| 67 | **Feature Card** | — | Icon container + judul + deskripsi; untuk fitur paket detail dan landing page |
| 68 | **Section Accordion** | expanded / collapsed | Header "SECTION 1" + chevron + reorder handle; untuk template laporan builder |

### 2.15 Overlay Atoms

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 69 | **Modal Backdrop** | — | Semi-transparent dark overlay (rgba 0,0,0,0.5); z-index modal |
| 70 | **Tooltip** | — | Small popup on hover; bg on-surface, text white; 12px |
| 71 | **Info Alert** | — | Icon ⓘ + pesan; bg surface-low; untuk catatan pada form |

### 2.16 Specialized Atoms (Psikometri-specific)

| # | Atom | Variants | Keterangan |
|---|------|----------|------------|
| 72 | **Answer Button (YA/TIDAK)** | default / selected / hover | Tombol besar landscape; keyboard shortcut badge di pojok; untuk test interface |
| 73 | **Answer Option Row (A–E)** | — | Pill letter (A/B/C/D/E) + text input berdampingan; untuk soal IST multiple choice |
| 74 | **Question Indicator Dot** | unanswered (outline) / answered (filled primary) / current (filled bold) | 8px circle; grid di bottom nav test interface |
| 75 | **Progress Bar** | — | Linear; animated fill; height 4px; primary color; untuk progress tes |
| 76 | **Timer Display** | — | Monospace font; format MM:SS; prominent (16–20px); untuk countdown tes |
| 77 | **Score Table Row** | normal / pathological | No. + scale name + formula (jumlah × bobot = nilai) + % + kategori badge |
| 78 | **Classification Guide** | Normal / Kecenderungan / Pathologis | Inline colored badges + range threshold; di bawah scoring table |
| 79 | **T-Score / Result Bar** | — | Horizontal bar dengan fill warna + nilai + kategori; visualisasi skor per skala |
| 80 | **Checkbox Scale Grid** | — | 2-column grid checkbox; label "Skala 1"–"Skala 8"; untuk mapping soal WWQ |
| 81 | **Factor Selector Button** | A / B / active | Pill button kecil; dipilih satu dari A atau B; untuk PAPIKOSTICK faktor mapping |
| 82 | **Session Item** | BELUM / SELESAI / EXPIRED | Icon status circle + nama tes + badge + detail paket + tanggal; untuk Sesi Tes Saya |
| 83 | **Welcome Banner** | — | Greeting "Halo, [Nama]" + subtitle + optional CTA; header public user dashboard |
| 84 | **Empty State** | — | Ilustrasi + judul + deskripsi; "Data belum tersedia" |
| 85 | **Export Button** | CSV / download | Button outline dengan icon download; untuk tabel data, daftar peserta |

---

## BAGIAN 3 — CROSS-REFERENCE PER FILE SUMBER

---

### `styles.css` — Design System CSS
**Atoms:** Button, Button-with-icon, Icon-button, Text-input, Textarea, Select, Form-label, Input-group, Toggle/Switch, Badge (semua 6 variants), Avatar, Icon, Dot-indicator, Divider-horizontal, Skeleton-block/line/circle, Table-header-cell, Table-body-cell, Table-row, Nav-item, Nav-section-label, Card-container
**Tokens:** Semua color tokens, typography tokens, spacing tokens, size tokens, radius tokens, shadow tokens, motion tokens (duration-base, scale-hover/active)

---

### `prompt-redesign.md` — Design Specification
**Atoms:** Semua atoms yang ada di design spec (Button 5 variants, Input, Card, Badge 6 variants, Modal, Navigation)
**Tokens:** Semua tokens (brand colors, typography scale, spacing 4px grid, border radius, shadow 3-tier, density variants)

---

### `.claude/memory/design-spec.md` — Project Design Contract
**Atoms:** Button (5 variants), Input, Card, Badge, Modal, Navigation (sidebar + navbar)
**Tokens:** `--color-primary: #5F197B`, font-display: Plus Jakarta Sans, font-body: Inter 500, spacing 8px grid, radius 4/8/12px, shadow purple-tinted, motion scale(1.02)/scale(0.98)

---

### `screens/shell.jsx` — App Shell
**Atoms:** Nav-item, Nav-section-label, Avatar (md, 28px), Icon (md, 16px), Divider-horizontal, Search-input (topbar), Icon-button (notification bell, help), Page title area
**Tokens:** `--width-sidebar`, `--height-topbar`, `--height-nav-item`, `--color-surface-lowest` (sidebar bg), `--color-on-surface-variant` (nav label)

---

### `screens/landing.jsx` — Landing Page
**Atoms:** Display-text (56px hero), Heading h1/h2, Body-text, Button-primary, Button-outline, Badge (pill trust indicator), Feature-card, Package-card (tes grid), KPI-metric-card (stats strip), Divider-horizontal, Nav-item (topbar links)
**Tokens:** `--font-size-display`, `--color-primary`, `--color-tertiary`, `--r-pill`, `--shadow-2`, gradient radial blob

---

### `screens/auth.jsx` — Login, Register, OTP
**Atoms:** Heading h1, Body-text, Text-input, Password-input, OTP-input, Form-label, CTA-button (full-width), Link (Lupa password? / Daftar sekarang), Card-container
**Tokens:** `--r-md`, `--shadow-1`, `--color-surface-lowest`, `--input-h`, `--color-primary` (focus)

---

### `screens/test-interface.jsx` — Antarmuka Tes
**Atoms:** Timer-display, Progress-bar, Question-indicator-dot, Answer-button (YA/TIDAK), Heading h2 (question text), Body-text (helper), Badge (session ID), Icon-button (pause), Overline (skala label)
**Tokens:** `--color-primary`, `--r-md`, gradient background (FAF8FF → F4F3FC), `--font-size-h1` (question 32px)

---

### `screens/review-detail.jsx` — Detail Review Psikolog
**Atoms:** Score-table-row, T-score/result-bar, Classification-guide, Textarea (kesimpulan klinis), Radio-card (rekomendasi), Button-primary (Simpan), Button-outline (Batal), Character-counter, Heading h2, Breadcrumb-item, Badge (status)
**Tokens:** `--row-h`, `--color-error`, `--color-success`, `--color-warning`, `--r-md`

---

### `screens/admin-dashboard.jsx` — Admin Dashboard
**Atoms:** KPI-metric-card, Heading h2, Body-text, Icon (colored), Empty-state, Badge (status), Link ("Lihat Semua")
**Tokens:** `--color-primary`, `--shadow-1`, `--card-pad`, `--color-surface-lowest`

---

### `screens/design-system.jsx` — Design System Showcase
**Atoms:** Semua atoms ditampilkan (Button semua variants/sizes, Input semua tipe, Badge semua 6 variants, Card, KPI-card, Table, Form, Nav-item-demo)
**Tokens:** Semua color tokens sebagai swatches, semua typography tokens sebagai type scale

---

### `pasted-1777307549577-0` — Landing Page (Hero)
**Atoms:** Display-text (hero headline), Body-text (subtitle), Button-primary ("Mulai Sekarang"), Button-outline ("Login"), Feature-card (3 cards: Valid, Hasil Instan, Data Aman), Package-card (WWQ/PAPIKOSTICK/IST/Kraepelin), Badge (trust indicators)
**Tokens:** `--font-size-display`, `--color-primary`, `--color-tertiary`, `--r-pill`, `--shadow-1`

---

### `pasted-1777307567756-0` — Login Page
**Atoms:** Heading h1 ("Login"), Body-text (deskripsi), Text-input (email — prefilled admin@psikometri.id), Password-input (dengan toggle), Form-label, Link ("Lupa password?"), CTA-button ("Login"), Link ("Belum punya akun? Daftar sekarang"), Card-container
**Tokens:** `--input-h`, `--color-primary`, `--r-sm`, `--shadow-1`

---

### `pasted-1777307587001-0` — Verifikasi OTP
**Atoms:** Heading h1 ("Verifikasi OTP"), Body-text (instruksi), OTP-input (6 kotak), CTA-button ("Verifikasi"), Timer-display ("Kirim Ulang OTP (50s)"), Link ("Kembali"), Card-container
**Tokens:** `--font-mono`, `--input-h`, `--r-sm`, `--color-primary`

---

### `pasted-1777307634014-0` — Admin Dashboard
**Atoms:** KPI-metric-card (5 cards: Revenue, Orders, Users, Pending, Failed), Nav-item (sidebar menu semua role admin), Nav-section-label (MENU UTAMA/KELOLA/PESANAN/SISTEM), Avatar (md, topbar), Heading h2, Badge (status aktif/admin), Info-alert (merah — Perlu Perhatian), Empty-state (Pipeline Funnel)
**Tokens:** `--width-sidebar`, `--height-topbar`, `--color-primary`, `--color-error-bg`, `--card-pad`

---

### `pasted-1777307649476-0` — Manajemen User (Table)
**Atoms:** Page-title, Button-primary (+ Tambah User), Search-input, Select (filter Role/Status), Table-header-cell, Table-body-cell, Table-row (hover), Role-badge (Admin/Publik), Status-badge (Aktif/Nonaktif), Icon-button (edit, delete), Pagination-button, Pagination-info
**Tokens:** `--row-h`, `--color-surface-low` (table header), `--r-pill` (badge), `--font-size-overline`

---

### `pasted-1777307666097-0` — Tambah User Modal
**Atoms:** Modal-backdrop, Heading h2 ("Tambah User Baru"), Icon-button (close ×), Text-input (Nama Lengkap), Text-input (Email), Select (Role, Status), Date-input (Tanggal Lahir), Select (Jenis Kelamin), Password-input, Form-label, Info-note (password sementara), Button-outline ("Batal"), Button-primary ("Simpan")
**Tokens:** `--r-lg` (modal), `--shadow-3`, `--color-primary`, `--input-h`

---

### `pasted-1777307680394-0` — Bank Soal (Table)
**Atoms:** Page-title (dengan subtitle), Button-primary ("+ Tambah Tipe Soal"), Search-input, Select (filter status), Table-header-cell, Table-body-cell, Status-badge (Aktif/Nonaktif), Test-code-badge (kode tes), Icon-button (edit, delete), Pagination-info
**Tokens:** `--row-h`, `--color-primary`, `--r-pill`, `--font-size-overline`

---

### `pasted-1777307695605-0` — Tambah Jenis Tes
**Atoms:** Page-title, Text-input (Nama Tes, Kode, Slug), Select (Kategori, Tipe Scoring), Textarea (Deskripsi), Rich-text-toolbar-button (Bold/Italic/List), Textarea (Instruksi — rich text), Toggle/switch (Status Aktif), Number-input (Estimasi Waktu), Form-label, Required-indicator, Button-outline ("Batal"), Button-primary ("Simpan")
**Tokens:** `--color-surface-low` (rich text bg), `--input-h`, `--r-sm`, `--color-primary`

---

### `pasted-1777307718285-0` — Tambah Lajur Kraepelin
**Atoms:** Breadcrumb-item, Page-title, Text-input (No. Lajur), Text-input (Keterangan optional), Textarea (Data Angka — monospace), Form-label, Form-helper-text, Character-counter ("0 angka terdeteksi"), Info-note, Button-outline ("Batal"), Button-primary ("Simpan")
**Tokens:** `--font-mono`, `--r-sm`, `--color-on-surface-muted`

---

### `pasted-1777307739450-0` — Tambah Soal PAPIKOSTICK
**Atoms:** Breadcrumb-item, Page-title, Number-input (Nomor Soal), Toggle/switch (Status), Textarea (Pernyataan A), Textarea (Pernyataan B), Character-counter, Select (Faktor A, Faktor B), Factor-selector-button (A/B), Form-label, Section-label ("Informasi Soal", "Konten Soal", "Mapping Faktor"), Button-outline, Button-primary
**Tokens:** `--color-surface-low` (textarea bg), `--r-sm`, `--r-pill` (factor button), `--color-primary`

---

### `pasted-1777307760574-0` — Tambah Soal WWQ
**Atoms:** Breadcrumb-item, Page-title, Number-input (Nomor Soal), Select (Tipe Scoring), Toggle/switch (Status), Textarea (Pertanyaan/Statement), Checkbox-scale-grid (Skala 1–8, 2 columns), Character-counter, Info-note, Button-outline, Button-primary
**Tokens:** `--color-surface-low`, `--r-sm`, `--color-primary`, grid 2-column

---

### `pasted-1777307782005-0` — Tambah Soal IST - SE (Sentence Completion)
**Atoms:** Breadcrumb-item, Page-title, Heading h3 ("Informasi Soal"), Text-input (No. Soal), Textarea (Pertanyaan/Statement), Upload-dropzone (gambar soal), Answer-option-row (A/B/C/D/E — pill + text input), Select (Jawaban Benar), Character-counter, Form-label, Button-outline, Button-primary
**Tokens:** `--r-md` (dropzone), `--color-surface-low` (dropzone bg), `--r-pill` (letter pill A–E), `--color-primary`

---

### `pasted-1777307807434-0` — Tambah Paket Tes
**Atoms:** Breadcrumb-item, Page-title, Text-input (Nama Paket, Kode), Text-input (Slug — auto-generated, disabled), Text-input (Nama Laporan), Select (Template Laporan), Textarea (Deskripsi), Character-counter, Currency-input (Harga IDR), Toggle/switch (Status Aktif), Form-label, Checkbox-with-label (daftar tes), Status-badge (Psikometri/Kepribadian/Kecerdasan), Button-outline, Button-primary ("Simpan Paket")
**Tokens:** `--input-h`, `--color-surface-low` (disabled input), `--r-sm`, `--color-primary`

---

### `pasted-1777307821966-0` — Biaya Tambahan
**Atoms:** Page-title, Status-toggle-row (PPN: off/on), Number-input (Tarif PPN %), Status-toggle-row (Biaya Layanan: on), Select (Tipe Biaya), Currency-input (Nilai Biaya), Currency-input (Batas Bawah/Atas), Info-note, Heading h3 ("Biaya Transaksi"), Button-primary ("+ Tambah Metode"), Table-header-cell, Table-body-cell, Table-row, Toggle/switch (Aktif — per row), Icon-button (edit, delete), Heading h3 ("Contoh Rincian Pembayaran"), Divider-horizontal
**Tokens:** `--row-h`, `--color-primary`, `--color-on-surface`, `--r-sm`

---

### `pasted-1777307840596-0` — Voucher Management + Modal Buat Voucher
**Atoms:** Page-title, KPI-metric-card (Total/Aktif/Digunakan/Cukup Aktif), Table-header-cell, Table-body-cell, Status-badge (Aktif/Nonaktif/Stacking), Modal-backdrop, Heading h2 ("Buat Voucher"), Icon-button (close), Text-input (Kode Voucher), Select (Tipe Perhitungan, Stacking), Number-input (Nilai, Maks Diskon, Kuota), Date-range-picker, Toggle/switch (Aktif), Button-outline ("Batal"), Button-primary ("Buat Voucher +")
**Tokens:** `--r-lg` (modal), `--shadow-3`, `--color-primary`, `--r-pill`, `--input-h`

---

### `pasted-1777307866351-0` — Tambah Template Laporan
**Atoms:** Breadcrumb-item, Page-title, Card-container, Form-label, Text-input (Nama Template), Textarea (Deskripsi), Toggle/switch (Jadikan default), Heading h3 ("Sections"), Button-outline ("+ Tambah Section"), Section-accordion (SECTION 1 + chevron ↑↓ + delete), Text-input (Judul ID/EN), Select (Tipe Section, Test Type), Link ("+ Tambah Aspek"), Empty-state ("Belum ada aspek"), Button-outline ("Batal"), Button-primary ("Simpan Template")
**Tokens:** `--r-md`, `--shadow-1`, `--color-primary`, `--color-surface-low` (section accordion bg)

---

### `pasted-1777307877860-0` — Pesanan B2B (List)
**Atoms:** Page-title, KPI-metric-card (Total Revenue, Total Order, Rata-rata, Menunggu Bayar), Select (filter Company/Paket/Tipe), Status-badge (COMPLETED/CANCELLED/EXPIRED/MENUNGGU), Table-header-cell, Table-body-cell, Table-row, Pagination-button, Export-button, Icon-button (view)
**Tokens:** `--row-h`, `--color-primary`, `--color-error`, `--color-success`, `--color-warning`

---

### `pasted-1777307890711-0` — B2B Order Detail
**Atoms:** Breadcrumb-item, Mono-text (order ID), Badge (Admin, Selesai), Heading h2, Divider-horizontal, Body-text (label + value pairs), Currency-display, Search-input, Table-header-cell, Table-body-cell, Status-badge (Sedang Mengerjakan), Icon-button (view), Pagination-info, Export-button ("Export CSV")
**Tokens:** `--font-mono`, `--row-h`, `--color-success`, `--color-warning`, `--r-pill`

---

### `pasted-1777307906012-0` — Public Order Detail
**Atoms:** Breadcrumb-item, Mono-text (order ID), Badge (PUBLIC, Selesai), Heading h2, Body-text, Currency-display, Card-container (Hasil Asesmen), Icon (file/laporan), Body-text ("Laporan tersedia"), Button-primary ("Lihat Laporan"), Status-badge (Selesai)
**Tokens:** `--font-mono`, `--r-md`, `--shadow-1`, `--color-primary`, `--color-success`

---

### `pasted-1777307918867-0` — Manajemen Pembayaran
**Atoms:** Page-title, KPI-metric-card (Total Revenue, Pending, Completed, Failed), Search-input, Select (filter Tipe/Status), Date-input (range filter), Table-header-cell, Table-body-cell, Status-badge (warna bervariasi), Export-button, Icon-button (view)
**Tokens:** `--row-h`, `--color-primary`, `--color-error`, `--color-warning`, `--color-success`

---

### `pasted-1777307931003-0` — Log Aktivitas
**Atoms:** Page-title (dengan subtitle), Search-input, Select (filter Role), Table-header-cell (Aktivitas/Aktor/Role/IP Address/Waktu), Table-body-cell, Table-row (hover), Mono-text (aktivitas type: USER_LOGIN), Role-badge, Pagination-button, Pagination-info
**Tokens:** `--font-mono` (activity type), `--row-h`, `--r-pill`, `--color-primary`

---

### `pasted-1777307946451-0` — Profil Saya
**Atoms:** Breadcrumb-item, Page-title (dengan subtitle), Card-container (Informasi Akun), Icon (shield), Form-label, Body-text (email + role + status), Status-badge ("Lengkap" — green), Card-container (Data Pribadi), Icon (person), Text-input (Nama Lengkap), Password-input (NIK Saat Ini — disabled), Text-input (NIK Baru), Form-helper-text, Button-outline ("Batal"), Button-primary ("Simpan Perubahan")
**Tokens:** `--r-md`, `--shadow-1`, `--color-success`, `--color-on-surface-muted`, `--input-h`

---

### `pasted-1777307979392-0` — Antrian Review (Psikolog)
**Atoms:** Page-title (dengan subtitle), KPI-metric-card (Perlu Direview / Sedang Direview / Menunggu TTD / Selesai) dengan ikon warna berbeda, Search-input, Select (filter Status), Table-header-cell (# / Nama / Paket / Kode / Status / Tanggal / Aksi), Table-body-cell, Status-badge (MENUNGGU REVIEW / SELESAI), Icon-button (view, download), Pagination-button, Pagination-info
**Tokens:** `--row-h`, `--color-primary`, `--color-warning` (menunggu), `--r-pill`, `--shadow-1`

---

### `pasted-1777307995739-0` — Detail Review (WWQ Scoring — Psikolog)
**Atoms:** Breadcrumb-item, Badge (MENUNGGU REVIEW), Tab-filter ("Woodwards Word Questionnaire" / "Summary Final"), Card-container (hasil tes header: judul + kode + klasifikasi), Score-table-row (8 skala: Obsesi/Impulsif/dll + formula + nilai + % + kategori-badge), Classification-guide (Normal/Kecenderungan/Pathologis range), KPI-metric-card (Total Nilai, Nilai Akhir, Status)
**Tokens:** `--row-h`, `--color-success` (Normal), `--color-warning` (Kecenderungan), `--color-error` (Pathologis), `--r-pill`

---

### `pasted-1777308008115-0` — Summary Final / Kesimpulan Klinis (Psikolog)
**Atoms:** Breadcrumb-item, Badge (MENUNGGU REVIEW), Tab-filter (active: "Summary Final"), Heading h2 ("Kesimpulan Klinis"), Body-text (subtitle), Heading h3 ("Kategori Hasil Screening"), Radio-card (Tahapan Normal / Kecenderungan Gangguan / Gangguan — bilingual), Info-note ("Perubahan belum disimpan"), Textarea (Kesimpulan Kategori), Character-counter, Heading h3 ("Rekomendasi Akhir"), Checkbox-with-label (Layak Disarankan / Layak Dipertimbangkan / Tidak Layak)
**Tokens:** `--color-primary` (selected radio), `--color-surface-low` (radio card bg), `--r-md`, `--color-warning`

---

### `pasted-1777308120168-0` — B2B Dashboard
**Atoms:** Page-title (greeting "Selamat datang kembali"), Nav-item (sidebar B2B: Dashboard/Paket Asesmen/Monitoring/Riwayat Transaksi), KPI-metric-card (Total Order / Order Aktif / Total Peserta / Belum Kerjakan — 4 warna berbeda), Table-header-cell, Table-body-cell, Status-badge (COMPLETED/CANCELLED/EXPIRED), Icon-button (view), Link ("Lihat Semua →"), Package-card (Paket Asesmen grid: nama + badge tes + harga + CTA)
**Tokens:** `--color-primary`, `--color-error` (EXPIRED), `--color-success` (COMPLETED), `--shadow-1`, `--card-pad`

---

### `pasted-1777308133591-0` — B2B Paket Asesmen (Catalog)
**Atoms:** Page-title (dengan subtitle), Category-tab-filter (Semua / Intelligence / Personality / Psychometric), Search-input, Package-card (× 4: CPMI/SKOLASTIK/KRAEPELIN/PAPIKOSTICK — judul + deskripsi + test-code-badge + harga + Button "Pilih Paket"), Bestseller-badge ("Terlaris" — gold overlay)
**Tokens:** `--r-pill` (category tab), `--r-md` (card), `--color-tertiary` (bestseller), `--shadow-1`, `--color-primary` (CTA button)

---

### `pasted-1777308150692-0` — B2B Buat Order Baru (Step 1)
**Atoms:** Page-title ("Buat Order Baru"), Step-indicator (3 langkah: Detail Order → Review & Biaya → Pembayaran), Heading h2 ("Langkah 1: Detail Order"), Link (nama paket — primary color), Heading h3 ("Tes dalam Paket"), Card-container (test item dengan number + nama + test-code-badge), Heading h3 ("Tujuan Pemeriksaan"), Textarea (dengan min/max helper), Form-helper-text, Heading h3 ("Jumlah Peserta"), Number-stepper (−/1/+), Button-primary ("Lanjut ke Review →")
**Tokens:** `--color-primary`, `--r-pill` (test badge), `--r-sm` (stepper), `--color-surface-low` (textarea bg), `--input-h`

---

### `pasted-1777308164971-0` — B2B Monitoring Peserta
**Atoms:** Page-title (dengan subtitle), Button-outline ("Download Semua Terpilih"), KPI-metric-card (Total Peserta / Sudah Kerjakan / Belum Kerjakan / Belum Daftar / Sudah Review — 5 warna), Heading h3 ("Filter Data"), Icon (filter), Select (Pilih Order, Status Peserta), Button-primary ("Download Hasil"), Heading h3 ("Statistik Peserta"), KPI-metric-card (4 kecil: Sedang Proses/Selesai/Gagal), Heading h3 ("Daftar Peserta"), Table-header-cell, Table-body-cell, Status-badge (Sedang Mengerjakan / Menunggu Review), Pagination-button
**Tokens:** `--color-primary`, `--color-success` (Sudah Kerjakan), `--color-warning` (Belum/Menunggu), `--shadow-1`, `--row-h`

---

### `pasted-1777308199399-0` — Public User Dashboard
**Atoms:** Welcome-banner ("Halo, Jane Doe"), KPI-metric-card (Total Tes / Selesai / Menunggu / Assignment — 4 warna, dengan trend +5), Card-container ("Beli Paket Asesmen" CTA), Button-primary ("Buat Pesanan +"), Nav-item (sidebar publik: Dashboard/Paket/Riwayat/Transaksi), Package-card (Paket Asesmen grid), Heading h3 ("Riwayat Asesmen"), Table-body-cell (riwayat list), Status-badge (SELESAI), Icon-button (view)
**Tokens:** `--color-primary`, `--shadow-1`, `--card-pad`, `--r-md`, `--color-success`

---

### `pasted-1777308216107-0` — Public User Paket Asesmen
**Atoms:** Page-title (dengan subtitle), Category-tab-filter (Semua / Intelligence / Personality / Psychometric), Search-input, Card-container ("Sesi Tes Aktif" — bordered warning), Package-card (2 card Gagal dengan Button "Mulai Tes Baru"), Status-badge (Gagal — red), Package-card (catalog 4 cards — normal), Bestseller-badge ("Terlaris"), Test-code-badge (WWQ/IST/KRAEPELIN/PAPIKOSTICK), Body-text (durasi "~20 menit"), Button-primary ("Mulai Tes")
**Tokens:** `--color-error` (Gagal badge), `--color-tertiary` (Terlaris), `--r-md`, `--shadow-1`, `--color-primary`

---

### `pasted-1777308230415-0` — Public User Paket Detail
**Atoms:** Breadcrumb-item, Page-title (nama paket), Body-text (deskripsi singkat), Heading h3 ("Tes dalam Paket"), Card-container (tes item: icon + nama + test-code-badge + jumlah soal + estimasi waktu), Link-text (Deskripsi, Instruksi), Heading h3 ("Fitur Paket"), Feature-card (5 fitur: Scoring otomatis / Hasil instant / Resume capability / Validasi psikolog / Soal Terbaru), Heading h3 ("Harga Paket"), Currency-display (large primary), Button-primary ("Mulai Tes →"), Trust-indicator (Garansi 100% / Hasil 1x24 jam / 10.000+ Pengguna), Info-alert ("Tips: Anda dapat mengerjakan...")
**Tokens:** `--font-size-h1` (harga), `--color-primary`, `--r-md`, `--shadow-1`

---

### `pasted-1777308242389-0` — Public User Riwayat Asesmen
**Atoms:** Page-title (dengan subtitle), Stat-summary-block (3 horizontal: Total Tes / Menunggu / Selesai — warna berbeda), Search-input, Icon-button (Pilih Tanggal — calendar icon), Table-header-cell (Nama Tes / Penyedia / Tanggal Mulai / Tanggal Selesai / Status / Aksi), Table-body-cell, Table-row (link: Nama Tes primary color), Status-badge (SELESAI), Icon-button (download, view)
**Tokens:** `--row-h`, `--color-primary`, `--color-success`, `--r-pill`, `--shadow-1`

---

### `pasted-1777308463759-0` — Public User Sesi Tes Saya
**Atoms:** Breadcrumb-item, Page-title ("Sesi Tes Saya"), Stat-summary-block (Ringkasan: 7 Total / 4 Selesai / 2 Belum / 1 Expired — horizontal), Progress-bar (4 dari 7 tes selesai = 57%), Heading h3 ("Daftar Tes"), Session-item (icon status circle + nama tes + test-code-badge + nama paket + tanggal), Status-badge (BELUM / SELESAI / EXPIRED), Button-outline ("Mulai Tes"), Button-primary (dalam session item)
**Tokens:** `--color-primary` (SELESAI badge), `--color-error` (EXPIRED badge), `--color-surface-low` (BELUM badge), `--r-pill`, `--shadow-1`

---

*Dibuat: 2026-05-01 | Sumber: 34 screenshot uploads + 6 screen JSX + styles.css + design-spec.md*
