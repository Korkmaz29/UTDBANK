import React from 'react'
import HomTitle from './common/HomTitle'


const Hom = () => {
    return (
        <section className ="home-about-section bg-off-white pt-100 pb-70">
      <div className ="container">
        <div className ="home-about-content">
          
          <div className ="row align-items-center">
            <div className ="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
              <div className ="home-about-item desk-pad-right-10 pb-30">
               
                <div className ="section-title">
                  <h2>A fully integrated suite for Large enterprise</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod cste et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                </div>
               

                <div className ="home-about-list">
                <div className ="home-about-list">
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="International Payments"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Request Features"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Premium Support"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Direct Debit"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Automated Accounting"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Web Design"/>   </div></div>

                
                
                <div className ="home-about-animation">
                  <div className ="home-animation-item">
                    <img
                      src="assets/images/curve-line.png"
                      alt="animated-icon"
                    />
                  </div>
                  <div className ="home-animation-item">
                    <img src="assets/images/triangle.png" alt="animated-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className ="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div
                className ="home-about-item home-about-image pb-30 about-image-ellipsis"
              >
                <div className ="home-image-content">
                  <img
                    src="assets/images/enterprise.png"
                    alt="about"
                    className ="scale-one-zero-one"
                  />
                </div>
              </div>
            </div>
          </div>
         
          <div className ="section-mtb-40"></div>

          
          <div className ="row align-items-center">
            <div className ="col-sm-12 col-md-12 col-lg-6">
              <div
                className ="home-about-item home-about-image pb-30 about-image-shape"
              >
                <div className ="home-image-content">
                  <img
                    src="assets/images/business.png"
                    alt="about"
                    className ="scale-one-zero-one"
                  />
                </div>
              </div>
            </div>
            <div className ="col-sm-12 col-md-12 col-lg-6">
              <div className ="home-about-item desk-pad-left-10 pb-30">
               
                <div className ="section-title">
                  <h2>Small to medium-sized businesses</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod cste et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                </div>
              

                <div className ="home-about-list">


                <div className ="home-about-list">
                <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Deposit Checks Instantly"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="A Powerful Open API"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Affiliates And Partnerships"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Coverage Around The World"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Business Without Borders"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Web Design"/>   </div>

                  
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className ="section-mtb-40"></div>

          
          <div className ="row align-items-center">
            <div className ="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
              <div className ="home-about-item desk-pad-right-10 pb-30">
               
                <div className ="section-title">
                  <h2>Entrepreneurs, and sole traders & Freelancers</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod cste et dolore magnam aliquam quaerat
                    voluptatem.
                  </p>
                </div>
              
                <div className ="home-about-list">
                <div className ="home-about-list">
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="International Payments"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Request Features"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Premium Support"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Direct Debit"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Automated Accounting"/>
                 <HomTitle bas="home-about-list-item"  resim="assets/images/check.png" aciklama ="Web Design"/>   </div> 

                  
                </div>
                <div className ="home-about-animation">
                  <div className ="home-animation-item">
                    <img
                      src="assets/images/curve-line.png"
                      alt="animated-icon"
                    />
                  </div>
                  <div className ="home-animation-item">
                    <img src="assets/images/triangle.png" alt="animated-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className ="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
              <div
                className ="home-about-item home-about-image about-image-rectangle pb-30"
              >
                <div className ="home-image-content">
                  <img
                    src="assets/images/entrepreneur.png"
                    alt="about"
                    className ="scale-one-zero-one"
                  />
                </div>
              </div>
            </div>
        
         
            </div></div>  </section>
      
   

    )
}

export default Hom
