# /init-design-spec — Setup Design Spec Interaktif

Gunakan command ini untuk mengisi `design-spec.md` dari nol melalui sesi tanya-jawab.
Claude akan menjadi "design interviewer" — menanyakan satu topik sekaligus, lalu mengisi spec berdasarkan jawabanmu.

---

## Cara Pakai

```
/init-design-spec
```

Atau jika ingin update bagian tertentu saja:
```
/init-design-spec colors
/init-design-spec typography
/init-design-spec spacing
/init-design-spec components
```

---

## Instruksi untuk Claude

Jalankan sesi interview ini secara **sequential** — satu fase per satu, tunggu jawaban sebelum lanjut.
Jangan tanya semua sekaligus. Jadilah seperti design consultant yang baik: dengarkan, tafsirkan, konfirmasi.

### FASE 0 — Orientasi
Mulai dengan pertanyaan ini:

```
Halo! Aku akan bantu kamu mengisi design-spec.md step by step.
Kita akan bahas: identitas project → warna → tipografi → spacing → komponen.

Sebelum mulai — ceritakan dulu project ini:
1. Namanya apa?
2. Ini untuk siapa? (target user)
3. Kalau kamu harus deskripsikan "feel" visual yang kamu inginkan dalam 3 kata, apa?
   Contoh: "clean, premium, trustworthy" atau "playful, bold, energetic"
```

Dari jawaban fase 0, Claude **langsung isi** bagian Project Identity di design-spec.md, lalu lanjut ke fase berikutnya.

---

### FASE 1 — Color Identity
Tanyakan:

```
Sekarang kita bahas warna.

Kamu bisa jawab salah satu dari cara ini — pilih yang paling nyaman:

A) Kasih aku referensi visual: sebutkan brand, website, atau app yang warnanya kamu suka
   (contoh: "seperti Linear.app" atau "mirip Notion tapi lebih gelap")

B) Deskripsikan suasana: "warnanya dingin dan profesional" / "hangat dan approachable" / dll

C) Langsung kasih hex code jika sudah punya

Tidak harus lengkap — minimal kasih tahu:
- Warna utama (primary) yang paling dominan
- Apakah background-nya terang atau gelap?
```

Dari jawaban, Claude:
1. **Interpretasikan** menjadi palet (misal: "seperti Linear" → dark bg #0F0F0F, primary biru #5E6AD2)
2. **Tampilkan hasilnya** dalam format tabel sederhana sebelum disimpan
3. **Konfirmasi**: "Apakah palet ini sesuai, atau ada yang perlu disesuaikan?"
4. Setelah konfirmasi → tulis ke design-spec.md

---

### FASE 2 — Typography
Tanyakan:

```
Sekarang tipografi.

Sama seperti tadi, kamu bisa:
A) Sebut referensi: "seperti font di Stripe" / "mirip Medium"
B) Deskripsikan karakter: "formal dan serius" / "modern tapi hangat" / "technical monospace vibe"
C) Langsung sebut nama font jika sudah punya pilihan

Yang perlu kita tentukan:
- Font untuk heading/display (yang besar dan eye-catching)
- Font untuk body text (yang nyaman dibaca panjang)
- Perlu font monospace? (untuk kode, angka, data)
```

Dari jawaban, Claude:
1. **Rekomendasikan** font pairing yang sesuai (prioritaskan Google Fonts yang bebas)
2. **Generate** typography scale lengkap (display-xl sampai caption) berdasarkan base size 16px
3. **Konfirmasi** sebelum menyimpan

---

### FASE 3 — Spacing & Shape
Tanyakan:

```
Hampir selesai! Sekarang spacing dan bentuk (radius).

Dua pertanyaan singkat:

1. DENSITY — layout kamu cenderung:
   a) Spacious / airy (banyak whitespace, konten bernapas)
   b) Balanced (tidak terlalu padat, tidak terlalu longgar)  
   c) Dense / compact (banyak informasi dalam satu layar)

2. SHAPE — elemen UI kamu cenderung:
   a) Sharp / angular (radius kecil atau nol — kesan tegas, technical)
   b) Slightly rounded (radius sedang — kesan modern, netral)
   c) Very rounded / pill-shaped (radius besar — kesan friendly, soft)
```

Dari jawaban, Claude generate:
- Spacing base unit (8px untuk balanced, 4px untuk dense, 12px untuk spacious)
- Spacing scale lengkap (space-1 sampai space-16)
- Radius scale sesuai pilihan shape

---

### FASE 4 — Component Contracts
Tanyakan:

```
Terakhir — komponen dasar.

Sebutkan komponen UI yang PASTI ada di project ini.
Minimal biasanya: Button, Input, Card.

Untuk setiap komponen, aku akan tanyakan:
- Berapa variant yang dibutuhkan? (jangan terlalu banyak — mulai dari yang paling dibutuhkan)
- Ada aturan khusus? (contoh: "button selalu uppercase" / "card tidak pernah pakai border")

Mulai dari Button dulu — berapa variant button yang kamu butuhkan?
Contoh: primary, secondary, ghost, danger — atau mungkin lebih sedikit?
```

Lanjutkan komponen satu per satu sampai selesai atau user bilang "cukup".

---

### FASE 5 — Hard Rules & Finalisasi
Setelah semua fase selesai:

```
Hampir selesai! Satu hal terakhir — Hard Rules.

Ini adalah aturan yang TIDAK BOLEH dilanggar sama sekali oleh Claude saat generate design.
Contoh:
- "Tidak ada hardcode hex color, selalu gunakan CSS variable"
- "Semua spacing harus kelipatan 8px"
- "Tidak ada drop shadow di mobile"

Ada aturan spesifik yang ingin kamu tetapkan? 
Atau kita pakai default rules yang umum saja?
```

Setelah dapat jawaban → **generate design-spec.md yang sudah lengkap** dan tampilkan preview sebelum menyimpan ke file.

---

## Output Akhir

Setelah semua fase selesai, Claude akan:

1. Tampilkan **full preview** `design-spec.md` yang sudah terisi
2. Tanyakan: "Ada yang ingin diubah sebelum disimpan?"
3. Setelah konfirmasi → **overwrite** `.claude/memory/design-spec.md` dengan konten baru
4. Tampilkan summary singkat: "Design spec siap! Berikut yang sudah dikonfigurasi: ..."

---

## Tips

- Jawab dengan santai — tidak harus teknikal. Claude akan menerjemahkan.
- Kalau ragu di suatu fase, bilang "rekomendasikan saja" dan Claude akan pilihkan yang paling umum/aman.
- Bisa diulang kapan saja — `/init-design-spec` akan tanya apakah ingin reset atau update bagian tertentu.