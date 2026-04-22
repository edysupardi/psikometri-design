# Design Spec — Active Contract

> File ini adalah **sumber kebenaran tunggal** untuk semua design decisions.
> Claude HARUS membaca file ini sebelum generate apapun.
> Update file ini setiap kali ada token, rule, atau pattern baru yang disepakati.

---

## Project Identity

```
Name        : Psikometri
Description : Aplikasi asesmen psikotes/psikologi online
Target Users: 
  - User publik (register mandiri, asesmen, bayar untuk lihat hasil)
  - User B2B (assign asesmen ke kandidat, e.g. recruitment)
  - Psikolog (review & approval hasil asesmen)
  - Admin (kelola seluruh sistem — 1 apps, RBAC, same design system)
Personality : clean, premium, trustworthy
Anti-tone   : tidak playful, tidak childish, tidak over-decorated
Anchor      : Warna HIMPSI #5F197B sebagai brand identity
Mode        : Light mode (dark mode menyusul setelah light mode final)
```

---

## Design Tokens

### Colors (Light Mode)
```
--color-primary       : #5F197B   (HIMPSI purple — brand utama)
--color-primary-hover : #4A1260   (hover state primary)
--color-secondary     : #8B2FC9   (purple terang — aksi sekunder)
--color-accent        : #D4A017   (gold — kesan premium)
--color-bg            : #FFFFFF   (background utama)
--color-surface       : #FAF5FF   (surface card — purple tint tipis)
--color-border        : #E9D8F5   (border — purple tint halus)
--color-text-base     : #1A0A2E   (near-black, purple undertone)
--color-text-muted    : #6B5F7A   (muted text)
--color-error         : #DC2626   (error state)
--color-success       : #16A34A   (success state)
--color-warning       : #F59E0B   (warning state)
--color-info          : #3B82F6   (info state)
```

### Typography
```
--font-display  : 'Plus Jakarta Sans', sans-serif   (heading — geometric, premium, Indonesian origin)
--font-body     : 'Inter', sans-serif                (body — UI readability standard)
--font-mono     : 'JetBrains Mono', monospace        (kode referensi, ID, nomor asesmen)

Scale (base 16px):
  display-xl  : 56px / 1.1  / -0.02em   → hero section
  display-lg  : 44px / 1.15 / -0.02em   → page title
  heading-1   : 36px / 1.2  / -0.01em
  heading-2   : 28px / 1.25 / -0.01em
  heading-3   : 22px / 1.3  / 0
  body-lg     : 18px / 1.6  / 0         → instruksi asesmen
  body-md     : 16px / 1.6  / 0         → body default
  body-sm     : 14px / 1.5  / 0         → label, helper text
  caption     : 12px / 1.4  / +0.01em   → timestamp, metadata
```

### Spacing
```
Satuan dasar: 8px (balanced density)

--space-1  : 8px
--space-2  : 16px
--space-3  : 24px
--space-4  : 32px
--space-6  : 48px
--space-8  : 64px
--space-12 : 96px
--space-16 : 128px
```

### Radius & Border
```
--radius-none : 0
--radius-sm   : 4px     (slightly rounded — modern, netral)
--radius-md   : 8px
--radius-lg   : 12px
--radius-full : 9999px

--border-thin : 1px
--border-mid  : 2px
```

### Shadow
```
--shadow-sm  : 0 1px 2px rgba(95, 25, 123, 0.05)
--shadow-md  : 0 4px 12px rgba(95, 25, 123, 0.08)
--shadow-lg  : 0 8px 24px rgba(95, 25, 123, 0.12)
--shadow-none: none
```

### Motion
```
--duration-fast   : 100ms
--duration-normal : 200ms
--duration-slow   : 400ms
--ease-default    : cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Component Contracts

> Setiap atom/molecule memiliki "contract" — daftar variant yang DIIZINKAN.
> Jangan generate variant di luar list ini tanpa update contract dulu.

### Button
```
Variants  : primary | secondary | ghost | danger
Sizes     : sm | md | lg
States    : default | hover | active | disabled | loading
Rules     : 
  - Full-width di mobile
  - Selalu ada loading state (banyak async: payment, submit asesmen)
```

### Input
```
Variants  : text | password | OTP
States    : default | focus | error | disabled
Rules     : 
  - Password selalu ada toggle show/hide
  - OTP 6-digit dengan auto-advance antar field
```

### Card
```
Variants  : assessment | result | assignment | stat
Rules     : 
  - Selalu pakai shadow-sm
  - Hover naik ke shadow-md
  - Radius --radius-md
```

### Badge / Tag
```
Variants  : status | category | payment
Rules     : 
  - Status pakai warna semantic (warning/success/info)
  - Category pakai purple tint
  - Payment: "Belum Bayar" / "Sudah Bayar"
```

### Modal / Dialog
```
Variants  : confirm | payment | result-preview | alert
Rules     : 
  - Selalu ada backdrop overlay
  - Bisa ditutup dengan Esc atau klik luar
  - KECUALI payment — harus eksplisit pilih aksi
```

### Navigation
```
Variants  : landing | dashboard | admin
Rules     :
  - Landing (pre-login): navbar top — logo, nav links, CTA login/register
  - Dashboard (post-login): navbar top + sidebar (desktop) + bottom nav (mobile)
  - Admin: same layout as dashboard, menu items berbeda sesuai RBAC
  - Berlaku untuk semua role: user publik, B2B, psikolog, admin
```

---

## Layout Rules
```
Max content width : 1280px
Grid columns      : 12 col, 24px gutter
Breakpoints:
  mobile  : < 768px
  tablet  : 768px – 1024px  
  desktop : > 1024px
```

---

## Hard Rules (Tidak Boleh Dilanggar)

1. Tidak ada hardcode hex color — selalu gunakan CSS variable token
2. Semua spacing kelipatan 8px
3. Tidak ada font selain yang didefinisikan di tokens
4. Mobile-first — semua komponen harus responsive
5. Semua interactive element harus punya focus state (aksesibilitas)
6. Light mode dan dark mode dipisah — jangan campur styling keduanya
7. Design dibuat menggunakan Pencil (.pen files) via MCP — jika MCP disconnect, pause dan info user

---

_Last updated: 2026-04-22_
_Updated by: Claude × Edy — init-design-spec session_
