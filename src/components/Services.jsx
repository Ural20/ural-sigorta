function Services(){

    const services = [
      {
        title:'Araç Sigortası',
        text:'Kasko, trafik sigortası, yol yardım ve mini onarım desteği.',
        detail:'Araç sigortası ile aracınızı kaza, hasar, hırsızlık ve yol yardım ihtiyaçlarına karşı güvence altına alabilirsiniz.'
      },
      {
        title:'Sağlık Sigortası',
        text:'Özel hastane, muayene, tahlil ve online doktor desteği.',
        detail:'Sağlık sigortası ile özel sağlık kuruluşlarında hızlı ve kapsamlı hizmet alabilirsiniz.'
      },
      {
        title:'Konut Sigortası',
        text:'Deprem, yangın, hırsızlık ve su baskını koruması.',
        detail:'Konut sigortası evinizi ve eşyalarınızı beklenmeyen risklere karşı korur.'
      },
      {
        title:'Seyahat Sigortası',
        text:'Yurt içi ve yurt dışı seyahatlerde tam güvence.',
        detail:'Seyahat sigortası bagaj kaybı, uçuş iptali ve sağlık desteği sağlar.'
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