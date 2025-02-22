import { StyleSheet } from "react-native";

export const form = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnSubmit: {
    padding: 5,
    backgroundColor: "#0098d3",
    marginVertical: 8
  },
  btnFile: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#3ce7cf",
    marginBottom: 15,
  },
  btnText: {
    marginTop: 10,
  },
  btnTextLabel: {
    color: "#000",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
