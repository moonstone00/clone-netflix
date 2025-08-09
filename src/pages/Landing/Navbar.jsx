import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/modules/DefaultButton";
import OptionLanguage from "../../components/modules/OptionLanguage";

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <header>
            <nav className=" flex justify-between items-center pr-10 pl-7 py-4" >
                <div>
                    <img src="/netflix-logo-icon-dea-afrizal.png" alt="netflix-logo.png" width={105} height={45} />
                </div>
                <div className="flex items-center gap-4" >
                    <OptionLanguage/>
                    <DefaultButton text={'Sign In'} onClick={() => navigate('/login')} />
                </div>
            </nav>
        </header>
    )
}
