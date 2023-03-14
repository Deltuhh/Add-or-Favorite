// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Product from "./Product";
import "./App.css";
import image1 from "./scissors.png";
import image2 from "./trimmer.png";

function App() {
  const imgStyle = {
    maxWidth: "40%",
    maxHeight: "40%",
  };
  return (
    <div className="container">
      <header className="header">
        <h1>
          <center>Hair USTylists</center>
        </h1>
      </header>
      <main className="main">
        <p>
          <center>
            <Product
              image1={image1}
              image2={image2}
              product1="Scissors"
              product2="Trimmer"
            />
          </center>
        </p>
      </main>
      <footer className="footer">
        <p>Copyright JEFFREY PEDARIOS © 2023</p>
      </footer>
    </div>
  );
}

export default App;
