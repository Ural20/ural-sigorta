import { useState } from "react"
import { useTranslation } from "react-i18next"
import toast from "react-hot-toast"

function OfferForm(){

  const { t } = useTranslation()

  const insuranceTypes = [
    {
      key:"car",
      label:t("carInsurance"),
      title:t("carOfferTitle"),
      price:"2.450₺ / ay",
      detail:t("carOfferDetail")
    },
    {
      key:"health",
      label:t("healthInsurance"),
      title:t("healthOfferTitle"),
      price:"3.200₺ / ay",
      detail:t("healthOfferDetail")
    },
    {
      key:"home",
      label:t("homeInsurance"),
      title:t("homeOfferTitle"),
      price:"1.890₺ / ay",
      detail:t("homeOfferDetail")
    },
    {
      key:"travel",
      label:t("travelInsurance"),
      title:t("travelOfferTitle"),
      price:"990₺ / ay",
      detail:t("travelOfferDetail")
    }
  ]

  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [typeKey,setTypeKey] = useState("car")
  const [offer,setOffer] = useState(null)

  const generateOffer = () => {
    if(!name || !phone){
      toast.error(t("fillAllFields"))
      return
    }

    const selectedOffer = insuranceTypes.find(item=>item.key === typeKey)

    setOffer({
      id: Date.now(),
      name,
      phone,
      typeKey,
      type:selectedOffer.label,
      title:selectedOffer.title,
      price:selectedOffer.price,
      detail:selectedOffer.detail,
      status:t("pending"),
      date:new Date().toLocaleDateString("tr-TR")
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
        value={typeKey}
        onChange={e=>setTypeKey(e.target.value)}
      >
        {insuranceTypes.map(item=>(
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
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