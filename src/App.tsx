import React, { FC } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Products from './components/Products/Products';

const App: FC = () => (
  <>
  <Navbar />
  <Carousel />
  <Products />
  </>
)
export default App;
