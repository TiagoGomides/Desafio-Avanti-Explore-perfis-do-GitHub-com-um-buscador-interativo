import { Outlet } from "react-router-dom";
import logoGitHub from "./assets/svg/githubLogo.svg";
import styles from "./App.module.css"
function App() {

  return (
    <>

      <main>
        <div className="blue-glow left"></div>
        <div className="blue-glow right"></div>
        <div className="dots"></div>
        <div className={styles.container}>
          <div className={styles.flexRow}>
            <img src={logoGitHub} alt="logoGitHub" width={60} />
            <h1 className={styles.pd8}> Perfil <strong>GitHub</strong></h1>
          </div>
          <Outlet />

        </div>


      </main>

    </>
  )
}

export default App
