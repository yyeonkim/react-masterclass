import { useRecoilState } from "recoil";
import styled from "styled-components";

import { hourSelector, minuteState } from "./atoms";

export default function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <Flex>
      <Title>분 ↔ 시간 바꾸기</Title>
      <InputWrap>
        <Input
          type="number"
          value={minutes}
          placeholder="Minutes"
          onChange={onMinutesChange}
        />
        <Unit>분</Unit>
        <ArrowText>↔</ArrowText>

        <Input
          type="number"
          value={hours}
          placeholder="Hours"
          onChange={onHoursChange}
        />
        <Unit>시간</Unit>
      </InputWrap>
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

const InputWrap = styled.div``;

const Input = styled.input`
  margin-right: 1rem;
`;

const Unit = styled.span`
  font-size: 1.6rem;
`;

const ArrowText = styled.span`
  margin: 0 1rem;
`;
