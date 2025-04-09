import React, { useState } from "react";
import Navbar from './components/Navbar';
import TopNews from './components/TopNews';
import Footer from './components/Footer';
import './styles/App.css';
import Header from './components/Header';

function App() {
  const [category, setCategory] = useState("general"); // Home shows "general" news
  return (
    <div className="App">
      <Header />
      <Navbar onCategorySelect={setCategory} />
      <TopNews category={category} />
      <Footer />
    </div>
  );
}

export default App;

