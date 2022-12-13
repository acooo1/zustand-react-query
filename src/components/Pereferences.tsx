import {
  useHeightMin,
  useHeightMax,
  useShowA,
  useTimeframeStart,
  useTimeframeEnd,
} from '@stores/preferences.store';

export default function Preferences() {
  const heightMin = useHeightMin();
  const heightMax = useHeightMax();
  const showA = useShowA();
  const timeframeStart = useTimeframeStart();
  const timeframeEnd = useTimeframeEnd();

  return (
    <section>
      <h3>User preferences</h3>
      <p>Height min: {heightMin}</p>
      <p>Height max: {heightMax}</p>
      <p>Show A: {`${showA}`}</p>
      <p>Timeframe start: {timeframeStart}</p>
      <p>Timeframe end: {timeframeEnd}</p>
    </section>
  );
}
