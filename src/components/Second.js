import React from 'react'
import Data from './Data'
function Second() {
    const [data, setData] = React.useState(Data)
    const [isHeart, setIsHeart] = React.useState(false)
    
    return (
    <div className='second-container'>
        <div className='second-navbar'>
            <img className='second-ig-banner' src='./images/igg.png'></img>
            <div className='second-search-bar'>
            <i class="fa fa-search" aria-hidden="true"></i>
                <input type="search" placeholder="Search" className="second-search"></input>
            </div>
            <div className='second-ig-icons'>
                <img className='second-ig-home' src='./images/home.png'></img>
                <div className='second-messenger'>
                <img className='second-ig-msg' src='./images/message.png'></img>
                <span className='second-msg'>7</span>
                </div>
                <img className='second-ig-more' src='./images/more.png'></img>
                <img className='second-ig-video' src='./images/video.png'></img>
                <img className='second-ig-heart' src='./images/heart.png'></img>
                <img className='second-ig-profile' src='./images/profile.jpg'></img>
            </div>
        </div>
        <div className='second-story-section'>
                <img className='second-story' src='./images/ig-dp.jpg'></img>
                <img className='second-story' src='./images/ig-dpp.jpg'></img>
                <img className='second-story' src='./images/ig-dppp.png'></img>
                <img className='second-story' src='./images/ig-dpppp.jpg'></img>
                <img className='second-story' src='./images/ig-dpppppppp.jpg'></img>
                <img className='second-story' src='./images/ig-dppppppp.jfif'></img>
                <img className='second-story' src='./images/ig-dpppppp.jfif'></img>
            </div>
            {data.map((item)=>{
                return (
                    <>
                        <div className='second-post-sections'>
                <div className='second-post-section-1'>
                <div className='second-post-user'>
                    <img className='second-post-user-img' src='./images/ig-dppppppp.jfif'></img>
                    <h2>{item.name}</h2>
            </div>
            <img className='second-post-options' src='./images/more-options.png'></img>
        </div>
        <img className='temp' src={item.image}></img>
        <div className='second-post-LCS'>
            <div className='second-LCS'>
            <img className='LCS' onClick={()=>setIsHeart(!isHeart)} src={isHeart ? "./images/hr.png" : "./images/heart.png"}></img>    
            <img className='LCS' src='./images/bubble-chat.png'></img>    
            <img className='LCS' src='./images/send.png'></img>    
            </div>    
            <img className='LCS' src='./images/mark.png'></img>    
        </div>
        <h3>30,960 likes</h3>
        <p className='second-comments-1'>View all 410 comments</p> 
        <p className='second-comments-2'>1 day ago</p> 
        <div className='second-comment-section'>
            <div className='second-comment-ET'>
                <img className='comment-emoji' src='./images/smile.png'></img>
                <input type="text" className="comment-bar" placeholder='Add a comment...'></input>
            </div>
            <p className='comment-post'>Post</p>
        </div>
    </div>        
                    </>
                )
            })}
            
    </div>
  )
}

export default Second