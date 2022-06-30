import { useState } from "react"

const Login = () => {
    // const [Username, setUsername] = useState("")
    const [userData, setUserData] = useState({username: '', password:''})
    const [errorMessage, setErrorMessage] = useState({value: ''})

    const handleChange = (e) => {
       // preventDefault()
        //setUsername(e.target.value)
        setUserData((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })

         console.log(e.target.name, ':', e.target.value);
        //  console.log(prevState);

    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
     

        // if username and password fields are empty return an error message 
         if (userData.username === '' || userData.password === '') {
             setErrorMessage((prevState) => ({
              value: 'Username/Password fields cannot be empty'
            }))
        } else if (userData.username === 'admin' && userData.password === '12345') {
            //Login Successfull
            localStorage.setItem('isAuthenticated', 'true')
            window.location.pathname = '/'
        } else{
            setErrorMessage((prevState) => ({value: 'invalid Userename/password'}))

        }

    }
    return(
        <>
            <div className="text-center">
                <h1>Login User</h1>
                <form className="container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type='text' name='username' placeholder="Username" onChange={(e) => handleChange(e)}/>

                        <label>Password</label>
                        <input className="form-control" type='password' name='Password' placeholder="Password" onChange={(e) => handleChange(e)} />
                        
                    </div>
                    <button className="btn btn-outline-primary" type="submit">submit</button>

                    {
                        errorMessage.value && (<p className="text-danger">{errorMessage.value}</p>)
                    }

                   
                </form>
            </div>
        </>
    )
}

export default Login 