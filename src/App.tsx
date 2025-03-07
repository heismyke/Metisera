import { AboutUs } from './about/AboutUs'
import Navbar from './components/Navbar'
import Contacts from './contacts/Contacts'
import Metisera from './metisera/Metisera'
import Terms from './terms/Terms'

function App() {
  return (
    <>
      <Navbar />
      <section id="About">
        <AboutUs />
      </section>
      <section id="Metisera">
        <Metisera />
      </section>
      <section id="Terms">
        <Terms />
      </section>
      <section id="Contact">
        <Contacts />
      </section>
    </>
  )
}

export default App
