import { useState } from 'react'
import '../styles/LoginForm.css'

function FormLogin(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()

        let data = {email,senha}
        
        const response = await fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: {"Content-Type":"application/json;charset=UTF-8"},
            body: JSON.stringify(data)
        });

        const result = await response.json();
  
        if (result.success) {
            console.log(result.data)
            sessionStorage.setItem('userName', result.data[0].nome)
            sessionStorage.setItem('id', result.data[0].id)
            window.location.href = "../Home/index.html";
        } else {
            alert(result.message);
        }
    }

    return(
        <form className='formulario-login' onSubmit={handleSubmit}>
            <h1>Faça seu Login</h1>

            <input 
                type="text" 
                placeholder='exemplo@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input 
                type="text" 
                placeholder='*********'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <input 
                type="submit" 
                value='CONFIRMAR'
            />
        </form>
    )
}

export default FormLogin;