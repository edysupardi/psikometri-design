/* global React */
const { useState: useStateShell } = React;

// ============ APP SHELL: SIDEBAR + TOPBAR ============

const AppShell = ({ role = 'admin', activePath, children, width = 1280, height = 860 }) => {
  const navConfig = {
    admin: {
      title: 'Superadmin',
      sections: [
        { label: 'Menu utama', items: [{ icon: 'layout-dashboard', label: 'Dashboard', path: 'dashboard' }] },
        { label: 'Kelola', items: [
          { icon: 'users', label: 'Manajemen user', path: 'users' },
          { icon: 'library', label: 'Bank soal', path: 'banksoal' },
          { icon: 'package', label: 'Paket asesmen', path: 'packages' },
          { icon: 'receipt', label: 'Biaya', path: 'fees' },
          { icon: 'tag', label: 'Voucher', path: 'vouchers' },
          { icon: 'file-text', label: 'Template laporan', path: 'templates' },
        ]},
        { label: 'Pesanan', items: [
          { icon: 'building-2', label: 'Pesanan B2B', path: 'b2b-orders' },
          { icon: 'user', label: 'Pesanan publik', path: 'public-orders' },
          { icon: 'credit-card', label: 'Pembayaran', path: 'payments' },
        ]},
        { label: 'Sistem', items: [
          { icon: 'list-checks', label: 'Log audit', path: 'audit' },
          { icon: 'settings', label: 'Pengaturan', path: 'settings' },
        ]},
      ],
    },
    psikolog: {
      title: 'Dr. Putri',
      subtitle: 'Psikolog',
      sections: [
        { label: 'Menu utama', items: [
          { icon: 'layout-dashboard', label: 'Dashboard', path: 'dashboard' },
          { icon: 'clipboard-list', label: 'Antrian review', path: 'reviews' },
          { icon: 'library', label: 'Bank soal', path: 'banksoal' },
        ]},
      ],
    },
    publik: {
      title: 'Jane Doe',
      sections: [
        { label: 'Menu utama', items: [
          { icon: 'layout-dashboard', label: 'Dashboard', path: 'dashboard' },
        ]},
        { label: 'Asesmen', items: [
          { icon: 'shopping-bag', label: 'Paket', path: 'packages' },
          { icon: 'history', label: 'Riwayat asesmen', path: 'results' },
          { icon: 'wallet', label: 'Riwayat transaksi', path: 'transactions' },
        ]},
      ],
    },
    b2b: {
      title: 'PT ABCXYZ',
      subtitle: 'B2B Admin',
      sections: [
        { label: 'Menu utama', items: [{ icon: 'layout-dashboard', label: 'Dashboard', path: 'dashboard' }] },
        { label: 'Order', items: [
          { icon: 'package', label: 'Paket asesmen', path: 'packages' },
          { icon: 'plus-circle', label: 'Buat order', path: 'create' },
          { icon: 'list', label: 'Daftar order', path: 'orders' },
          { icon: 'activity', label: 'Monitoring', path: 'monitoring' },
        ]},
      ],
    },
  };

  const cfg = navConfig[role];

  return (
    <div style={{ width, height, display: 'flex', background: 'var(--surface)', overflow: 'hidden', position: 'relative' }}>
      {/* Sidebar */}
      <aside style={{
        width: 232,
        flexShrink: 0,
        background: 'var(--surface-lowest)',
        borderRight: '1px solid var(--divider)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Logo */}
        <div style={{ height: 56, padding: '0 18px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--divider)' }}>
          <Logo size={24} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>Psikometri</div>
        </div>
        {/* Nav */}
        <div style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {cfg.sections.map((sec, i) => (
            <div key={i}>
              <div className="ps-nav-section">{sec.label}</div>
              {sec.items.map(item => (
                <a key={item.path} className={'ps-nav-item' + (activePath === item.path ? ' active' : '')}>
                  <i data-lucide={item.icon} className="lucide"></i>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* User */}
        <div style={{ padding: 12, borderTop: '1px solid var(--divider)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 8px', borderRadius: 6 }}>
            <div className="avatar">{cfg.title.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="t-small" style={{ fontWeight: 600 }}>{cfg.title}</div>
              <div className="t-caption text-faint" style={{ fontSize: 11 }}>{cfg.subtitle || cfg.title.toLowerCase()+'@psikometri.id'}</div>
            </div>
            <i data-lucide="chevron-up-down" className="lucide" style={{ color: 'var(--on-surface-faint)' }}></i>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar */}
        <header style={{
          height: 52,
          background: 'var(--surface-lowest)',
          borderBottom: '1px solid var(--divider)',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--on-surface-faint)', fontSize: 13 }}>
            <i data-lucide="search" className="lucide"></i>
            <span>Cari atau lompat ke...</span>
            <kbd style={{ marginLeft: 8, fontSize: 10, padding: '2px 5px', background: 'var(--surface-low)', borderRadius: 4, border: '1px solid var(--divider)', fontFamily: 'var(--font-body)' }}>⌘K</kbd>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button className="btn btn-ghost btn-icon-sm"><i data-lucide="circle-help" className="lucide"></i></button>
            <button className="btn btn-ghost btn-icon-sm" style={{ position: 'relative' }}>
              <i data-lucide="bell" className="lucide"></i>
              <span style={{ position: 'absolute', top: 4, right: 4, width: 6, height: 6, borderRadius: '50%', background: 'var(--error)' }}></span>
            </button>
          </div>
        </header>
        {/* Content scrollable */}
        <main style={{ flex: 1, overflow: 'auto', padding: 24 }}>
          {children}
        </main>
      </div>
    </div>
  );
};

const Logo = ({ size = 24 }) => (
  <div style={{
    width: size, height: size,
    background: 'var(--primary)',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: size * 0.55,
    letterSpacing: '-0.04em',
  }}>ψ</div>
);

const PageHeader = ({ breadcrumb, title, subtitle, actions }) => (
  <div className="mb-6">
    {breadcrumb && (
      <div className="t-caption text-muted mb-2" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {breadcrumb.map((b, i) => (
          <React.Fragment key={i}>
            {i > 0 && <i data-lucide="chevron-right" className="lucide" style={{ width: 12, height: 12 }}></i>}
            <span style={{ color: i === breadcrumb.length - 1 ? 'var(--on-surface)' : 'var(--on-surface-faint)' }}>{b}</span>
          </React.Fragment>
        ))}
      </div>
    )}
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
      <div>
        <h1 className="t-h1">{title}</h1>
        {subtitle && <div className="t-small text-muted" style={{ marginTop: 4 }}>{subtitle}</div>}
      </div>
      {actions && <div style={{ display: 'flex', gap: 8 }}>{actions}</div>}
    </div>
  </div>
);

window.AppShell = AppShell;
window.Logo = Logo;
window.PageHeader = PageHeader;
