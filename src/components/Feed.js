import React, { useState } from 'react';
import Post from './Post';
import './Feed.css';

function Feed(){
    const postList = [
        {
            username: 'kristen',
            imageId: 0,
            caption: 'my first picture',
            category: "Offers"
        },
        {
            username: 'janet',
            imageId: 10,
            caption: 'my second picture', 
            category: "Offers"
        },
        {
            username: 'anthony',
            imageId: 20,
            caption: 'my third picture',
            category: "Offers"
        }        
    ];

    const [posts, setPosts] = useState(postList);
    const [imageId,setImageId] = useState(30);
    const [username,setUsername] = useState("");

    const handleCreateNewPost = event => {
        setPosts([{
            username: username, 
            imageId: imageId,
            caption: "my caption", 
            category: "Why not work?"
        }, ...posts]);
        setImageId(imageId+10);
        setUsername("");
        
    }

    return(
        <div className="feed">
            <label htmlFor="usernameInput">Username:</label>
            <input className="usernameInput" id="usernameInput" onChange={event => setUsername(event.target.value)} value={username}></input>
            <button className="newPostButton" onClick={handleCreateNewPost}>New Post</button>
            {posts.map((post,k) => {
                return <Post imageId={post.imageId} username={post.username} caption={post.caption} category={post.category} key={k}/>
            })}
        </div>
    )
}

export default Feed;