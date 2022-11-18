import { Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";


const Timer = (props, key) => (
  
  <CountdownCircleTimer
    key={key}
    isPlaying={props.isPlaying}
    duration={10}
    colors={["#004777", "#F7B801", "#A30000", "#000000"]}
    colorsTime={[10, 5, 2, 0]}
    initialRemainingTime={10}
    updateInterval={0}
    size={180}
    strokeWidth={15}
    trailStrokeWidth={15}
    strokeLinecap="round" // "round" | "square" | "butt"
    rotation="clockwise" // "clockwise" | "counterclockwise"
    trailColor="#808080"
    isSmoothColorTransition={true}
    onComplete={() => ({
      shouldRepeat: true,
      delay: 2,
      newInitialRemainingTime: 10,
      
    })}
    // onUpdate={() => console.log("onUpdate")}
  >
    {({ remainingTime,color }) =>(
      <Text style={{ color, fontSize: 30 }}>{remainingTime}</Text>)}
  </CountdownCircleTimer>
);

function alerta(){
  alert("alerta")
}




export default Timer;
