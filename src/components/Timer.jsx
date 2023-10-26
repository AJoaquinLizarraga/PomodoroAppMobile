import { View, Text, StyleSheet } from "react-native";

const Timer = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formattedTime}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    // alignItems: "center",
  },
  timer: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },
});

export default Timer;
