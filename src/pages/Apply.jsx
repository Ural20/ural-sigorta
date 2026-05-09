import { useNavigate } from 'react-router-dom'

function Apply(){

  const navigate = useNavigate()

  return(

    <div className='min-h-screen flex items-center justify-center bg-slate-100'>

      <div className='bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl'>

        <h1 className='text-4xl font-bold mb-8'>

          Sigorta Başvurusu

        </h1>

        <input
          placeholder='Ad Soyad'
          className='border p-4 rounded-xl w-full mb-4'
        />

        <input
          placeholder='Telefon'
          className='border p-4 rounded-xl w-full mb-4'
        />

        <select
          className='border p-4 rounded-xl w-full mb-4'
        >

          <option>Araç Sigortası</option>
          <option>Sağlık Sigortası</option>
          <option>Konut Sigortası</option>
          <option>Seyahat Sigortası</option>

        </select>

        <button
          onClick={()=>navigate('/success')}
          className='bg-indigo-600 text-white w-full py-4 rounded-xl'
        >

          Başvuruyu Tamamla

        </button>

      </div>

    </div>

  )

}

export default Apply