---
name: MCP Pencil — Pause on Disconnect
description: Jika MCP Pencil disconnect, Claude harus pause dan info user — jangan lanjut generate tanpa tool
type: feedback
---

Jika MCP Pencil disconnect saat proses design, Claude HARUS pause dan info user untuk reconnect.

**Why:** User secara eksplisit meminta ini — design harus dibuat via Pencil MCP, bukan manual atau text-only.

**How to apply:** Sebelum generate design apapun, cek koneksi MCP Pencil. Jika gagal, stop dan minta user reconnect. Jangan fallback ke deskripsi text-only.
