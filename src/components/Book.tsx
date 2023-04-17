import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

export default function Book() {
  return <Scheduler events={EVENTS} />;
}
