import "./Post.css"

export default function Post({post}){
    const {id,userId,title,body} = post;
    return(
        <div className="post">
            <p><small>UserId: {userId}</small></p>
            <p><small>PostId: {id}</small></p>
            <h4>Title: {title}</h4>
            <p>Description: {body}</p>
        </div>
    )
}