// Koşullu render işlemi
//key prop
//propTypes

import PropTypes from "prop-types";


function User({name, surname, isLoggedIn,age,friends,address/*props*/}){
    return(
    <>
     <h1> {isLoggedIn ? `My name is ${name} and my surname is ${surname}, ${age}` :"Dont Entry"}</h1>
     
     <h3>{address.title} {address.zip}</h3>
     <br />
     {friends.map((friend,index) => 
     (<div key={index}>{index}-{friend}</div>))
     }
     </>);
}
User.propTypes ={
    name:PropTypes.string,
    surname:PropTypes.string,
    isLoggedIn:PropTypes.bool,
    age:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,/*oneOfType ile birden fazla veri tipi alabiliriz-----------------isRequired zorunluluk getirir*/
    address:PropTypes.shape({title: PropTypes.string, zip: PropTypes.number})
    
};

export default User;