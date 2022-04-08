import { Link } from "react-router-dom"

const HomeScreen = () => {

    return (
        <main className="home-wrapper">
            <div className="container flex column full-screen text-center">
                <h1 className="herotext">Hey Buddy! 👋</h1>
                <p className="sub-herotext">
                    Welcome to the Project Task board
                </p>
                <Link to='/tasks'>
                    <button className="btn">Get Started</button>
                </Link>
            </div>
        </main>
    )
}


export default HomeScreen  
