import { useState } from "react"
import { useTranslation } from "react-i18next"
import toast from "react-hot-toast"

function OfferForm(){

  const { t } = useTranslation()

  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [type,setType] = useState("Araç Sigortası")
  const [offer,setOffer] = useState(null)

  const offers = {
    "Araç Sigortası": {
      title:"Full Kasko Paketi",
      price:"2.450₺ / ay",
      detail:"Yol yardım, mini onarım, çekici ve anlaşmalı servis desteği."
    },
    "Sağlık Sigortası": {
      title:"Premium Sağlık Paketi",
      price:"3.200₺ / ay",
      detail:"Özel hastane, muayene, tahlil ve online doktor desteği."
    },
    "Konut Sigortası": {
      title:"Konut Güvence Paketi",
      price:"1.890₺ / ay",
      detail:"Deprem, yangın, hırsızlık ve su baskını güvencesi."
    },
    "Seyahat Sigortası": {
      title:"Global Seyahat Paketi",
      price:"990₺ / ay",
      detail:"Bagaj kaybı, uçuş iptali ve yurt dışı sağlık desteği."
    }
  }

  const generateOffer = () => {
    if(!name || !phone){
      toast.error(t("fillAllFields"))
      return
    }

    setOffer({
      id: Date.now(),
      name,
      phone,
      type,
      status:"Beklemede",
      date:new Date().toLocaleDateString("tr-TR"),
      ...offers[type]
    })
  }

  const saveOffer = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if(isLoggedIn !== "true"){
      toast.error(t("loginRequired"))
      return
    }

    const savedOffers = JSON.parse(localStorage.getItem("uralOffers")) || []

    savedOffers.push(offer)

    localStorage.setItem("uralOffers", JSON.stringify(savedOffers))

    toast.success(t("offerSaved"))
  }

  return(
    <section className="offer-section">

      <h2>{t("offerTitle")}</h2>

      <input
        className="input"
        placeholder={t("name")}
        value={name}
        onChange={e=>setName(e.target.value)}
      />

      <input
        className="input"
        placeholder={t("phone")}
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
        {t("createOffer")}
      </button>

      {offer && (
        <div className="offer-result">
          <h3>{offer.title}</h3>

          <p>
            {offer.name} - {offer.type}
          </p>

          <div className="price">
            {offer.price}
          </div>

          <p>{offer.detail}</p>

          <button
            onClick={saveOffer}
            className="primary"
            style={{marginTop:"20px"}}
          >
            {t("saveOffer")}
          </button>
        </div>
      )}

    </section>
  )
}

export default OfferForm