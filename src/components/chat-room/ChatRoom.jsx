import React from "react";
import { useState, useEffect } from "react";
import ChatMessage from "../message/Message";
import { auth, firestore } from "../../firebase/firebase";
import {
  collection,
  orderBy,
  query,
  limit,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(firestore, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy("createdAt"), limit(25));
    const messageSnapshot = onSnapshot(queryMessages, (snapshot) => {
      let messagesList = [];
      snapshot.forEach((doc) => {
        messagesList.push({ ...doc.data(), id: doc.id });
      });
      console.log(messagesList);
      setMessages(messagesList);
    });
    return () => messageSnapshot();
  }, []);
  const sendMessage = async (event) => {
    event.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setNewMessage("");
  };
  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        {/* <span ref={dummy}></span> */}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!newMessage}>
          🕊️
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
