import React from 'react';
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer/Footer';
import ReviewForm from "./Components/Review/ReviewForm"


// BUG
//import ReviewModal from "./Components/Review/ReviewModal"


//     <Homepage />
//<Footer />
export default function App() {

  return (
    <div className="App">
      <div className="app-container">
      <ReviewForm/>
      </div>
    </div>
  );
}