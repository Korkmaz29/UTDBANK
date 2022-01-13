import React from 'react'
import ServiceTitle from './common/ServiceTitle'



const Service = () => {
    return (
      <section className ="home-service-section pt-100 pb-70">
      <div className ="container">
        <div className ="home-service-content">
          <div className ="row">
            <div className ="col-sm-12 col-md-12 col-lg-4">
              <div className ="home-service-item fluid-height">
                <div className ="home-service-start full-height">
                  
                  <div className ="section-title">
                    <h2>Entirely providing best services</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      sed do eiusmod agnamqua ptatem consectetur.
                    </p>
                  </div>

                  {  /*<!-- SERVICE GET STARTED --> */}
                  <a
                    href="services.html"
                    className ="btn1 blue-gradient btn-with-image" >
                    <i className ="flaticon-login"></i>
                    <i className ="flaticon-login"></i>
                    Get Started
                  </a>
                </div>
              </div>
            </div>


           {  /*<!-- SERVICE ITEM DRAG START --> */}
                        <div className ="col-sm-12 col-md-6 col-lg-4">
        <ServiceTitle  item="home-service-item fluid-height"
                       det="home-service-details full-height" 
                       serv="home-service-image" 
                       resim="assets/images/service1.png" ozellik="service" 
                       text="home-service-text" 
                       bas="Drag and drop functionality"  
                       lor="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                  sed deimod empor inddunt ut ualor sit amet" son="service-details.html" acikl="Read More +" />
                    
              </div>
            </div>
          </div>           
        </div>

        {  /*<!-- SERVICE ITEM EMAIL START --> */}
        <div className ="col-sm-12 col-md-6 col-lg-4"> 
        <ServiceTitle item="home-service-item fluid-height"
                      det="home-service-details full-height" 
                      serv="home-service-image"
                      resim="assets/images/service2.png" ozellik="service" 
                      text="home-service-text" 
                      bas="Email notifications"  
                      lor="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                  sed deimod empor inddunt ut ualor sit amet" son="service-details.html" acikl="Read More +" />
              </div>
           
                    

              {  /*<!-- SERVICE ITEM DEADLINE START --> */}
        <div className ="col-sm-12 col-md-6 col-lg-4">           
        <ServiceTitle item="home-service-item fluid-height"
                      det="home-service-details full-height" 
                      serv="home-service-image"
                      resim="assets/images/service3.png" ozellik="service" 
                      text="home-service-text" 
                      bas="Deadline reminders"  
                      lor="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                  sed deimod empor inddunt ut ualor sit amet" son="service-details.html" acikl="Read More +" />
              </div>
            
          
          
              {  /*<!-- SERVICE ITEM DSIMPLE START --> */}
        <div className ="col-sm-12 col-md-6 col-lg-4">            
        <ServiceTitle item="home-service-item fluid-height"
                      det="home-service-details full-height" 
                      serv="home-service-image"
                      resim="assets/images/service4.png" ozellik="service" 
                      text="home-service-text" 
                      bas="Dsimple dashboard"  
                      lor="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                  sed deimod empor inddunt ut ualor sit amet" son="service-details.html" acikl="Read More +" />
              </div>
            
         
                  
              {  /*<!-- SERVICE ITEM INCREDIBLE START --> */}
        <div className ="col-sm-12 offset-md-3 col-md-6 offset-lg-0 col-lg-4">        
        <ServiceTitle item="home-service-item fluid-height"
                      det="home-service-details full-height" 
                      serv="home-service-image"
                      resim="assets/images/service5.png" ozellik="service" 
                      text="home-service-text" 
                      bas="Incredible infrastructure"  
                      lor="Lorem ipsum dolor sit amet, cosectetur adipisicing elit,
                  sed deimod empor inddunt ut ualor sit amet" son="service-details.html" acikl="Read More +" />
              </div>  
          
           </section>


   
  
 
    )
}

export default Service
