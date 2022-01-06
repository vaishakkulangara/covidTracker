import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import MainPage from './components/main/main';
import Chat from './components/chat/chat';
import ChatHW from './components/chat/chat-h';
import Chatbase from './components/chat/chatbase';
import Homepage1 from "./components/homepage1/homepage1"

function App() {

  const [user, setLoginUser] = useState({
    name: "",
    address: "",
    phoneno: "",
    age: "",
    vaccinated: "",
    type: "",
    district: "",
    village: "",
    ward: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            {
              user && user._id ? <Homepage1 updateUser={updateUser} /> : <Login updateUser={updateUser} />
            }
          </Route>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/chat">
            {
              // user.type === "patient" ? <Chat uid={user._id} toId={2} /> : <ChatHW  toId={2}/>
              <Chatbase user={user} updateUser={updateUser} />
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;