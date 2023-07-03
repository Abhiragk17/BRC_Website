"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const navList = [
    { text: 'HOME', route: '/' },
    { text: 'ABOUT US', route: '/about' },
    { text: 'OUR TEAM', route: '/team' },
    { text: 'EVENTS', route: '/events' },
    { text: 'CONTACT US', route: '/contact' },
  ];

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="bg-custom-blue text-white py-4">
      <div className="flex justify-between">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-4 ml-7" />

        <div className="mr-7">
          <button
            className={`hamburger ${isActive ? 'is-active' : ''}`}
            onClick={handleToggle}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>

          <ul className={`navbar-menu ${isActive ? 'active' : ''}`}>
            {navList.map((item, index) => (
              <li key={index}>
                <Link href={item.route} onClick={handleClick} className="navbar-item">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        .hamburger-bar {
          width: 100%;
          height: 2px;
          background-color: #fff;
        }

        .is-active .hamburger-bar {
          background-color: #fff;
        }

        .navbar-menu {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: 10px;
          transition: transform 0.3s ease-in-out;
          transform: translateX(100%);
        }

        .active .navbar-menu {
          transform: translateX(0);
        }

        .navbar-item {
          margin: 0.5rem 0;
          text-decoration: none;
          color: #fff;
          transition: color 0.3s ease-in-out;
        }

        .navbar-item:hover {
          color: #c1def2;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
