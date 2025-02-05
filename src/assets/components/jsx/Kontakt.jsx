import React, { useState } from 'react';
import '../styles/Kontakt.css';

export default function Kontakt() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    cpass: '',
    twitter: '',
    facebook: '',
    gplus: '',
    fname: '',
    lname: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (step === 0) {
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = '🚨 Bitte eine gültige E-Mail eingeben!';
      if (formData.pass.length < 6) newErrors.pass = '🔒 Dein Passwort muss mindestens 6 Zeichen lang sein!';
      if (formData.pass !== formData.cpass) newErrors.cpass = '❌ Passwörter stimmen nicht überein!';
    }
    if (step === 2) {
      if (!formData.fname.trim()) newErrors.fname = '⚠️ Vorname darf nicht leer sein!';
      if (!formData.lname.trim()) newErrors.lname = '⚠️ Nachname darf nicht leer sein!';
      if (!formData.phone.match(/^\+?\d{10,15}$/)) newErrors.phone = '📞 Bitte eine gültige Telefonnummer eingeben!';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => validate() && setStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='Kontakt-Container'>
    <form id="msform">
      <ul id="progressbar">
        {['Neuer Account', 'Soziale Netzwerke', 'Personaldaten'].map((label, index) => (
          <li key={index} className={step === index ? 'active' : ''}>{label}</li>
        ))}
      </ul>

      {step === 0 && (
        <fieldset>
          <h2 className="fs-title">Erstelle dein Konto</h2>
          <input type="text" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
          <input type="password" name="pass" placeholder="Passwort" value={formData.pass} onChange={handleChange} />
          {errors.pass && <span className="error">{errors.pass}</span>}
          <input type="password" name="cpass" placeholder="Passwort bestätigen" value={formData.cpass} onChange={handleChange} />
          {errors.cpass && <span className="error">{errors.cpass}</span>}
          <button type="button" className="next action-button" onClick={nextStep}>Weiter</button>
        </fieldset>
      )}
      
      {step === 1 && (
        <fieldset>
          <h2 className="fs-title">Soziale Profile</h2>
          <input type="text" name="twitter" placeholder="Twitter" value={formData.twitter} onChange={handleChange} />
          <input type="text" name="facebook" placeholder="Facebook" value={formData.facebook} onChange={handleChange} />
          <input type="text" name="gplus" placeholder="Google Plus" value={formData.gplus} onChange={handleChange} />
          <button type="button" className="previous action-button" onClick={prevStep}>Zurück</button>
          <button type="button" className="next action-button" onClick={nextStep}>Weiter</button>
        </fieldset>
      )}
      
      {step === 2 && (
        <fieldset>
          <h2 className="fs-title">Persönliche Details</h2>
          <input type="text" name="fname" placeholder="Vorname" value={formData.fname} onChange={handleChange} />
          {errors.fname && <span className="error">{errors.fname}</span>}
          <input type="text" name="lname" placeholder="Nachname" value={formData.lname} onChange={handleChange} />
          {errors.lname && <span className="error">{errors.lname}</span>}
          <input type="text" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
          <textarea name="address" placeholder="Adresse" value={formData.address} onChange={handleChange}></textarea>
          <button type="button" className="previous action-button" onClick={prevStep}>Zurück</button>
          <button type="submit" className="submit action-button">Absenden</button>
        </fieldset>
      )}
    </form>
    </div>
  );
}
