# /extract-design — Extract Design Reference ke File .md

Command ini menganalisis referensi visual dari berbagai sumber dan menghasilkan
file `.md` yang berisi design system lengkap — siap digunakan oleh `/generate-design-system`.

Output file `.md` ini adalah "DNA" dari sebuah design — mencakup semua yang dibutuhkan
untuk mereproduksi atau terinspirasi dari visual tersebut secara konsisten.

---

## Cara Pakai

```
/extract-design
```

Claude akan menanyakan sumber referensi, lalu menjalankan ekstraksi.

---

## Instruksi untuk Claude

### LANGKAH 0 — Tanya Sumber Input

Tanyakan ke user:

```
Halo! Aku akan bantu extract design system dari referensi yang kamu punya.

Ada 3 cara untuk memulai — pilih yang paling sesuai:

A) 🌐 URL Website
   Kasih aku URL website yang ingin kamu jadikan referensi.
   Aku akan browse dan analisis design-nya secara langsung.

B) 🖼️ Screenshot / Gambar
   Upload screenshot atau gambar UI yang ingin kamu analisis.
   Bisa dari Figma, website, app, atau moodboard.

C) 💬 Deskripsi + Preferensi
   Ceritakan seperti apa design yang kamu inginkan.
   Contoh: "seperti Linear.app tapi lebih hangat, dengan warna primary biru navy"
   Aku akan interpret dan build design DNA-nya bersamamu.

Mau pakai cara yang mana?
```

---

### LANGKAH 1A — Jika URL

```
[Fetch URL yang diberikan]

Analisis halaman tersebut secara menyeluruh:

VISUAL ANALYSIS:
- Warna dominan, accent, background, text colors → catat hex/rgb
- Font families yang digunakan → identifikasi nama, weight, size
- Spacing rhythm → estimasi base unit dan scale
- Radius system → dari elemen button, card, input
- Shadow system → minimal, medium, dramatic?
- Animation cues → ada hover state? transition?

PERSONALITY ANALYSIS:
- Tone keseluruhan: minimal / bold / playful / premium / technical / dll
- Target audience yang tercermin dari design
- 3 kata yang paling mendeskripsikan "feel" visual ini
- Apa yang paling memorable / distinctive?

COMPONENT INVENTORY:
- Button styles yang ada
- Card/container styles
- Navigation pattern
- Form elements
- Typography hierarchy yang terlihat

Kemudian lanjut ke LANGKAH 2.
```

---

### LANGKAH 1B — Jika Screenshot/Gambar

```
[Analisis gambar yang diupload]

Lakukan visual analysis mendalam:

WARNA:
- Identifikasi semua warna yang terlihat
- Tentukan: mana primary, secondary, accent, background, text?
- Estimasi hex code seakurat mungkin dari visual

TIPOGRAFI:
- Identifikasi font families (jika bisa dikenali)
- Estimasi size, weight, line-height dari proporsi visual
- Catat hierarchy: heading vs body vs caption

SPACING & SHAPE:
- Estimasi base unit dari jarak antar elemen
- Identifikasi radius pattern: sharp, rounded, pill?
- Shadow: ada atau tidak? Seberapa kuat?

PERSONALITY:
- Tone visual: 3 kata deskripsi
- Apa yang paling distinctive?

Setelah analisis, konfirmasi ke user:
"Berdasarkan analisis visual, ini yang aku tangkap: [ringkasan].
Ada yang perlu dikoreksi sebelum aku generate file .md-nya?"

Kemudian lanjut ke LANGKAH 2.
```

---

### LANGKAH 1C — Jika Deskripsi

Jalankan sesi interview singkat — maksimal 4 pertanyaan, satu per satu:

```
PERTANYAAN 1 — Personality
"Deskripsikan feel yang kamu inginkan.
Contoh referensi: 'seperti Stripe tapi lebih playful' / 'premium fintech, clean, trustworthy'
Atau langsung sebutkan: bold, minimal, warm, technical, dll."

PERTANYAAN 2 — Warna
"Warna apa yang ingin jadi brand identity?
Bisa:
- Hex code langsung: #5F197B
- Nama warna: 'biru navy gelap', 'hijau lime cerah'
- Referensi brand: 'seperti warna Notion' / 'seperti Spotify'
Background-nya terang atau gelap?"

PERTANYAAN 3 — Tipografi
"Ada preferensi font?
Kalau tidak ada, deskripsikan karakternya:
'geometric dan modern' / 'editorial dan serius' / 'friendly dan rounded'
Aku akan rekomendasikan pairing yang sesuai."

PERTANYAAN 4 — Shape & Density
"Dua hal terakhir:
- Shape: sharp/angular | slightly rounded | very rounded/pill
- Density: spacious | balanced | compact"
```

Setelah 4 pertanyaan → synthesize dan lanjut ke LANGKAH 2.

---

### LANGKAH 2 — Generate File .md

Setelah data terkumpul dari salah satu sumber di atas, generate file `.md` dengan struktur berikut:

```markdown
# Design System: [NAMA / INSPIRASI]

## 1. Visual Theme & Atmosphere
[Deskripsi naratif tentang tone, personality, dan feel keseluruhan.
Jelaskan "kenapa" di balik pilihan visual — bukan hanya "apa"-nya.]

## 2. Color Palette & Roles
### Primary Brand
- **[Nama]** (`#hex`): [peran / penggunaan]
...

### Semantic
- **Positive**: `#hex` — success states
- **Negative**: `#hex` — error/destructive
- **Warning**: `#hex` — warning states
- **Info**: `#hex` — informational

### Neutral
- **[Nama]**: `#hex` — [peran]
...

## 3. Typography Rules
### Font Families
- **Display**: [font name], fallback: [fallback]
- **Body/UI**: [font name], fallback: [fallback]
- **Mono** (jika ada): [font name]

### Hierarchy
| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | ... | ...px | ... | ... | ... | ... |
| Display LG | ... | ... | ... | ... | ... | ... |
| Heading 1 | ... | ... | ... | ... | ... | ... |
| Heading 2 | ... | ... | ... | ... | ... | ... |
| Heading 3 | ... | ... | ... | ... | ... | ... |
| Body LG | ... | ... | ... | ... | ... | ... |
| Body MD | ... | ... | ... | ... | ... | ... |
| Body SM | ... | ... | ... | ... | ... | ... |
| Caption | ... | ... | ... | ... | ... | ... |

### Principles
[3-5 prinsip tipografi yang distinctive dari design ini]

## 4. Component Stylings

### Buttons
[Primary, Secondary, Ghost, Danger — masing-masing: bg, text, padding, radius, hover state]

### Cards & Containers
[Radius, border, shadow, hover behavior]

### Navigation
[Pattern, hover state, active state]

### Form Inputs
[Border, radius, focus state, error state]

## 5. Layout Principles
### Spacing System
- Base unit: [Xpx]
- Scale: [list nilai]

### Border Radius Scale
[list: nama → nilai → use case]

## 6. Depth & Elevation
| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Default |
| ... | ... | ... |

### Shadow Philosophy
[Deskripsi pendekatan shadow: minimal ring / medium drop / dramatic]

## 7. Do's and Don'ts
### Do
- [rule 1]
- [rule 2]
...

### Don't
- [rule 1]
- [rule 2]
...

## 8. Responsive Behavior
### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | ... |
| Tablet | 768–1024px | ... |
| Desktop | >1024px | ... |

## 9. Agent Prompt Guide
### Quick Color Reference
[ringkasan 5-7 warna utama dengan hex dan perannya]

### Example Component Prompts
[2-3 contoh prompt konkret untuk generate komponen dari design system ini]

### Iteration Guide
[5 prinsip utama yang harus selalu diingat saat iterasi design ini]
```

---

### LANGKAH 3 — Konfirmasi & Simpan

Setelah file `.md` di-generate:

```
Tampilkan preview singkat (bagian 1 dan 2 saja) dan tanya:
"Apakah design DNA ini sudah sesuai dengan yang kamu bayangkan?
Ada yang perlu diubah sebelum disimpan?"

Setelah konfirmasi → simpan ke:
.claude/references/[nama-project]-design-system.md

Kemudian informasikan:
"File tersimpan di .claude/references/. 
Sekarang kamu bisa jalankan /generate-design-system [nama-file] 
untuk auto-generate semua layer ke Pencil."
```

---

## Tips

- Untuk mode URL: semakin lengkap halaman yang di-browse (homepage + component page jika ada), semakin akurat hasilnya
- Untuk mode gambar: upload beberapa screenshot dari halaman berbeda untuk hasil lebih lengkap
- Untuk mode deskripsi: semakin spesifik referensi yang diberikan, semakin sedikit iterasi yang dibutuhkan
- File `.md` yang dihasilkan bisa diedit manual sebelum di-feed ke `/generate-design-system`