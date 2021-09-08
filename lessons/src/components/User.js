// Koşullu render işlemi

function User({name, surname, isLoggedIn,age/*props*/}){
    return <h1> {isLoggedIn ? `My name is ${name} and my surname is ${surname}, ${age}` :"Dont Entry"}</h1>
};

export default User;