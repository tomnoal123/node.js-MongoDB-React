import {useState} from "react";


function Login(){

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");



async function login(){

const res = await fetch(
"http://localhost:5000/users/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username,
password
})
}
);


const data = await res.json();


localStorage.setItem(
"token",
data.token
);


alert("Zalogowano");

}



return(

<div>

<h1>Login</h1>


<input
placeholder="username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>


<input
placeholder="password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


<button onClick={login}>
Login
</button>


</div>

)

}


export default Login;