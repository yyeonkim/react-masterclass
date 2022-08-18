import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

export default function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = (result: DropResult) => {
    const reorderedToDos = reorder(
      toDos,
      result.source.index,
      result.destination.index
    );

    setToDos(reorderedToDos as string[]);
  };

  // 1) Delete item on sourceIndex
  // 2) Put back the item on destinationIndex
  const reorder = (
    list: string[],
    sourceIndex: number,
    destinationIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);

    return result;
  };

  return (
    <Wrapper>
      <Boards>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </DragDropContext>
      </Boards>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 48rem;
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
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 0.5rem;
  min-height: 40rem;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
