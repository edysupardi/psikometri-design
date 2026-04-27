/* global React */
const { useState: useStateDS, useEffect: useEffectDS, useRef: useRefDS } = React;

// ============ DESIGN SYSTEM SHOWCASE ============
const DesignSystem = () => (
  <div style={{ background: 'var(--surface-lowest)', padding: 32, width: 1200 }}>
    <div className="mb-6">
      <div className="t-overline text-faint mb-2">Design System</div>
      <h1 className="t-display" style={{ fontSize: 36, color: 'var(--primary)', marginBottom: 4 }}>Psikometri</h1>
      <div className="text-muted">Compact, clinical-grade SaaS — Indigo + Lavender + Yellow accent</div>
    </div>

    {/* Colors */}
    <Section title="Colors" subtitle="Brand palette + surface tonal layers">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
        <Swatch name="Primary" hex="#3B1FA3" />
        <Swatch name="Secondary" hex="#C5B8F5" />
        <Swatch name="Tertiary" hex="#FFD600" />
        <Swatch name="Success" hex="#059669" />
        <Swatch name="Warning" hex="#D97706" />
        <Swatch name="Error" hex="#BA1A1A" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginTop: 12 }}>
        <Swatch name="Surface" hex="#FAF8FF" border />
        <Swatch name="Surface Lowest" hex="#FFFFFF" border />
        <Swatch name="Surface Low" hex="#F4F3FC" border />
        <Swatch name="Surface High" hex="#E8E7F0" border />
        <Swatch name="Outline" hex="#C8C4D3" />
        <Swatch name="On Surface" hex="#1A1B22" />
      </div>
    </Section>

    {/* Typography */}
    <Section title="Typography" subtitle="Manrope (display) + Inter (body)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <TypeRow label="Display / 56px" cls="t-display" sample="Asesmen psikologi yang terpercaya" />
        <TypeRow label="H1 Page Title / 24px" cls="t-h1" sample="Manajemen User" />
        <TypeRow label="H2 Section / 18px" cls="t-h2" sample="Riwayat Asesmen" />
        <TypeRow label="H3 Card Title / 15px" cls="t-h3" sample="Total Pesanan" />
        <TypeRow label="Body / 14px" cls="t-body" sample="Pertahankan fokus dan jawab dengan jujur." />
        <TypeRow label="Small / 13px" cls="t-small" sample="Diperbarui 3 menit yang lalu." />
        <TypeRow label="Caption / 12px" cls="t-caption text-muted" sample="Maks. 150 karakter" />
        <TypeRow label="Overline / 11px" cls="t-overline text-muted" sample="Menu utama" />
      </div>
    </Section>

    {/* Buttons */}
    <Section title="Buttons" subtitle="height 32 / 36 / 40, radius 6, weight 500">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-primary">Mulai asesmen</button>
        <button className="btn btn-secondary">Pelajari paket</button>
        <button className="btn btn-outline">Batal</button>
        <button className="btn btn-ghost">Lewati</button>
        <button className="btn btn-danger">Hapus</button>
        <button className="btn btn-primary btn-sm">Sm</button>
        <button className="btn btn-primary">Md</button>
        <button className="btn btn-primary btn-lg">Lg</button>
        <button className="btn btn-outline btn-icon"><i data-lucide="plus" className="lucide"></i></button>
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        <button className="btn btn-primary"><i data-lucide="download" className="lucide"></i> Download laporan</button>
        <button className="btn btn-outline"><i data-lucide="filter" className="lucide"></i> Filter</button>
        <button className="btn btn-primary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Disabled</button>
      </div>
    </Section>

    {/* Inputs */}
    <Section title="Inputs" subtitle="height 36, radius 6, focus ring 3px lavender">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label className="label">Email</label>
          <input className="input" placeholder="nama@psikometri.id" defaultValue="jane@psikometri.id" />
        </div>
        <div>
          <label className="label">Password</label>
          <input className="input" type="password" defaultValue="password123" />
        </div>
        <div>
          <label className="label">Pencarian</label>
          <div className="input-group">
            <i data-lucide="search" className="lucide input-icon"></i>
            <input className="input" placeholder="Cari nama atau email..." />
          </div>
        </div>
        <div>
          <label className="label">Status (error)</label>
          <input className="input error" defaultValue="invalid@" />
          <div style={{ fontSize: 12, color: 'var(--error)', marginTop: 4 }}>Format email tidak valid</div>
        </div>
      </div>
    </Section>

    {/* Badges */}
    <Section title="Badges & Status" subtitle="pill, 11px semibold">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <span className="badge badge-completed">Selesai</span>
        <span className="badge badge-progress">Dalam proses</span>
        <span className="badge badge-pending">Menunggu</span>
        <span className="badge badge-info">Direview</span>
        <span className="badge badge-success"><span className="dot dot-success"></span>Aktif</span>
        <span className="badge badge-error">Gagal</span>
        <span className="badge badge-info">Publik</span>
        <span className="badge badge-info">B2B</span>
        <span className="badge badge-info">Psikolog</span>
      </div>
    </Section>

    {/* Cards */}
    <Section title="Cards" subtitle="ring shadow, no border, radius 8">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <div className="ps-card">
          <div className="t-h3 mb-2">Card standar</div>
          <div className="t-small text-muted">Konten kartu dengan padding 16px dan ring shadow halus.</div>
        </div>
        <KpiCard icon="users" label="Total user" value="1.284" delta="+12 minggu ini" tone="primary" />
        <KpiCard icon="check-circle-2" label="Selesai" value="3" delta="60% completion" tone="success" />
      </div>
    </Section>

    {/* Form */}
    <Section title="Form Field Group" subtitle="vertical gap 16, label 13px medium">
      <div className="ps-card ps-card-pad-lg" style={{ maxWidth: 480 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label className="label">Nama lengkap</label>
            <input className="input" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="label">Role</label>
            <select className="select">
              <option>Publik</option><option>B2B</option><option>Psikolog</option><option>Admin</option>
            </select>
          </div>
          <div>
            <label className="label">Catatan</label>
            <textarea className="textarea" placeholder="Tuliskan catatan klinis..."></textarea>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button className="btn btn-outline">Batal</button>
            <button className="btn btn-primary">Simpan</button>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const Section = ({ title, subtitle, children }) => (
  <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid var(--divider)' }}>
    <div className="mb-4">
      <div className="t-h2">{title}</div>
      {subtitle && <div className="t-small text-muted">{subtitle}</div>}
    </div>
    {children}
  </div>
);

const Swatch = ({ name, hex, border }) => (
  <div>
    <div style={{
      height: 56,
      background: hex,
      borderRadius: 8,
      border: border ? '1px solid var(--divider)' : 'none',
      marginBottom: 6,
    }}></div>
    <div className="t-caption">{name}</div>
    <div className="t-caption text-faint t-mono" style={{ fontSize: 11 }}>{hex}</div>
  </div>
);

const TypeRow = ({ label, cls, sample }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, alignItems: 'baseline', paddingBottom: 8, borderBottom: '1px dashed var(--divider)' }}>
    <div className="t-caption text-faint">{label}</div>
    <div className={cls}>{sample}</div>
  </div>
);

const KpiCard = ({ icon, label, value, delta, tone = 'primary' }) => {
  const toneMap = {
    primary: { bg: 'rgba(197, 184, 245, 0.4)', fg: 'var(--primary)' },
    success: { bg: 'var(--success-bg)', fg: 'var(--success)' },
    warning: { bg: 'var(--warning-bg)', fg: 'var(--warning)' },
    error: { bg: 'var(--error-bg)', fg: 'var(--error)' },
  };
  const t = toneMap[tone];
  return (
    <div className="ps-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: t.bg, color: t.fg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i data-lucide={icon} className="lucide"></i>
        </div>
        <div className="t-caption text-muted">{label}</div>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--on-surface)', letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</div>
      {delta && <div className="t-caption text-faint" style={{ marginTop: 6 }}>{delta}</div>}
    </div>
  );
};

window.DesignSystem = DesignSystem;
window.KpiCard = KpiCard;
