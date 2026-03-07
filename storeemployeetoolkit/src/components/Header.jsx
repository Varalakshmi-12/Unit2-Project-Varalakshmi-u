import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const { pathname } = useLocation();   

  
  const isHome = pathname === "/";
  const isCart = pathname === "/cart";
  const isShift = pathname === "/clock";
  const isCredit = pathname === "/creditcard";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isOrders = pathname === "/orders";


  return (
    <header className="header">

      
      <nav className="nav-left">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/orders" className="nav-item">Orders</NavLink>
        <NavLink to="/products" className="nav-item">Products</NavLink>
      </nav>

      
      {isHome && (
        <h1 className="header-title">
          Welcome to All-in-One Home Goods Store
        </h1>
      )}

      {isCart && <h1 className="header-title">Customer Cart Checkout</h1>}
      {isShift && <h1 className="header-title">Employee Shift Tracking</h1>}
      {isCredit && <h1 className="header-title">Customer Credit Card Signup</h1>}
      {isAbout && <h1 className="header-title">AboutUs</h1>}
      {isContact && <h1 className="header-title">ContactUs</h1>}


      {/*About and Contact Nav are hidden on CartPage*/}
      {!isCart && (
        <nav className="nav-right">
          <NavLink to="/about" className="nav-item">About</NavLink>
          <NavLink to="/contact" className="nav-item">Contact</NavLink>
          
        </nav>
      )}

      
    </header>
  );
}

export default Header;