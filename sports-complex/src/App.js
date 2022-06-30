import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Choose_Sport from './Components/Choose_Sport';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Body />
      <div class='choose_sports' id='book_your_slot'>
        <h1>Book Your Slot</h1>
        <Choose_Sport />
      </div>
      <Footer />

    </>
  );
}

export default App;
