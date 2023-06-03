import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import { LoginForm } from './components/LoginForm';
import './App.css';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
     <ChatEngine
     height="100vh"
     projectID="9b9ac047-4961-41a4-a498-c13d3e64f968"
     userName="Gowtham"
     userSecret="qwerty"
     renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
     onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     ></ChatEngine>
    </div>
  );
}

export default App;
