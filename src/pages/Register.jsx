import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast from "react-hot-toast"
function Register(){

  const navigate = useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const register = () => {

    if(!name || !email || !password){
      toast.error("Lütfen tüm alanları doldurun.")
      return
    }

    const user = {
      name,
      email,
      password
    }

    localStorage.setItem('uralUser', JSON.stringify(user))

    toast.success("Kayıt başarılı")

    navigate('/login')
  }

  return(
    <div className="auth-page">

      <div className="auth-card">

        <h1>Kayıt Ol</h1>

        <input
          className="input"
          placeholder="Ad Soyad"
          value={name}
          onChange={e=>setName(e.target.value)}
        />

        <input
          className="input"
          placeholder="E-Posta"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button onClick={register} className="primary">
          Hesap Oluştur
        </button>

        <p className="auth-link">
          Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link>
        </p>

      </div>

    </div>
  )
}

export default Register