# Steering: Psikometri Design dengan MCP Pencil

## ATURAN UTAMA — BACA INI SEBELUM MEMBUAT APAPUN

Semua design **WAJIB** menggunakan reusable component (ref) dari design system:

```
_bmad-output/design-artifacts/pencil/design-system.lib.pen
```

### Apa artinya "menggunakan ref component"?

Setiap element UI yang sudah tersedia di design system **HARUS** dibuat menggunakan `type: "ref"` dengan `ref` yang menunjuk ke component ID. **DILARANG KERAS** membuat element secara manual (inline frame/text) jika component-nya sudah ada.

### Cara verifikasi: Border ungu putus-putus

Di Pencil editor, saat hover pada sebuah node:
- **Border ungu putus-putus** = ref component instance ✅ BENAR
- **Border biru solid** = frame biasa ❌ SALAH (jika component tersedia di design system)

### Contoh BENAR vs SALAH

**BENAR — Button menggunakan ref:**
```javascript
saveBtn = I(parent, {type: "ref", ref: "PREFIX:Vs1R9",
  descendants: {"PREFIX:AEmcc": {content: "Simpan"}}
})
```

**SALAH — Button dibuat manual (DILARANG):**
```javascript
// ❌ JANGAN LAKUKAN INI
saveBtn = I(parent, {type: "frame", fill: "#3B1FA3", cornerRadius: 8, padding: [12, 24],
  children: [{type: "text", content: "Simpan", fill: "#fff"}]
})
```

**BENAR — Sidebar menggunakan ref:**
```javascript
sidebar = I(screen, {type: "ref", ref: "PREFIX:q3E0D", width: 256, height: 945, x: 0, y: 64,
  descendants: {
    "PREFIX:5YJ6k": {content: "Nama Halaman"},
    "PREFIX:YQbLR/PREFIX:9WjND": {content: "Menu Aktif"},
    "PREFIX:YQbLR/PREFIX:dA3iJ": {iconFontName: "icon-name"}
  }
})
```

**SALAH — Sidebar dibuat manual (DILARANG):**
```javascript
// ❌ JANGAN LAKUKAN INI
sidebar = I(screen, {type: "frame", width: 256, fill: "$--ps-surface-lowest", layout: "vertical",
  children: [
    {type: "text", content: "Menu 1"},
    {type: "text", content: "Menu 2"}
  ]
})
```

---

## CHECKLIST SEBELUM SELESAI DESIGN

Sebelum menandai design selesai, validasi setiap element:

- [ ] Navbar → pakai ref `PREFIX:1FlVH`? Bukan frame manual?
- [ ] Sidebar → pakai ref `PREFIX:q3E0D`? Bukan frame manual?
- [ ] Semua button → pakai ref `PREFIX:Vs1R9` / `PREFIX:C3CYG` / `PREFIX:crA2Q` / dll? Bukan frame manual?
- [ ] Semua input field → pakai ref `PREFIX:AqmIE` / `PREFIX:EHJ9m` / `PREFIX:NIQV5` / dll? Bukan frame manual?
- [ ] Semua badge → pakai ref dari **Psikometri Badge** section? Bukan badge section lain?
- [ ] Pagination → pakai ref `PREFIX:8z9Za`? Bukan frame manual?
- [ ] Tabs → pakai ref `PREFIX:vrbrM`? Bukan frame manual?
- [ ] Modal → pakai ref `PREFIX:FDwAT` / `PREFIX:uyj5W`? Bukan frame manual?
- [ ] Checkbox/Radio/Switch → pakai ref? Bukan frame manual?

Jika ada element yang belum pakai ref padahal component-nya tersedia → **PERBAIKI SEBELUM SELESAI**.

---

## WAJIB: Import Design System Library di File .pen Baru

Saat membuat file `.pen` baru, **LANGKAH PERTAMA** sebelum membuat design apapun adalah memastikan design system library sudah di-import. Tanpa import ini:
- Ref component tidak akan ditemukan → error saat `batch_design`
- Variable warna (`$--ps-primary`, `$--ps-surface`, dll) tidak akan resolve → Pencil convert ke `#000000` (hitam)
- Semua design akan rusak secara visual

### Cara menambahkan import

Di bagian atas file `.pen`, pastikan ada property `imports` yang menunjuk ke design system:

```json
{
  "version": "2.10",
  "imports": {
    "ds": "../design-system.lib.pen"
  },
  "children": [...]
}
```

Path `imports` harus **relative** dari lokasi file `.pen` baru ke `design-system.lib.pen`. Contoh:
- File baru di folder yang sama: `"ds": "./design-system.lib.pen"`
- File baru satu level di atas: `"ds": "../design-system.lib.pen"`

Setelah import, semua component dan variable dari design system tersedia dengan prefix sesuai alias (contoh alias `ds` → `ds:Vs1R9`, `$ds:--ps-primary`).

### Cara verifikasi import sudah benar

Setelah membuat file baru, jalankan `get_editor_state`. Jika import berhasil, daftar "Reusable Components" akan menampilkan component dari design system dengan prefix. Jika daftar kosong atau tidak ada component dari design system → **import belum ditambahkan atau path salah**.

### Gejala import yang hilang/salah

- Semua warna menjadi hitam (`#000000`) → variable `$--ps-*` tidak resolve
- Error "ref not found" saat `batch_design` → component ID tidak ditemukan
- Design terlihat gelap/rusak setelah di-render → variable fallback ke default

**Jika menemukan gejala ini, PERBAIKI IMPORT TERLEBIH DAHULU sebelum melanjutkan design.**

---

## IMPORT PREFIX

Ketika file .pen mengimport design system, component ID mendapat prefix sesuai import alias.
Contoh: jika import alias `1`, maka `Vs1R9` menjadi `1:Vs1R9`.

Selalu cek prefix yang aktif di file target menggunakan `get_editor_state` sebelum mulai design.

---

## CUSTOMISASI REF COMPONENT DENGAN `descendants`

Ref component **TIDAK** berarti harus dipakai as-is. Setiap ref component bisa di-customize content-nya (text, icon, warna, visibility) melalui property `descendants`.

### Prinsip

- **Struktur** (layout, padding, cornerRadius, fill) → dari design system, JANGAN diubah
- **Content** (text, icon, warna text) → WAJIB di-customize sesuai konteks halaman

### Cara Kerja `descendants`

`descendants` adalah object yang key-nya adalah ID path ke child node di dalam component, dan value-nya adalah property yang ingin di-override.

```javascript
// Contoh: Button/Primary/Icon — customize text dan icon
btn = I(parent, {type: "ref", ref: "PREFIX:C3CYG",
  descendants: {
    "PREFIX:03W2J": {content: "Perbarui"},        // override text
    "PREFIX:sjVVG": {iconFontName: "refresh-cw"}   // override icon
  }
})
```

### Contoh Customisasi per Component

**Button — customize text dan icon:**
```javascript
// Tombol "Simpan" dengan icon save
I(parent, {type: "ref", ref: "PREFIX:C3CYG",
  descendants: {"PREFIX:03W2J": {content: "Simpan"}, "PREFIX:sjVVG": {iconFontName: "save"}}
})

// Tombol "Hapus" dengan icon trash
I(parent, {type: "ref", ref: "PREFIX:1fGLi",
  descendants: {"PREFIX:CcMhi": {content: "Hapus"}, "PREFIX:ZVciU": {iconFontName: "trash-2"}}
})

// Tombol "Batal" (outline)
I(parent, {type: "ref", ref: "PREFIX:crA2Q",
  descendants: {"PREFIX:Sedcy": {content: "Batal"}}
})

// Icon-only button — ganti icon
I(parent, {type: "ref", ref: "PREFIX:4m6a1", fill: "#00000000", padding: 6, cornerRadius: 6,
  descendants: {"PREFIX:TGA0e": {iconFontName: "pencil", fill: "$--ps-primary", width: 16, height: 16}}
})
```

**Badge — customize label text:**
```javascript
// Badge aktif dengan text custom
I(parent, {type: "ref", ref: "PREFIX:zcKoy",
  descendants: {"PREFIX:Ao46T": {content: "Aktif"}}
})

// Badge label generik
I(parent, {type: "ref", ref: "PREFIX:fRhDy",
  descendants: {"PREFIX:jz291": {content: "Verbal"}}
})
```

**Input — customize placeholder/value:**
```javascript
// Input filled dengan value
I(parent, {type: "ref", ref: "PREFIX:AqmIE", width: 300,
  descendants: {"PREFIX:2dnQI": {content: "user@example.com"}}
})

// Search input tanpa label
I(parent, {type: "ref", ref: "PREFIX:NIQV5", width: 240,
  descendants: {"PREFIX:enPp1": {enabled: false}, "PREFIX:ulEOZ": {content: "Cari lajur..."}}
})
```

**Tabs — customize tab labels:**
```javascript
I(parent, {type: "ref", ref: "PREFIX:vrbrM",
  descendants: {
    "PREFIX:WXlHS/PREFIX:6Yx7j": {content: "SMA"},     // active tab
    "PREFIX:0vuoA/PREFIX:uOGSH": {content: "D3"}        // inactive tab
  }
})
```

**Sidebar — customize menu items sesuai role user:**

Sidebar component memiliki menu items yang HARUS di-customize sesuai halaman dan role user.
Sidebar di design system berisi menu default. Saat dipakai di halaman, override:
- Logo text → nama section/app
- Active item → menu yang sedang aktif (icon + text)
- Inactive items → menu lain (icon + text)
- Item visibility → sembunyikan menu yang tidak relevan dengan `enabled: false`

```javascript
// Sidebar untuk halaman Admin — Bank Soal aktif
sidebar = I(screen, {type: "ref", ref: "PREFIX:q3E0D", width: 256, height: 945, x: 0, y: 64,
  descendants: {
    // Logo text
    "PREFIX:5YJ6k": {content: "Admin Panel"},
    // Active menu item (highlight)
    "PREFIX:YQbLR/PREFIX:dA3iJ": {iconFontName: "book-open"},
    "PREFIX:YQbLR/PREFIX:9WjND": {content: "Bank Soal"},
    // Inactive menu items — customize per role
    "PREFIX:4vPVv/PREFIX:5DPbZ": {iconFontName: "bar-chart-2"},
    "PREFIX:4vPVv/PREFIX:n6c6Q": {content: "Tabel Norma"},
    // Sembunyikan menu yang tidak relevan
    "PREFIX:mOv4P": {enabled: false},  // hide Paket Asesmen
    "PREFIX:eCu6i": {enabled: false}   // hide Biaya
  }
})
```

> **PENTING:** Menu sidebar berbeda per role user:
> - **Admin**: Dashboard, Pembayaran, Manajemen User, Bank Soal, Paket Tes, Biaya, B2B Order, Public Order, Audit Log, Pengaturan
> - **B2B**: Dashboard, Pesanan, Riwayat Pembayaran
> - **Publik**: Dashboard, Riwayat Asesmen, Riwayat Transaksi, Paket Asesmen
> - **Psikolog**: Dashboard, Asesmen, Laporan
>
> Sesuaikan menu items di `descendants` berdasarkan role halaman yang sedang di-design.

---

## PAGE LAYOUT STANDARD

Semua halaman admin menggunakan `layout: "none"` (absolute positioning):

```
┌─────────────────────────────────────────────────┐
│ Navbar (ref: 1FlVH)          width: full, y: 0  │
├────────┬────────────────────────────────────────┤
│Sidebar │ Content Area                            │
│ref:    │ x: 256, y: 64                           │
│q3E0D   │ width: parentWidth - 256                │
│x:0     │ fill: #FAF8FF                           │
│y:64    │ layout: vertical, gap: 24, padding: 32  │
│w:256   │                                         │
└────────┴────────────────────────────────────────┘
```

### Implementasi Layout

```javascript
// 1. Screen container — layout: none untuk absolute positioning
U("screenId", {layout: "none", width: 1452, height: 1009})

// 2. Navbar — WAJIB ref, bukan frame manual
topbar = I("screenId", {type: "ref", ref: "PREFIX:1FlVH", width: 1452, height: 64, x: 0, y: 0})

// 3. Sidebar — WAJIB ref, bukan frame manual
sidebar = I("screenId", {type: "ref", ref: "PREFIX:q3E0D", width: 256, height: 945, x: 0, y: 64,
  descendants: {
    "PREFIX:5YJ6k": {content: "Nama Halaman"},
    "PREFIX:YQbLR/PREFIX:9WjND": {content: "Menu Aktif"},
    "PREFIX:YQbLR/PREFIX:dA3iJ": {iconFontName: "lucide-icon-name"},
    "PREFIX:4vPVv/PREFIX:n6c6Q": {content: "Menu Lain"},
    "PREFIX:4vPVv/PREFIX:5DPbZ": {iconFontName: "lucide-icon-name"}
  }
})

// 4. Content area — ini boleh frame biasa karena tidak ada component untuk ini
main = I("screenId", {type: "frame", name: "main", x: 256, y: 64,
  width: 1196, height: 945, fill: "#FAF8FF",
  layout: "vertical", gap: 24, padding: 32
})
```

---

## TABLE PATTERN

Table harus mengikuti pola ini:

### Header Row
- Setiap cell dibungkus frame dengan width tetap
- Kolom pertama: sort icon `arrow-up` (warna `$--ps-primary`) — menandakan sort aktif
- Kolom lainnya: sort icon `arrow-up-down` (warna `$--ps-on-surface-variant`)
- Kolom "Aksi": tanpa sort icon, `justifyContent: "end"`
- Row: `gap: 24`, `padding: [8, 20]`, `fill: $--ps-surface-high`, `alignItems: "center"`

### Data Row
- Setiap cell dibungkus frame dengan width yang sama dengan header
- Alternating row colors: `$--ps-surface-lowest` dan `$--ps-surface-low`
- Row: `gap: 24`, `padding: [8, 20]`, `alignItems: "center"`
- Badge di cell → WAJIB pakai ref Psikometri Badge
- Button di cell → WAJIB pakai ref Button/Icon

### Pagination
- Di bawah table rows
- Kiri: text info "Menampilkan X-Y dari Z"
- Kanan: ref ke Pagination component (`PREFIX:8z9Za`)
- Container: `justifyContent: "space_between"`, `padding: [16, 0, 0, 0]`

```javascript
// Header row
headRow = I(tableCard, {type: "frame", name: "headersRow", width: "fill_container",
  fill: "$--ps-surface-high", padding: [8, 20], gap: 24, alignItems: "center",
  stroke: {align: "inside", fill: "$--ps-outline", thickness: {bottom: 1}}
})
// Header cell dengan sort icon aktif
hc1 = I(headRow, {type: "frame", width: 50, alignItems: "center", gap: 4,
  children: [
    {type: "text", content: "No", fill: "$--ps-primary", fontFamily: "Inter", fontSize: 12, fontWeight: "700"},
    {type: "icon_font", width: 14, height: 14, iconFontName: "arrow-up", iconFontFamily: "lucide", fill: "$--ps-primary"}
  ]
})
// Header cell dengan sort icon non-aktif
hc2 = I(headRow, {type: "frame", width: "fill_container", alignItems: "center", gap: 4,
  children: [
    {type: "text", content: "Nama", fill: "$--ps-on-surface-variant", fontFamily: "Inter", fontSize: 12, fontWeight: "700"},
    {type: "icon_font", width: 14, height: 14, iconFontName: "arrow-up-down", iconFontFamily: "lucide", fill: "$--ps-on-surface-variant"}
  ]
})
// Header cell Aksi — tanpa icon, float right
hcAksi = I(headRow, {type: "frame", width: 70, justifyContent: "end", alignItems: "center",
  children: [{type: "text", content: "Aksi", fill: "$--ps-on-surface-variant", fontFamily: "Inter", fontSize: 12, fontWeight: "700"}]
})

// Data row — badge dan button WAJIB ref
row1 = I(tableCard, {type: "frame", width: "fill_container", fill: "$--ps-surface-lowest",
  padding: [8, 20], gap: 24, alignItems: "center"
})
// Cell dengan badge — WAJIB ref Psikometri Badge
badgeCell = I(row1, {type: "frame", width: 110, alignItems: "center"})
badge = I(badgeCell, {type: "ref", ref: "PREFIX:zcKoy",
  descendants: {"PREFIX:Ao46T": {content: "Aktif"}}
})
// Cell dengan action button — WAJIB ref Button/Icon
aksiCell = I(row1, {type: "frame", width: 70, justifyContent: "end", alignItems: "center", gap: 8})
editBtn = I(aksiCell, {type: "ref", ref: "PREFIX:4m6a1", fill: "#00000000", padding: 6, cornerRadius: 6,
  descendants: {"PREFIX:TGA0e": {iconFontName: "pencil", fill: "$--ps-primary", width: 16, height: 16}}
})

// Pagination — WAJIB ref
pagSection = I(tableCard, {type: "frame", width: "fill_container",
  justifyContent: "space_between", alignItems: "center", padding: [16, 0, 0, 0]
})
pagInfo = I(pagSection, {type: "frame", padding: [8, 0],
  children: [{type: "text", content: "Menampilkan 1-10 dari 50", fill: "$--ps-on-surface-variant", fontFamily: "Inter", fontSize: 13, fontWeight: "normal"}]
})
pagItems = I(pagSection, {type: "ref", ref: "PREFIX:8z9Za"})
```

---

## COMPONENT REFERENCE — Design System Sections

Berikut adalah daftar component yang tersedia di design system, dikelompokkan per section.
**Gunakan HANYA component dari section yang sesuai.**

### Section: Buttons

Semua button **WAJIB** pakai ref. Customize text/icon via `descendants`.

| Komponen | ID | Descendants |
|---|---|---|
| Button/Primary | `Vs1R9` | `AEmcc` (text) |
| Button/Primary/Icon | `C3CYG` | `03W2J` (text), `sjVVG` (icon) |
| Button/Secondary | `4FwH1` | `0Pcnn` (text) |
| Button/Secondary/Icon | `a9FmF` | `pWq7J` (text), `KavMh` (icon) |
| Button/Tertiary | `PQWTG` | `ttY93` (text) |
| Button/Tertiary/Icon | `Ppj4f` | `oCpiI` (text), `XdaiE` (icon) |
| Button/Outline | `crA2Q` | `Sedcy` (text) |
| Button/Outline/Icon | `5ap3A` | `NoaoD` (text), `CSXRK` (icon) |
| Button/Danger | `IyknC` | `VNgDZ` (text) |
| Button/Danger/Icon | `1fGLi` | `CcMhi` (text), `ZVciU` (icon) |
| Button/Ghost | `UXIuM` | `AYYgR` (text) |
| Button/Ghost/Icon | `XYIn1` | `Vw4rN` (text), `SjqvD` (icon) |
| Button/Primary/Large | `jbRAW` | `Jd26l` (text), `inirR` (icon) |
| Button/Icon | `4m6a1` | `TGA0e` (icon) |
| Button/Icon/Primary | `lVTVk` | `NuhWk` (icon) |
| Button/Icon/Tertiary | `pxNp2` | `F4wo1` (icon) |

Disabled variants (tambahkan `opacity: 0.5`):
| Komponen | ID |
|---|---|
| Button/Primary/Disabled | `YHxFR` |
| Button/Secondary/Disabled | `wmzwn` |
| Button/Tertiary/Disabled | `SlAeu` |
| Button/Outline/Disabled | `6yYm6` |
| Button/Danger/Disabled | `NJ09k` |

### Section: Psikometri Badge — SATU-SATUNYA badge yang boleh digunakan

> **KRITIS:** Di design system ada 3 section badge: "Badges", "Status Badges", dan "Psikometri Badge".
> **HANYA gunakan badge dari section "Psikometri Badge"** (parent frame: `VHPVc`).
> Badge dari section lain (`OTOaY`, `P0qJE`, `m5qL2`, `vxuq5`, `gWq9N`, `IQ68s`, `79ID1`, `YkLwi`, `FXJE7`, `DrYCk`, `rSten`, `kufFh`, `pJTFU`, `PUC5l`) **AKAN DIHAPUS** dan **DILARANG** digunakan.

| Komponen | ID | Descendants | Penggunaan |
|---|---|---|---|
| Badge/Completed | `ocOk5` | `OWb9m` (text) | Status selesai |
| Badge/Pending | `sKyOD` | `SRkII` (text) | Status menunggu |
| Badge/InProgress | `yv9WO` | `y4mYt` (text) | Status proses |
| Badge/Error | `cA733` | `SwSos` (text) | Status error |
| Badge/Active | `zcKoy` | `Ao46T` (text) | Status aktif |
| Badge/Label | `fRhDy` | `jz291` (text) | Label/tag generik |

Identifikasi Psikometri Badge: `fontSize: 12`, `fontWeight: "600"`, text sentence-case.
Badge lain (DILARANG): `fontSize: 10`, `fontWeight: "700"`, text UPPERCASE.

### Section: Inputs

| Komponen | ID | Descendants |
|---|---|---|
| Input/Group | `EHJ9m` | `bFqXD` (label), `GtmN2` (placeholder) |
| Input/Default | `F6jW4` | `GtmN2` (placeholder) |
| Input/Group/Filled | `P0gRs` | `YKjUB` (label), `2dnQI` (value) |
| Input/Filled | `AqmIE` | `2dnQI` (value text) |
| Input/Group/Error | `venol` | `Huuoy` (label) |
| Input/Error | `z4zEW` | `FAG6B` (text), `d7mYk` (helper) |
| Textarea/Group | `4LE5B` | `19uvR` (label), `W2e63` (placeholder), `J7w2U` (counter) |
| Textarea | `1Lwj1` | `W2e63` (placeholder) |

### Section: Input Types

| Komponen | ID | Descendants |
|---|---|---|
| Input/Email | `Fhtdg` | `AKjaq` (label), `VSeRR` (placeholder) |
| Input/Number | `9hzpN` | `QTgpV` (label), `cKHZ5` (value) |
| Input/Password | `7V0Hx` | `U6yMy` (label), `DF7TN` (value) |
| Input/Search | `NIQV5` | `enPp1` (label), `ulEOZ` (placeholder) |

### Section: Disabled States

| Komponen | ID |
|---|---|
| Input/Disabled | `SPAwU` |
| Textarea/Disabled | `GfyVO` |
| Checkbox/Disabled | `cUCJ0` |
| Radio/Disabled | `X5k2T` |
| Switch/Disabled | `VWdSa` |

### Section: Checkbox / Switch / Radio

| Komponen | ID |
|---|---|
| Checkbox/Checked | `ymhIw` |
| Checkbox/Unchecked | `YcnKj` |
| Switch/On | `TOPvI` |
| Switch/Off | `V1iN1` |
| Radio/Selected | `MTF4k` |
| Radio/Unselected | `rtza7` |

### Section: Cards

| Komponen | ID |
|---|---|
| Card/Metric | `ksLq6` |
| Card/Assignment | `NVCoH` |
| Card/Insight | `gRmJz` |

### Section: Table

| Komponen | ID |
|---|---|
| Table | `vG8y0` |
| Table/Row | `K1fE9` |
| Table/Row/Compact | `uVXcA` |
| Table/Toolbar | `jrPdQ` |
| Table/Row/Expandable | `Xyxal` |
| Table/Row/Expandable/Open | `tIgxF` |
| Table/Advanced | `UocXa` |

### Section: Navigation

| Komponen | ID | Descendants |
|---|---|---|
| Navbar | `1FlVH` | — |
| Navbar/Simple | `tYnIM` | — |
| Sidebar | `q3E0D` | `5YJ6k` (logo text), `YQbLR` (active item), `4vPVv` (inactive item) |
| Sidebar/Item/Active | `YQbLR` | `dA3iJ` (icon), `9WjND` (text) |
| Sidebar/Item | `4vPVv` | `5DPbZ` (icon), `n6c6Q` (text) |
| Sidebar/Collapsed | `4y3JV` | — |
| Tabs/List | `vrbrM` | `WXlHS/6Yx7j` (active tab text), `0vuoA/uOGSH` (inactive tab text) |
| Breadcrumb/Bar | `eJG9f` | — |
| Pagination | `8z9Za` | — |

### Section: Avatar

| Komponen | ID |
|---|---|
| Avatar | `Ep6q6` |
| Avatar/Secondary | `x8avt` |
| Avatar/Tertiary | `KPlvc` |
| Avatar/Primary | `sBKoM` |
| Avatar/More | `wZAXW` |
| Avatar/Large | `sQyKP` |

### Section: Dropdown

| Komponen | ID |
|---|---|
| Dropdown/Group | `O0Njq` |
| Dropdown/Default | `57IgI` |
| Dropdown/Filled | `KjhYN` |
| Dropdown/Menu | `8JPuw` |
| Dropdown/Item | `nU3LK` |

### Section: Modal

| Komponen | ID |
|---|---|
| Modal/Default | `FDwAT` |
| Modal/Header | `5klro` |
| Modal/Content | `ouQwM` |
| Modal/Footer | `M64o3` |
| Modal/Confirm | `uyj5W` |

### Section: Toast / Alert

| Komponen | ID |
|---|---|
| Toast/Success | `eidnk` |
| Toast/Error | `phIuc` |
| Alert/Info | `Amn9D` |
| Alert/Warning | `QiLRd` |

### Section: Breadcrumb

| Komponen | ID |
|---|---|
| Breadcrumb/Separator | `Un3E8` |
| Breadcrumb/Item | `mKUnv` |
| Breadcrumb/Item/Active | `SvMLw` |
| Breadcrumb/Bar | `eJG9f` |

### Section: Progress

| Komponen | ID |
|---|---|
| Progress/Card | `adMZ7` |
| Progress/Bar | `z5ggo` |
| Progress/Fill | `aYMaP` |

### Section: Tooltip

| Komponen | ID |
|---|---|
| Tooltip | `9UCbF` |
| Tooltip/Dark | `I1Py2` |

### Section: Skeleton

| Komponen | ID |
|---|---|
| Skeleton/Card | `zOpqi` |
| Skeleton/Text | `v7ZxV` |
| Skeleton/Circle | `6pJEq` |
| Skeleton/Button | `Dh4Vm` |

### Section: Charts

| Komponen | ID |
|---|---|
| Chart/Percentile | `kRrBd` |
| Chart/TScore | `ZefUG` |
| Chart/STEN | `Au92F` |
| Chart/Radar | `WctEw` |

### Section: Other

| Komponen | ID |
|---|---|
| Upload/Default | `S94Fc` |
| Search/Default | `afdWL` |
| Search/Filled | `7axGf` |
| Empty/State | `Qj7Ar` |
| User/Dropdown | `Mx8lI` |

---

## DESIGN VARIABLES — Gunakan variable, bukan hardcode warna

Selalu gunakan `$` prefix untuk mereferensikan variable. Jangan hardcode hex color.

### Surface Colors
| Variable | Light | Penggunaan |
|---|---|---|
| `$--ps-surface` | #FAF8FF | Background utama |
| `$--ps-surface-lowest` | #FFFFFF | Card, sidebar, navbar |
| `$--ps-surface-low` | #F4F3FC | Alternating row, subtle bg |
| `$--ps-surface-high` | #E8E7F0 | Input field bg, table header |
| `$--ps-neutral` | #F0EFF8 | Neutral background |

### Text Colors
| Variable | Light | Penggunaan |
|---|---|---|
| `$--ps-on-surface` | #1A1B22 | Text utama |
| `$--ps-on-surface-variant` | #474551 | Text sekunder, label, placeholder |
| `$--ps-primary` | #3B1FA3 | Text aksen, heading, link |

### Brand Colors
| Variable | Light |
|---|---|
| `$--ps-primary` | #3B1FA3 |
| `$--ps-secondary` | #C5B8F5 |
| `$--ps-tertiary` | #FFD600 |
| `$--ps-error` | #BA1A1A |
| `$--ps-outline` | #C8C4D3 |

### Typography
| Penggunaan | Font | Size | Weight |
|---|---|---|---|
| Page title | Manrope | 22 | 700 |
| Section title | Manrope | 18 | 700 |
| Table header | Inter | 12 | 700 |
| Body text | Inter | 14 | normal |
| Body small | Inter | 12 | normal |
| Label | Inter | 12 | 600 |
| Caption | Inter | 10 | normal |

### Spacing Variables
| Variable | Value |
|---|---|
| `$radius-sm` | 4 |
| `$radius-md` | 8 |
| `$radius-lg` | 12 |
| `$radius-xl` | 16 |
| `$radius-full` | 9999 |

---

## BEHAVIOUR RULES — Aturan Kerja MCP Pencil

### 1. WAJIB Open Document Sebelum Operasi Apapun

Sebelum menjalankan `batch_design`, `batch_get`, `get_screenshot`, atau operasi MCP Pencil lainnya, **PASTIKAN file .pen sudah terbuka** di editor.

```javascript
// LANGKAH PERTAMA — selalu open document dulu
mcp_pencil_open_document({filePathOrTemplate: "/path/to/file.pen"})

// Baru kemudian get_editor_state, batch_design, dll
mcp_pencil_get_editor_state({include_schema: true})
```

Jika langsung menjalankan operasi tanpa open document → error "A file needs to be open in the editor".

### 2. Placeholder Workflow — WAJIB Diikuti

Saat membuat atau memodifikasi screen:

1. **Set `placeholder: true`** pada frame screen sebelum mulai kerja
2. Lakukan semua operasi design di dalam screen tersebut
3. **Hapus `placeholder: false`** setelah screen selesai
4. **JANGAN** tinggalkan placeholder pada screen yang sudah selesai

```javascript
// Mulai kerja
U("screenId", {placeholder: true})

// ... semua operasi design ...

// Selesai — WAJIB hapus placeholder
U("screenId", {placeholder: false})
```

### 3. Screenshot Verification — WAJIB Setelah Selesai

Setelah menyelesaikan setiap screen, **WAJIB** ambil screenshot dan analisa hasilnya:

```javascript
mcp_pencil_get_screenshot({filePath: "path/to/file.pen", nodeId: "screenId"})
```

Periksa:
- Apakah layout sudah sesuai? (navbar di atas, sidebar di kiri, content di kanan)
- Apakah ada element yang terpotong atau overlap?
- Apakah warna sudah benar? (bukan hitam #000 yang menandakan variable tidak resolve)
- Apakah text terbaca? (tidak terlalu kecil, tidak hilang)
- Apakah spacing konsisten?

**Jika ada masalah visual → perbaiki sebelum lanjut ke screen berikutnya.**

### 4. Maksimal 25 Operasi per `batch_design`

Setiap panggilan `batch_design` **MAKSIMAL 25 operasi**. Jika design membutuhkan lebih dari 25 operasi, pecah menjadi beberapa panggilan berdasarkan section logis:

```
Panggilan 1: Layout dasar (screen, navbar, sidebar, content frame)
Panggilan 2: Header section (title, subtitle, buttons)
Panggilan 3: Table header row
Panggilan 4: Table data rows 1-5
Panggilan 5: Table data rows 6-10 + pagination
```

### 5. Rollback Awareness

Jika **satu operasi gagal** dalam `batch_design`, **SEMUA operasi dalam batch tersebut di-rollback**. Artinya:
- Tidak ada operasi yang berhasil disimpan
- Binding dari batch tersebut tidak valid
- Harus perbaiki error dan jalankan ulang seluruh batch

Tips menghindari rollback:
- Cek ID node yang akan di-update/delete benar-benar ada (gunakan `batch_get` dulu)
- Cek descendants path benar (gunakan `batch_get` dengan `readDepth: 3` pada component)
- Jangan gunakan binding dari batch sebelumnya yang gagal

### 6. DILARANG Hardcode Warna — Gunakan Variable

**SALAH:**
```javascript
I(parent, {type: "frame", fill: "#3B1FA3"})  // ❌ hardcode hex
I(parent, {type: "text", fill: "#474551"})    // ❌ hardcode hex
```

**BENAR:**
```javascript
I(parent, {type: "frame", fill: "$--ps-primary"})           // ✅ variable
I(parent, {type: "text", fill: "$--ps-on-surface-variant"})  // ✅ variable
```

Pengecualian: `#FFFFFF` dan `#00000000` (transparent) boleh di-hardcode karena tidak berubah antar theme.

### 7. Naming Convention

Setiap frame/node yang dibuat **HARUS** diberi `name` yang deskriptif:

```javascript
// ✅ BENAR — nama jelas
I(parent, {type: "frame", name: "tableCard", ...})
I(parent, {type: "frame", name: "headersRow", ...})
I(parent, {type: "frame", name: "headerCell1", ...})
I(parent, {type: "frame", name: "lajurRow1", ...})
I(parent, {type: "frame", name: "rowCell1", ...})
I(parent, {type: "frame", name: "paginationSection", ...})

// ❌ SALAH — tanpa nama atau nama generik
I(parent, {type: "frame", ...})           // tanpa name
I(parent, {type: "frame", name: "f1"})    // tidak deskriptif
```

Konvensi penamaan:
- Screen: `"NamaHalaman Page"` (contoh: `"Bank Soal Page"`)
- Section: `camelCase` (contoh: `"tableCard"`, `"headerSection"`)
- Row: `"namaRow1"`, `"namaRow2"` (contoh: `"lajurRow1"`, `"userRow3"`)
- Cell: `"rowCell1"`, `"headerCell2"` (contoh: `"rowCell1"`, `"headerCell3"`)

### 8. Urutan Kerja yang Benar

Ikuti urutan ini setiap kali membuat design baru:

```
1. open_document          → buka file .pen (atau buat baru)
2. get_editor_state       → cek prefix import, list components
3. get_variables          → cek design tokens tersedia
4. find_empty_space       → cari posisi kosong untuk screen baru
5. batch_design (layout)  → buat screen frame + navbar + sidebar + content
6. batch_design (content) → isi content area per section
7. get_screenshot         → verifikasi visual
8. perbaiki jika ada issue
9. hapus placeholder
10. get_screenshot final  → verifikasi akhir
```

### 9. Jangan Lupa Cek Struktur Component Sebelum Pakai

Sebelum menggunakan ref component, **SELALU** cek strukturnya dulu dengan `batch_get`:

```javascript
mcp_pencil_batch_get({
  filePath: "path/to/file.pen",
  nodeIds: ["PREFIX:componentId"],
  readDepth: 3
})
```

Ini penting untuk:
- Mengetahui descendants ID yang benar untuk customisasi
- Menghindari error "There is no 'xxx' under 'yyy'" yang menyebabkan rollback
- Memahami struktur nested component (instance di dalam instance)
