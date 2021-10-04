import React, { Component } from 'react';
import ContentCoponent from './ContentCoponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import NavigationComponent from './NavigationComponent';

class HomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <HeaderComponent />
          </div>
          <div className="col-4">
            <NavigationComponent />
          </div>
          <div className="col-8">
            <ContentCoponent />
          </div>
          <div className="col-12">
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;