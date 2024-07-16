import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audiodescrição</li>
        <li>Central de Ajuda</li>
        <li>Cartão pré-pago</li>
        <li>Imprensa</li>
        <li>Relações com investidores</li>
        <li>Carreiras</li>
        <li>Termos de Uso</li>
        <li>Privacidade</li>
        <li>Avisos Legais</li>
        <li>Preferências de cookies</li>
        <li>Informações corporativas</li>
        <li>Entre em contato</li>
      </ul>
      <p className='copyright-text'>©️ 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
