
import './App.css';

import Header from './components/Header';
import Satisfy from './components/Satisfy';
import BookingNowPage from './components/BookingNowPage';
import Aboutus from './components/Aboutus';
import Whyus from './components/Whyus';
import FreeConsultation from './components/FreeConsultation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="1">
      <  BookingNowPage/>
      </div>
      <div id='2'>
      <Satisfy/>
      </div>
      
           
      
    <div  className='background-container '  > 
   
   <div id='3' > 
   < Aboutus/>
   </div>
   
   <div id='4'>
   <Whyus/>
   </div>
     
    </div>
    <div id='5' className='Carousel-container'> 
    <Carousel/>
    </div>
   
    <FreeConsultation/>
     <Footer/>
    </div>
  );
}

export default App;
