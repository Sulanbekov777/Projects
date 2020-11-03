// import React from 'react';
// import {Switch, Route} from 'react-router-dom';
// import Profile from '../Profile/Profile';
// import Contacts from '../Contacts/Contacts';

// function Main(props) {
//     return (
//         <div className={props.className}>
//             <Switch>
//                 <Route exact path="/">
//                     Home
//                 </Route>
//                 <Route exact path="/contacts">
//                     <Contacts />
//                 </Route>
//                 <Route exact path="/profile">
//                     <Profile addPost={props.addPost} 
//                     posts={props.posts} 
//                     deletePost = {props.deletePost}/>
//                 </Route>
//             </Switch>
//         </div>
//     )
// }
// export default Main;


import React from 'react'
import Form from '../Form';
import Notes from '../Notes';
import Alert from '../Alert';
import { connect } from 'react-redux';

function Main(props) {
    return (
        <div>
            <Form />
            {props.isShow ? <Alert /> : ''}
            <Notes />
        </div>
    )
}

const mapStateToProps = (state) => {
    const {isShow} = state.AlertReducer
    return {isShow}
}
export default connect(mapStateToProps)(Main);
