import React, { useState, useEffect, useRef } from 'react';
import './Features.css';

// Importing all assets
import globalBall from '../assets/chamet/global_ball.BO9hZeoA.webp';
import frame1 from '../assets/chamet/Frame-1.BYFE7xVn.png';
import gift from '../assets/chamet/gift.C627IobT.webp';
import pointer from '../assets/chamet/pointer.BuVgjDSV.webp';
import phoneFrame from '../assets/chamet/phoneFrame.BSPiujGq.webp';
import coin from '../assets/chamet/coin.XxGZALXQ.webp';
import liveGift from '../assets/chamet/live_gift.DYhYim5P.webp';
import microphone from '../assets/chamet/microphone.CLvAZDJ0.webp';
import swiper3 from '../assets/chamet/swiper_3.BStUCwBW.webp';
import motionThirdGame from '../assets/chamet/motion_third_game.BIrkqU3u.gif';
import motionThirdMessage from '../assets/chamet/motion_third_message.C_YEPygb.gif';
import motionThirdGift from '../assets/chamet/motion_third_gift.By940fdk.gif';
import motionThirdSmile from '../assets/chamet/motion_third_smile.CkFOCY-U.gif';
import partyPic from '../assets/chamet/party_pic.BZI-3Trh.webp';
import momentsPic from '../assets/chamet/moments_pic.Bh_i2fnF.webp';
import motionMoments from '../assets/chamet/motion_moments.n4Z_9dfp.gif';

const slidesData = [
  { id: 0, label: '1v1 Video Chat' },
  { id: 1, label: 'Live Streaming' },
  { id: 2, label: 'Enjoy Party' },
  { id: 3, label: 'Feed & Moments' },
];

const Features: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number>(0);

  const totalSlides = slidesData.length;

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6500);
  };

  const stopAutoPlay = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.changedTouches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(delta) > 45) {
      setCurrentSlide((prev) => {
        const next = prev + (delta < 0 ? 1 : -1);
        return (next + totalSlides) % totalSlides;
      });
    }
    if (!isHovered) startAutoPlay();
  };

  const handleTabClick = (index: number) => {
    setCurrentSlide(index);
    if (!isHovered) startAutoPlay();
  };

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
          <span className="section-badge">✨ Features</span>
          <h2 className="section-title">
            Everything You Need for <span className="text-primary">Perfect Connections</span>
          </h2>
          <p className="section-subtitle">
            Packed with powerful features designed to make every interaction meaningful and memorable.
          </p>
        </div>

        <div className="cp-product reveal" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="cp-card">
            <div className="cp-slides" aria-live="polite">
              {/* Slide 0: 1v1 Video Chat */}
              <article className={`cp-slide cp-slide-video ${currentSlide === 0 ? 'is-active' : ''}`}>
                <div className="cp-visual cp-video-visual">
                  <img className="cp-globe" src={globalBall} alt="" loading="lazy" />
                  <img className="cp-video-art" src={frame1} alt="People joining a 1v1 video chat" loading="lazy" />
                </div>
                <div className="cp-copy cp-copy-right">
                  <h2>1v1 Video Chat</h2>
                  <h3>Meet Stunning People Worldwide</h3>
                  <p>
                    Ready to match? Start your free video chat and meet awesome people
                    worldwide instantly on DateX. Start a high-energy video chat match
                    with verified users from around the globe.
                  </p>
                  <a className="cp-cta" href="#">
                    Start Video Chat
                    <svg viewBox="0 0 22 23" aria-hidden="true">
                      <path d="M2 10C1.17157 10 .5 10.6716 .5 11.5C.5 12.3284 1.17157 13 2 13V10ZM21.3039 12.5607C21.8897 11.9749 21.8897 11.0251 21.3039 10.4393L11.758 .893398C11.1722 .307611 10.2224 .307611 9.63665 .893398C9.05087 1.47919 9.05087 2.42893 9.63665 3.01472L18.1219 11.5L9.63665 19.9853C9.05087 20.5711 9.05087 21.5208 9.63665 22.1066C10.2224 22.6924 11.1722 22.6924 11.758 22.1066L21.3039 12.5607ZM2 13H20.2433V10H2V13Z" />
                    </svg>
                  </a>
                </div>
              </article>

              {/* Slide 1: Live Streaming */}
              <article className={`cp-slide cp-slide-live ${currentSlide === 1 ? 'is-active' : ''}`}>
                <img className="cp-corner cp-corner-left" src={gift} alt="" loading="lazy" />
                <div className="cp-copy">
                  <h2>Live Streaming</h2>
                  <h3>Closer to colorful life</h3>
                  <p>
                    Gain insights into various interesting lifestyles. Discover creators
                    sharing their lives, talents, music, and live moments.
                  </p>
                  <a className="cp-cta" href="#">
                    Join LIVE
                    <svg viewBox="0 0 22 23" aria-hidden="true">
                      <path d="M2 10C1.17157 10 .5 10.6716 .5 11.5C.5 12.3284 1.17157 13 2 13V10ZM21.3039 12.5607C21.8897 11.9749 21.8897 11.0251 21.3039 10.4393L11.758 .893398C11.1722 .307611 10.2224 .307611 9.63665 .893398C9.05087 1.47919 9.05087 2.42893 9.63665 3.01472L18.1219 11.5L9.63665 19.9853C9.05087 20.5711 9.05087 21.5208 9.63665 22.1066C10.2224 22.6924 11.1722 22.6924 11.758 22.1066L21.3039 12.5607ZM2 13H20.2433V10H2V13Z" />
                    </svg>
                  </a>
                </div>
                <div className="cp-visual cp-live-visual">
                  <img className="cp-pointer" src={pointer} alt="Live streaming interface" loading="lazy" />
                  <img className="cp-live-phone" src={phoneFrame} alt="" loading="lazy" />
                  <img className="cp-float cp-coin" src={coin} alt="" loading="lazy" />
                  <img className="cp-float cp-live-gift" src={liveGift} alt="" loading="lazy" />
                  <img className="cp-float cp-mic" src={microphone} alt="" loading="lazy" />
                </div>
              </article>

              {/* Slide 2: Enjoy Party */}
              <article className={`cp-slide cp-slide-party ${currentSlide === 2 ? 'is-active' : ''}`}>
                <div className="cp-visual cp-party-visual">
                  <img className="cp-party-main" src={swiper3} alt="Party room interface" loading="lazy" />
                  <img className="cp-party-icon cp-icon-a" src={motionThirdGame} alt="" loading="lazy" />
                  <img className="cp-party-icon cp-icon-b" src={motionThirdMessage} alt="" loading="lazy" />
                  <img className="cp-party-icon cp-icon-c" src={motionThirdGift} alt="" loading="lazy" />
                  <img className="cp-party-icon cp-icon-d" src={motionThirdSmile} alt="" loading="lazy" />
                </div>
                <img className="cp-corner cp-corner-right" src={partyPic} alt="" loading="lazy" />
                <div className="cp-copy cp-copy-right">
                  <h2>Enjoy Party</h2>
                  <h3>Multi-Guest Chat &amp; Play Games</h3>
                  <p>
                    Join Party rooms to play fun games, win rewards, and make new
                    connections. Have a blast while you play.
                  </p>
                  <a className="cp-cta" href="#">
                    Join Party
                    <svg viewBox="0 0 22 23" aria-hidden="true">
                      <path d="M2 10C1.17157 10 .5 10.6716 .5 11.5C.5 12.3284 1.17157 13 2 13V10ZM21.3039 12.5607C21.8897 11.9749 21.8897 11.0251 21.3039 10.4393L11.758 .893398C11.1722 .307611 10.2224 .307611 9.63665 .893398C9.05087 1.47919 9.05087 2.42893 9.63665 3.01472L18.1219 11.5L9.63665 19.9853C9.05087 20.5711 9.05087 21.5208 9.63665 22.1066C10.2224 22.6924 11.1722 22.6924 11.758 22.1066L21.3039 12.5607ZM2 13H20.2433V10H2V13Z" />
                    </svg>
                  </a>
                </div>
              </article>

              {/* Slide 3: Feed & Moments */}
              <article className={`cp-slide cp-slide-moments ${currentSlide === 3 ? 'is-active' : ''}`}>
                <img className="cp-corner cp-corner-left" src={momentsPic} alt="" loading="lazy" />
                <div className="cp-copy">
                  <h2>Feed &amp; Moments</h2>
                  <h3>Immerse Yourself in Moments</h3>
                  <p>
                    Experience an immersive feed. Browse moments, interact with posts,
                    and create meaningful connections through likes and comments.
                  </p>
                  <a className="cp-cta" href="#">
                    View Moments
                    <svg viewBox="0 0 22 23" aria-hidden="true">
                      <path d="M2 10C1.17157 10 .5 10.6716 .5 11.5C.5 12.3284 1.17157 13 2 13V10ZM21.3039 12.5607C21.8897 11.9749 21.8897 11.0251 21.3039 10.4393L11.758 .893398C11.1722 .307611 10.2224 .307611 9.63665 .893398C9.05087 1.47919 9.05087 2.42893 9.63665 3.01472L18.1219 11.5L9.63665 19.9853C9.05087 20.5711 9.05087 21.5208 9.63665 22.1066C10.2224 22.6924 11.1722 22.6924 11.758 22.1066L21.3039 12.5607ZM2 13H20.2433V10H2V13Z" />
                    </svg>
                  </a>
                </div>
                <div className="cp-visual cp-moments-visual">
                  {/* Applied lazy loading to large GIF as requested */}
                  <img src={motionMoments} alt="Moments feed interface" loading="lazy" />
                </div>
              </article>
            </div>

            <div className="cp-tabs" role="tablist" aria-label="Product features">
              {slidesData.map((slide) => (
                <button
                  key={slide.id}
                  className={currentSlide === slide.id ? 'is-active' : ''}
                  type="button"
                  onClick={() => handleTabClick(slide.id)}
                >
                  {slide.label}
                </button>
              ))}
            </div>

            <div className="cp-dots" aria-hidden="true">
              {slidesData.map((slide) => (
                <button
                  key={slide.id}
                  className={currentSlide === slide.id ? 'is-active' : ''}
                  type="button"
                  onClick={() => handleTabClick(slide.id)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;