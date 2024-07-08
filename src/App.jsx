import Header from "./components/Header"
import './components/Header.css'
import './components/Header2.css'
import './components/Section1.css'
import './components/Section2.css'
import './components/Footer.css'
import './App.css'
import Header2 from "./components/Header2"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Footer from "./components/Footer"


function App() {

  return (
    <div>

      <div className="app-main-div" >
        <div className="app-header-div1">
          <Header />
          <Section1 />
        </div>
        <div className="app-header-div2">
          <Header2 />
          <img className="main-ham1" src="/src/assets/gam1.svg" alt="" />
        </div>

      </div>
      <hr className="hr" />
      <Section2 />
      <Footer />
    </div>
  )
}

export default App
