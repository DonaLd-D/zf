import React, { Component,Fragment } from 'react';
import { Carousel } from 'antd-mobile';
import axios from 'axios';
class index extends Component {
  state={
    carousel:[],
    imgHeight:176,
  };
  async componentDidMount(){
   const res=await axios.get('http://157.122.54.189:9060/home/swiper')
   console.log(res)
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
                  src={`http://157.122.54.189:9060`+val.imgSrc}
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
      </div>
    );
  }
}

export default index