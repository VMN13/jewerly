"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";

type NoScrollContextType = {
  disableScroll: () => void;
  enableScroll: () => void;
};

const NoScrollContext = createContext<NoScrollContextType | null>(null);

export function NoScrollProvider({ children }: { children: ReactNode }) {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };

  return (
    <NoScrollContext.Provider value={{ disableScroll, enableScroll }}>
      {children}
    </NoScrollContext.Provider>
  );
}

export function useNoScroll() {
  const context = useContext(NoScrollContext);
  if (!context) {
    throw new Error("useNoScroll must be used within NoScrollProvider");
  }
  return context;
}
