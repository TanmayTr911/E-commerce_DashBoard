import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <div>
      <ul className="foot">
        <li>
          <Link to="/help">Help Page</Link>
        </li>
        <li>
          <Link to="/cont">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Foot;
