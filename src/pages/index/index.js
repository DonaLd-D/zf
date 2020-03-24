import React, { Component,Fragment } from 'react';
import { Carousel } from 'antd-mobile';
import axios,{baseURL} from '../../utils/request';
import nav1 from '../../assets/images/nav-1.png';
import nav2 from '../../assets/images/nav-2.png';
import nav3 from '../../assets/images/nav-3.png';
import nav4 from '../../assets/images/nav-4.png';
import {getlocation} from '../../utils/bdmaphelper'
import indexCss from './index.module.scss';
import Cityinput from '../../components/cityinput/cityinput';
class index extends Component {
  state={
    carousel:[],
    imgHeight:176,
    navs:[
      {id:0,text:'整租',img:nav1},
      {id:1,text:'合租',img:nav2},
      {id:2,text:'地图找房',img:nav3},
      {id:3,text:'去出租',img:nav4}
    ],
    group:[],
    news:[]
  };
  async componentDidMount(){
   this.getCarousel();
   this.getGroup();
   this.getNews();
   let res=await getlocation();
   console.log(res)
  }

  getCarousel=async ()=>{
    const res=await axios.get('/home/swiper')
    this.setState({carousel:res.data.body})
  }
  getGroup=async ()=>{
    const res=await axios.get('/home/groups?area=AREA%7C88cff55c-aaa4-e2e0')
    this.setState({group:res.data.body})
  }
  getNews=async ()=>{
    const res=await axios.get('/home/news?area=AREA%7C88cff55c-aaa4-e2e0')
    this.setState({news:res.data.body})
  }
  render() {
    return (
      <div className={indexCss.HK_index}>
        
        <div className={indexCss.index_carousel}>
          <div className={indexCss.city_input}><Cityinput ></Cityinput></div>
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

        <div className={indexCss.index_navs}>
          {this.state.navs.map(v=><div className={indexCss.navs_item} key={v.id}>
            <img src={v.img} alt=''></img>
            <p>{v.text}</p>
          </div>)}
        </div>

        <div className={indexCss.index_group}>
          <div className={indexCss.index_group_title}><span>租房小组</span><a href="">更多</a></div>
          <div className={indexCss.index_group_content}>
            {this.state.group.map(v=><div className={indexCss.group_item} key={v.id}>
              <div className={indexCss.goup_content_left}>
               <div>{v.title}</div>
               <div>{v.desc}</div>
              </div>
              <div className={indexCss.goup_content_right}>
                <img src={baseURL+v.imgSrc} alt=""/>
              </div>
            </div>)}
          </div>
        </div>

        <div className={indexCss.index_news}>
          <h3>最新资讯</h3>
          <div className={indexCss.index_news_content}>
            {this.state.news.map(v=><div className={indexCss.news_item} key={v.id}>
              <div className={indexCss.item_image}>
                <img src={baseURL+ v.imgSrc} alt=""/>
              </div>
              <div className={indexCss.item_right}>
                <p>{v.title}</p>
                <div><a href="">{v.from}</a><span>{v.date}</span></div>
              </div>
            </div>)}
          </div>
        </div> 
      </div>
    );
  }
}

export default index