import OptionLanguage from "../../components/modules/OptionLanguage";

export default function Navbar() {
    return (
        <header>
            <nav className=" flex justify-between items-center pr-10 pl-7 py-4" >
                <div>
                    <img src="../../../public/netflix-logo-icon-dea-afrizal.png" alt="netflix-logo.png" width={105} height={45} />
                </div>
                <div className="flex items-center gap-4" >
                    <OptionLanguage/>
                    <button>Sign In</button>
                </div>
            </nav>
        </header>
    )
}
