import {useState} from "react";

function State() {
    const [name,setName]= useState("Ali");
    const [age,setAge]= useState("30");

    return(
        <div className="App">
            <h1>Merhaba {name}</h1>
            <h2>{age}</h2>

        </div>
    );
    
}

export default State;