import React from "react"
import "./Post.css"
import empty from "../../Images/emptyH.png"
import full from "../../Images/fullH.png"


export default function Post(props) {
    return (
        <div className="user-post">
            <div id="user-post-upper">
                <img alt="" className="user-image" src={props.props.author.avatar.url} />
                <div className="user-details">
                    <div className="user-username">{props.props.author.username}</div>
                    <div className="user-location">{props.props.location}</div>
                </div>
                <span>...</span>
            </div>

            <div id="user-post-middle">
                <img alt="" className="user-post-image" src={props.props.image.url} onClick={props.handleViewPost}>
                </img>
                {
                    props.props.isLiked ?
                        <img alt="" className="full hearty" src={full} onClick={props.handleLike}></img> :
                        <img alt="" className="empty hearty" src={empty} onClick={props.handleLike}></img>
                }
            </div>


            <div id="user-post-lower">
                <div className="user-likes-description">
                    <div className="user-likes">Liked by 2 people</div>
                    <div className="user-description"><span>{props.props.author.username}</span>{props.props.description}</div>
                </div>
            </div>
        </div>
    )
}