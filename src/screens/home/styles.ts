import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    height: "100vh",
    padding: 24,
    gap: 6,
  },
  eventName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  eventDate: {
    color: "#cdcdcd",
  },
  input: {
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#ffffff",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 27,
    marginBottom: 35,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
  },
});
