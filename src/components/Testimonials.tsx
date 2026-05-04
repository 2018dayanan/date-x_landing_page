import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    text: "Date-x completely changed how I connect with people. The video quality is incredible and the community is so welcoming!",
    name: "Alex Johnson",
    role: "Verified User",
    avatar: "👤",
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    accent: '#f48c25',
  },
  {
    text: "I love the reward system! It's fun to interact and get something back. The UI is also super smooth and beautiful.",
    name: "Sarah Miller",
    role: "Premium Member",
    avatar: "👸",
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    accent: '#7000FF',
  },
  {
    text: "Best social app I've used in years. No lag, real people, and amazing features. Highly recommend it to everyone!",
    name: "David Chen",
    role: "Active Explorer",
    avatar: "🤵",
    gradient: 'linear-gradient(135deg, #FF007F 0%, #00C853 100%)',
    accent: '#FF007F',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      {/* Colorful Glass Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'linear-gradient(135deg, rgba(244, 140, 37, 0.1), rgba(112, 0, 255, 0.1))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse-glow 15s infinite alternate',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-10%',
        width: '450px',
        height: '450px',
        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.1), rgba(0, 200, 83, 0.1))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse-glow 12s infinite alternate-reverse',
        zIndex: 0,
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '20px' }}>
            Trusted by <span className="text-gradient">Millions</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Don't just take our word for it. Hear what our community has to say.
          </p>
        </div>

        {/* Glass Container */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          borderRadius: '48px',
          padding: '60px 40px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}>
          <div className="testimonials-grid">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="glass testimonial-card reveal"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(-12px)';
                  el.style.background = 'rgba(255, 255, 255, 0.08)';
                  el.style.borderColor = `${review.accent}44`;
                  el.style.boxShadow = `0 40px 100px ${review.accent}20`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = 'translateY(0)';
                  el.style.background = 'rgba(255, 255, 255, 0.03)';
                  el.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Colored Quote Mark */}
                <div style={{
                  fontSize: '48px',
                  background: review.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: 0.3,
                  lineHeight: 1,
                  marginBottom: '16px',
                  fontWeight: 900,
                }}>"</div>

                <p className="testimonial-text">{review.text}</p>

                {/* Glass Divider */}
                <div style={{
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${review.accent}40, transparent)`,
                  marginBottom: '24px',
                }} />

                {/* User Info with Glass Avatar */}
                <div className="testimonial-user">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: review.gradient,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    border: '2px solid rgba(255,255,255,0.2)',
                    boxShadow: `0 10px 30px ${review.accent}40`,
                  }}>
                    {review.avatar}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                    }}>
                      {review.name}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: review.accent,
                      fontWeight: 600,
                    }}>
                      {review.role}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '30%',
                  right: '30%',
                  height: '3px',
                  background: review.gradient,
                  borderRadius: '10px 10px 0 0',
                  filter: 'blur(1px)',
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats with Glass Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '60px',
          flexWrap: 'wrap',
        }} className="reveal">
          {[
            { value: '10M+', label: 'Downloads', gradient: 'linear-gradient(135deg, #f48c25, #FF007F)' },
            { value: '4.9★', label: 'Rating', gradient: 'linear-gradient(135deg, #7000FF, #00FFFF)' },
            { value: '190+', label: 'Countries', gradient: 'linear-gradient(135deg, #FF007F, #00C853)' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '24px 40px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{
                fontSize: '32px',
                fontWeight: 900,
                background: stat.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;