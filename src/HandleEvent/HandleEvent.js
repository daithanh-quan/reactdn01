import React, { Component } from 'react'

export default class HandleEvent extends Component {

  //Phương thức(viết tắt met)
  testHandleEvent = () => {
    alert('ây da');
  }
  showInfo = (name) => {
    alert(`Hello ${name}`);
  }



  render() {
    let fullName = 'Thành zui zẻ'
    return (
      <div className="container">
        <button className="btn btn-primary mr-3"
          onClick={this.testHandleEvent}
        >
          Click Me
        </button>
        <button className="btn btn-info"
          onClick={() => this.showInfo(fullName)}
        >
          show
        </button>
      </div>
    )
  }
}
