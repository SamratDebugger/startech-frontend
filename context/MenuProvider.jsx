import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/categoryApi";
import { MenuContext } from "./MenuContext";

export default function MenuProvider({ children }) {
  const {
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const data = { categories, categoriesIsError, categoriesIsLoading };
  return <MenuContext value={data}>{children}</MenuContext>;
}
