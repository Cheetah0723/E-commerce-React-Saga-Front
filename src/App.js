import React from 'react';
import Homepage from './Pages/Home.page';
import Footer from './Components/Footer/Footer';
import './App.scss';
import ReviewForm from "./Components/Review/ReviewForm"


// BUG
//import ReviewModal from "./Components/Review/ReviewModal"

//      <ReviewForm/>
//     <Homepage />
//<Footer />
export default function App() {

  return (
    <div className="App">
      <div className="app-container">
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}
