import './App.css';
import Choose_Sport from './Components/Choose_Sport';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Slot from './Components/Slot';

function App() {
  return (
    <>

      <Navbar />
      <Body />
      <div class='choose_sports' id='book_your_slot'>
        <h1>Book Your Slot</h1>
        <Choose_Sport />
      </div>
      <Slot/>
      <Footer />

    </>
  );
}

export default App;
