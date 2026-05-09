import { useState } from 'react'
import toast from "react-hot-toast"

function OfferForm(){

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [type,setType] = useState('Araç Sigortası')
  const [offer,setOffer] = useState(null)

  const offers = {
    'Araç Sigortası': {
      title:'Full Kasko Paketi',
      price:'2.450₺ / ay',
      detail:'Yol yardım, mini onarım, çekici ve anlaşmalı servis desteği.'
    },
    'Sağlık Sigortası': {
      title:'Premium Sağlık Paketi',
      price:'3.200₺ / ay',
      detail:'Özel hastane, muayene, tahlil ve online doktor desteği.'
    },
    'Konut Sigortası': {
      title:'Konut Güvence Paketi',
      price:'1.890₺ / ay',
      detail:'Deprem, yangın, hırsızlık ve su baskını güvencesi.'
    },
    'Seyahat Sigortası': {
      title:'Global Seyahat Paketi',
      price:'990₺ / ay',
      detail:'Bagaj kaybı, uçuş iptali ve yurt dışı sağlık desteği.'
    }
  }

  const generateOffer = () => {
    if(!name || !phone){
      alert('Lütfen ad soyad ve telefon bilgilerini gir.')
      return
    }

    setOffer({
      id: Date.now(),
      name,
      phone,
      type,
      status: 'Beklemede',
      date: new Date().toLocaleDateString('tr-TR'),
      ...offers[type]
    })
  }

  const saveOffer = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if(isLoggedIn !== 'true'){
      alert('Teklifi kaydetmek için önce giriş yapmalısınız.')
      return
    }

    const savedOffers = JSON.parse(localStorage.getItem('uralOffers')) || []

    savedOffers.push(offer)

    localStorage.setItem('uralOffers', JSON.stringify(savedOffers))

    toast.success("Teklif kaydedildi")
  }

  return(
    <section className="offer-section">

      <h2>Ücretsiz Teklif Al</h2>

      <input
        className="input"
        placeholder="Ad Soyad"
        value={name}
        onChange={e=>setName(e.target.value)}
      />

      <input
        className="input"
        placeholder="Telefon"
        value={phone}
        onChange={e=>setPhone(e.target.value)}
      />

      <select
        className="input"
        value={type}
        onChange={e=>setType(e.target.value)}
      >
        <option>Araç Sigortası</option>
        <option>Sağlık Sigortası</option>
        <option>Konut Sigortası</option>
        <option>Seyahat Sigortası</option>
      </select>

      <button onClick={generateOffer} className="primary">
        Teklif Oluştur
      </button>

      {offer && (
        <div className="offer-result">
          <h3>{offer.title}</h3>
          <p>{offer.name} için özel {offer.type} teklifi</p>
          <div className="price">{offer.price}</div>
          <p>{offer.detail}</p>

          <button
            onClick={saveOffer}
            className="primary"
            style={{marginTop:'20px'}}
          >
            Teklifi Onayla ve Kaydet
          </button>
        </div>
      )}

    </section>
  )
}

export default OfferForm