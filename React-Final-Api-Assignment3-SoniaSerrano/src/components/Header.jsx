// components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}