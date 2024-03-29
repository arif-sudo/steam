import React from 'react'
import Feature from '../components/Feature'
import Hero1 from '../components/Hero1'
import Search from '../components/Search'
import Hero2 from '../components/Hero2'
import Hero3 from '../components/Hero3'
import SearchSection from '../components/SearchSection'
import Navbar0 from '../components/Navbar0'
import ScrollToTop from '../components/ScrollToTop'

const Main = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar0 />
      <Feature />
      <Search />
      <SearchSection />
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </>
  )
}

export default Main