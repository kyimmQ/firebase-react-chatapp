import React, { useState } from "react";

import "./App.css";
import SignIn from "./components/sign-in/SignIn";
import ChatRoom from "./components/chat-room/ChatRoom";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>🔥💬 602's Firebase ChatRoom</h1>
      </header>

      <section>
        {isAuth ? <ChatRoom /> : <SignIn setIsAuth={setIsAuth} />}
      </section>
    </div>
  );
}

export default App;
