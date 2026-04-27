/* global React, KpiCard */

const AdminDashboard = () => (
  <AppShell role="admin" activePath="dashboard">
    <PageHeader
      title="Dashboard"
      subtitle="Pantau kondisi operasional & insight platform"
      actions={<>
        <button className="btn btn-outline btn-sm"><i data-lucide="calendar" className="lucide"></i> 30 hari terakhir</button>
        <button className="btn btn-primary btn-sm"><i data-lucide="download" className="lucide"></i> Export</button>
      </>}
    />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 24 }}>
      <KpiCard icon="trending-up" label="Total revenue" value="Rp 6,7jt" delta="↑ 12% vs bulan lalu" tone="primary" />
      <KpiCard icon="shopping-bag" label="Total order" value="142" delta="9 hari ini" tone="primary" />
      <KpiCard icon="users" label="Total user" value="1.284" delta="+34 minggu ini" tone="primary" />
      <KpiCard icon="hourglass" label="Pembayaran pending" value="5" delta="Rp 1,2jt" tone="warning" />
      <KpiCard icon="alert-triangle" label="Failed transaksi" value="3" delta="Perlu review" tone="error" />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
      <div className="ps-card ps-card-pad-lg">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <div className="t-h3">Revenue trend</div>
            <div className="t-caption text-faint">30 hari terakhir</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['7H', '30H', '90H', '1T'].map((t, i) => (
              <button key={t} className="btn btn-sm" style={{ height: 26, padding: '0 10px', background: i === 1 ? 'var(--surface-low)' : 'transparent', color: i === 1 ? 'var(--primary)' : 'var(--on-surface-faint)', fontWeight: i === 1 ? 600 : 500 }}>{t}</button>
            ))}
          </div>
        </div>
        <RevenueChart />
      </div>
      <div className="ps-card ps-card-pad-lg">
        <div className="t-h3 mb-4">Pipeline funnel</div>
        <Funnel />
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
      <div className="ps-card ps-card-pad-lg">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <div className="t-h3">Log audit terbaru</div>
          <a className="t-caption" style={{ color: 'var(--primary)', cursor: 'pointer' }}>Lihat semua →</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { a: 'USER_LOGIN', who: 'Superadmin', t: 'Hari ini, 23.33', i: 'log-in', c: 'var(--success)' },
            { a: 'PAYMENT_VERIFIED', who: 'Finance Admin', t: 'Hari ini, 22.04', i: 'check-circle-2', c: 'var(--primary)' },
            { a: 'USER_CREATED', who: 'Superadmin', t: 'Kemarin, 16.21', i: 'user-plus', c: 'var(--primary)' },
            { a: 'PACKAGE_UPDATED', who: 'Superadmin', t: 'Kemarin, 14.02', i: 'package', c: 'var(--on-surface-variant)' },
            { a: 'VOUCHER_CREATED', who: 'Superadmin', t: '2 hari lalu', i: 'tag', c: 'var(--tertiary)' },
          ].map((l, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: i < 4 ? '1px solid var(--divider)' : 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: l.c + '15', color: l.c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i data-lucide={l.i} className="lucide"></i>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="t-small" style={{ fontWeight: 500 }}>{l.a}</div>
                <div className="t-caption text-faint">{l.who} · {l.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ps-card ps-card-pad-lg">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <i data-lucide="building-2" className="lucide" style={{ color: 'var(--primary)' }}></i>
          <div className="t-h3">B2B health</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { l: 'B2B admin terdaftar', v: '12' },
            { l: 'Total peserta di-assign', v: '438' },
            { l: 'Belum kerjakan tes', v: '47', warn: true },
            { l: 'Order hampir expired', v: '3', warn: true },
            { l: 'Rata-rata completion rate', v: '87%' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 4 ? '1px solid var(--divider)' : 'none' }}>
              <div className="t-small text-muted">{row.l}</div>
              <div className="t-small" style={{ fontWeight: 600, color: row.warn ? 'var(--warning)' : 'var(--on-surface)' }}>{row.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AppShell>
);

const RevenueChart = () => {
  const data = [3.2, 2.8, 4.1, 3.6, 5.2, 4.8, 5.6, 4.9, 6.1, 5.7, 6.8, 5.9, 7.2, 6.5, 7.9, 6.8, 8.1, 7.4, 8.5, 7.9, 9.2, 8.6, 9.8, 9.1, 10.4, 9.7, 11.2, 10.5, 11.8, 12.1];
  const max = 13;
  const W = 720, H = 200;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * W},${H - (v / max) * H}`).join(' ');
  return (
    <svg viewBox={`0 0 ${W} ${H + 30}`} style={{ width: '100%', height: 230 }}>
      <defs>
        <linearGradient id="rev-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B1FA3" stopOpacity="0.2" />
          <stop offset="1" stopColor="#3B1FA3" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
        <line key={i} x1="0" y1={H * p} x2={W} y2={H * p} stroke="var(--divider)" strokeDasharray="2,4" />
      ))}
      <polyline fill="url(#rev-grad)" points={`0,${H} ${pts} ${W},${H}`} />
      <polyline fill="none" stroke="#3B1FA3" strokeWidth="2" points={pts} />
      {data.map((v, i) => i % 5 === 0 && (
        <text key={i} x={(i / (data.length - 1)) * W} y={H + 20} fontSize="10" fill="var(--on-surface-faint)" textAnchor="middle">{i + 1}</text>
      ))}
    </svg>
  );
};

const Funnel = () => {
  const stages = [
    { l: 'Beli paket', v: 142, w: 100, c: 'var(--primary)' },
    { l: 'Bayar', v: 128, w: 90, c: '#5938C7' },
    { l: 'Mulai tes', v: 119, w: 84, c: '#7858DD' },
    { l: 'Selesai tes', v: 98, w: 69, c: '#9678E8' },
    { l: 'Direview', v: 84, w: 59, c: '#B498F0' },
    { l: 'TTE selesai', v: 79, w: 56, c: '#C5B8F5' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {stages.map((s, i) => (
        <div key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <div className="t-caption text-muted">{s.l}</div>
            <div className="t-caption" style={{ fontWeight: 600 }}>{s.v} <span className="text-faint">({s.w}%)</span></div>
          </div>
          <div style={{ height: 8, background: 'var(--surface-low)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: s.w + '%', height: '100%', background: s.c, borderRadius: 4 }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

window.AdminDashboard = AdminDashboard;
