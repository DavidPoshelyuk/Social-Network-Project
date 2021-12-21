import React, {ChangeEvent} from "react";
import s from './Contents.module.css'
import {MyInfo} from "./MyInfo.";
import {Posts} from "./Posts";
import { AddPostActionCreator, UpdateNewTextPostActionCreator} from "../../Redux/Posts-reducer";






export function Contents({dispatch,state,...props}: any) {
    let DataPostsMap = state.PostsReducer.data.map((i:any) => <Posts like={i.like} item={i.item} info={i.info}/>);



    let Push = () => {
        dispatch(AddPostActionCreator());
        dispatch(UpdateNewTextPostActionCreator(''))
    }
   let onChangePost = (e:ChangeEvent<HTMLTextAreaElement> ) => {
        dispatch(UpdateNewTextPostActionCreator(e.currentTarget.value))

 }
    // console.log(state.PostsReducer)
    return <div>
        <MyInfo state={state}/>
        <div className={s.input}>
            <h1> New Post</h1>
            <textarea onChange={onChangePost} value={state.PostsReducer.Newtextpost}/>
            <button onClick={Push}> push</button>
        </div>
        {DataPostsMap}
    </div>
}








