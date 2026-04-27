/* global React */

const LandingPage = () => (
  <div style={{ width: 1280, background: 'var(--surface-lowest)', fontFamily: 'var(--font-body)' }}>
    {/* Nav */}
    <nav style={{ height: 64, padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--divider)', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Logo size={26} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Psikometri</div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['Produk', 'Untuk perusahaan', 'Untuk psikolog', 'Harga', 'Tentang'].map(n => (
            <a key={n} style={{ padding: '6px 12px', fontSize: 13, color: 'var(--on-surface-variant)', borderRadius: 6, cursor: 'pointer' }}>{n}</a>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="btn btn-ghost btn-sm">Login</button>
        <button className="btn btn-primary btn-sm">Daftar gratis</button>
      </div>
    </nav>

    {/* Hero */}
    <section style={{ padding: '88px 48px 64px', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative blob */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, background: 'radial-gradient(circle, rgba(197,184,245,0.5), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', background: 'var(--surface-low)', border: '1px solid var(--divider)', borderRadius: 999, fontSize: 12, color: 'var(--on-surface-variant)', marginBottom: 24, fontWeight: 500 }}>
          <span className="dot dot-success"></span>
          Tervalidasi oleh HIMPSI &amp; Permenkes 001 — versi 2026
        </div>
        <h1 className="t-display" style={{ fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 920, margin: '0 auto 20px' }}>
          Asesmen psikologi yang <span style={{ background: 'linear-gradient(120deg, var(--primary), #6B4FE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>terstandar, instan, dan terpercaya.</span>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--on-surface-variant)', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.55 }}>
          Platform online untuk WWQ, Papikostick, IST, dan Kraepelin. Dari pembelian paket sampai laporan ber-tanda tangan elektronik psikolog — semua dalam satu alur.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 48 }}>
          <button className="btn btn-primary btn-lg">Mulai asesmen <i data-lucide="arrow-right" className="lucide"></i></button>
          <button className="btn btn-outline btn-lg">Untuk perusahaan</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, fontSize: 12, color: 'var(--on-surface-faint)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><i data-lucide="shield-check" className="lucide" style={{ width: 14, height: 14 }}></i> ISO 27001</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><i data-lucide="lock" className="lucide" style={{ width: 14, height: 14 }}></i> Data terenkripsi</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><i data-lucide="badge-check" className="lucide" style={{ width: 14, height: 14 }}></i> 10.000+ asesmen</span>
        </div>

        {/* Hero mockup */}
        <div style={{ marginTop: 64, position: 'relative' }}>
          <HeroMockup />
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section style={{ padding: '32px 48px', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {[
          { v: '10.342', l: 'Asesmen diselesaikan' },
          { v: '156', l: 'Perusahaan klien' },
          { v: '42', l: 'Psikolog terverifikasi' },
          { v: '99,7%', l: 'Uptime sistem' },
        ].map(s => (
          <div key={s.l}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.02em' }}>{s.v}</div>
            <div className="t-small text-muted" style={{ marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section style={{ padding: '80px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="t-overline" style={{ color: 'var(--primary)', marginBottom: 8 }}>Kenapa psikometri</div>
        <h2 className="t-display" style={{ fontSize: 36, marginBottom: 12 }}>Dirancang untuk <span style={{ fontStyle: 'italic', fontWeight: 500 }}>presisi</span> dan <span style={{ fontStyle: 'italic', fontWeight: 500 }}>kepercayaan.</span></h2>
        <div className="text-muted" style={{ maxWidth: 540, marginBottom: 48 }}>Setiap detil — dari kalibrasi norma sampai tanda tangan elektronik — dirancang untuk standar profesional.</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { icon: 'shield-check', t: 'Tes valid &amp; terstandar', d: 'Instrumen yang sudah divalidasi dan dipakai luas di Indonesia. Norma diperbarui berkala.' },
            { icon: 'zap', t: 'Hasil instan', d: 'Scoring otomatis langsung saat tes selesai. Laporan resmi dalam hitungan menit.' },
            { icon: 'lock', t: 'Data terenkripsi', d: 'NIK dan data pribadi disimpan dengan enkripsi end-to-end. Akses berbasis role.' },
          ].map(f => (
            <div key={f.t} className="ps-card ps-card-pad-lg">
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(197,184,245,0.4)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <i data-lucide={f.icon} className="lucide lucide-lg"></i>
              </div>
              <div className="t-h3 mb-2" dangerouslySetInnerHTML={{ __html: f.t }}></div>
              <div className="t-small text-muted">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tests */}
    <section style={{ padding: '0 48px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <div className="t-overline" style={{ color: 'var(--primary)', marginBottom: 8 }}>Tes tersedia</div>
            <h2 className="t-display" style={{ fontSize: 32 }}>Empat instrumen, satu platform.</h2>
          </div>
          <button className="btn btn-outline">Lihat katalog lengkap <i data-lucide="arrow-right" className="lucide"></i></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { code: 'WWQ', name: "Woodworth's Questionnaire", d: 'Screening kesehatan mental dengan format YA/TIDAK', count: '75 soal', dur: '~20 menit', tone: '#6B4FE8' },
            { code: 'PAPI', name: 'Papikostick', d: 'Profil kepribadian kerja 20 faktor', count: '90 soal', dur: '~30 menit', tone: '#3B1FA3' },
            { code: 'IST', name: 'Intelligenz Struktur Test', d: 'Tes inteligensi multi-dimensi', count: '176 soal', dur: '~90 menit', tone: '#8B5CF6' },
            { code: 'KRA', name: 'Kraepelin', d: 'Kecepatan dan ketelitian kerja', count: '50 lajur', dur: '~30 menit', tone: '#A78BFA' },
          ].map(t => (
            <div key={t.code} className="ps-card ps-card-pad-lg" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: t.tone }}></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, marginTop: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: t.tone + '20', color: t.tone, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.02em' }}>{t.code}</div>
                <i data-lucide="arrow-up-right" className="lucide" style={{ color: 'var(--on-surface-faint)' }}></i>
              </div>
              <div className="t-h3" style={{ marginBottom: 4 }}>{t.name}</div>
              <div className="t-small text-muted" style={{ marginBottom: 16 }}>{t.d}</div>
              <div style={{ display: 'flex', gap: 12, paddingTop: 12, borderTop: '1px solid var(--divider)' }}>
                <div>
                  <div className="t-caption text-faint" style={{ fontSize: 10 }}>SOAL</div>
                  <div className="t-small" style={{ fontWeight: 600 }}>{t.count}</div>
                </div>
                <div>
                  <div className="t-caption text-faint" style={{ fontSize: 10 }}>DURASI</div>
                  <div className="t-small" style={{ fontWeight: 600 }}>{t.dur}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: '0 48px 80px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', background: 'var(--primary)', borderRadius: 16, padding: '56px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -80, bottom: -80, width: 320, height: 320, background: 'radial-gradient(circle, rgba(255,214,0,0.25), transparent 70%)' }}></div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 540 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'white', marginBottom: 12, letterSpacing: '-0.02em', lineHeight: 1.2 }}>Mulai asesmen Anda hari ini.</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, lineHeight: 1.55 }}>Daftar gratis, beli paket sesuai kebutuhan, dan dapatkan laporan resmi dalam 24 jam.</p>
        </div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 8 }}>
          <button className="btn btn-lg" style={{ background: 'var(--tertiary)', color: 'var(--on-surface)' }}>Mulai gratis</button>
          <button className="btn btn-lg btn-ghost" style={{ color: 'white', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)' }}>Hubungi sales</button>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer style={{ padding: '40px 48px 32px', borderTop: '1px solid var(--divider)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Logo size={22} />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 }}>Psikometri</div>
          </div>
          <div className="t-small text-muted" style={{ maxWidth: 320 }}>Platform asesmen psikologi online untuk individu, perusahaan, dan psikolog profesional.</div>
        </div>
        {[
          { title: 'Produk', items: ['Tes individu', 'Tes perusahaan', 'Untuk psikolog', 'Harga'] },
          { title: 'Sumber daya', items: ['Dokumentasi', 'Panduan tes', 'Blog', 'Bantuan'] },
          { title: 'Perusahaan', items: ['Tentang', 'Tim psikolog', 'Karir', 'Kontak'] },
        ].map(c => (
          <div key={c.title}>
            <div className="t-caption" style={{ marginBottom: 12 }}>{c.title}</div>
            {c.items.map(i => (
              <div key={i} className="t-small text-muted" style={{ marginBottom: 6, cursor: 'pointer' }}>{i}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1100, margin: '32px auto 0', paddingTop: 24, borderTop: '1px solid var(--divider)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="t-caption text-faint">© 2026 Psikometri. Semua hak dilindungi.</div>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Privasi', 'Syarat &amp; Ketentuan', 'Cookies'].map(t => (
            <span key={t} className="t-caption text-faint" dangerouslySetInnerHTML={{ __html: t }}></span>
          ))}
        </div>
      </div>
    </footer>
  </div>
);

const HeroMockup = () => (
  <div style={{
    background: 'var(--surface-lowest)',
    borderRadius: 12,
    boxShadow: '0 24px 60px rgba(59, 31, 163, 0.15), 0 0 0 1px rgba(200,196,211,0.5)',
    overflow: 'hidden',
    maxWidth: 980,
    margin: '0 auto',
    transform: 'perspective(1200px) rotateX(2deg)',
  }}>
    {/* Window chrome */}
    <div style={{ height: 32, background: 'var(--surface-low)', borderBottom: '1px solid var(--divider)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6 }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }}></span>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }}></span>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }}></span>
      <div style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--on-surface-faint)' }}>app.psikometri.id/admin</div>
    </div>
    {/* App preview */}
    <div style={{ display: 'flex', height: 460 }}>
      <div style={{ width: 180, background: 'var(--surface-lowest)', borderRight: '1px solid var(--divider)', padding: 12 }}>
        <div style={{ height: 24, background: 'var(--surface-low)', borderRadius: 4, marginBottom: 16, width: '70%' }}></div>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{ height: 26, background: i === 2 ? 'rgba(197,184,245,0.4)' : 'transparent', borderRadius: 4, marginBottom: 4, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: i === 2 ? 'var(--primary)' : 'var(--surface-high)', marginRight: 8 }}></div>
            <div style={{ flex: 1, height: 6, background: i === 2 ? 'var(--primary)' : 'var(--surface-high)', borderRadius: 2, opacity: i === 2 ? 1 : 0.6 }}></div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 20, background: 'var(--surface)' }}>
        <div style={{ height: 16, background: 'var(--on-surface)', borderRadius: 3, width: 180, marginBottom: 8 }}></div>
        <div style={{ height: 8, background: 'var(--surface-high)', borderRadius: 2, width: 240, marginBottom: 20 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 16 }}>
          {[
            { v: 'Rp 6.7jt', c: 'var(--primary)' },
            { v: '142', c: 'var(--success)' },
            { v: '23', c: 'var(--tertiary)' },
            { v: '8', c: 'var(--error)' },
          ].map((k, i) => (
            <div key={i} style={{ background: 'white', padding: 12, borderRadius: 6, boxShadow: '0 0 0 1px var(--divider)' }}>
              <div style={{ width: 16, height: 16, background: k.c, borderRadius: 3, marginBottom: 8, opacity: 0.2 }}></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: k.c }}>{k.v}</div>
              <div style={{ height: 5, background: 'var(--surface-high)', borderRadius: 2, marginTop: 4, width: '60%' }}></div>
            </div>
          ))}
        </div>
        <div style={{ background: 'white', borderRadius: 6, boxShadow: '0 0 0 1px var(--divider)', padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ height: 10, background: 'var(--on-surface)', borderRadius: 2, width: 100 }}></div>
            <div style={{ height: 18, background: 'var(--primary)', borderRadius: 4, width: 60, opacity: 0.9 }}></div>
          </div>
          <svg viewBox="0 0 400 120" style={{ width: '100%', height: 120 }}>
            <defs>
              <linearGradient id="hl-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--primary)" stopOpacity="0.25" />
                <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,90 Q40,70 80,75 T160,55 T240,40 T320,30 T400,15 L400,120 L0,120 Z" fill="url(#hl-grad)" />
            <path d="M0,90 Q40,70 80,75 T160,55 T240,40 T320,30 T400,15" fill="none" stroke="var(--primary)" strokeWidth="2" />
            {[40,80,160,240,320,400].map((x, i) => (
              <circle key={i} cx={x} cy={[70,75,55,40,30,15][i]} r="3" fill="var(--primary)" />
            ))}
          </svg>
        </div>
      </div>
    </div>
  </div>
);

window.LandingPage = LandingPage;
