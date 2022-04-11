import { CustomButton } from "../components/Common"
import { Link } from "react-router-dom"

const HomeScreen = () => {

    return (

        <main className="wrapper">
            <section className="container flex column full-screen text-center">
                <h1 className="herotext">Hey Buddy! 👋</h1>
                <p className="sub-herotext">
                    Welcome to the Project Task board
                </p>
                <Link to='/tasks' title="get started">
                    <CustomButton />
                </Link>
            </section>
        </main>

    )
}


export default HomeScreen  
