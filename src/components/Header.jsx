import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Brake", "Long Brake"];
const Header = ({ setTime, currentTime, setCurrentTime }) => {
  const handlePress = index => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 10;
    setCurrentTime(index);
    setTime(newTime * 60);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
    borderRadius: 8,
    borderColor: "white",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontWeight: "bold",
  },
});

export default Header;
