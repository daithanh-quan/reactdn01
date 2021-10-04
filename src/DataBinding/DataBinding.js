import React, { Component } from 'react'

export default class DataBinding extends Component {
  //Thuộc tính
  age = 23;
  img = "https://i.imgur.com/e5Zxf5M.jpg";
  renderProduct = () => {
    let product = {
      name: 'Product 001',
      des: 'sản phẩm ...',
      price: 100,
      img: "https://i.imgur.com/e5Zxf5M.jpg"
    }
    return (
      <div className="card">
        <img className="card-img-top" src={product.img} alt={product.img} />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">
            {product.des}
            <br />
            {product.price}
          </p>
        </div>
      </div>

    )
  }



  //Phương thức chính
  render() {
    //Biến thông thường
    let name = 'Thanh'
    return (
      <div className="container">
        <p>Tên học viên: {name}</p>
        <p>Tuổi: {this.age}</p>
        <img className="w-25" src={this.img} alt={this.img} />
        {this.renderProduct()}
      </div>
    )
  }
}
