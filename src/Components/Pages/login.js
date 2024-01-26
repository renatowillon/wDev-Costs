import './login.css';

function Login(){
    return(
        <div id="content">
            <h1>Login Costs | wDev</h1>
        
            <div className="input-field">
                <input type="text" required spellcheck="false" /> 
                <label>Email do Catxorrão</label>
            </div>
    
            <div className="input-field">
                <input type="password" required spellcheck="false" /> 
                <label>Senha do Catxorrão</label>
            </div>

            <button className="submit">Fazer Login</button>
        </div>    
)
}

export default Login;