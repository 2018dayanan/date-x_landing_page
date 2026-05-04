import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Date-x completely changed how I connect with people. The video quality is incredible and the community is so welcoming!",
      name: "Alex Johnson",
      role: "Verified User",
      avatar: "👤"
    },
    {
      text: "I love the reward system! It's fun to interact and get something back. The UI is also super smooth and beautiful.",
      name: "Sarah Miller",
      role: "Premium Member",
      avatar: "👸"
    },
    {
      text: "Best social app I've used in years. No lag, real people, and amazing features. Highly recommend it to everyone!",
      name: "David Chen",
      role: "Active Explorer",
      avatar: "🤵"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '20px' }}>
            Trusted by <span className="text-gradient">Millions</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Don't just take our word for it. Hear what our community has to say.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="glass testimonial-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-quote">“</div>
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-user">
                <div className="user-avatar">{review.avatar}</div>
                <div>
                  <div className="user-name">{review.name}</div>
                  <div className="user-role">{review.role}</div>
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