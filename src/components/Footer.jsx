import { useTranslation } from "react-i18next"

function Footer(){

  const { t } = useTranslation()

  return(
    <footer className="footer">

      <div className="footer-inner">

        <div>
          <h2>
            {t("brand")}
          </h2>

          <p>
            {t("footerText")}
          </p>
        </div>

        <div>
          <h3>{t("services")}</h3>

          <p>{t("carInsurance")}</p>
          <p>{t("healthInsurance")}</p>
          <p>{t("homeInsurance")}</p>
          <p>{t("travelInsurance")}</p>
        </div>

        <div>
          <h3>{t("corporate")}</h3>

          <p>{t("about")}</p>
          <p>{t("applyNow")}</p>
          <p>{t("offerTitle")}</p>
          <p>{t("comments")}</p>
        </div>

        <div>
          <h3>{t("contact")}</h3>

          <p>+90 553 484 00 50</p>
          <p>info@uralsigorta.com</p>
          <p>{t("location")}</p>
        </div>

      </div>

      <div className="footer-bottom">
        {t("copyright")}
      </div>

    </footer>
  )
}

export default Footer