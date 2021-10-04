import React, { Component } from 'react'
import './style.css'
import styleModule from './styleComponent.module.css'

export default class StyleComponent extends Component {
  render() {
    let styleInline = {
      backgroundColor: 'pink',
      color: 'white',
    }


    return (
      <div className="container">
        <p style={{
          backgroundColor: 'green',
          color: 'yellow',
        }} className="text">StyleComponent</p>
        <p style={styleInline} className="text">StyleComponent</p>
        <p className={styleModule.fontText}>Style Module</p>
        {/* trường hợp dùng có dấu -  */}
        <p className={styleModule['bg-color']}>Style Module</p>
        {/* Trươgwf hợp cộng nhiều css */}
        <p className={`${styleModule["bg-color"]} ${styleModule["container__p"]}`}>Style Module</p>
      </div>
    )
  }
}
