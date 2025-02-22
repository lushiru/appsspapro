import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 3,
  },
  product: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 10,
  },
  image: {
    height: 150,
    resizeMode: "contain",
  },
  name: {
    marginTop: 15,
    fontSize: 18,
  },
  btnSubmit:{
    fontSize: 16,
    backgroundColor: "#81C408",
    margin:10,
  },
  input: {
    padding : 5
  },
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 30,
  },
  modalHeader: {
    flexDirection: "row",
  },
  modalHeaderContent: {
    flexGrow: 1,
  },
  modalHeaderCloseText: {
    textAlign: "center",
    padding: 10,
    fontSize: 18,
  }
});