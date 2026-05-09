import carImage from "../assets/car-insurance.jpg"
import healthImage from "../assets/health-insurance.jpg"
import homeImage from "../assets/home-insurance.jpg"
import travelImage from "../assets/travel-insurance.jpg"


function Services(){

  const services = [
    {
      title:'Araç Sigortası',
      text:'Kasko, trafik sigortası, yol yardım ve mini onarım desteği.',
      detail:'Araç sigortası ile aracınızı güvence altına alabilirsiniz.',
      image: carImage
    },
  
    {
      title:'Sağlık Sigortası',
      text:'Özel hastane ve online doktor desteği.',
      detail:'Sağlık sigortası ile kapsamlı sağlık hizmeti alın.',
      image: healthImage
    },
  
    {
      title:'Konut Sigortası',
      text:'Deprem, yangın ve hırsızlık koruması.',
      detail:'Konut sigortası evinizi korur.',
      image: homeImage
    },
  
    {
      title:'Seyahat Sigortası',
      text:'Yurt içi ve yurt dışı tam güvence.',
      detail:'Seyahat sigortası bagaj ve sağlık desteği sağlar.',
      image: travelImage
    }
  ]
  
    return(
      <section id="services" className="section">
  
        <h2>Size Özel Sigorta Çözümleri</h2>
  
        <p className="section-desc">
          İhtiyacınıza uygun sigorta paketini seçin, detaylarını inceleyin.
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
                onClick={()=>alert(service.title + '\n\n' + service.detail)}
                className="primary"
              >
                Detaylı Bilgi
              </button>
            </div>
          ))}
        </div>
  
      </section>
    )
  }
  
  export default Services