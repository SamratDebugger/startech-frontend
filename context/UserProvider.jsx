import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const data = {};
  return <UserContext value={data}>{children}</UserContext>;
}
