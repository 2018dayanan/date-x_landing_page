import React, { useState, useEffect } from 'react';
import { Loader2, Trash2, Plus } from 'lucide-react';
import BackgroundOrbs from './BackgroundOrbs';
import Navbar from './Navbar';
import Footer from './Footer';
import { countryCodes } from './countryCodes';
import './AgencyRegistration.css';

interface ProofOfWork {
  title: string;
  url: string;
  type: 'image' | 'document';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  country_code: string;
  address: string;
  country: string;
  profile_picture: string;
  working_experience: {
    years: number | '';
    description: string;
  };
  proof_of_work: ProofOfWork[];
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  country_code: '+1',
  address: '',
  country: '',
  profile_picture: '',
  working_experience: {
    years: '',
    description: '',
  },
  proof_of_work: [
    { title: '', url: '', type: 'image' }
  ],
};

const AgencyRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.country) {
          const matchedCountry = countryCodes.find(
            c => c.name.toLowerCase() === data.country.toLowerCase()
          );
          setFormData(prev => ({
            ...prev,
            country: data.country,
            country_code: matchedCountry ? matchedCountry.code : prev.country_code
          }));
        }
      })
      .catch(err => console.error('Failed to fetch geo data:', err));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      working_experience: {
        ...prev.working_experience,
        [name]: name === 'years' ? (value === '' ? '' : parseInt(value)) : value,
      },
    }));
  };

  const handleProofChange = (index: number, field: keyof ProofOfWork, value: string) => {
    setFormData((prev) => {
      const updatedProof = [...prev.proof_of_work];
      updatedProof[index] = { ...updatedProof[index], [field]: value };
      return { ...prev, proof_of_work: updatedProof };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      callback(base64);
    };
    reader.readAsDataURL(file);
  };

  const addProofField = () => {
    setFormData((prev) => ({
      ...prev,
      proof_of_work: [...prev.proof_of_work, { title: '', url: '', type: 'image' }],
    }));
  };

  const removeProofField = (index: number) => {
    if (formData.proof_of_work.length <= 1) return;
    setFormData((prev) => ({
      ...prev,
      proof_of_work: prev.proof_of_work.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const getApiBaseUrl = () => {
        const envUrl = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL;
        if (envUrl && envUrl.startsWith('http')) return envUrl.replace(/\/api\/?$/, '');
        if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
          return 'https://api.datexstreaming.com';
        }
        return 'http://localhost:7023';
      };

      const baseUrl = getApiBaseUrl();
      const response = await fetch(`${baseUrl}/api/landing-page/register-agency`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.status) {
        setStatus({ type: 'success', message: 'Registration submitted successfully. Our team will review and contact you shortly.' });
        setFormData(initialFormData);
      } else {
        setStatus({ type: 'error', message: data.message || 'Registration failed. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <BackgroundOrbs />
      <Navbar />

      <div className="agency-registration-container">
        <div className="agency-registration-card">
          <h1>Become an Agency</h1>
          <p className="agency-registration-subtitle">
            Join DateX Streaming and start managing your own team of top-tier hosts.
          </p>

          {status && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Agency Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Star Agency" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="agency@example.com" />
              </div>

              <div className="form-group phone-group">
                <div className="phone-code-col">
                  <label>Code *</label>
                  <select required name="country_code" value={formData.country_code} onChange={handleInputChange}>
                    <option value="" disabled>Code</option>
                    {countryCodes.map((c) => (
                      <option key={`${c.name}-${c.code}`} value={c.code}>
                        {c.code} {c.name.substring(0, 5)}...
                      </option>
                    ))}
                  </select>
                </div>
                <div className="phone-input-col">
                  <label>Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone number" />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Address *</label>
                <input required type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Full agency address" />
              </div>

              <div className="form-group full-width">
                <label>Profile Picture *</label>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => handleFileUpload(e, (base64) => setFormData(prev => ({ ...prev, profile_picture: base64 })))}
                />
              </div>

              <div className="section-divider"></div>

              <div className="section-title">Experience & Qualifications</div>

              <div className="form-group">
                <label>Years of Experience *</label>
                <input required type="number" min="0" name="years" value={formData.working_experience.years} onChange={handleExperienceChange} placeholder="e.g. 3" />
              </div>

              <div className="form-group full-width">
                <label>Experience Description *</label>
                <textarea required name="description" value={formData.working_experience.description} onChange={handleExperienceChange} placeholder="Describe your experience managing live streaming hosts..." />
              </div>

              <div className="section-divider"></div>

              <div className="section-title">
                Proof of Work *
                <button type="button" onClick={addProofField} className="add-proof-btn">
                  <Plus size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Add Another
                </button>
              </div>

              {formData.proof_of_work.map((proof, index) => (
                <div key={index} className="proof-item">
                  <div className="form-group">
                    <label>Title *</label>
                    <input required type="text" value={proof.title} onChange={(e) => handleProofChange(index, 'title', e.target.value)} placeholder="e.g. Agency License" />
                  </div>
                  <div className="form-group">
                    <label>Type *</label>
                    <select value={proof.type} onChange={(e) => handleProofChange(index, 'type', e.target.value as 'image' | 'document')}>
                      <option value="image">Image</option>
                      <option value="document">Document</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Upload File *</label>
                    <input
                      required
                      type="file"
                      accept={proof.type === 'image' ? "image/png, image/jpeg, image/jpg" : ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"}
                      onChange={(e) => handleFileUpload(e, (base64) => handleProofChange(index, 'url', base64))}
                    />
                  </div>
                  {formData.proof_of_work.length > 1 && (
                    <button type="button" onClick={() => removeProofField(index)} className="remove-proof-btn" title="Remove Proof">
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              ))}

              <button type="submit" disabled={loading} className="submit-btn full-width">
                {loading ? <Loader2 className="spinner" size={20} /> : 'Submit Registration Request'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgencyRegistration;
