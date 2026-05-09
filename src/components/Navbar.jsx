import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"

function Navbar(){

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const status = localStorage.getItem("isLoggedIn");
      setLoggedIn(status === "true");
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
    toast.success("Çıkış yapıldı")
    window.location.href = "/";
  };

  return(
    <header className="navbar">
      <div className="nav-inner">

        <Link to="/" className="logo">
          Ural<span>Sigorta</span>
        </Link>

        <nav className="nav-links">
          <a href="#services">Hizmetler</a>
          <a href="#comments">Yorumlar</a>
          <Link to="/admin">Admin</Link>

          {loggedIn ? (
            <>
              <Link to="/account">Hesabım</Link>

              <button onClick={logout} className="primary">
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Giriş Yap</Link>

              <Link to="/register" className="primary">
                Kayıt Ol
              </Link>
            </>
          )}

        </nav>

      </div>
    </header>
  )
}

export default Navbar