# /research-log — Catat Temuan Research

Karena ini adalah research project, gunakan command ini untuk mendokumentasikan
**apa yang berhasil, apa yang tidak, dan kenapa** — ini yang membuat methodology-mu makin solid.

---

## Cara Pakai

```
/research-log [temuan singkat]
```

Contoh:
```
/research-log inject design-spec terbukti kurangi inkonsistensi di organism level
/research-log prompt open-ended tanpa constraint selalu menghasilkan halusinasi token
```

---

## Format Entry

```markdown
## [YYYY-MM-DD] [Judul Temuan]

**Konteks**: [sedang mengerjakan apa]
**Observasi**: [apa yang terjadi]
**Hipotesis**: [kenapa hal itu terjadi]
**Implikasi untuk methodology**: [apa yang berubah di workflow karena temuan ini]
**Action**: [update apa yang dilakukan — ke CLAUDE.md, design-spec, atau commands]
```

---

## Research Log

_Mulai catat temuan di bawah ini:_

---

## [Template Awal] Hipotesis yang Perlu Diuji

Berikut adalah hipotesis awal untuk di-test selama research:

1. **Hypothesis A**: Inject design-spec di setiap prompt secara signifikan mengurangi inkonsistensi dibanding tanpa inject
2. **Hypothesis B**: Naming convention yang eksplisit (e.g. `color-primary` vs `#1A1A2E`) membantu Claude lebih konsisten
3. **Hypothesis C**: Pattern library yang terdokumentasi mengurangi halusinasi layout di organism level
4. **Hypothesis D**: Constraint-heavy prompt lebih konsisten dibanding descriptive prompt (e.g. "gunakan space-4 gap" vs "beri jarak yang cukup")
5. **Hypothesis E**: Format response yang terstruktur (CONTEXT CHECK → DRAFT → REVIEW) menghasilkan output lebih baik daripada free-form