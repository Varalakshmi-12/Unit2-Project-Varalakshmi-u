import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section className="about-container">
      <h2 className="about-title">Welcome to All-in-One Home Goods Store</h2>

      <p className="about-text">
        I am an engineer interested in business, so I started this venture and built this
        application to help manage daily store operations — including employee shift timings,
        customer cart checkout, and credit card signup processing for customers.
      </p>

      <ul className="about-list">
        <li className="about-list">
          <strong>Clock Button:</strong> Use it to start your shift, record meal in/out, and end your shift.
        </li>
        <li>
          <strong>Cart Button:</strong> Use it to check out customer items and calculate totals.
        </li>
        <li>
          <strong>Credit Card Button:</strong> Use it when a customer wants to sign up for a credit card.
        </li>
      </ul>

      <p className="about-text">
        In the future, we plan to add ongoing training programs for all associates to learn safety precautions,
        how to handle suspicious activity, and stay updated on business policies.
      </p>

      <p className="about-text">
        We also offer funds to interested and qualified associates who wish to continue their education or
        earn certificate courses. Additionally, we provide internal training to help build skills and move
        into better positions within the company — a great opportunity for growth!
      </p>

      <h3 >We are Here to Help</h3>
      <p className="about-text">
        If you are facing any issues within the store, you can always approach our support team.
        We take care of each other in times of need — no one should have to face hardship alone.
        Remember, we are here to help.
      </p>
      <nav className="nav-home">
      <Link to="/" >Go Back To HomePage</Link>
    </nav>
    </section>
    
  );
}