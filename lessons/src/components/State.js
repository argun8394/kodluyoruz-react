import {useState} from "react";

function State() {
    const [name,setName]= useState("Ali");
    const [age,setAge]= useState("30");

console.log(name,age);

    return(
        <div className="App">
            <h1>Merhaba {name}</h1>
            <h2>{age}</h2>

            <button onClick={()=>setName("Tahir")}>Change Name</button>
            <button onClick={()=>setAge("15")}>Change Age</button>
        </div>
    );
    
}

export default State;