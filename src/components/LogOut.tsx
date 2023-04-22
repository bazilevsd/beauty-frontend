import { logOut } from "../utilities/user-services";
import styles from "./LogOut.module.scss";
//@ts-ignore
export default function UserLogOut({ user, setUser }) {
  console.log(user);
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div>
      <div>{user.name}</div>
      <div className={styles.LogOut}>{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
}
