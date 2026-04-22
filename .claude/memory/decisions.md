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

---

_Mulai log decisions kamu di bawah ini:_
