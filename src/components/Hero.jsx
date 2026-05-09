import { useNavigate } from 'react-router-dom'

function Hero(){

  const navigate = useNavigate()

  return(
    <section className="hero">
      <div className="hero-inner">

        <span className="badge">
          Yeni Nesil Dijital Sigorta
        </span>

        <h1>
          Geleceğini Ural Sigorta ile Güvence Altına Al
        </h1>

        <p>
          Araç, sağlık, konut ve seyahat sigortalarında hızlı teklif,
          online başvuru ve dijital poliçe deneyimi.
        </p>

        <div className="hero-buttons">
          <button onClick={()=>navigate('/apply')} className="secondary">
            Hemen Başvur
          </button>

          <button
            onClick={()=>document.getElementById('services').scrollIntoView({behavior:'smooth'})}
            className="primary"
          >
            Detaylı İncele
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero