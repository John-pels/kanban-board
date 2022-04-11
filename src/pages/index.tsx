import { CustomButton } from "../components/Common"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Store } from "../components/context"

const HomeScreen = () => {
    const { lists } = useContext(Store)
    console.log("++++++++", lists)

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
