import React, { Component } from 'react';
import indexCss from './cityinput.module.scss'
import {connect} from 'react-redux';
class cityinput extends Component {

  render() {
    return (
      <div className={indexCss.city_input}>
        <div className={indexCss.input_content}>
          <div className={indexCss.input_wrap}>
          <span>{this.props.cityName}</span>
            <i className={['iconfont','icon-arrow'].join(' ')}></i>
          </div>
          <div className={indexCss.input_address}>
            <i className={['iconfont', 'icon-seach'].join(' ')}></i>
            <span>请输入小区或地址</span>
          </div>
        </div>
        <div className={indexCss.input_map}>
          <i className={['iconfont', 'icon-map'].join(' ')}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    cityName:state.mapreducer.city.name
  }
}

export default connect(mapStateToProps,null)(cityinput);

// 另一种写法
// const conFunc=connect(mapStateToProps)
// export default conFunc(cityinput);
