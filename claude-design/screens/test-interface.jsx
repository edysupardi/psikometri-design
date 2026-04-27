/* global React */
const { useState: useStateTest, useEffect: useEffectTest } = React;

const TestInterface = () => {
  const [answer, setAnswer] = useStateTest(null);
  const total = 75, current = 12;
  const progress = (current / total) * 100;

  return (
    <div style={{ width: 1280, height: 820, background: 'linear-gradient(180deg, #FAF8FF 0%, #F4F3FC 100%)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {/* Calming background ornaments */}
      <div style={{ position: 'absolute', top: -200, left: -200, width: 500, height: 500, background: 'radial-gradient(circle, rgba(197,184,245,0.25), transparent 70%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: -200, right: -200, width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,214,0,0.08), transparent 70%)', pointerEvents: 'none' }}></div>

      {/* Top bar */}
      <header style={{ height: 56, padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--divider)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={22} />
          <div className="t-small" style={{ fontWeight: 600 }}>WWQ — Woodworth's Questionnaire</div>
          <span className="badge badge-info">Sesi #82371</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <i data-lucide="clock" className="lucide" style={{ color: 'var(--on-surface-faint)' }}></i>
            <span className="t-small t-mono" style={{ fontWeight: 600, fontFeatureSettings: '"tnum"' }}>14:23</span>
            <span className="t-caption text-faint">tersisa</span>
          </div>
          <button className="btn btn-ghost btn-sm"><i data-lucide="pause" className="lucide"></i> Jeda</button>
        </div>
      </header>

      {/* Progress bar */}
      <div style={{ padding: '12px 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <div className="t-caption" style={{ color: 'var(--on-surface-variant)' }}>Pertanyaan <span style={{ fontWeight: 600, color: 'var(--on-surface)' }}>{current}</span> dari {total}</div>
          <div className="t-caption text-faint">{Math.round(progress)}% selesai</div>
        </div>
        <div style={{ height: 4, background: 'var(--surface-high)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: progress + '%', height: '100%', background: 'linear-gradient(90deg, var(--primary), #6B4FE8)', borderRadius: 2, transition: 'width 0.4s ease' }}></div>
        </div>
      </div>

      {/* Question */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ width: 720, textAlign: 'center' }}>
          <div className="t-overline text-muted" style={{ marginBottom: 20 }}>Skala: Stabilitas emosi</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 500, lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--on-surface)', marginBottom: 12 }}>
            Apakah Anda merasa lelah meskipun tidak melakukan pekerjaan yang berat?
          </div>
          <div className="t-small text-muted" style={{ marginBottom: 48 }}>Jawab sesuai perasaan pertama yang muncul. Tidak ada jawaban benar atau salah.</div>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            {[
              { v: 'YA', label: 'Ya', shortcut: 'Y' },
              { v: 'TIDAK', label: 'Tidak', shortcut: 'T' },
            ].map(o => (
              <button
                key={o.v}
                onClick={() => setAnswer(o.v)}
                style={{
                  width: 220,
                  padding: '20px 24px',
                  background: answer === o.v ? 'var(--primary)' : 'var(--surface-lowest)',
                  color: answer === o.v ? 'white' : 'var(--on-surface)',
                  border: 'none',
                  borderRadius: 12,
                  boxShadow: answer === o.v ? '0 8px 24px rgba(59,31,163,0.25), 0 0 0 1px var(--primary)' : '0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px var(--outline-soft)',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 18,
                  transform: answer === o.v ? 'translateY(-2px)' : 'none',
                }}
              >
                <span>{o.label}</span>
                <kbd style={{ width: 26, height: 26, borderRadius: 5, background: answer === o.v ? 'rgba(255,255,255,0.2)' : 'var(--surface-low)', fontSize: 11, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)' }}>{o.shortcut}</kbd>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <footer style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--divider)', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)', position: 'relative', zIndex: 1 }}>
        <button className="btn btn-outline" disabled={current === 1} style={{ opacity: current === 1 ? 0.5 : 1 }}><i data-lucide="arrow-left" className="lucide"></i> Sebelumnya</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {Array.from({ length: 15 }).map((_, i) => {
            const idx = i + 5;
            const state = idx < current ? 'done' : idx === current ? 'current' : 'todo';
            return (
              <div key={i} style={{
                width: idx === current ? 22 : 6,
                height: 6,
                borderRadius: 3,
                background: state === 'done' ? 'var(--primary)' : state === 'current' ? 'var(--primary)' : 'var(--surface-high)',
                transition: 'all 0.2s',
              }}></div>
            );
          })}
          <span className="t-caption text-faint" style={{ marginLeft: 12 }}>Auto-save aktif</span>
        </div>
        <button className="btn btn-primary" disabled={!answer} style={{ opacity: !answer ? 0.5 : 1 }}>Selanjutnya <i data-lucide="arrow-right" className="lucide"></i></button>
      </footer>
    </div>
  );
};

window.TestInterface = TestInterface;
