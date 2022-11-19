import React, { useState } from 'react';
import Post from './Post';
import './Feed.css';

function Feed(){
    const postList = [
        {
            username: 'kristen',
            imageId: 0,
            caption: 'my first picture',
            category: false,
            quantity: 0
        },
        {
            username: 'janet',
            imageId: 10,
            caption: 'my second picture', 
            category: false,
            quantity: 0
        },
        {
            username: 'anthony',
            imageId: 20,
            caption: 'my third picture',
            category: false, 
            quantity: 0
        }        
    ];

    const [posts, setPosts] = useState(postList);
    const [imageId,setImageId] = useState(30);
    const [username,setUsername] = useState("");
    const [caption,setCaption] = useState(false);
    const [quantity, setQuantity] = useState(10);
    const [category, setCategory] = useState(false);


    const handleCreateNewPostOffer = event => {
        setPosts([{
            username: username, 
            imageId: imageId,
            caption: caption, 
            category: category, 
            quantity: quantity
        }, ...posts]);
        setImageId(imageId+10);
        setUsername("");
        setCaption("");
        setQuantity(quantity)
        setCategory(true);
        
    }


    const handleCreateNewPostRequest = event => {
        setPosts([{
            username: username, 
            imageId: imageId,
            caption: caption, 
            category: category
        }, ...posts]);
        setImageId(imageId+10);
        setUsername("");
        setCaption("");
        setCategory(false);
        
    }

    function InterestedButtonClick(){
        setQuantity(quantity - 1)
    }

    return(
        <div className="feed">
            <label htmlFor="usernameInput">Username:</label>
            <input className="usernameInput" id="usernameInput" onChange={event => setUsername(event.target.value)} value={username}></input>

            <label htmlFor="captionInput">Caption:</label>
            <input className="captionInput" id="captionInput" onChange={event => setCaption(event.target.value)} value={caption}></input>

            <button className="newPostButton" onClick={handleCreateNewPostOffer}>Offer</button>
            <button className="newPostButton2" onClick={handleCreateNewPostRequest}>Request</button>

            {posts.map((post,k) => {
                return <Post imageId={post.imageId} username={post.username} caption={post.caption} category={post.category} InterestHandler={InterestedButtonClick} key={k}/>
            })}
        </div>
    )
}

export default Feed;