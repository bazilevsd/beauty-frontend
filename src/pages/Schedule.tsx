import { Header } from "../components/Header";
import AppointmentGet from "../components/AppointmentGet";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Schedule() {
  const [pageName, setPageName] = useState("Schedule");
  return (
    <div>
      <Header text={pageName} />
      <AppointmentGet />
      <Footer />
    </div>
  );
}
