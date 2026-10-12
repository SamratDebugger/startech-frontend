import { FaBolt, FaComputer, FaGift, FaUser } from "react-icons/fa6";
import { TbCopyPlusFilled } from "react-icons/tb";
import { NavLink } from "react-router";

export default function Dock() {
  return (
    <div className="dock sticky bg-brand-accent-dark">
      <NavLink
        to="/offers"
        className={({ isActive }) => (isActive ? "dock-active" : "")}
      >
        <FaGift className="size-[1.2em]" />
        <span className="dock-label">Offers</span>
      </NavLink>

      <NavLink
        to="/deals"
        className={({ isActive }) => (isActive ? "dock-active" : "")}
      >
        <FaBolt className="size-[1.2em]" />
        <span className="dock-label">11.11</span>
      </NavLink>

      <NavLink
        to="/pcbuilder"
        className={({ isActive }) => (isActive ? "dock-active" : "")}
      >
        <FaComputer className="size-[1.2em]" />
        <span className="dock-label">PC Builder</span>
      </NavLink>

      <NavLink
        to="/compare"
        className={({ isActive }) => (isActive ? "dock-active" : "")}
      >
        <TbCopyPlusFilled className="size-[1.2em]" />
        <span className="dock-label">Compare</span>
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "dock-active" : "")}
      >
        <FaUser className="size-[1.2em]" />
        <span className="dock-label">Account</span>
      </NavLink>
    </div>
  );
}
