import { useState } from 'react'
import { feedImg } from './data'
import './Feed.css'

function Feed() {
  const [data, setData] = useState(feedImg);


  return (
    <section className='feed'>
      <div className='following_profiles'>
        <div className="profile_icon">
          P
        </div>
        <div className="profile_icon">
          P
        </div>
      </div>
      <div className="feed_posts_list">
        {data.map((post, postId)=>{
          const {url, name, likes} = post;
          return <div key={postId} className="feed_post">
            <div className="post_prof">{name}</div>
            <img src={url} alt="" />
            <div className="post_footer">{likes} likes</div>
          </div>

        })}
      </div>
    </section>
  )
}

export default Feed