import { useState } from "react";
import { Link } from "../../routing";

const menuGroups = [
  { key:"about", label:"About", items:[["About AIC","/about"],["History","/history"],["Mission & Vision","/mission"],["Leadership","/leadership"],["Organization","/organization"]] },
  { key:"academics", label:"Academics", items:[["Faculties","/faculties"],["Academic Programs","/programs"],["Undergraduate","/undergraduate"],["Graduate Programs","/graduate"],["Academic Calendar","/calendar"]] },
  { key:"admissions", label:"Admissions", items:[["Admission Requirements","/requirements"],["How to Apply","/how-to-apply"],["Tuition & Fees","/tuition"],["Scholarships","/scholarships"],["Online Application","/application"]] },
  { key:"students", label:"Students", items:[["Student Portal","/student-portal"],["Student Services","/student-services"],["Library","/library"],["Clubs & Activities","/activities"],["Career Center","/career"]] },
  { key:"campus", label:"Campus Life", items:[["Events","/events"],["Activities","/activities"],["Facilities","/facilities"],["Gallery","/gallery"],["News","/news"]] },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeMenu = () => { setMenuOpen(false); setOpenDropdown(null); };
  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-contact"><span>📞 +855 12 345 678</span><span>✉ info@aic.edu.kh</span></div>
          <div className="top-links">
            <Link to="/student-portal" onClick={closeMenu}>Student Login</Link>
            <Link to="/staff-login" onClick={closeMenu}>Staff Login</Link>
            <Link to="/library" onClick={closeMenu}>Library</Link>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/images/1.jpg" alt="ASEAN Institute of Cambodia" className="logo-image" />
            <span className="logo-text">ASEAN INSTITUTE<small>OF CAMBODIA</small></span>
          </Link>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
          <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            {menuGroups.map(group => (
              <div key={group.key} className={`nav-dropdown ${openDropdown === group.key ? "active" : ""}`}>
                <button className="dropdown-button" onClick={() => toggleDropdown(group.key)}>{group.label}<span>⌄</span></button>
                <div className="dropdown-menu">
                  {group.items.map(([label,path]) => <Link key={label} to={path} onClick={closeMenu}>{label}</Link>)}
                </div>
              </div>
            ))}
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/application" className="nav-apply" onClick={closeMenu}>Apply Now</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
