import React, { useState, useEffect } from 'react'
import { trendImg } from './data';
import './Trending.css'

function Trending() {
  const [index, setIndex] = useState(0);
  // const {url} = trendImg[index];
  const [data, setData] = useState(trendImg);

  useEffect(()=>{
    if(index<0){
      setIndex(data.length -1);
    }
    if(index>data.length-1){
      setIndex(0)
    }
  },[index, data])

  useEffect(() => {
    let inter = setInterval(()=>setIndex(index+1),3000);
    return () => clearInterval(inter);
  },[index])

  const handleClick = (e) => {
    e.preventDefault();
    const height_ = e.currentTarget.getBoundingClientRect().height;
    const href = e.currentTarget.getAttribute("href");
    const offsetTop_ = document.querySelector(href).offsetTop;
    window.scrollTo({
      left: 0,
      top: offsetTop_ - height_
    })
  }

  return (
    <section className='trending'>
      <nav className='buttons_categories'>
        <a href="#top_trending" onClick={handleClick}>
          
          <button>Top trending</button>
          </a>
        <a href="#based_on_what_you_react">
          
          <button>based on what you react</button>
          </a>
        <a href="#sports">
          
          <button>sports</button>
          </a>
        <a href="#celebrities">
          
          <button>celebrities</button>
          </a>
      </nav>
      <div id="top_trending">
       <h2>
        # top trending
        </h2>
        <div className='top_trending_pictures'>
        {data.map((post, postId)=>{
          const {url} = post; 
          let position = 'next_img'
          if(postId === index){
            position = 'active_img'
          }
          if(postId === index - 1 || (index === 0 && postId === data.length - 1)){
            position = 'previous_img'
          }
          return (<div className={`trend_img ${position}`}  key={postId}>
            <img src={url} alt="" />
           {/* <p>Hello</p>  */}
          </div>)
        })}
        <button onClick={()=>setIndex(index-1)}>go left</button>
        <button onClick={()=>setIndex(index+1)}>go right</button>
        </div>
      </div>
      <div id="based_on_what_you_react">
       <h2>
        # based on what you react 
        </h2>
        <div className="posts_section">
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
        </div>
        
      </div>
      <div id="sports">
       <h2>
        # sports
        </h2>
        <div className="posts_section">
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
        </div>
      </div>
      <div id="celebrities">
       <h2>
        # celebrities
        </h2>
        <div className="posts_section">
          <div className='section_img'>
            <img src="./images/dogLookingAtMeImg.jpg" alt="" />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Trending