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
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
            Trusted by <span className="text-gradient">Millions</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
            Don't just take our word for it. Hear what our community has to say.
          </p>
        </div>

        {/* Simplified Container */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '32px',
          padding: '40px 20px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}>
          <div className="testimonials-grid">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="glass testimonial-card reveal"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  willChange: 'transform',
                }}
              >
                <div style={{
                  fontSize: '36px',
                  background: review.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: 0.3,
                  lineHeight: 1,
                  marginBottom: '12px',
                  fontWeight: 900,
                }}>"</div>

                <p className="testimonial-text">{review.text}</p>

                <div style={{
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${review.accent}40, transparent)`,
                  marginBottom: '20px',
                }} />

                <div className="testimonial-user">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: review.gradient,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}>
                    {review.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>
                      {review.name}
                    </div>
                    <div style={{ fontSize: '13px', color: review.accent, fontWeight: 600 }}>
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '40px',
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
                padding: '16px 28px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: '24px',
                fontWeight: 900,
                background: stat.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
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