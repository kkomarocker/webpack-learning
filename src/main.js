import "../css/main.scss";
import notification from "./Notification";

class Form {
  constructor() {
    notification.notify("using babel is much nicer");
    notification.log("Babel is up and running");
  }
}

new Form();
