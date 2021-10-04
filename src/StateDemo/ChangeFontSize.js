import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
  /**
   * Xây dựng UI
   * Xác định dữ liệu cần thay đổi thì đưa vào state
   * xây dựng phuong thức (xác định phương thức sẽ chưa setState)
   */

  state = {
    size: 10
  }
  render() {
    return (
      <div className="container">
        <p className="bg-dark text-white" style={{ fontSize: `${this.state.size}px` }}>Lorem ipsum dolor sit amet.</p>
        <button type="button" onClick={() =>
          this.setState({ size: this.state.size + 10 })
        } className="btn btn-primary" >+</button>
        <button type="button" onClick={() => {
          if (this.state.size > 10) return this.setState({ size: this.state.size - 10 })
        }} className="btn btn-info" >-</button>
      </div>
    )
  }
}
