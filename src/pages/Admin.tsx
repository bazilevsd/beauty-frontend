import AppointmentSet from "../components/AppointmentSet";
import { getUser } from "../utilities/user-services";
import { useState } from "react";
import AuthPage from "./AuthPage";
import { useUserStore } from "../stores/useUserStore";
import UserLogOut from "../components/LogOut";
import { Header } from "../components/Header";
import styles from "./Admin.module.scss";

export default function Admin() {
  const { user } = useUserStore();
  const [pageName, setPageName] = useState("Schedule Set");
  console.log("admin", user);

  return (
    <div>
      {user ? (
        <>
          <Header text={pageName} />
          <div className={styles.LogOut}>
            <UserLogOut />
          </div>
          <AppointmentSet />
        </>
      ) : (
        <AuthPage setUser={user} />
      )}
    </div>
  );
}
