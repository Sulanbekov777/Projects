import React, {useState} from 'react'
import './Profile.css'
import Button from "../Button/Button"


function Profile(props) {
    console.log(props)
    const[text, setText] = useState('oldText');
    return (
        <div>
            <div>
            <img className = "mainAvatar"
            src='https://ichef.bbci.co.uk/news/410/cpsprodpb/B785/production/_111818964_jura.jpg'></img>
            </div>
            <div>
                <input onChange={(event)=>setText(event.target.value)}/>
                <Button color= "primery" text="Добавить пост" onClick={()=>props.addPost(text)}/>
            </div>
            <div>
                {props.posts.map(post =>
                    <div key={post.id} style={{display:'flex'}}>
                        <p>{post.id+1}{post.post}</p>
                        <button id={post.id} onClick={()=>props.deletePost(post.id)}>&times;</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Profile;