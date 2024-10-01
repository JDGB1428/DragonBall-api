import Header from "../Components/Header"
import { Outlet } from "react-router-dom"

const Layouts = () => {
    return (
        <>
            <Header />
            <main className="container min-h-screen mx-auto mt-10 ">
                <Outlet/>
            </main>
        </>
    )
}

export default Layouts