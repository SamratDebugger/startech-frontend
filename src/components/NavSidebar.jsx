import { useContext } from "react";
import { NavLink } from "react-router";
import { MenuContext } from "../../context/MenuContext";

export default function NavSidebar() {
  const { categories, categoriesIsLoading, categoriesIsError } =
    useContext(MenuContext);
  return (
    <>
      {categoriesIsLoading ? (
        <li>Loading</li>
      ) : categoriesIsError ? (
        <li>something went wrong</li>
      ) : (
        categories.slice(0, 14).map((category) => (
          <li key={category._id}>
            <NavLink
              className={({ isActive }) => (isActive ? "menu-active" : "")}
              to={`/${category._id}`}
            >
              {category.name}
            </NavLink>
          </li>
        ))
      )}
    </>
  );
}
