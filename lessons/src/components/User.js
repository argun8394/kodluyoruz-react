// Koşullu render işlemi

function User({name, surname, isLoggedIn,age,friends/*props*/}){
    return(
    <>
     <h1> {isLoggedIn ? `My name is ${name} and my surname is ${surname}, ${age}` :"Dont Entry"}</h1>
     {friends.map((friend,index) => 
     (<div key={index}>{index}-{friend}</div>))
     }
     </>);
}


export default User;