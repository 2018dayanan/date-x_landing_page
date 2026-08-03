import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { FaGooglePlay } from 'react-icons/fa6';
import BackgroundOrbs from './BackgroundOrbs';
import logo from '../assets/logo_dark.png';
import './ReferralRedirect.css';

const ReferralRedirect: React.FC = () => {
  const { code: paramCode } = useParams<{ code: string }>();
  const [searchParams] = useSearchParams();

  // Support both /r/ABC123 and /r/?code=ABC123
  const referralCode = paramCode || searchParams.get('code') || 'VIP2026';

  const [status, setStatus] = useState<'opening_app' | 'redirecting_store'>('opening_app');

  const packageName = "com.datexstreaming.app";
  const playStoreUrl = `https://play.google.com/store/apps/details?id=${packageName}&referrer=${encodeURIComponent('code=' + referralCode)}`;

  // Android Chrome Intent URL: Forces Chrome to open the mobile app directly if installed,
  // or fall back to the Play Store if not installed!
  const intentUrl = `intent://datexstreaming.com/r/${referralCode}#Intent;scheme=https;package=${packageName};S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};end`;

  useEffect(() => {
    // Step 1: Trigger the Intent URI to force opening the app from inside web browsers
    window.location.href = intentUrl;

    // Step 2: Fallback timer to Google Play Store after 1.8 seconds if Intent failed/blocked
    const timer = setTimeout(() => {
      setStatus('redirecting_store');
      window.location.href = playStoreUrl;
    }, 1800);

    return () => clearTimeout(timer);
  }, [intentUrl, playStoreUrl]);

  const handleManualClick = () => {
    window.location.href = playStoreUrl;
  };

  return (
    <div className="referral-page-container">
      <BackgroundOrbs />

      <div className="referral-card reveal">
        {/* Logo */}
        <div className="referral-logo-wrapper">
          <Link to="/">
            <img src={logo} alt="DateX Streaming" className="referral-logo" />
          </Link>
        </div>

        {/* Referral Badge */}
        <div className="referral-badge">
          <Sparkles size={16} color="#f48c25" />
          <span>Referral Code: <strong>{referralCode}</strong></span>
        </div>

        {/* Spinner & Status */}
        <div className="referral-loader-container">
          <Loader2 className="referral-spinner" />
        </div>

        <div>
          <h1 className="referral-status-title">
            {status === 'opening_app' ? 'Opening DateX Streaming...' : 'Redirecting to Google Play...'}
          </h1>
          <p className="referral-status-subtitle">
            {status === 'opening_app'
              ? "We are connecting you directly to the app with your referral rewards."
              : "App not installed? We are forwarding you to our Google Play Store page."}
          </p>
        </div>

        {/* Manual Action Group */}
        <div className="referral-action-group">
          <button onClick={handleManualClick} className="referral-play-btn">
            <FaGooglePlay size={20} />
            <span>Get on Google Play</span>
          </button>

          <div className="referral-secure-note">
            <ShieldCheck size={15} />
            <span>Your reward is locked in & ready upon installation</span>
          </div>

          <Link to="/" className="referral-home-link">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReferralRedirect;
