import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

function Admin(){

    const isAdmin = localStorage.getItem("isAdmin")

if(isAdmin !== "true"){
  return <Navigate to="/" />
}

  const [offers,setOffers] = useState([])

  useEffect(()=>{
    const savedOffers = JSON.parse(localStorage.getItem("uralOffers")) || []
    setOffers(savedOffers)
  },[])

  const updateStatus = (index,newStatus) => {
    const updatedOffers = [...offers]
    updatedOffers[index].status = newStatus

    setOffers(updatedOffers)
    localStorage.setItem("uralOffers", JSON.stringify(updatedOffers))
  }

  const deleteOffer = (index) => {
    const confirmDelete = confirm("Bu teklifi silmek istediğine emin misin?")
  
    if(!confirmDelete) return
  
    const updatedOffers = offers.filter((_,i)=>i !== index)
  
    setOffers(updatedOffers)
  
    localStorage.setItem("uralOffers", JSON.stringify(updatedOffers))
  }
  const totalOffers = offers.length

const pendingOffers = offers.filter(
  offer => offer.status === "Beklemede" || !offer.status
).length

const approvedOffers = offers.filter(
  offer => offer.status === "Onaylandı"
).length

const rejectedOffers = offers.filter(
  offer => offer.status === "Reddedildi"
).length

  return(
    <section className="section">

      <h2>Admin Paneli</h2>

      <p className="section-desc">
        Kullanıcıların oluşturduğu teklifleri buradan yönetebilirsiniz.
      </p>

      <div className="grid" style={{marginBottom:"40px"}}>

  <div className="card">
    <h3>Toplam Teklif</h3>
    <div className="price">{totalOffers}</div>
  </div>

  <div className="card">
    <h3>Bekleyen</h3>
    <div className="price">{pendingOffers}</div>
  </div>

  <div className="card">
    <h3>Onaylanan</h3>
    <div className="price">{approvedOffers}</div>
  </div>

  <div className="card">
    <h3>Reddedilen</h3>
    <div className="price">{rejectedOffers}</div>
  </div>

</div>

      <div className="grid">

        {offers.length === 0 && (
          <div className="card">
            <h3>Henüz teklif yok</h3>
            <p>Ana sayfadan teklif oluşturup kaydedince burada görünür.</p>
          </div>
        )}

        {offers.map((offer,index)=>(

          <div key={index} className="card">

            <h3>{offer.title || "Sigorta Teklifi"}</h3>

            <p>
              <strong>Müşteri:</strong> {offer.name || "Belirtilmedi"}
            </p>

            <p>
              <strong>Telefon:</strong> {offer.phone || "Belirtilmedi"}
            </p>

            <p>
              <strong>Sigorta Türü:</strong> {offer.type || "Belirtilmedi"}
            </p>

            <div className="price">
              {offer.price || "Fiyat bilgisi yok"}
            </div>

            <p>
              <strong>Detay:</strong> {offer.detail || "Detay yok"}
            </p>

            <p>
              <strong>Durum:</strong> {offer.status || "Beklemede"}
            </p>

            <p>
              <strong>Tarih:</strong> {offer.date || "Tarih yok"}
            </p>

            <div style={{marginTop:"20px", display:"flex", gap:"10px", flexWrap:"wrap"}}>

              <button
                className="primary"
                onClick={()=>updateStatus(index,"Onaylandı")}
              >
                Onayla
              </button>

              <button
                className="primary"
                onClick={()=>updateStatus(index,"Reddedildi")}
                style={{background:"#dc2626"}}
              >
                Reddet
              </button>

              <button
              className="primary"
              onClick={()=>deleteOffer(index)}
              style={{background:"#111827"}}
              >
               Sil
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Admin