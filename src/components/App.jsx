import React from "react";
import Card from "./Card";
import Emoji from "../emojipedia";
import Footer from "./footer";



function App() {
  return (
    <div >
    <div>
      <h1>
        <span>emojiPedia</span>
      </h1>
      <dl className="dictionary">{Emoji.map(emo => {
  return (
    <Card key={emo.id} emoji={emo.emoji} name={emo.name} mean={emo.meaning} />
  );
})}</dl>
      
    </div>
    <Footer/>

    </div>
    
  );
}

export default App;
