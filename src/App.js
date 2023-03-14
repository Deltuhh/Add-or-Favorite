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

// import React, { useState } from "react";
// // import Product from "./Product";
// import "./App.css";
// // import image1 from "./scissors.png";
// // import image2 from "./trimmer.png";

// function App() {
//   // const imgStyle = {
//   //   maxWidth: "40%",
//   //   maxHeight: "40%",
//   // };

//   return (
//     <div className="container">
//       <header className="header">
//         <h1>
//           <center>Time in And Time Out</center>
//         </h1>
//       </header>
//       <main className="main">
//         <p>
//           <center></center>
//         </p>
//       </main>
//       <footer className="footer">
//         <p>Copyright JEFFREY PEDARIOS © 2023</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleTimeIn = () => {
    setTimeIn(new Date());
  };

  const handleTimeOut = () => {
    setTimeOut(new Date());
    const diff = Math.abs(timeIn - new Date());
    setDuration(diff);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Time Tracker</h1>
      </header>
      <div className="App-body">
        <div className="App-card">
          <h2>Time In</h2>
          <div className="App-time">
            {timeIn ? timeIn.toLocaleTimeString() : "--"}
          </div>
          <button className="App-button" onClick={handleTimeIn}>
            Time In
          </button>
        </div>
        <div className="App-card">
          <h2>Time Out</h2>
          <div className="App-time">
            {timeOut ? timeOut.toLocaleTimeString() : "--"}
          </div>
          <button
            className="App-button"
            onClick={handleTimeOut}
            disabled={!timeIn}
          >
            Time Out
          </button>
        </div>
        <div className="App-card">
          <h2>Duration</h2>
          <div className="App-time">
            {duration ? duration / 1000 + "s" : "--"}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <footer className="App-header">
        <h3>Jeffrey Pedarios © 2023</h3>
      </footer>
    </div>
  );
}

export default App;
