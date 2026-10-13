import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../api/categoryApi";

export default function NavBottom() {
  const {
    isLoading,
    isError,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  return (
    <div className=" relative shadow-md bg-base-100" data-theme="light">
      <div className="navbar max-w-360 mx-auto py-1 min-h-auto">
        <div className="navbar-center w-full">
          <ul className="menu menu-sm menu-horizontal w-full justify-between">
            {isLoading ? (
              <p>Loading</p>
            ) : isError ? (
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
