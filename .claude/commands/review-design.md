# /review-design — Review Konsistensi Design

Gunakan command ini untuk memverifikasi apakah design yang sudah dibuat konsisten dengan spec.

---

## Cara Pakai

```
/review-design [nama component atau path file .pen]
```

Contoh:
```
/review-design HeroSection
/review-design organisms/pricing-section.pen
```

---

## Apa yang Dicek

Claude akan melakukan review terhadap:

### 1. Token Compliance
- Apakah ada nilai hardcode yang seharusnya menggunakan token?
- Apakah semua color mengacu ke variabel yang terdefinisi?
- Apakah spacing konsisten dengan spacing scale?

### 2. Component Contract
- Apakah menggunakan variant atom/molecule yang diizinkan?
- Apakah ada variant baru yang tidak terdokumentasi?

### 3. Pattern Consistency  
- Apakah layout mengikuti pattern yang sudah ada di patterns.md?
- Apakah spacing rhythm konsisten dengan organism lain?

### 4. Personality Check
- Apakah tone visual sesuai dengan personality di design-spec.md?
- Apakah ada elemen yang melanggar anti-tone?

---

## Format Output Review

```
## Review: [Nama Component]

### ✅ Sudah Sesuai
- [hal yang sudah benar]

### ⚠️ Perlu Perhatian
- [hal yang ambigu atau perlu diskusi]

### ❌ Tidak Sesuai
- [hal yang melanggar spec — beserta cara memperbaikinya]

### 📝 Rekomendasi Memory Update
- [apa yang perlu ditambahkan ke patterns.md atau decisions.md]
```