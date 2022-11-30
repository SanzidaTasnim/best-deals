import React from 'react'
import Banner from '../Banner';
import Food from '../Food';
import Footer from '../Footer';
import Headline from '../Headline';
import Menu from '../Menu';

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Menu />
      <Food />
      <Footer />
    </div>
  )
}

export default Home