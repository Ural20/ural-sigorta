import { useTranslation } from "react-i18next"

function Stats(){

  const { t } = useTranslation()

  const stats = [
    {
      number:"12.500+",
      title:t("happyCustomers")
    },
    {
      number:"98%",
      title:t("satisfaction")
    },
    {
      number:"24/7",
      title:t("liveSupport")
    },
    {
      number:"250M₺",
      title:t("totalCoverage")
    }
  ]

  return(
    <section className="section">
      <div className="grid">

        {stats.map((item,index)=>(
          <div
            key={index}
            className="card"
            data-aos="zoom-in"
            data-aos-delay={index * 120}
            style={{textAlign:"center"}}
          >
            <h2
              style={{
                fontSize:"52px",
                color:"#4f46e5",
                marginBottom:"15px"
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                fontSize:"20px",
                fontWeight:"700"
              }}
            >
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Stats