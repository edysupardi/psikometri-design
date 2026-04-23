# Design Decisions Log

> Catat semua keputusan desain di sini — termasuk **alasannya** dan **alternatif yang ditolak**.
> Ini mencegah Claude (dan kamu) membuat keputusan yang sama berulang kali.

Format entry:
```
## [YYYY-MM-DD] Judul Keputusan
**Keputusan**: apa yang diputuskan
**Alasan**: kenapa
**Alternatif yang ditolak**: opsi lain yang dipertimbangkan
**Dampak**: komponen/area yang terpengaruh
```

---

## [2026-04-22] Color Palette — HIMPSI Purple Anchor
**Keputusan**: Primary color #5F197B (HIMPSI purple), gold accent #D4A017, light bg #FFFFFF, surface #FAF5FF
**Alasan**: HIMPSI adalah organisasi profesi psikolog Indonesia — warna ini memberikan legitimasi dan trust. Gold accent untuk kesan premium. Purple tint di surface/border/text untuk kohesi visual.
**Alternatif yang ditolak**: Blue-based palette (terlalu generic), dark mode first (terlalu berani untuk target user umum)
**Dampak**: Semua komponen, seluruh color token

## [2026-04-22] Typography — Plus Jakarta Sans + Inter
**Keputusan**: Heading: Plus Jakarta Sans, Body: Inter, Mono: JetBrains Mono
**Alasan**: Plus Jakarta Sans dibuat oleh Tokotype (Indonesia) — relevan untuk app lokal. Geometric dan premium di ukuran besar. Inter adalah standar emas UI readability.
**Alternatif yang ditolak**: Serif heading (terlalu formal), system fonts (kurang premium)
**Dampak**: Semua text rendering, typography scale

## [2026-04-22] Spacing — Balanced 8px Base
**Keputusan**: Base unit 8px, balanced density
**Alasan**: Psikometri punya dua konteks (landing + dashboard) — balanced cocok untuk keduanya
**Alternatif yang ditolak**: 4px dense (terlalu padat untuk user publik), 12px spacious (terlalu longgar untuk dashboard)
**Dampak**: Semua layout, spacing scale

## [2026-04-22] Shape — Slightly Rounded
**Keputusan**: radius-sm 4px, radius-md 8px, radius-lg 12px
**Alasan**: Premium + trustworthy — tidak terlalu kaku (sharp), tidak terlalu playful (pill)
**Alternatif yang ditolak**: Sharp/angular (terlalu technical), very rounded (terlalu casual)
**Dampak**: Button, Card, Input, Modal, semua interactive elements

## [2026-04-22] Navigation — Split Pattern
**Keputusan**: Landing (pre-login) pakai navbar top saja. Dashboard (post-login) pakai navbar top + sidebar + bottom nav mobile.
**Alasan**: Landing page harus clean dan fokus ke conversion. Dashboard butuh navigasi lengkap untuk multi-role (publik, B2B, psikolog).
**Alternatif yang ditolak**: 3 pattern untuk semua halaman (overkill untuk landing)
**Dampak**: Navigation component, layout structure

## [2026-04-22] Mode — Light Mode First
**Keputusan**: Fokus light mode dulu, dark mode menyusul setelah light mode final
**Alasan**: Prioritas — pastikan satu mode solid sebelum convert
**Alternatif yang ditolak**: Dark mode first, simultaneous development
**Dampak**: Semua color token, theming strategy

## [2026-04-22] Tooling — Pencil via MCP
**Keputusan**: Semua design dibuat menggunakan Pencil (.pen files) via MCP
**Alasan**: User preference — workflow terintegrasi dengan Claude Code
**Alternatif yang ditolak**: Manual design di Figma
**Dampak**: Seluruh design workflow

## [2026-04-23] Button Hover — Scale Animation
**Keputusan**: Adopsi scale animation untuk button hover: `scale(1.02)` hover, `scale(0.98)` active
**Alasan**: Lebih premium dari sekadar color shift. Wise membuktikan physical interaction meningkatkan perceived quality. Psikometri pakai nilai lebih subtle (1.02 vs Wise's 1.05) agar tetap trustworthy, tidak playful.
**Alternatif yang ditolak**: Color-only hover (terlalu flat), scale(1.05) Wise (terlalu bouncy untuk konteks psikologi)
**Dampak**: Semua Button variants

## [2026-04-23] OpenType "calt" — Contextual Alternates
**Keputusan**: Aktifkan `font-feature-settings: "calt"` di semua text — Plus Jakarta Sans dan Inter
**Alasan**: Wise menggunakan ini di semua text dan hasilnya lebih polished. Plus Jakarta Sans dan Inter keduanya support "calt". Zero cost, quality improvement.
**Alternatif yang ditolak**: Tidak pakai (default browser behavior — missed opportunity)
**Dampak**: Semua typography token, semua komponen

## [2026-04-23] Body Font Weight — Inter 500
**Keputusan**: Body default Inter weight 500 (medium), bukan 400 (regular)
**Alasan**: Wise pakai Inter 600 sebagai default — terlalu bold untuk konteks asesmen. Tapi 400 terlalu ringan untuk UI yang perlu terasa confident dan premium. 500 adalah middle ground yang tepat untuk Psikometri.
**Alternatif yang ditolak**: Inter 400 (terlalu ringan, kurang premium), Inter 600 (terlalu bold untuk body text asesmen)
**Dampak**: `--font-body` token, semua body text

## [2026-04-23] Accent-First Color Philosophy — Dikonfirmasi
**Keputusan**: HIMPSI purple (#5F197B) digunakan sebagai accent/CTA saja — bukan flood ke background besar
**Alasan**: Wise membuktikan accent-first (lime green hanya di button/CTA) menciptakan identitas visual kuat tanpa overwhelming. Psikometri mengadopsi filosofi ini dengan purple sebagai anchor.
**Alternatif yang ditolak**: Purple sebagai dominant background color (terlalu heavy, mengurangi readability)
**Dampak**: Semua color usage rules, component styling

## [2026-04-23] Icon Library — Lucide dengan Fallback
**Keputusan**: Gunakan lucide sebagai icon library utama. Beberapa nama icon berbeda dari ekspektasi: `check-circle` → `circle-check`, `alert-circle` → `circle-x`, `clock` → `timer`.
**Alasan**: Lucide adalah icon set yang tersedia di Pencil. Nama icon tidak selalu intuitif — perlu dicek saat generate.
**Alternatif yang ditolak**: Material Symbols (lebih verbose), Feather (subset lebih kecil)
**Dampak**: Semua komponen yang menggunakan icon

## [2026-04-23] Footer Background — Near-Black Purple
**Keputusan**: Footer menggunakan #1A0A2E (near-black purple) sebagai background, bukan hitam murni
**Alasan**: Konsisten dengan color-text-base token. Memberikan kesan premium dan kohesi dengan brand purple. Lebih hangat dari #000000.
**Alternatif yang ditolak**: #000000 (terlalu harsh), #1F1F1F (tidak ada purple undertone)
**Dampak**: Footer organism

## [2026-04-23] Design System File — admin-panel-2/design-system.pen
**Keputusan**: Design system disimpan di `admin-panel-2/design-system.pen`
**Alasan**: User menyimpan file dari sesi generate ke lokasi ini
**Dampak**: Semua referensi ke design system components harus menggunakan file ini

---

_Mulai log decisions kamu di bawah ini:_
