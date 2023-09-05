import Image from 'next/image'
import { Benefits, Customers, Fodista, Footer, Form, Header, HeroSection, OurProducts, Services, Testimonials, WhyUs } from './components'

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Customers/>
      <Services/>
      <WhyUs/>
      <Testimonials/>
      <OurProducts/>
      <Benefits/>
      <Fodista/>
      <OurProducts title={'Main Features'}/>
      <Benefits hint={'last-section'}/>
      <Form/>
      <Footer/>

    </>
    
  )
}
