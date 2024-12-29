import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font_semibold drop-shadow">EP</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={( isActive ) => isActive ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font_semibold drop-shadow' : 'text-black'}>About</NavLink>
            <NavLink to="/projects" className={( isActive ) => isActive ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font_semibold drop-shadow' : 'text-black'}>Projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar 