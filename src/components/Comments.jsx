import { useState } from "react"
import { useTranslation } from "react-i18next"

function Comments(){

  const { t } = useTranslation()

  const [showAll,setShowAll] = useState(false)

  const comments = [

    {
      name:"Ahmet Yılmaz",
      text:t("comment1"),
      rating:"★★★★★"
    },

    {
      name:"Elif Kaya",
      text:t("comment2"),
      rating:"★★★★☆"
    },

    {
      name:"Merve Demir",
      text:t("comment3"),
      rating:"★★★★★"
    },

    {
      name:"Daniel Weber",
      text:t("comment4"),
      rating:"★★★☆☆"
    },

    {
      name:"Ivan Petrov",
      text:t("comment5"),
      rating:"★★★★★"
    },

    {
      name:"Sophie Martin",
      text:t("comment6"),
      rating:"★★★★☆"
    }

  ]

  const visibleComments = showAll
    ? comments
    : comments.slice(0,3)

  return(
    <section
      id="comments"
      className="section"
    >

      <h2>{t("customerReviews")}</h2>

      <div className="grid">

        {visibleComments.map((comment,index)=>(

          <div
            key={index}
            className="card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >

            <h3>{comment.name}</h3>

            <p
              style={{
                margin:"15px 0"
              }}
            >
              {comment.text}
            </p>

            <div
              style={{
                color:"#facc15",
                fontSize:"20px"
              }}
            >
              {comment.rating}
            </div>

          </div>

        ))}

      </div>

      <div
        style={{
          textAlign:"center",
          marginTop:"30px"
        }}
      >

        <button
          className="primary"
          onClick={()=>setShowAll(!showAll)}
        >
          {showAll
            ? t("showLess")
            : t("showAll")}
        </button>

      </div>

    </section>
  )
}

export default Comments