import React, { FC } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Products from './components/Products/Products';
import NewsLetter from './components/Newsletter/Newsletter';

const App: FC = () => (
  <>
  <Navbar />
  <Carousel />
  <Products />
  <NewsLetter />
  </>
)
export default App;
