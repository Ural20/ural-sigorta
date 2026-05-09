import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import toast from "react-hot-toast"

function Login(){

  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const login = () => {

    const savedUser = JSON.parse(localStorage.getItem('uralUser'))

    if(!savedUser){
      alert('Kayıtlı kullanıcı yok. Önce kayıt olun.')
      return
    }

    if(savedUser.email === email && savedUser.password === password){

      localStorage.setItem('isLoggedIn', 'true')

      if(email === "admin@ural.com"){
        localStorage.setItem("isAdmin","true")
      }else{
        localStorage.setItem("isAdmin","false")
      }

      toast.success("Giriş başarılı")

      navigate('/')

    }else{

      toast.error("Giriş başarısız")

    }

  }

  return(
    <div className="auth-page">

      <div className="auth-card">

        <h1>Giriş Yap</h1>

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

        <button onClick={login} className="primary">
          Giriş Yap
        </button>

        <p className="auth-link">
          Hesabın yok mu? <Link to="/register">Kayıt Ol</Link>
        </p>

      </div>

    </div>
  )
}

export default Login