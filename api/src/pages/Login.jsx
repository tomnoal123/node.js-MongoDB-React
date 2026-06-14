import {useState} from 'react';
function Login(){
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");

async function login(){
    const res = await fetch('http://localhost:5000/users/login',{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        }, body: JSON.stringify({
            username,
            password
        })
        
    })
    const data = await res.json();

    localStorage.setItem("token", data.token);

    alert("Zalogowano")
}

    return(
        <div>
            <h1>Login</h1>
            <input value={username}
            placeholder='username'
            onChange={(e) => setUserName(e.target.value)}
            />

            <input
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login}>
            Login
            </button>
        </div>
    )

}
export default Login;