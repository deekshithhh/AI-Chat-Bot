import styles from "./sidebar.module.css";
import ai_icon from "../../images/icon1.png";
import pen from "../../images/pen.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Grid, useTheme } from "@mui/material";

export default function SideBar() {
  //const mobile = useMediaQuery("(max-width:600px)");
  // const theme = useTheme();
  // console.log(mobile);

  return (
    <div
      style={{ backgroundColor: "#FFFFFF", height: "100vh", width: "16rem" }}
    >
      <Grid
        item
        lg={4}
        className={styles.sidebar}
        style={{
          backgroundColor: "#D7C7F4",
          width: "16rem",
          justifyContent: "space-around",
        }}
      >
        <img src={ai_icon} alt="App icon" className={styles.appLogo} />
        <h2>New Chat</h2>
        <img src={pen} alt="Pen icon" className={styles.penIcon} />
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ backgroundColor: "#D7C7F4", marginTop: "1rem" }}
            variant="contained"
          >
            Past Conversations
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
