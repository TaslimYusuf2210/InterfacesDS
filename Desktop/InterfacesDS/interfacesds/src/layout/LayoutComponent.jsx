import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MainLayout() {

    return (
        <div className="">
            <Navbar className=""></Navbar>
            <main className="pt-28">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}