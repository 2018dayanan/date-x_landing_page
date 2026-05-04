import React from 'react';
import colors from '../styles/colors';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Fashion Blogger',
    avatar: '👩‍💼',
    text: "Date-x has completely redefined how I connect with my audience. The live video quality is unmatched, and the gift system makes it so interactive!",
    color: colors.primary,
  },
  {
    name: 'David Chen',
    role: 'Digital Nomad',
    avatar: '👨‍💻',
    text: "As someone who travels constantly, Date-x is my go-to for meeting locals and finding friends. The AI matching is surprisingly accurate.",
    color: colors.accent,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Artist',
    avatar: '👩‍🎨',
    text: "I love the creative vibe of the community. It's not just a dating app; it's a place to share talents and earn rewards while doing what I love.",
    color: colors.secondary,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      style={{
        padding: '120px 0',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, marginBottom: '20px' }}>
            Loved by <span className="text-gradient">Millions</span>
          </h2>
          <p style={{ fontSize: '18px', color: colors.textSecondary }}>
            Don't just take our word for it. Here's what our global community has to say 
            about their Date-x experience.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="glass reveal"
              style={{
                padding: '40px',
                borderRadius: '32px',
                position: 'relative',
                animationDelay: `${index * 0.15}s`,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = `${t.color}33`;
                e.currentTarget.style.boxShadow = `0 20px 40px ${t.color}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Quote Icon */}
              <div style={{ fontSize: '48px', color: `${t.color}33`, position: 'absolute', top: '20px', right: '40px', lineHeight: 1 }}>
                "
              </div>

              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: colors.primary, fontSize: '14px' }}>★</span>
                ))}
              </div>

              <p style={{ fontSize: '17px', color: colors.textPrimary, lineHeight: 1.8, marginBottom: '32px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '18px', 
                  background: colors.glassGradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '18px', color: colors.white }}>{t.name}</div>
                  <div style={{ fontSize: '14px', color: colors.textMuted }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;