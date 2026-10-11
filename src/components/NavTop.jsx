import { Link } from "react-router";
import Searchbar from "./Searchbar";

import NavItem from "./NavItem";
import {
  FaBolt,
  FaCartShopping,
  FaGift,
  FaSearchengin,
  FaUser,
} from "react-icons/fa6";

export default function NavTop() {
  return (
    <header className="bg-brand-accent-dark ">
      <div className="navbar relative gap-5 max-w-360 mx-auto px-5 ">
        <div className="navbar-start  w-auto">
          <div className="lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <img
              className="w-30 "
              src="/assets/images/logo.png"
              alt="Startech Logo"
            />
          </Link>
        </div>

        <div className="navbar-center flex-1 hidden lg:flex">
          <Searchbar />
        </div>
        <div className="navbar-end w-auto gap-5 hidden lg:flex">
          <NavItem title="Offers" subtitle="Latest Offers" url="/offers">
            <FaGift className="text-main text-lg" />
          </NavItem>
          <NavItem title="11.11 Deal" subtitle="Special Deals" url="/deals">
            <FaBolt className="text-main text-lg animate-pulse" />
          </NavItem>
          <NavItem title="Account" subtitle="Register or Login" url="/login">
            <FaUser className="text-main text-lg" />
          </NavItem>

          <Link>
            <button className="btn btn-info">PC Builder</button>
          </Link>
        </div>

        <div className="flex gap-5 lg:hidden ml-auto ">
          <FaSearchengin className="text-xl" />
          <FaCartShopping className="text-xl" />
        </div>
      </div>
    </header>
  );
}
