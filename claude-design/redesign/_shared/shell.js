/**
 * shell.js — Psikometri Shared Shell Components
 *
 * Provides 3 components for all logged-in pages:
 *   1. Sidebar  — left nav, collapsible to icon-only (48px)
 *   2. Topbar   — sticky top bar with toggle, search, bell, avatar
 *   3. Content Area — scrollable main content wrapper (slot)
 *
 * Usage in each HTML page:
 *   <script src="../_shared/shell.js"></script>
 *   <script>
 *     initShell({
 *       role: 'admin',          // 'admin' | 'b2b' | 'psikolog' | 'publik'
 *       activeHref: '10-admin-dashboard.html',
 *       user: { name: 'Superadmin', role: 'Superadmin', initials: 'S' },
 *       hasSearch: true,        // optional, default per role
 *       notifCount: 6           // optional notification count
 *     });
 *   </script>
 *
 * The script wraps page <body> content in the shell layout automatically.
 */

// ─── Lucide SVG icons (inline, no CDN dependency) ────────────────────────────

const ICONS = {
  'panel-left':         `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>`,
  'layout-dashboard':   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="3" y="15" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="11" rx="1"/></svg>`,
  'users':              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  'book-open':          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  'package':            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>`,
  'receipt':            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8H8M16 12H8M12 16H8"/></svg>`,
  'tag':                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,
  'file-text':          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/></svg>`,
  'briefcase':          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
  'user':               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  'credit-card':        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  'activity':           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>`,
  'settings':           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  'monitor':            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  'history':            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/></svg>`,
  'list-checks':        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8"/></svg>`,
  'bell':               `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  'search':             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  'chevron-down':       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6"/></svg>`,
  'log-out':            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
  'shopping-cart':      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
};

function icon(name, cls = '') {
  const svg = ICONS[name] || ICONS['settings'];
  return svg.replace('<svg ', `<svg class="${cls}" stroke-width="1.75" `);
}

// ─── Menu configurations per role ────────────────────────────────────────────

const MENUS = {
  admin: [
    {
      section: 'MENU UTAMA',
      items: [
        { icon: 'layout-dashboard', label: 'Dashboard',        href: '10-admin-dashboard.html' },
      ]
    },
    {
      section: 'KELOLA',
      items: [
        { icon: 'users',      label: 'Manajemen User',   href: '11-admin-manajemen-user.html' },
        { icon: 'book-open',  label: 'Bank Soal',         href: '12-admin-bank-soal.html' },
        { icon: 'package',    label: 'Paket Asesmen',     href: '18-admin-paket-asesmen.html' },
        { icon: 'receipt',    label: 'Biaya',             href: '19-admin-biaya.html' },
        { icon: 'tag',        label: 'Diskon',            href: '20-admin-voucher.html' },
        { icon: 'file-text',  label: 'Template Laporan',  href: '21-admin-template-laporan.html' },
      ]
    },
    {
      section: 'PESANAN',
      items: [
        { icon: 'briefcase',   label: 'Pesanan B2B',    href: '22-admin-pesanan-b2b.html' },
        { icon: 'user',        label: 'Pesanan Publik', href: '24-admin-pesanan-publik-detail.html' },
        { icon: 'credit-card', label: 'Pembayaran',     href: '25-admin-pembayaran.html' },
      ]
    },
    {
      section: 'SISTEM',
      items: [
        { icon: 'activity', label: 'Log Audit',   href: '26-admin-log-aktivitas.html' },
        { icon: 'settings', label: 'Pengaturan',  href: '#' },
      ]
    },
  ],

  b2b: [
    {
      section: 'MENU UTAMA',
      items: [
        { icon: 'layout-dashboard', label: 'Dashboard', href: '30-b2b-dashboard.html' },
      ]
    },
    {
      section: 'ORDER',
      items: [
        { icon: 'package',        label: 'Paket Asesmen',     href: '31-b2b-paket-asesmen.html' },
        { icon: 'monitor',        label: 'Monitoring',        href: '33-b2b-monitoring.html' },
        { icon: 'history',        label: 'Riwayat Transaksi', href: '#' },
      ]
    },
  ],

  psikolog: [
    {
      section: 'MENU UTAMA',
      items: [
        { icon: 'layout-dashboard', label: 'Dashboard',    href: '#' },
        { icon: 'book-open',        label: 'Bank Soal',    href: '12-admin-bank-soal.html' },
        { icon: 'list-checks',      label: 'List Review',  href: '50-psikolog-antrian-review.html' },
      ]
    },
  ],

  publik: [
    {
      section: 'MAIN MENU',
      items: [
        { icon: 'layout-dashboard', label: 'Dashboard',        href: '40-publik-dashboard.html' },
      ]
    },
    {
      section: 'ASESMEN',
      items: [
        { icon: 'package',      label: 'Paket',              href: '41-publik-paket-asesmen.html' },
        { icon: 'history',      label: 'Riwayat Asesmen',    href: '43-publik-riwayat-asesmen.html' },
        { icon: 'shopping-cart',label: 'Riwayat Transaksi',  href: '#' },
      ]
    },
  ],
};

// ─── Sidebar builder ──────────────────────────────────────────────────────────

function buildSidebar(role, activeHref, user) {
  const menu = MENUS[role] || MENUS.admin;

  const navSections = menu.map(({ section, items }) => {
    const navItems = items.map(item => {
      const isActive = activeHref && (activeHref === item.href || window.location.href.endsWith(item.href));
      return `
        <a class="ps-nav-item${isActive ? ' active' : ''}" href="${item.href}">
          ${icon(item.icon, 'icon-md')}
          <span class="ps-nav-item-label">${item.label}</span>
          <span class="nav-tooltip">${item.label}</span>
        </a>`;
    }).join('');

    return `
      <div class="ps-nav-section">${section}</div>
      ${navItems}`;
  }).join('');

  const initials = user.initials || (user.name || 'U').charAt(0).toUpperCase();

  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <div class="sidebar-logo-icon">P</div>
        <span class="sidebar-logo-text">Psikometri</span>
      </div>
      <nav class="sidebar-nav">
        ${navSections}
      </nav>
    </aside>`;
}

// ─── Topbar builder ───────────────────────────────────────────────────────────

function buildTopbar(opts) {
  const { hasSearch, notifCount, user, role } = opts;
  const count = notifCount || 0;
  const initials = user.initials || (user.name || 'U').charAt(0).toUpperCase();

  const searchHtml = hasSearch ? `
    <div class="topbar-search">
      <div class="input-group">
        <span class="input-icon">${icon('search')}</span>
        <input class="input" type="search" placeholder="Cari...">
      </div>
    </div>` : '';

  const notifHtml = count > 0
    ? `<span class="badge-notif">${count > 9 ? '9+' : count}</span>`
    : '';

  return `
    <header class="topbar" id="topbar">
      <button class="topbar-toggle" id="sidebarToggle" title="Toggle sidebar">
        ${icon('panel-left')}
      </button>
      ${searchHtml}
      <div class="topbar-spacer"></div>
      <div class="topbar-actions">
        <button class="topbar-btn" title="Notifikasi" style="position:relative;">
          ${icon('bell')}
          ${notifHtml}
        </button>
        <div class="topbar-user">
          <div class="avatar avatar-md">${initials}</div>
          <span class="topbar-user-name">${user.name || 'User'}</span>
          <span style="color:var(--on-surface-faint);width:14px;height:14px;display:flex;">${icon('chevron-down')}</span>
        </div>
      </div>
    </header>`;
}

// ─── Main initShell function ──────────────────────────────────────────────────

function initShell(opts) {
  const {
    role = 'admin',
    activeHref = '',
    user = { name: 'Admin', role: 'Superadmin', initials: 'A' },
    notifCount = 0,
  } = opts;

  // Determine if search shown — removed per design decision, no search in topbar
  const hasSearch = false;

  // Grab existing page body content
  const pageContent = document.body.innerHTML;
  document.body.innerHTML = '';
  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden';

  // Build shell structure
  const sidebar  = buildSidebar(role, activeHref, user);
  const topbar   = buildTopbar({ hasSearch, notifCount, user, role });

  document.body.innerHTML = `
    <div class="shell">
      ${sidebar}
      <div class="shell-right">
        ${topbar}
        <main class="content-area" id="contentArea">
          ${pageContent}
        </main>
      </div>
    </div>`;

  // Wire up sidebar toggle
  const sidebarEl = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebarToggle');

  // Inject overlay element for mobile
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebarOverlay';
  document.body.appendChild(overlay);

  const isMobile = () => window.innerWidth <= 768;

  let collapsed = localStorage.getItem('ps_sidebar_collapsed') === 'true';
  if (collapsed && !isMobile()) sidebarEl.classList.add('collapsed');

  function openMobileSidebar() {
    sidebarEl.classList.add('mobile-open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    sidebarEl.classList.remove('mobile-open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (isMobile()) {
      const isOpen = sidebarEl.classList.contains('mobile-open');
      isOpen ? closeMobileSidebar() : openMobileSidebar();
    } else {
      collapsed = !collapsed;
      sidebarEl.classList.toggle('collapsed', collapsed);
      localStorage.setItem('ps_sidebar_collapsed', collapsed);
    }
  });

  overlay.addEventListener('click', closeMobileSidebar);

  // On resize: clean up mobile state when going back to desktop
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      closeMobileSidebar();
      if (collapsed) sidebarEl.classList.add('collapsed');
    }
  });
}
