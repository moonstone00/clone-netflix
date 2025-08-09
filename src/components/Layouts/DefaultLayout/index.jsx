import Navbar from "../../../pages/Landing/Navbar";

export default function DefaultLayout({ children }) {
    return (
        <section>
            <Navbar/>
            { children }
        </section>
    )
}
