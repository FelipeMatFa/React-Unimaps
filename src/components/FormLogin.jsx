import '../styles/LoginForm.css'

function FormLogin(){

    let form = document.getElementsByClassName('formulario-login')
    form.onsubmit = async function(e){
        e.preventDefault()

        const email = document.getElementById('').value;
        const senha = document.getElementById('').value;

        const data = {email,senha}
        
        const response = await fetch("http://localhost:3000/api/login", {
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
        <form className='formulario-login'>
            <h1>Faça seu Login</h1>
            <input type="text" placeholder='exemplo@gmail.com'/>
            <input type="text" placeholder='*********'/>
            <input type="submit" value='CONFIRMAR'/>
        </form>
    )
}

export default FormLogin;