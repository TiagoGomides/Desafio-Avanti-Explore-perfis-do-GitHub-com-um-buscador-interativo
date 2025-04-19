import { Outlet } from "react-router-dom"
import logoGitHub from "./assets/svg/githubLogo.svg"
function App() {

  return (
    <>
      <main className="container">

        <section className="flex-row">
          <img src={logoGitHub} alt="logoGitHub" width={60} />
          <h1 className="pd8"> Perfil <strong>GitHub</strong></h1>
        </section>
        <Outlet />
      </main>

    </>
  )
}

export default App
