import logo from './logo.svg';
import './App.css';

// ____________ react bootstrap 5 _______________

import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSection from './Components/HeaderSection/HeaderSection';
import FooterSection from './Components/FooterSection/FooterSection';
import BodySection from './Components/BodySection/BodySection';
// import { Button,Row,Col } from 'react-bootstrap';

// ____________ react bootstrap 5 _______________


function App() {
  return (
    <div className="mainApp">
      <div className='sticky-top'>
        <HeaderSection />
      </div>


      <div className="my-5 mx-3">
        <BodySection />
      </div>

      <FooterSection />
    </div>
  );
}

export default App;
