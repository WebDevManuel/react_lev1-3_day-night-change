import { useState } from 'react';
import './App.css';

function App() {
    const [darkmode, setdarkmode] = useState(true);
    const [headline, setHeadline] = useState("Es ist Tag ☀️");
    const [txtOfBtn, setTxtOfBtn] = useState("Wechsel zur Nacht")
    return (
        <div className="App" style={{
            color: darkmode ? "#192E3B" : "#E3D6C0",
            backgroundColor: darkmode ? "#E3D6C0" : "#192E3B"
        }}>
            <h1>{headline ? "Es ist Tag ☀️" : "Es ist Nacht 🌕"}</h1>
            {console.log(headline)}
            <button onClick={() => {
                setdarkmode(darkmode ? false : true)
                setHeadline(headline ? false : true)
                setTxtOfBtn(!txtOfBtn)
            }}
            >{txtOfBtn ? "Wechsel zur Nacht" : "Wechsel zum Tag"}</button>
        </div>
    );
};

export default App;
