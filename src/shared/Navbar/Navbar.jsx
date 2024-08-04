import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-red-600 px-20 py-7 text-white">
      <Link to="/">
        <h1 className="text-3xl font-semibold">mdyhAkash.</h1>
      </Link>
      <div className="text-xl">
        <ul className="flex gap-14">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Skils</Link>
          </li>
          <li>
            <Link to="/">Project</Link>
          </li>
          <li>
            <Link to="/">Education</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <button className="px-5 py-2 bg-white text-lg text-red-600 font-bold rounded-md">
        Resume
      </button>
    </div>
  );
};

export default Navbar;
