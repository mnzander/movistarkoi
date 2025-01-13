import styles from './App.module.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import Schedule from './components/Schedule/Schedule'
import Staff from './components/Staff/Staff'
import Team from './components/Team/Team'
import UpButton from './components/UpButton/UpButton'

function App() {

  return (
    <div className={styles.App} id="top">
      <Navbar />
      <About />
      <Team />
      <Staff />
      <Schedule />
      <Footer />
      <UpButton />
      <Modal />
    </div>
  )
}

export default App
