import './Post.css';
const IMAGE_URL='https://picsum.photos/500/500?image=';

function Post(props){


    return(
        <div className="post">
            <h1>@{props.username}</h1>
            <img src={IMAGE_URL+props.imageId} alt="img for post"/>
            <h5>{props.caption}</h5>
            <h5>Quantity: {props.quantity}</h5>  
            {props.category && <button onClick={() => { return props.InterestHandler()}}>Interested</button>}
        </div>


    )
}


export default Post;