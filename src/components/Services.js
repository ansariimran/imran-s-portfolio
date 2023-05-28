import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container-for-services">
        <div className="section-header">
          <h2>Services</h2>
          <p>Here are some of the services I offer:</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="service-box">
              <i className="fa fa-code"></i>
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sapien sed quam faucibus aliquet.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box">
              <i className="fa fa-mobile"></i>
              <h3>Mobile Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sapien sed quam faucibus aliquet.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box">
              <i className="fa fa-camera"></i>
              <h3>Photography</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sapien sed quam faucibus aliquet.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box">
              <i className="fa fa-pencil"></i>
              <h3>Copywriting</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sapien sed quam faucibus aliquet.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box">
              <i className="fa fa-video-camera"></i>
              <h3>Videography</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sapien sed quam faucibus aliquet.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box">
              <i className="fa fa-bullhorn"></i>
              <h3>Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sapien sed quam faucibus aliquet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
