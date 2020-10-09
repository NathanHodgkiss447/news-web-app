import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },

  image: {
    marginLeft: 20,
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "centre",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: "10",
    color: "white",
  },

  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  alanLogo: {
    height: "27vmin",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
  },

  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10",
  },
});
