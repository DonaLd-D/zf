import React, { Component } from 'react';
import indexCss from './cityinput.module.scss'
import {connect} from 'react-redux';
import {getLocalCityAction} from '../../store/actionCreator';
class cityinput extends Component {

  componentDidMount(){
    this.props.initcity()
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    initcity(){
      dispatch(getLocalCityAction())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(cityinput);

// 另一种写法
// const conFunc=connect(mapStateToProps)
// export default conFunc(cityinput);
