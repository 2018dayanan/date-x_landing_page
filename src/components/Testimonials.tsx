import React, { useState } from 'react';
import './Testimonials.css';

const reviews = [
  {
    text: "Date-x completely changed how I connect with people. The video quality is incredible and the community is so welcoming! I've made genuine friendships here.",
    name: "Alex Johnson",
    role: "Verified User",
    avatar: "👨‍💼",
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    accent: '#f48c25',
    rating: 5,
  },
  {
    text: "I love the reward system! It's fun to interact and get something back. The UI is also super smooth and beautiful. Best dating app ever!",
    name: "Sarah Miller",
    role: "Premium Member",
    avatar: "👩‍🎨",
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    accent: '#7000FF',
    rating: 5,
  },
  {
    text: "Best social app I've used in years. No lag, real people, and amazing features. The live streaming is addictive! Highly recommend it.",
    name: "David Chen",
    role: "Active Explorer",
    avatar: "👨‍💻",
    gradient: 'linear-gradient(135deg, #FF007F 0%, #00C853 100%)',
    accent: '#FF007F',
    rating: 5,
  },
];

const stats = [
  { value: '10M+', label: 'Downloads', icon: '📥' },
  { value: '4.9★', label: 'App Rating', icon: '⭐' },
  { value: '190+', label: 'Countries', icon: '🌍' },
  { value: '50M+', label: 'Video Calls', icon: '📹' },
];

const Testimonials: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Background elements */}
      <div className="testimonial-orb testimonial-orb-1" />
      <div className="testimonial-orb testimonial-orb-2" />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span className="section-badge">💬 Testimonials</span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#FFFFFF', marginTop: '16px', marginBottom: '16px' }}>
            Trusted by <span className="text-gradient">Millions</span> Worldwide
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Join our growing community and discover why Date-x is the most loved social platform.
          </p>
        </div>

        {/* Main Review Card */}
        <div className="testimonial-featured reveal">
          <div className="testimonial-featured-quote">
            <span style={{ fontSize: '80px', opacity: 0.1 }}>"</span>
          </div>

          <div className="testimonial-featured-content">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FFD600', fontSize: '20px' }}>★</span>
              ))}
            </div>

            <p className="testimonial-featured-text">
              {reviews[activeReview].text}
            </p>

            <div className="testimonial-featured-author">
              <div
                className="testimonial-author-avatar"
                style={{ background: reviews[activeReview].gradient }}
              >
                {reviews[activeReview].avatar}
              </div>
              <div>
                <div className="testimonial-author-name">{reviews[activeReview].name}</div>
                <div className="testimonial-author-role" style={{ color: reviews[activeReview].accent }}>
                  {reviews[activeReview].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="testimonial-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${activeReview === i ? 'active' : ''}`}
                onClick={() => setActiveReview(i)}
                style={{
                  background: activeReview === i ? reviews[i].gradient : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`glass testimonial-card reveal ${activeReview === index ? 'testimonial-card-active' : ''}`}
              style={{
                animationDelay: `${index * 0.15}s`,
                '--accent': review.accent,
              } as React.CSSProperties}
              onClick={() => setActiveReview(index)}
            >
              <div className="testimonial-card-header">
                <div style={{
                  fontSize: '32px',
                  background: review.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: 0.3,
                  fontWeight: 900,
                }}>"</div>
                <div className="testimonial-card-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD600', fontSize: '14px' }}>★</span>
                  ))}
                </div>
              </div>

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
                  boxShadow: `0 8px 24px ${review.accent}30`,
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

        {/* Stats Section */}
        <div className="testimonials-stats reveal">
          {stats.map((stat, i) => (
            <div key={i} className="testimonial-stat-card">
              <span style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</span>
              <div style={{
                fontSize: '28px',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #f48c25, #FF007F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;