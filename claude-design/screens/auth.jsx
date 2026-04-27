/* global React */
const { useState: useStateAuth, useEffect: useEffectAuth } = React;

const LoginPage = () => (
  <div style={{ width: 1280, height: 820, display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--surface-lowest)' }}>
    {/* Left brand panel */}
    <div style={{
      background: 'linear-gradient(135deg, #2A1675 0%, #3B1FA3 50%, #6B4FE8 100%)',
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 360, height: 360, background: 'radial-gradient(circle, rgba(255,214,0,0.18), transparent 70%)' }}></div>
      <div style={{ position: 'absolute', bottom: -120, left: -80, width: 320, height: 320, background: 'radial-gradient(circle, rgba(197,184,245,0.3), transparent 70%)' }}></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
        <div style={{ width: 28, height: 28, background: 'white', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>ψ</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Psikometri</div>
      </div>
      <div style={{ position: 'relative', maxWidth: 460 }}>
        <div className="t-overline" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Hari ke-1.247 platform aktif</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: 20 }}>
          "Selamat datang kembali. Mari mulai sesi review hari ini."
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 32 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>DP</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. Putri Wulandari, M.Psi</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Psikolog Klinis · 8 tahun pengalaman</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
        <span>ISO 27001</span><span>·</span><span>HIMPSI Verified</span><span>·</span><span>Permenkes 001/2026</span>
      </div>
    </div>

    {/* Right form */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
      <div style={{ width: 360 }}>
        <h1 className="t-h1" style={{ marginBottom: 6, fontSize: 26 }}>Masuk ke akun</h1>
        <div className="t-small text-muted" style={{ marginBottom: 28 }}>Belum punya akun? <a style={{ color: 'var(--primary)', fontWeight: 500 }}>Daftar gratis</a></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label className="label">Email</label>
            <input className="input" defaultValue="jane@psikometri.id" />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label className="label" style={{ marginBottom: 0 }}>Password</label>
              <a className="t-caption" style={{ color: 'var(--primary)', cursor: 'pointer' }}>Lupa password?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <input className="input" type="password" defaultValue="••••••••••" style={{ paddingRight: 36 }} />
              <i data-lucide="eye" className="lucide" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--on-surface-faint)', cursor: 'pointer' }}></i>
            </div>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--on-surface-variant)', cursor: 'pointer' }}>
            <input type="checkbox" style={{ accentColor: 'var(--primary)' }} /> Ingat saya selama 30 hari
          </label>
          <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 4 }}>Masuk</button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0', color: 'var(--on-surface-faint)', fontSize: 11 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--divider)' }}></div>
            <span>ATAU</span>
            <div style={{ flex: 1, height: 1, background: 'var(--divider)' }}></div>
          </div>
          <button className="btn btn-outline btn-lg" style={{ width: '100%' }}>
            <i data-lucide="key-round" className="lucide"></i> Masuk dengan SSO
          </button>
        </div>

        <div className="t-caption text-faint" style={{ textAlign: 'center', marginTop: 32 }}>
          Dengan masuk, Anda menyetujui <a style={{ color: 'var(--on-surface-variant)' }}>Syarat Layanan</a> dan <a style={{ color: 'var(--on-surface-variant)' }}>Kebijakan Privasi</a>.
        </div>
      </div>
    </div>
  </div>
);

const OtpPage = () => {
  const digits = ['8', '4', '2', '', '', ''];
  return (
    <div style={{ width: 1280, height: 820, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)' }}>
      <div className="ps-card" style={{ width: 440, padding: 32 }}>
        <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(197,184,245,0.4)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <i data-lucide="mail-check" className="lucide lucide-lg"></i>
        </div>
        <h1 className="t-h1" style={{ marginBottom: 6 }}>Verifikasi email</h1>
        <div className="t-small text-muted" style={{ marginBottom: 24 }}>Kami mengirim kode 6 digit ke <strong style={{ color: 'var(--on-surface)' }}>jane@psikometri.id</strong></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, marginBottom: 16 }}>
          {digits.map((d, i) => (
            <div key={i} style={{
              height: 52,
              borderRadius: 8,
              background: d ? 'var(--surface-low)' : 'var(--surface-lowest)',
              border: i === 3 ? '2px solid var(--primary)' : '1px solid var(--outline)',
              boxShadow: i === 3 ? '0 0 0 3px rgba(197,184,245,0.35)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              fontWeight: 600,
              color: d ? 'var(--on-surface)' : 'var(--on-surface-faint)',
            }}>{d || (i === 3 ? <span style={{ width: 2, height: 22, background: 'var(--primary)', animation: 'blink 1s infinite' }}></span> : '')}</div>
          ))}
        </div>

        <div className="t-small text-muted" style={{ marginBottom: 20, textAlign: 'center' }}>
          Tidak menerima kode? <a style={{ color: 'var(--on-surface-faint)' }}>Kirim ulang dalam 50d</a>
        </div>

        <button className="btn btn-primary btn-lg" style={{ width: '100%', marginBottom: 8 }}>Verifikasi</button>
        <button className="btn btn-ghost" style={{ width: '100%' }}><i data-lucide="arrow-left" className="lucide"></i> Kembali ke login</button>
      </div>
    </div>
  );
};

window.LoginPage = LoginPage;
window.OtpPage = OtpPage;
