import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    backgroundColor: "#0B1F34",
    alignItems: "center",
  },
  gamerImage: {
    width: 278,
    height: 259,
  },
  title: {
    color: "#00D4FF",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 31,
    fontFamily: "Play_700Bold",
  },
  subTitle: {
    color: "#ED7947",
    fontSize: 21,
    marginTop: 15,
    fontFamily: "Play_400Regular",
  },
  footer: {
    marginTop: "15%",
    marginBottom: "5%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00D4FF",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonIcon: {
    backgroundColor: "#ED7947",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: "Play_700Bold",
    fontWeight: "bold",
    fontSize: 18,
    color: "#0B1F34",
  },
});
