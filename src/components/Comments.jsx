import { useState } from 'react'

function Comments(){

  const [showAll,setShowAll] = useState(false)

  const comments = [
    { name:'Ayşe Demir', stars:'★★★★★', text:'Teklif alma süreci çok hızlıydı.' },
    { name:'Mehmet Kaya', stars:'★★★★☆', text:'Fiyatlar gayet uygundu, destek ekibi yardımcı oldu.' },
    { name:'Elif Arslan', stars:'★★★★★', text:'Başvuru sistemi çok pratik ve anlaşılır.' },
    { name:'Can Yılmaz', stars:'★★★☆☆', text:'Genel olarak iyi ama dönüş biraz geç oldu.' },
    { name:'Seda Şahin', stars:'★★★★★', text:'Konut sigortası için çok iyi teklif aldım.' },
    { name:'Burak Aydın', stars:'★★★★☆', text:'Site tasarımı ve kullanım kolaylığı başarılı.' }
  ]

  const visibleComments = showAll ? comments : comments.slice(0,3)

  return(
    <section id="comments" className="section">

      <h2>Müşteri Yorumları</h2>

      <div className="comments-grid">
        {visibleComments.map((comment,index)=>(
        <div
        key={index}
        className="card"
        data-aos="zoom-in"
        data-aos-delay={index * 120}
      >
            <div className="stars">{comment.stars}</div>
            <p>“{comment.text}”</p>
            <h3>{comment.name}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={()=>setShowAll(!showAll)}
        className="primary"
        style={{marginTop:'35px'}}
      >
        {showAll ? 'Daha Az Göster' : 'Tümünü Göster'}
      </button>

    </section>
  )
}

export default Comments