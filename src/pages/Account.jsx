import { useEffect, useState } from "react"
import jsPDF from "jspdf"

function Account(){

  const [offers,setOffers] = useState([])
  const user = JSON.parse(localStorage.getItem("uralUser"))

  useEffect(()=>{
    const savedOffers = JSON.parse(localStorage.getItem("uralOffers")) || []
    setOffers(savedOffers)
  },[])

  const downloadPDF = (offer) => {

    const doc = new jsPDF()
  
    doc.setFontSize(22)
    doc.text("Ural Sigorta Teklif Dokümani", 20, 20)
  
    doc.setFontSize(14)
  
    doc.text(`Paket: ${offer.title}`, 20, 50)
  
    doc.text(`Musteri: ${offer.name}`, 20, 70)
  
    doc.text(`Sigorta Turu: ${offer.type}`, 20, 90)
  
    doc.text(`Fiyat: ${offer.price}`, 20, 110)
  
    doc.text(`Durum: ${offer.status}`, 20, 130)
  
    doc.text(`Tarih: ${offer.date}`, 20, 150)
  
    doc.save("ural-sigorta-teklif.pdf")
  }

  return(
    <section className="section">

      <h2>Hesabım</h2>

      <p className="section-desc">
        Kaydettiğiniz teklifler burada listelenir.
      </p>
      <div
  className="card"
  style={{
    marginBottom:"40px"
  }}
>

  <h3
    style={{
      marginBottom:"20px"
    }}
  >
    Profil Bilgileri
  </h3>

  <p>
    <strong>Ad Soyad:</strong>
    {" "}
    {user?.name || "Belirtilmedi"}
  </p>

  <p>
    <strong>E-Posta:</strong>
    {" "}
    {user?.email || "Belirtilmedi"}
  </p>

  <p>
    <strong>Toplam Teklif:</strong>
    {" "}
    {offers.length}
  </p>

  <p>
    <strong>Üyelik:</strong>
    {" "}
    Premium Müşteri
  </p>

</div>

      <div className="grid">

        {offers.length === 0 && (
          <div className="card">
            <h3>Henüz teklif yok</h3>
            <p>Ana sayfadan teklif oluşturup kaydedebilirsiniz.</p>
          </div>
        )}

        {offers.map((offer,index)=>(
          <div
            key={index}
            className="card"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            <h3>{offer.title}</h3>
            <p>{offer.name} - {offer.type}</p>
            <div className="price">{offer.price}</div>
            <p>{offer.detail}</p>
            <p>Durum: {offer.status}</p>
                   
            <button
  className="primary"
  style={{marginTop:"20px"}}
  onClick={()=>downloadPDF(offer)}
>
  PDF İndir
</button>
               

            <p>Tarih: {offer.date}</p>


          </div>
        ))}

      </div>

    </section>
  )
}

export default Account