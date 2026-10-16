import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

export default function NavBottom() {
  const { categories, categoriesIsLoading, categoriesIsError } =
    useContext(MenuContext);
  return (
    <div className=" relative shadow-md bg-base-100" data-theme="light">
      <div className="navbar max-w-360 mx-auto py-1 min-h-auto">
        <div className="navbar-center w-full">
          <ul className="menu menu-sm menu-horizontal w-full justify-between">
            {categoriesIsLoading ? (
              <p>Loading</p>
            ) : categoriesIsError ? (
              <p>something went wrong</p>
            ) : (
              categories.slice(0, 14).map((category) => (
                <li key={category._id}>
                  <a>{category.name}</a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
