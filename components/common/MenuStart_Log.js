import React from 'react';

const MenuStart = () => {
    return (
      <div className ="main-nav  fixed-top">
          <div className ="container-fluid">
            <nav className ="navbar navbar-expand-md navbar-light">
              <a className ="navbar-brand" href="index.html">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
              <div
                className ="collapse navbar-collapse mean-menu" 
                id="navbarSupportedContent"
              >
                <ul className ="navbar-nav mx-auto  ">
                  <li className ="nav-item">
                    <a href="#" className ="nav-link active">Home</a>
                  </li>

                  <li className ="nav-item">
                    <a href="about-us.html" className ="nav-link">About Us</a>
                  </li>

                  <li className ="nav-item">
                    <a href="services.html" className ="nav-link">Services</a>
                  </li>

                  <li className ="nav-item">
                    <a href="pricing.html" className ="nav-link">Pricing</a>
                  </li>

                  <li className ="nav-item">
                    <a href="contact-us.html" className ="nav-link">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className ="navbar-option">
                <div className ="navbar-option-item">
                  <a
                    href="authentication.html"
                    className ="btn1 blue-gradient btn-with-image text-nowrap"
                  >
                    <i className ="flaticon-login"></i>
                    <i className ="flaticon-login"></i>
                    Sign Up / Login
                  </a>
                </div>
              </div>
              </nav>
              </div>
              </div>
           

      
         


    );
};

export default MenuStart;
