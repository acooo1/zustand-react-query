import create from 'zustand';

type UserPreferences = {
  heightMin: number;
  heightMax: number;
  showA: boolean;
  timeframeStart: number;
  timeframeEnd: number;
  // TODO: check the correct action type from doc
  actions: {
    setHeightMin: (min: number) => void;
    setHeightMax: (max: number) => void;
    toggleShowA: () => void;
    setTimeframeStart: (start: number) => void;
    setTimeframeEnd: (end: number) => void;
  };
};

const usePreferencesStore = create<UserPreferences>(set => ({
  heightMin: 0,
  heightMax: 100,
  showA: true,
  timeframeStart: 0,
  timeframeEnd: 1000,
  actions: {
    setHeightMin: (min: number) => set(() => ({ heightMin: min })),
    setHeightMax: (max: number) => set(() => ({ heightMax: max })),
    toggleShowA: () => set(state => ({ showA: !state.showA })),
    setTimeframeStart: (start: number) => set(() => ({ timeframeStart: start })),
    setTimeframeEnd: (end: number) => set(() => ({ timeframeEnd: end })),
  },
}));

export const useHeightMin = () => usePreferencesStore(state => state.heightMin);
export const useHeightMax = () => usePreferencesStore(state => state.heightMax);
export const useShowA = () => usePreferencesStore(state => state.showA);
export const useTimeframeStart = () => usePreferencesStore(state => state.timeframeStart);
export const useTimeframeEnd = () => usePreferencesStore(state => state.timeframeEnd);

export const usePreferencesActions = () => usePreferencesStore(state => state.actions);
