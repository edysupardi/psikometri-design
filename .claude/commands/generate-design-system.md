# /generate-design-system — Auto-Generate Full Design System ke Pencil

Command ini membaca file `.md` hasil `/extract-design` (atau file design reference apapun)
dan men-generate design system lengkap ke Pencil via MCP — mulai dari tokens hingga organisms.

Ini adalah command **agentic** — Claude akan bekerja secara sequential, layer per layer,
tanpa perlu di-prompt ulang di setiap langkah.

---

## Cara Pakai

```
/generate-design-system [nama-file.md]
```

Contoh:
```
/generate-design-system wise-design-system.md
/generate-design-system .claude/references/psikometri-design-system.md
```

Atau tanpa argumen — Claude akan tanya file mana yang ingin digunakan:
```
/generate-design-system
```

---

## Instruksi untuk Claude

### FASE 0 — Persiapan

```
1. Baca file .md yang diberikan secara menyeluruh
2. Discover semua tools yang tersedia dari MCP Pencil
3. Buat execution plan — tampilkan ke user sebelum mulai:

"Aku akan generate design system dari [nama file] dengan urutan:
  [ ] Fase 1: Design Tokens (colors, typography, spacing, radius, shadow, motion)
  [ ] Fase 2: Atoms (Button, Input, Badge, Divider, Avatar, Spinner)
  [ ] Fase 3: Molecules (FormField, Card, Navigation Item, Alert, dll)
  [ ] Fase 4: Organisms (Navbar, Hero, Footer, dll — sesuai konteks)

Estimasi: [X] komponen total.
Mulai sekarang? (ketik 'ya' atau sebutkan jika ada yang ingin diubah)"
```

Tunggu konfirmasi user sebelum mulai eksekusi.

---

### FASE 1 — Design Tokens

Baca bagian **Color Palette**, **Typography**, **Spacing**, **Radius**, **Shadow**, **Motion** dari file `.md`.

Generate ke Pencil dalam urutan:

#### 1.1 Color Tokens
```
Untuk setiap warna di file .md:
- Nama token: gunakan format --color-[role] (contoh: --color-primary, --color-bg)
- Nilai: hex code dari file .md
- Buat sebagai Color Style atau Variable di Pencil via MCP

Kelompokkan:
- Brand colors (primary, secondary, accent)
- Background & Surface
- Text (base, muted, inverse)
- Border
- Semantic (error, success, warning, info)
```

#### 1.2 Typography Tokens
```
Untuk setiap row di tabel Typography Hierarchy:
- Buat Text Style di Pencil
- Nama: gunakan role dari tabel (display-xl, heading-1, body-md, dll)
- Properties: font family, size, weight, line-height, letter-spacing
- Aktifkan "calt" jika disebutkan di file .md
```

#### 1.3 Spacing Tokens
```
Generate spacing scale dari file .md:
- Nama: --space-1, --space-2, dst
- Nilai sesuai base unit dan scale di file
```

#### 1.4 Radius, Shadow, Motion Tokens
```
Generate sesuai nilai di file .md:
- Radius: --radius-sm, --radius-md, dll
- Shadow: --shadow-sm, --shadow-md, dll  
- Motion: --duration-fast, --ease-default, dll
```

Setelah Fase 1 selesai → update checklist dan informasikan ke user:
```
"✅ Fase 1 selesai: [X] tokens di-generate
→ Lanjut ke Fase 2 (Atoms)..."
```

---

### FASE 2 — Atoms

Baca bagian **Component Stylings** dari file `.md` untuk mendapatkan spec setiap atom.

Generate atoms dalam urutan ini:

#### 2.1 Button
```
Buat semua button variants yang ada di file .md.
Untuk setiap variant:
- Background, text color → gunakan token yang sudah dibuat di Fase 1
- Padding, radius → sesuai spec di file
- Buat states: default, hover, active, disabled, loading
- Hover behavior: scale, color change, atau lainnya sesuai file
- Nama komponen: Button/[Variant]/[State]
```

#### 2.2 Input / Form Elements
```
Buat input variants sesuai spec:
- Default, focus, error, disabled states
- Border, radius, padding → dari token Fase 1
- Nama: Input/[Type]/[State]
```

#### 2.3 Badge / Tag
```
Buat badge variants:
- Semantic (success, error, warning, info)
- Brand / category variants jika ada
- Nama: Badge/[Variant]
```

#### 2.4 Atoms Tambahan
```
Buat atoms lain yang ditemukan di file .md:
- Icon container / Icon button
- Avatar
- Divider
- Spinner / Loading indicator
- Toggle / Checkbox / Radio (jika ada spec)
```

Setelah Fase 2 selesai → update checklist:
```
"✅ Fase 2 selesai: [X] atoms di-generate
→ Lanjut ke Fase 3 (Molecules)..."
```

---

### FASE 3 — Molecules

Compose atoms yang sudah dibuat menjadi molecules.
Gunakan atoms dari Fase 2 — jangan buat ulang dari scratch.

#### 3.1 Form Field
```
Komposisi: Label (Typography) + Input + Helper Text / Error Message
States: default, focus, error, disabled
```

#### 3.2 Card
```
Gunakan radius, border, shadow dari tokens Fase 1.
Variants sesuai yang ada di file .md (small, medium, large).
Slot untuk: title, body, footer, image (jika relevan).
```

#### 3.3 Navigation Item
```
Komposisi: Icon (opsional) + Label + Badge (opsional)
States: default, hover, active
```

#### 3.4 Alert / Banner
```
Komposisi: Icon + Message + Action (opsional)
Variants: info, success, warning, error
Gunakan semantic colors dari token Fase 1.
```

#### 3.5 Molecules Tambahan
```
Buat molecules lain yang relevan dengan konteks project:
- Search field
- Dropdown item
- List item
- Pagination item
- Tab item
```

Setelah Fase 3 selesai → update checklist:
```
"✅ Fase 3 selesai: [X] molecules di-generate
→ Lanjut ke Fase 4 (Organisms)..."
```

---

### FASE 4 — Organisms

Compose molecules dan atoms menjadi section UI yang bermakna.
Ini adalah layer yang paling context-dependent — sesuaikan dengan jenis project.

#### 4.1 Navigation / Header
```
Komposisi: Logo + Nav Items + CTA Button(s)
Variants: pre-login (landing) | post-login (dashboard) | minimal
Behavior: sticky, transparent-to-solid on scroll (jika relevan)
```

#### 4.2 Hero Section
```
Komposisi: Headline (Display Typography) + Subtext + CTA + Visual/Image area
Layout: sesuai personality dari file .md
- Bold/dramatic: full-width, massive typography
- Clean/minimal: contained, balanced whitespace
```

#### 4.3 Feature / Content Section
```
Komposisi: Section heading + Card grid atau Feature list
Layout: 2-col atau 3-col di desktop, 1-col di mobile
```

#### 4.4 Footer
```
Komposisi: Logo + Link groups + Copyright
Variants: minimal | full
```

#### 4.5 Organisms Tambahan
```
Buat organisms lain sesuai konteks project yang tersirat dari file .md.
Contoh: Pricing section, Testimonial section, CTA section, dll.
```

Setelah Fase 4 selesai:
```
"✅ Fase 4 selesai: [X] organisms di-generate

🎉 Design system lengkap telah di-generate!

Summary:
- Tokens    : [X] (colors, typography, spacing, radius, shadow)
- Atoms     : [X] komponen
- Molecules : [X] komponen
- Organisms : [X] komponen

Semua tersimpan di Pencil.

Langkah selanjutnya yang disarankan:
1. Review di Pencil — pastikan semua komponen sesuai visual
2. /review-design [nama komponen] — untuk audit konsistensi
3. /update-memory — update design-spec.md dan patterns.md dari hasil ini
4. Mulai gunakan komponen untuk build pages"
```

---

### Aturan Selama Eksekusi

- ✅ Generate satu komponen → konfirmasi berhasil → baru lanjut ke berikutnya
- ✅ Gunakan token dari Fase 1 untuk SEMUA nilai warna, spacing, typography
- ✅ Beri nama komponen secara konsisten: `[Layer]/[Nama]/[Variant]/[State]`
- ✅ Setelah setiap fase selesai, tampilkan progress report lalu **langsung lanjut** ke fase berikutnya tanpa menunggu konfirmasi user — kecuali ada error
- ❌ Jangan skip ke fase berikutnya jika fase sebelumnya belum selesai
- ❌ Jangan hardcode nilai — selalu referensikan token
- ❌ Jangan berhenti di tengah proses hanya untuk bertanya "mau lanjut?" — lanjutkan otomatis
- ❌ Jika MCP disconnect di tengah proses → pause, catat progress, informasikan ke user

### Anti-Stop Rules (Penting!)

Ini adalah task agentic yang harus berjalan **sampai selesai tanpa interupsi**.
Claude TIDAK BOLEH berhenti kecuali:
1. Ada **error MCP** yang tidak bisa di-resolve sendiri
2. Ada **ambiguitas kritikal** yang tidak bisa di-derive dari file .md
3. **MCP disconnect** — pause dan informasikan ke user

Selain 3 kondisi di atas, Claude harus **terus berjalan** meski:
- Context terasa panjang → ringkas internal state, lanjutkan
- Fase sebelumnya selesai → langsung mulai fase berikutnya
- Ada nilai yang ambigu → gunakan nilai paling konsisten, catat sebagai asumsi, lanjutkan

### Checkpoint System

Setiap fase selesai, tulis checkpoint ke file `generate-progress.md`:

```markdown
# Generate Progress — [nama file]
Last updated: [timestamp]

## Status
- [x] Fase 1: Tokens — selesai [timestamp]
- [ ] Fase 2: Atoms — in progress
- [ ] Fase 3: Molecules
- [ ] Fase 4: Organisms

## Completed Items
- Color tokens: 12 ✅
- Typography: 9 ✅
- Spacing: 8 ✅
...

## Assumptions Made
- [list asumsi yang dibuat]
```

File ini berguna jika proses terhenti — user bisa resume dengan:
```
Lanjutkan generate-design-system dari checkpoint terakhir di generate-progress.md
```

### Jika Ada Spec yang Tidak Lengkap di File .md

```
Jika menemukan nilai yang ambigu atau tidak ada di file .md:
1. Cek apakah bisa di-derive dari nilai lain (contoh: hover color = primary + 10% darker)
2. Jika tidak bisa di-derive → gunakan nilai yang paling konsisten dengan personality
3. Catat semua asumsi yang dibuat → tampilkan di summary akhir sebagai "Assumptions made"
```

---

## Jika Proses Terhenti di Tengah

Jangan mulai ulang dari awal. Gunakan prompt resume:

**[GENERIC]**
```
Lanjutkan /generate-design-system dari checkpoint terakhir.
Baca generate-progress.md untuk tahu sampai mana progressnya,
lalu lanjutkan dari fase/komponen yang belum selesai.
Jangan generate ulang yang sudah selesai.
```

**[PSIKOMETRI]**
```
Lanjutkan generate design system Psikometri dari checkpoint terakhir.
Baca generate-progress.md — lanjutkan dari yang belum selesai.
Gunakan design-spec.md sebagai reference utama.
```

---

## Contoh Penggunaan Lengkap

```
User: /generate-design-system wise-design-system.md

Claude: [Membaca file wise-design-system.md]
        [Discover MCP Pencil tools]
        
        "Aku akan generate design system dari wise-design-system.md:
        [ ] Fase 1: Tokens — 47 tokens (12 colors, 9 typography styles, 8 spacing, dll)
        [ ] Fase 2: Atoms — 6 komponen (Button, Input, Badge, Divider, Avatar, Spinner)
        [ ] Fase 3: Molecules — 5 komponen (FormField, Card, NavItem, Alert, SearchField)
        [ ] Fase 4: Organisms — 4 komponen (Navbar, Hero, FeatureSection, Footer)
        
        Total: 62 items akan di-generate ke Pencil.
        Mulai sekarang?"

User: ya

Claude: [Mulai eksekusi Fase 1...]
        "✅ Color tokens: 12 colors di-generate"
        "✅ Typography styles: 9 text styles di-generate"
        ...
```