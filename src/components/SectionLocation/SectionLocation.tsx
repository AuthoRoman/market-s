"use client";

import React, { useCallback, useState } from "react";
import Map from "./Map";

export type StateLocation = "shelur" | "vertep" | "krasnobor" | "diur";

const SectionLocation = () => {
  const [navButtonsState, setNuvbuttonsState] =
    useState<StateLocation>("shelur");

  const toggleNavButtons = useCallback((stateActive: StateLocation) => {
    switch (stateActive) {
      case "shelur":
        setNuvbuttonsState("shelur");
        break;
      case "vertep":
        setNuvbuttonsState("vertep");
        break;
      case "krasnobor":
        setNuvbuttonsState("krasnobor");
        break;
      case "diur":
        setNuvbuttonsState("diur");
        break;
    }
  }, []);

  return (
    <div className="w-[1208px] m-auto flex flex-col gap-10 my-30">
      <span className="font-bold text-[36px]">Наши магазины</span>
      <div className="flex  gap-6 items-center">
        <button
          style={{
            background: navButtonsState == "shelur" ? "#70C05B" : "#F3F2F1",
            color: navButtonsState == "shelur" ? "white" : "black",
          }}
          onClick={() => toggleNavButtons("shelur")}
          className="  px-2 py-1 rounded"
        >
          п.Щельяюр
        </button>
        <button
          style={{
            background: navButtonsState == "vertep" ? "#70C05B" : "#F3F2F1 ",
            color: navButtonsState == "vertep" ? "white" : "black",
          }}
          onClick={() => toggleNavButtons("vertep")}
          className="bg-[#F3F2F1] px-2 py-1 rounded"
        >
          д.Вертеп
        </button>
        <button
          style={{
            background: navButtonsState == "krasnobor" ? "#70C05B" : "#F3F2F1 ",
            color: navButtonsState == "krasnobor" ? "white" : "black",
          }}
          onClick={() => toggleNavButtons("krasnobor")}
          className="bg-[#F3F2F1] px-2 py-1 rounded"
        >
          с.Краснобор
        </button>
        <button
          style={{
            background: navButtonsState == "diur" ? "#70C05B" : "#F3F2F1 ",
            color: navButtonsState == "diur" ? "white" : "black",
          }}
          onClick={() => toggleNavButtons("diur")}
          className="bg-[#F3F2F1] px-2 py-1 rounded"
        >
          {" "}
          д.Диюр
        </button>
      </div>
      <div>
        <Map stateLocation={navButtonsState} />
      </div>
    </div>
  );
};

export default SectionLocation;
