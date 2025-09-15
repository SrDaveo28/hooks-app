import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from "./HooksApp";
import "./index.css";
// import { MemoHook } from "./memos/MemoHook";
// import { MemoCounter } from "./memos/MemoCounter";
// import { InstagromApp } from "./useOptimistic/InstagromApp";
// import { FocusScreen } from "./useRef/FocusScreen";
// import { TasksApp } from "./useReducer/TaskApp";
// import { ScrambleWords } from "./useReducer/ScrambleWords";
// import { TrafficLight } from "./useState/TrafficLight";
// import { TrafficLightWithEffect } from "./useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./useEffect/TrafficLightWithHook";
// import { PokemonPage } from "./examples/PokemonPage";
import { Toaster } from "sonner";
import { ClientInformation } from "./use-suspense/ClientInformation";
import { getUserAction } from "./use-suspense/api/get-user.action";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect />  */}
    {/* <TrafficLightWithHook />  */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl font-thin">Cargando...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>
  </StrictMode>
);
