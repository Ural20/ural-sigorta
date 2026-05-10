import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import toast from "react-hot-toast"

function Navbar(){

  const [loggedIn, setLoggedIn] = useState(false)

  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    const checkLogin = () => {
      const status = localStorage.getItem("isLoggedIn")
      setLoggedIn(status === "true")
    }

    checkLogin()

    window.addEventListener("storage", checkLogin)

    return () => {
      window.removeEventListener("storage", checkLogin)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("isAdmin")
    setLoggedIn(false)
    toast.success(t("logout"))
    window.location.href = "/"
  }

  return(
    <header className="navbar">
      <div className="nav-inner">

        <Link to="/" className="logo">
          Ural<span>Sigorta</span>
        </Link>

        <nav className="nav-links">

          <a href="#services">{t("services")}</a>

          <a href="#comments">{t("comments")}</a>

          <Link to="/admin">{t("admin")}</Link>

          {loggedIn ? (
            <>
              <Link to="/account">
                {t("account")}
              </Link>

              <button
                onClick={logout}
                className="primary"
              >
                {t("logout")}
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                {t("login")}
              </Link>

              <Link
                to="/register"
                className="primary"
              >
                {t("register")}
              </Link>
            </>
          )}

          <div style={{display:"flex", gap:"8px"}}>

            <button className="primary" onClick={()=>changeLanguage("tr")}>
              TR
            </button>

            <button className="primary" onClick={()=>changeLanguage("en")}>
              EN
            </button>

            <button className="primary" onClick={()=>changeLanguage("de")}>
              DE
            </button>

            <button className="primary" onClick={()=>changeLanguage("ru")}>
              RU
            </button>

          </div>

        </nav>

      </div>
    </header>
  )
}

export default Navbar