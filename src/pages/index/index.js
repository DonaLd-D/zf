import React, { Component,Fragment } from 'react';
import { Carousel } from 'antd-mobile';
import axios,{baseURL} from '../../utils/request';
import nav1 from '../../assets/images/nav-1.png';
import nav2 from '../../assets/images/nav-2.png';
import nav3 from '../../assets/images/nav-3.png';
import nav4 from '../../assets/images/nav-4.png';
class index extends Component {
  state={
    carousel:[],
    imgHeight:176,
    navs:[
      {id:0,text:'整租',img:nav1},
      {id:1,text:'合租',img:nav2},
      {id:2,text:'地图找房',img:nav3},
      {id:3,text:'去出租',img:nav4}
    ]
  };
  async componentDidMount(){
   const res=await axios.get('/home/swiper')
   this.setState({
     carousel:res.data.body
   })
  }
  render() {
    return (
      <div >
        <div className='index_carousel'>
          <Carousel
            autoplay
            infinite
          >
            {this.state.carousel.map(val => (
              <a
                key={val}
                href=""
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={baseURL+val.imgSrc}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>
        <div className='index_navs'>
          {this.state.navs.map(v=><div className='navs_item' key={v.id}>
            <img src={v.img} alt=''></img>
            <p>{v.text}</p>
          </div>)}
        </div>
      </div>
    );
  }
}

export default index