import React,{useState} from 'react'
import "./Chat.css"




const ChatWindow = () => {

   const [question,setQuestion] = useState('');
   const [data, setData] = useState('');

   const handleClick = (event) => {
   event.preventDefault();
    let url  = "http://127.0.0.1:8000/getanswer/"  + question;
    
     fetch(url)
       .then(response => response.text())
       .then(data =>setData(data))
       .catch(error => console.error(error));
   }

  
  

  return (
    <div className="outerWindow">
     <div className="main-content">
       {
        data.toString()
       }
     </div>

     <div className="chat-form">
     <form>
        <input type="text" onChange={(event)=>setQuestion(event.target.value)}></input>
        <button onClick={handleClick}>Send</button>
     </form>
     </div>
     
    </div>
  )
}

export default ChatWindow;
