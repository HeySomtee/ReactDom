import Users from "../components/Users"

const Home = () => {
    const handleLogout = () => {
        localStorage.clear()
        window.location.pathname = '/login'
    }
    return(
        <>
            <div className="App">
                <h2>Welcome to Our Landing Page or Home page</h2>
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>

                <Users />
            </div>
            
        </>
    )
}

export default Home