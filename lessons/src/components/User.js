// Koşullu render işlemi
//key prop
//propTypes

import PropTypes from "prop-types";


function User({name, surname, isLoggedIn,age,friends/*props*/}){
    return(
    <>
     <h1> {isLoggedIn ? `My name is ${name} and my surname is ${surname}, ${age}` :"Dont Entry"}</h1>
     {friends.map((friend,index) => 
     (<div key={index}>{index}-{friend}</div>))
     }
     </>);
}
User.propTypes ={
    name:PropTypes.string,
    surname:PropTypes.string,
    isLoggedIn:PropTypes.bool,
    age:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired/*oneOfType ile birden fazla veri tipi alabiliriz-----------------isRequired zorunluluk getirir*/
}

export default User;