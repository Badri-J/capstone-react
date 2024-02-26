import React, { useState } from "react";
import "./dummy.css"; // Import your CSS file if needed

function Dummy() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div
        className={`w3-sidebar w3-bar-block w3-card w3-animate-left ${
          isSidebarOpen ? "w3-show" : "w3-hide"
        }`}
        id="mySidebar"
      >
        <button
          className="w3-bar-item w3-button w3-large"
          onClick={closeSidebar}
        >
          &times; Close
        </button>
        <a href="#" className="w3-bar-item w3-button">
          Link 1
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 3
        </a>
      </div>

      <div id="main" style={{ marginLeft: isSidebarOpen ? "25%" : "0%" }}>
        <div className="w3-teal">
          <button className="w3-button w3-teal w3-xlarge" onClick={openSidebar}>
            &#9776;
          </button>
          <div className="w3-container">
            <h1>My Page</h1>
          </div>
        </div>

        <img src="img_car.jpg" alt="Car" style={{ width: "100%" }} />

        <div className="w3-container">
          <p>In this example, the sidebar is hidden (style="display:none")</p>
          <p>
            It is shown when you click on the menu icon in the top left corner.
          </p>
          <p>When it is opened, it shifts the page content to the right.</p>
          <p>
            We use JavaScript to add a 25% left margin to the div element with
            id="main" when this happens. The value "25%" matches the width of
            the sidebar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dummy;
