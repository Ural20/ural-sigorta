function Stats(){

    const stats = [
  
      {
        number:"12.500+",
        title:"Mutlu Müşteri"
      },
  
      {
        number:"98%",
        title:"Memnuniyet"
      },
  
      {
        number:"24/7",
        title:"Canlı Destek"
      },
  
      {
        number:"250M₺",
        title:"Toplam Güvence"
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