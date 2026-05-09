import { Link } from 'react-router-dom'

function Success(){

  return(

    <div className='min-h-screen flex items-center justify-center bg-slate-100'>

      <div className='bg-white p-10 rounded-3xl shadow-xl text-center max-w-xl'>

        <h1 className='text-5xl font-bold text-green-600 mb-6'>

          Başvuru Tamamlandı

        </h1>

        <p className='text-xl text-slate-600 mb-8'>

          Başvurunuz başarıyla alınmıştır.

        </p>

        <Link
          to='/'
          className='bg-indigo-600 text-white px-8 py-4 rounded-xl inline-block'
        >

          Ana Sayfaya Dön

        </Link>

      </div>

    </div>

  )

}

export default Success