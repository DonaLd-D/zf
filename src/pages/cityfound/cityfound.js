import React, { Component ,Fragment} from 'react';
import {NavBar,Icon} from 'antd-mobile';
class city extends Component {
  render() {
    return (
      <div>
        <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.go(-1)}
        >城市选择</NavBar>
      </div>
    );
  }
}

export default city
