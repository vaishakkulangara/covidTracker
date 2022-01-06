import React, { useEffect, useState } from "react"
import "./chat.css"
import axios from "axios"
import { Link } from "react-router-dom";

const Chat = ({ user, toId }) => {
    const uid = user._id

    const [msg, setMsg] = useState("")
    const [chats, setChats] = useState([
        {
            "uid": "",
            "name":"",
            "msg": "",
            "reply": "",
            "toId": "",
        }
    ])

    useEffect(() => {
        getMsg()
    }, [])

    const handleChange = e => {
        // console.log(e.target.value)
        setMsg(e.target.value)
        // console.log(msg)
    }
    const onSend = () => {

        //  uid=3456
        const reply = ""
        const message = {
            uid,
            name:user.name,
            msg,
            reply,
            toId,
        }
        axios.post("http://localhost:1000/api/main/msg", message)
            .then(res => {
                console.log(res.data)
                const data = {
                    "uid": res.data.message.uid,
                    "name":res.data.message.name,
                    "msg": res.data.message.msg,
                    "reply": res.data.message.reply,
                    "toId": res.data.message.toId,
                }
                setChats([...chats, data])
                setMsg("")

            })
    }

    const getMsg = () => {

        axios.get(`http://localhost:1000/api/main/msg/${uid}`)
            .then(res => {

                const messages = res.data.msg
                console.log(res.data.msg)
                const msgArray = []
                messages.map((message) => {
                    // console.log(message.msg)
                    msgArray.push(
                        {
                            "uid": message.uid,
                            "name":message.name,
                            "msg": message.msg,
                            "reply": message.reply,
                            "toId": message.toId,
                        })
                })
                console.log(msgArray)
                setChats(msgArray)

            })
    }

    return (
        <div className="chat-view">
            {/* {console.log({uid,toId})} */}
            <div className="nav1bar"><Link to="/home">BACK</Link></div>
            <div className='chat-box'>
                <input type='text' value={msg} onChange={handleChange}></input>
                <button onClick={onSend}>Send</button>
            </div>
            <div className='chat-list'>

                {chats.map(chat => (
                    <div className='chat-item'>
                        <div className='chat-item-msg'>{chat.msg}</div>
                        <div className={chat.reply ? 'chat-item-reply' : 'chat-item-none'}>{chat.reply}</div>
                    </div>


                ))}
                {/* <div className='chat-item'>{chats[1]}</div> */}
                {/* {console.log(chats[0])} */}


            </div>

        </div>
    )
}

export default Chat;