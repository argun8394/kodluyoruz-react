import {useState} from "react";

function State() {
    const [name,setName]= useState("Ali");
    const [age,setAge]= useState("30");
    const [friends,setFriends]= useState(["diego","rossi"])

console.log(name,age);

    return(
        <div className="App">
            <h1>Merhaba {name}</h1>
            <h2>{age}</h2>

            <button onClick={()=>setName("Tahir")}>Change Name</button>
            <button onClick={()=>setAge("15")}>Change Age</button>

            <hr/>

            <h2>friends</h2>
            {friends.map((friend,index)=>(
                <div key={index}>{friend}</div>
            ))}
            <br/>
            <button onClick={()=>setFriends(["luiz",...friends])}>Add new Friends</button> {/*başa ekler*/}
            
        </div>
    );
    
}

export default State;