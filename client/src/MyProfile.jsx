import React from 'react'
import { NavLink } from 'react-router-dom'
import Post from './Post'
import './MyProfile.css'

function MyProfile() {
  return (
    <section className='my_profile'>
      <div className='my_profile_body'>
            </div>

      <div className='background_profile_picture'>

        <div className='profile_picture'>
        </div>

      </div>
      <div className='posts'>
        <h2>My Posts</h2>
        <div className='posts_grid'>     
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />  

          </div>       
          <div className='posts_elem'>
            <img src="./images/oldLadyClassyImg.jpg"   alt="meeting" />
            <div className="posts_button">
              <p>likes            share</p>
              </div>    
          </div>       
            
        </div>
      </div>
    </section>
  )
}

export default MyProfile