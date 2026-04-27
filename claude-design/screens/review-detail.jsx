/* global React */

const ReviewDetail = () => (
  <AppShell role="psikolog" activePath="reviews">
    <PageHeader
      breadcrumb={['Dashboard', 'Antrian review', 'Detail review']}
      title="Jane Doe"
      subtitle="WWQ — Woodworth's Questionnaire · Selesai 19 Mar 2026, 12:55"
      actions={<>
        <span className="badge badge-progress" style={{ height: 24, padding: '0 10px' }}>Menunggu review</span>
        <button className="btn btn-outline btn-sm"><i data-lucide="download" className="lucide"></i> PDF mentah</button>
      </>}
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
      {/* Left: Scores */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="ps-card ps-card-pad-lg">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <div className="t-overline text-muted">Hasil scoring</div>
              <div className="t-h2" style={{ marginTop: 2 }}>Skala kategori WWQ</div>
            </div>
            <span className="badge badge-success" style={{ height: 24, padding: '0 10px' }}><span className="dot dot-success"></span>Normal</span>
          </div>

          <table className="ps-table" style={{ fontSize: 12 }}>
            <thead><tr>
              <th style={{ width: 32 }}>#</th><th>Skala</th><th style={{ textAlign: 'right' }}>Nilai</th><th style={{ textAlign: 'right' }}>%</th><th>Kategori</th>
            </tr></thead>
            <tbody>
              {[
                { n: 'Obsesi', v: 24, p: 4.8, k: 'normal' },
                { n: 'Impulsif', v: 36, p: 7.1, k: 'normal' },
                { n: 'Antisosial', v: 52, p: 10.3, k: 'normal' },
                { n: 'Ekspresi emosi', v: 56, p: 11.1, k: 'normal' },
                { n: 'Tendensi paranoid', v: 120, p: 23.8, k: 'kecenderungan' },
                { n: 'Ketidakstabilan emosi', v: 104, p: 20.6, k: 'normal' },
                { n: 'Tendensi schizophrenia', v: 60, p: 11.9, k: 'normal' },
                { n: 'Hypochondria', v: 52, p: 10.3, k: 'normal' },
              ].map((r, i) => (
                <tr key={i}>
                  <td className="text-faint">{i + 1}</td>
                  <td style={{ fontWeight: 500 }}>{r.n}</td>
                  <td style={{ textAlign: 'right', fontFeatureSettings: '"tnum"' }}>{r.v}</td>
                  <td style={{ textAlign: 'right', fontFeatureSettings: '"tnum"' }} className="text-muted">{r.p}%</td>
                  <td><span className={'badge ' + (r.k === 'normal' ? 'badge-success' : 'badge-progress')} style={{ textTransform: 'capitalize' }}>{r.k}</span></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--divider)' }}>
            {[
              { l: 'Total nilai', v: '504' },
              { l: 'Nilai akhir', v: '63,00' },
              { l: 'Status', v: 'Normal', isStatus: true },
            ].map(s => (
              <div key={s.l}>
                <div className="t-caption text-faint">{s.l}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: s.isStatus ? 'var(--success)' : 'var(--primary)', letterSpacing: '-0.01em', marginTop: 2 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="ps-card ps-card-pad-lg">
          <div className="t-h3 mb-4">Visualisasi psikometri</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 24 }}>
            <RadarChart />
            <div>
              <div className="t-caption text-muted mb-2">T-Score per skala</div>
              <TScoreBars />
            </div>
          </div>
        </div>

        <div className="ps-card ps-card-pad-lg">
          <div className="t-caption text-muted mb-2">Panduan klasifikasi</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span className="badge badge-success">Normal &lt; 120</span>
            <span className="badge badge-progress">Kecenderungan 120–180</span>
            <span className="badge badge-error">Patologis &gt; 180</span>
          </div>
        </div>
      </div>

      {/* Right: Review form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 24, alignSelf: 'flex-start' }}>
        <div className="ps-card ps-card-pad-lg">
          <div className="t-h3 mb-4">Kesimpulan klinis</div>
          <textarea className="textarea" placeholder="Tuliskan ringkasan evaluasi psikologis..." style={{ minHeight: 120 }}
            defaultValue="Peserta menunjukkan stabilitas emosi yang baik dengan kecenderungan paranoid yang perlu dipantau lebih lanjut. Skor di luar skala paranoid berada dalam rentang normal." />
          <div className="t-caption text-faint mt-2" style={{ textAlign: 'right' }}>187/300 karakter</div>
        </div>

        <div className="ps-card ps-card-pad-lg">
          <div className="t-h3 mb-4">Kategori hasil screening</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { v: 'normal', l: 'Tahapan normal', d: 'Tidak menunjukkan gejala gangguan mental.', sel: true },
              { v: 'tendensi', l: 'Kecenderungan gangguan', d: 'Terindikasi gejala yang cenderung mengganggu fungsi sehari-hari.' },
              { v: 'patologis', l: 'Gangguan', d: 'Menunjukkan gejala gangguan mental yang mengganggu fungsi.' },
            ].map(o => (
              <label key={o.v} style={{
                display: 'flex',
                gap: 10,
                padding: 12,
                borderRadius: 8,
                background: o.sel ? 'rgba(197,184,245,0.25)' : 'var(--surface-lowest)',
                boxShadow: o.sel ? 'inset 0 0 0 1.5px var(--primary)' : 'inset 0 0 0 1px var(--outline-soft)',
                cursor: 'pointer',
              }}>
                <div style={{
                  width: 16, height: 16, borderRadius: 4, marginTop: 2,
                  background: o.sel ? 'var(--primary)' : 'var(--surface-lowest)',
                  boxShadow: o.sel ? 'none' : 'inset 0 0 0 1.5px var(--outline)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {o.sel && <i data-lucide="check" className="lucide" style={{ width: 11, height: 11, color: 'white', strokeWidth: 3 }}></i>}
                </div>
                <div>
                  <div className="t-small" style={{ fontWeight: 600 }}>{o.l}</div>
                  <div className="t-caption text-muted">{o.d}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="ps-card ps-card-pad-lg">
          <div className="t-h3 mb-4">Rekomendasi akhir</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { v: 'rec', l: 'Layak disarankan', c: 'var(--success)' },
              { v: 'cons', l: 'Layak dipertimbangkan', c: 'var(--warning)', sel: true },
              { v: 'no', l: 'Tidak layak', c: 'var(--error)' },
            ].map(o => (
              <label key={o.v} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 6,
                boxShadow: o.sel ? 'inset 0 0 0 1.5px ' + o.c : 'inset 0 0 0 1px var(--outline-soft)',
                background: o.sel ? o.c + '12' : 'transparent',
                cursor: 'pointer',
              }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', boxShadow: 'inset 0 0 0 1.5px ' + (o.sel ? o.c : 'var(--outline)'), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {o.sel && <span style={{ width: 7, height: 7, borderRadius: '50%', background: o.c }}></span>}
                </div>
                <span className="t-small" style={{ fontWeight: o.sel ? 600 : 500, color: o.sel ? o.c : 'var(--on-surface)' }}>{o.l}</span>
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            <button className="btn btn-outline" style={{ flex: 1 }}>Simpan draft</button>
            <button className="btn btn-primary" style={{ flex: 1 }}><i data-lucide="check" className="lucide"></i> Submit & TTE</button>
          </div>
        </div>
      </div>
    </div>
  </AppShell>
);

const RadarChart = () => {
  const labels = ['Obsesi', 'Impulsif', 'Antisosial', 'Emosi', 'Paranoid', 'Stabilitas', 'Schizo', 'Hypoch'];
  const values = [0.15, 0.22, 0.32, 0.35, 0.72, 0.62, 0.36, 0.32];
  const cx = 110, cy = 110, r = 84;
  const angle = i => (i / labels.length) * Math.PI * 2 - Math.PI / 2;
  const pt = (i, v) => [cx + Math.cos(angle(i)) * r * v, cy + Math.sin(angle(i)) * r * v];
  const path = values.map((v, i) => pt(i, v)).map((p, i) => (i === 0 ? 'M' : 'L') + p[0] + ',' + p[1]).join(' ') + 'Z';
  return (
    <div>
      <div className="t-caption text-muted mb-2">Profil skala (radar)</div>
      <svg viewBox="0 0 220 220" style={{ width: '100%', maxWidth: 240 }}>
        {[0.25, 0.5, 0.75, 1].map((p, i) => (
          <polygon key={i} points={labels.map((_, j) => pt(j, p).join(',')).join(' ')} fill="none" stroke="var(--divider)" strokeWidth="1" />
        ))}
        {labels.map((_, i) => <line key={i} x1={cx} y1={cy} x2={pt(i, 1)[0]} y2={pt(i, 1)[1]} stroke="var(--divider)" strokeWidth="1" />)}
        <path d={path} fill="rgba(59,31,163,0.18)" stroke="var(--primary)" strokeWidth="2" />
        {values.map((v, i) => { const [x, y] = pt(i, v); return <circle key={i} cx={x} cy={y} r="3" fill="var(--primary)" />; })}
        {labels.map((l, i) => {
          const [x, y] = pt(i, 1.18);
          return <text key={i} x={x} y={y} fontSize="9" fill="var(--on-surface-variant)" textAnchor="middle" dominantBaseline="middle">{l}</text>;
        })}
      </svg>
    </div>
  );
};

const TScoreBars = () => {
  const data = [
    { l: 'Obsesi', v: 42 }, { l: 'Impulsif', v: 48 }, { l: 'Antisosial', v: 52 },
    { l: 'Emosi', v: 53 }, { l: 'Paranoid', v: 72, hi: true },
    { l: 'Stabilitas', v: 64 }, { l: 'Schizo', v: 53 }, { l: 'Hypoch', v: 50 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 28px', gap: 8, alignItems: 'center' }}>
          <div className="t-caption text-muted">{d.l}</div>
          <div style={{ height: 8, background: 'var(--surface-low)', borderRadius: 4, position: 'relative' }}>
            {/* Norm range markers (40-60) */}
            <div style={{ position: 'absolute', left: '40%', right: '40%', top: 0, bottom: 0, background: 'rgba(5,150,105,0.08)', borderLeft: '1px dashed var(--success)', borderRight: '1px dashed var(--success)' }}></div>
            <div style={{ width: d.v + '%', height: '100%', background: d.hi ? 'var(--warning)' : 'var(--primary)', borderRadius: 4, position: 'relative', zIndex: 1 }}></div>
          </div>
          <div className="t-caption" style={{ fontWeight: 600, fontFeatureSettings: '"tnum"', textAlign: 'right' }}>{d.v}</div>
        </div>
      ))}
      <div className="t-caption text-faint" style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 10, height: 8, background: 'rgba(5,150,105,0.15)', border: '1px dashed var(--success)' }}></span>
        Rentang normal (T 40–60)
      </div>
    </div>
  );
};

window.ReviewDetail = ReviewDetail;
