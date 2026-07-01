"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { TabType } from "@/types";

interface NavigationState {
  activeTab: TabType;
  showIntro: boolean;
  setActiveTab: (tab: TabType) => void;
  setShowIntro: (show: boolean) => void;
}

const NavigationStateContext = createContext<NavigationState>({
  activeTab: "about",
  showIntro: true,
  setActiveTab: () => {},
  setShowIntro: () => {},
});

export function NavigationStateProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [showIntro, setShowIntro] = useState(true);

  return (
    <NavigationStateContext.Provider value={{ activeTab, showIntro, setActiveTab, setShowIntro }}>
      {children}
    </NavigationStateContext.Provider>
  );
}

export function useNavigationState() {
  return useContext(NavigationStateContext);
}
