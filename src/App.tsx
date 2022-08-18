import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { toDoState } from "./atoms";
import DroppableBoard from "./Components/DroppableBoard";

export default function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = (result: DropResult) => {
    // const reorderedToDos = reorder(
    //   toDos,
    //   result.source.index,
    //   result.destination.index
    // );
    // setToDos(reorderedToDos as string[]);
  };

  // 1) Delete item on sourceIndex
  // 2) Put back the item on destinationIndex
  const reorder = (
    list: string[],
    sourceIndex: number,
    destinationIndex: number
  ) => {
    // 위치가 바뀌지 않으면
    if (!destinationIndex) return;

    const result = Array.from(list);
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);

    return result;
  };

  return (
    <Wrapper>
      <Boards>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(toDos).map((boardId) => (
            <DroppableBoard
              key={boardId}
              toDos={toDos[boardId]}
              boardId={boardId}
            />
          ))}
        </DragDropContext>
      </Boards>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;
