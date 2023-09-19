import Contact from "./components/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Offer from "./components/Offer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-32">
        <Hero />
        <Offer />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
