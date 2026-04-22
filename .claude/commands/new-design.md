# /new-design — Mulai Task Design Baru

Gunakan command ini untuk memulai task design apapun dengan konteks yang lengkap.

---

## Cara Pakai

Di Claude Code chat, ketik:
```
/new-design [tipe component] [nama] — [deskripsi singkat]
```

Contoh:
```
/new-design organism HeroSection — landing page hero dengan headline, subtext, dan 2 CTA button
/new-design molecule PricingCard — card untuk menampilkan tier harga
/new-design atom Tag — label kecil untuk kategori
```

---

## Prompt Template (Claude akan menjalankan ini)

```
Baca terlebih dahulu:
1. .claude/memory/design-spec.md — ambil tokens dan component contracts yang relevan
2. .claude/memory/patterns.md — cari pattern yang bisa di-reuse
3. .claude/memory/decisions.md — cek keputusan yang relevan

Kemudian buat [TIPE]: [NAMA]

Deskripsi: [DESKRIPSI]

Constraints wajib:
- Gunakan HANYA token yang terdefinisi di design-spec.md
- Gunakan atom/molecule yang sudah ada (jangan buat baru kecuali diperlukan)
- Ikuti personality dan anti-tone dari design-spec.md
- Jika ada pattern relevan di patterns.md, gunakan sebagai referensi

Format response:
[CONTEXT CHECK] — token dan pattern yang akan digunakan
[DRAFT] — design dalam format Pencil (.pen) atau deskripsi struktural
[SPEC REVIEW] — checklist: apakah semua token dipakai? Apakah konsisten dengan organism lain?
[MEMORY UPDATE] — apa yang perlu ditambahkan ke patterns.md atau decisions.md?
```

---

## Checklist Sebelum Finalize

- [ ] Semua spacing menggunakan token (bukan hardcode)
- [ ] Semua color menggunakan token
- [ ] Typography menggunakan scale yang terdefinisi
- [ ] Tidak ada variant atom baru yang tidak terdokumentasi
- [ ] Pattern baru sudah ditambahkan ke patterns.md
- [ ] Keputusan penting sudah dicatat di decisions.md