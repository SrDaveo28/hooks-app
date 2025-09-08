import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from "./HooksApp";
import "./index.css";
import { FocusScreen } from "./useRef/FocusScreen";
// import { TrafficLight } from "./useState/TrafficLight";
// import { TrafficLightWithEffect } from "./useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./useEffect/TrafficLightWithHook";
// import { PokemonPage } from "./examples/PokemonPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect />  */}
    {/* <TrafficLightWithHook />  */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>
);
