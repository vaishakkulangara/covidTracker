import React from "react";
import ChatHW from './chat-h';
import Chat from './chat';
function Chatbase({user,updateUser})
{
    return(
        <>
       
      {/* { console.log(user)} */}
      {user.type === "Patient" ? <Chat updateUser={updateUser} user={user} toId={"619ab8a7f6ef6a39e0496908"} /> : <ChatHW updateUser={updateUser} toId={"619ab8a7f6ef6a39e0496908"}/>}
      </>
    )
}
export default Chatbase;
