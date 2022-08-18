import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { toDoState } from "./atoms";
import DroppableBoard from "./Components/DroppableBoard";

export default function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    // Same index
    if (!destination) return;

    // Move in the same board
    if (destination.droppableId === source.droppableId) {
      const boardCopy = [...toDos[source.droppableId]];
      const [removed] = boardCopy.splice(source.index, 1);

      boardCopy.splice(destination.index, 0, removed);
      setToDos({ ...toDos, [source.droppableId]: boardCopy });
    } else {
      // Move across boards
      const sourceBoard = [...toDos[source.droppableId]];
      const destinationBoard = [...toDos[destination.droppableId]];

      const [removed] = sourceBoard.splice(source.index, 1);
      destinationBoard.splice(destination.index, 0, removed);

      setToDos({
        ...toDos,
        [source.droppableId]: sourceBoard,
        [destination.droppableId]: destinationBoard,
      });
    }
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
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
`;

const Boards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
