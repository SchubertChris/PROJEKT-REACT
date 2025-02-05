import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../images/logo.png';
import '../styles/HomeImage.css';

export default function HomeImage({ setMenuVisible }) { // `setMenuVisible` als Prop übergeben
  const navigate = useNavigate();

  const handleClick = () => {
    setMenuVisible(false); // Menü schließen
    navigate('/'); // Zur Startseite navigieren
  };

  return (
    <>
      <img id='HOMEIMG' src={Image} alt='Logo' onClick={handleClick} />
    </>
  );
}
