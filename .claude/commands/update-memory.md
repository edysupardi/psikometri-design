# /update-memory — Update Design Memory

Gunakan command ini di akhir setiap sesi atau setelah finalize sebuah component.
Ini adalah langkah yang **wajib** — jangan skip.

---

## Cara Pakai

```
/update-memory
```

Claude akan interaktif menanyakan apa yang perlu diupdate.

---

## Prompt Template

```
Kita baru saja selesai mengerjakan: [ringkasan apa yang dikerjakan]

Tolong bantu update design memory:

1. Baca .claude/memory/patterns.md
   → Apakah ada pattern baru yang ditemukan? Tambahkan.
   → Apakah ada pattern yang perlu direvisi?

2. Baca .claude/memory/decisions.md  
   → Apakah ada keputusan design baru yang dibuat? Catat beserta alasannya.

3. Baca .claude/memory/design-spec.md
   → Apakah ada token baru? Tambahkan.
   → Apakah ada component contract baru atau update?
   → Update "Last updated" timestamp.

Format update:
Tampilkan diff — apa yang DITAMBAHKAN dan DIUBAH di setiap file.
Jangan hapus history yang sudah ada.
```

---

## Kapan Harus Jalankan Ini

- ✅ Setelah setiap organism selesai
- ✅ Setelah menemukan bahwa suatu approach TIDAK berhasil (catat di decisions.md sebagai "alternatif yang ditolak")
- ✅ Sebelum mengakhiri sesi kerja
- ✅ Setelah melakukan review dan menemukan inkonsistensi