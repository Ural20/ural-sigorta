import { useTranslation } from "react-i18next"

import carImage from "../assets/car-insurance.jpg"
import healthImage from "../assets/health-insurance.jpg"
import homeImage from "../assets/home-insurance.jpg"
import travelImage from "../assets/travel-insurance.jpg"

function Services(){

  const { t } = useTranslation()

  const services = [
    {
      title:t("carInsurance"),
      text:t("carText"),
      detail:t("carDetail"),
      image:carImage
    },
    {
      title:t("healthInsurance"),
      text:t("healthText"),
      detail:t("healthDetail"),
      image:healthImage
    },
    {
      title:t("homeInsurance"),
      text:t("homeText"),
      detail:t("homeDetail"),
      image:homeImage
    },
    {
      title:t("travelInsurance"),
      text:t("travelText"),
      detail:t("travelDetail"),
      image:travelImage
    }
  ]

  return(
    <section id="services" className="section">

      <h2>{t("customSolutions")}</h2>

      <p className="section-desc">
        {t("servicesDesc")}
      </p>

      <div className="grid">
        {services.map((service,index)=>(
          <div
            key={index}
            className="card"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >

            <img
              src={service.image}
              alt=""
              className="service-image"
            />

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <button
              onClick={()=>alert(service.title + "\n\n" + service.detail)}
              className="primary"
            >
              {t("details")}
            </button>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Services