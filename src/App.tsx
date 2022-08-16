import { useRecoilState, useRecoilValue } from "recoil";

import { hourSelector, minuteState } from "./atoms";

export default function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);

  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <>
      <h1>분 ↔ 시간 바꾸기</h1>
      <input
        type="number"
        value={minutes}
        placeholder="Minutes"
        onChange={onMinutesChange}
      />
      <input type="number" value={hours} placeholder="Hours" />
    </>
  );
}
