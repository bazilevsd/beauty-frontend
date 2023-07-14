import { logOut } from "../utilities/user-services";
import styles from "./LogOut.module.scss";
import { useUserStore } from "../stores/useUserStore";
//@ts-ignore
export default function UserLogOut() {
  const { user, settingUserNull } = useUserStore();
  console.log(user);
  function handleLogOut() {
    logOut();
    settingUserNull;
  }

  return (
    <div>
      <button className={styles.submitButton} onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
}
