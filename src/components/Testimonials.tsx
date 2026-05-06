import React, { useState } from 'react';
import './Testimonials.css';

const reviews = [
  {
    text: "DateX completely changed how I connect with people. The video quality is incredible and the community is so welcoming! I've made genuine friendships here.",
    name: "Alex Johnson",
    role: "Verified User",
    avatar: "👨‍💼",
    rating: 5,
  },
  {
    text: "I love the reward system! It's fun to interact and get something back. The UI is also super smooth and beautiful. Best dating app ever!",
    name: "Sarah Miller",
    role: "Premium Member",
    avatar: "👩‍🎨",
    rating: 5,
  },
  {
    text: "Best social app I've used in years. No lag, real people, and amazing features. The live streaming is addictive! Highly recommend it.",
    name: "David Chen",
    role: "Active Explorer",
    avatar: "👨‍💻",
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
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span className="section-badge">💬 Testimonials</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'var(--on-surface)', marginTop: '24px', marginBottom: '16px' }}>
            Trusted by <span style={{ color: 'var(--primary)' }}>Millions</span> Worldwide
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto', fontWeight: 500 }}>
            Join our growing community and discover why DateX is the most loved social platform.
          </p>
        </div>

        {/* Main Review Card */}
        <div className="testimonial-featured reveal">
          <div className="testimonial-featured-quote">
            <span style={{ fontSize: '80px', opacity: 0.1, color: 'var(--primary)' }}>"</span>
          </div>

          <div className="testimonial-featured-content">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#f48c25', fontSize: '24px' }}>★</span>
              ))}
            </div>

            <p className="testimonial-featured-text">
              {reviews[activeReview].text}
            </p>

            <div className="testimonial-featured-author">
              <div className="testimonial-author-avatar">
                {reviews[activeReview].avatar}
              </div>
              <div>
                <div className="testimonial-author-name">{reviews[activeReview].name}</div>
                <div className="testimonial-author-role">
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
              />
            ))}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`testimonial-card reveal ${activeReview === index ? 'testimonial-card-active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveReview(index)}
            >
              <div className="testimonial-card-header">
                <div style={{
                  fontSize: '36px',
                  color: 'var(--primary)',
                  opacity: 0.3,
                  fontWeight: 900,
                  lineHeight: 1
                }}>"</div>
                <div className="testimonial-card-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#f48c25', fontSize: '16px' }}>★</span>
                  ))}
                </div>
              </div>

              <p className="testimonial-text">{review.text}</p>

              <div style={{
                height: '1px',
                background: 'var(--outline-variant)',
                marginBottom: '20px',
                opacity: 0.5
              }} />

              <div className="testimonial-user">
                <div className="user-avatar">
                  {review.avatar}
                </div>
                <div>
                  <div className="user-name">
                    {review.name}
                  </div>
                  <div className="user-role">
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
              <span style={{ fontSize: '32px', marginBottom: '12px' }}>{stat.icon}</span>
              <div style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--primary)'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '15px', color: 'var(--on-surface-variant)', fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;