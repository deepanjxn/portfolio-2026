"use client";

import { createContext, useContext, useState, useMemo, useCallback, type ReactNode } from "react";
import { TabType } from "@/types";

interface NavigationState {
  activeTab: TabType;
  showIntro: boolean;
  setActiveTab: (tab: TabType) => void;
  setShowIntro: (show: boolean) => void;
  worksEntryCount: number;
  incrementWorksEntry: () => void;
}

const NavigationStateContext = createContext<NavigationState>({
  activeTab: "about",
  showIntro: true,
  setActiveTab: () => {},
  setShowIntro: () => {},
  worksEntryCount: 0,
  incrementWorksEntry: () => {},
});

export function NavigationStateProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [showIntro, setShowIntro] = useState(true);
  const [worksEntryCount, setWorksEntryCount] = useState(0);

  const incrementWorksEntry = useCallback(() => setWorksEntryCount((c) => c + 1), []);

  const value = useMemo(() => ({
    activeTab,
    showIntro,
    setActiveTab,
    setShowIntro,
    worksEntryCount,
    incrementWorksEntry,
  }), [activeTab, showIntro, worksEntryCount, incrementWorksEntry]);

  return (
    <NavigationStateContext.Provider value={value}>
      {children}
    </NavigationStateContext.Provider>
  );
}

export function useNavigationState() {
  return useContext(NavigationStateContext);
}
