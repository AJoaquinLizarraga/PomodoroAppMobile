/** @format */

import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native"
import { useEffect, useState } from "react"
import Header from "./src/components/Header"
import Timer from "./src/components/Timer"
import { Audio } from "expo-av"

const colors = ["#c263be", "#6b52d9", "#b0e5f1"]
export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // console.log(currentTime);
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1)
    } else {
      clearInterval(interval)
    }

    if (time === 0) {
      setIsActive(false)
      setIsWorking((prev) => !prev)
      setTime(
        currentTime === 0
          ? 1500
          : currentTime === 1
          ? 300
          : currentTime === 2 && 600
      )
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  const handleStartStop = () => {
    playSound()
    setIsActive(!isActive)
  }

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/introBlue.mp3")
    )
    await sound.playAsync()
  }
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 30,
        }}
      >
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={styles.StartStop}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>

        <Text style={styles.text}>TERMINADO Y BUG CORREGIDO</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#333333",
    alignItems: "center",
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
  },
  StartStop: {
    color: "white",
    fontWeight: "bold",
  },
})
