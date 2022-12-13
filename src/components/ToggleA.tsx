import { usePreferencesActions } from '@stores/preferences.store';

export default function ToggleA() {
  const { toggleShowA } = usePreferencesActions();
  return (
    <button type='button' onClick={() => toggleShowA()}>
      Toggle A
    </button>
  );
}
