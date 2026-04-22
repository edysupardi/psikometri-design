# Design DNA Extraction — Wise Design System

> Extracted from: `wise-design-system.md`
> Purpose: Reference & inspiration untuk Psikometri design system
> Date: 2026-04-23

---

## Core Identity

**Personality**: Bold, confident, "money without borders" — fintech yang menantang bank tradisional
**Anti-tone**: Tidak corporate, tidak biru-biru banking, tidak konservatif
**Visual anchor**: Lime Green (#9fe870) sebagai protest against traditional finance

---

## Design DNA (5 Prinsip Utama)

### 1. Extreme Typography as Identity
- Weight 900 (black) untuk display — bukan sekedar bold, tapi stamped/pressed
- Line-height 0.85 — ultra-tight, letters overlap, billboard-scale
- OpenType `"calt"` di semua text — contextual alternates mandatory
- **Takeaway untuk Psikometri**: Typography bisa jadi identity marker, bukan hanya readability tool

### 2. Accent-First Color System
- Near-black canvas (#0e0f0c) + lime green accent (#9fe870) — hanya 2 warna dominan
- Green HANYA untuk CTA/button — tidak untuk background besar
- Dark green (#163300) sebagai text di atas green — nature-inspired contrast
- **Takeaway untuk Psikometri**: HIMPSI purple (#5F197B) bisa dipakai dengan filosofi serupa — accent-first, bukan flood

### 3. Physical Interaction (Scale Animation)
- Hover: `scale(1.05)` — button tumbuh secara fisik
- Active: `scale(0.95)` — button tertekan
- Bukan color change — tapi perubahan ukuran
- **Takeaway untuk Psikometri**: Scale animation bisa diadopsi untuk button states — lebih premium dari sekadar color shift

### 4. Minimal Elevation
- Ring shadow only: `rgba(14,15,12,0.12) 0px 0px 0px 1px`
- Tidak ada drop shadow tradisional
- Depth dari kontras warna, bukan shadow
- **Takeaway untuk Psikometri**: Shadow-sm yang sudah ada (`rgba(95,25,123,0.05)`) sudah sejalan — pertahankan minimal

### 5. Pill + Large Radius Duality
- Buttons: 9999px (pill) — rounded maksimal
- Cards: 30px–40px — sangat rounded tapi bukan pill
- Inputs: 10px — standard
- **Takeaway untuk Psikometri**: Psikometri pakai radius-md (8px) yang lebih konservatif — sesuai personality "trustworthy"

---

## Token Mapping: Wise → Psikometri

| Kategori | Wise | Psikometri | Kompatibel? |
|----------|------|------------|-------------|
| Primary color | #9fe870 (lime green) | #5F197B (HIMPSI purple) | ❌ Beda brand |
| Background | #ffffff / off-white | #ffffff | ✅ Sama |
| Text primary | #0e0f0c (near-black) | #1A0A2E (near-black purple) | ✅ Konsep sama |
| Button radius | 9999px (pill) | 8px (radius-md) | ⚠️ Beda personality |
| Card radius | 30–40px | 12px (radius-lg) | ⚠️ Wise lebih bold |
| Shadow | Ring only | Purple-tinted minimal | ✅ Filosofi sama |
| Base spacing | 8px | 8px | ✅ Identik |
| Body font | Inter 600 | Inter 400/500 | ⚠️ Wise lebih bold |
| Display font | Wise Sans 900 | Plus Jakarta Sans | ❌ Font berbeda |
| Hover animation | scale(1.05) | Belum defined | 💡 Bisa diadopsi |

---

## Yang Bisa Diadopsi Psikometri

1. **Scale animation** — `scale(1.02)` atau `scale(1.03)` untuk button hover (lebih subtle dari Wise's 1.05)
2. **Accent-first philosophy** — purple hanya untuk CTA dan accent, bukan flood
3. **Ring shadow** — sudah ada di spec, pertahankan
4. **"calt" OpenType** — bisa diaktifkan di Plus Jakarta Sans dan Inter
5. **Confident body weight** — pertimbangkan Inter 500 (medium) sebagai default, bukan 400

## Yang Tidak Kompatibel

1. **Lime green** — terlalu playful untuk Psikometri (anti-tone: tidak playful)
2. **Pill buttons** — terlalu casual, Psikometri butuh radius-md yang lebih trustworthy
3. **0.85 line-height** — terlalu aggressive untuk konteks asesmen psikologi
4. **Weight 900 display** — Plus Jakarta Sans bisa di 700–800, tidak perlu 900
5. **40px card radius** — terlalu rounded untuk personality premium/trustworthy

---

## Inspirasi untuk Psikometri

> Wise membuktikan bahwa **accent color yang kuat + near-black canvas + minimal shadow** bisa menciptakan identitas visual yang sangat kuat tanpa banyak warna. Psikometri bisa mengadopsi filosofi ini dengan HIMPSI purple sebagai anchor — bukan lime green, tapi dengan keyakinan yang sama.

---

_Extracted by: Claude × Edy_
_Source: wise-design-system.md_
