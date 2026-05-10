import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import heroImage from "../assets/hero-insurance.jpg"

function Hero(){

  const navigate = useNavigate()
  const { t } = useTranslation()

  return(
    <section className="hero">

      <img
        src={heroImage}
        alt=""
        className="hero-image"
      />

      <div className="hero-inner">

        <span className="badge">
          {t("badge")}
        </span>

        <h1>
          {t("heroTitle")}
        </h1>

        <p>
          {t("heroText")}
        </p>

        <div className="hero-buttons">

          <button
            onClick={()=>navigate("/apply")}
            className="secondary"
          >
            {t("applyNow")}
          </button>

          <button
            onClick={()=>document.getElementById("services").scrollIntoView({behavior:"smooth"})}
            className="primary"
          >
            {t("details")}
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero