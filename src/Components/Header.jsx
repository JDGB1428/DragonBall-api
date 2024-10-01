import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.png';

const Header = () => {
    return (
        <header className="shadow-lg">
            <div className="container flex items-center justify-between mx-auto">
                <img src={logo} className='w-32 h-32 p-3' alt="Logo"/>
                <nav className="flex items-center gap-4">
                    <Link to='/' className="font-bold uppercase text-md font bold">Personajes</Link>
                    <Link to='/planets' className="font-bold uppercase text-md font bold">Planetas</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
