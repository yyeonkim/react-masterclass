import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import DraggableCard from "./DraggableCard";

interface IDroppableBoardProps {
  toDos: string[];
  boardId: string;
}

export default function DroppableBoard({
  toDos,
  boardId,
}: IDroppableBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <>
          <Board ref={provided.innerRef} {...provided.droppableProps}>
            <Title>{boardId}</Title>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {provided.placeholder}
          </Board>
        </>
      )}
    </Droppable>
  );
}

const Board = styled.div`
  padding: 1rem;
  padding-top: 0;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 0.5rem;
  min-height: 30rem;
`;

const Title = styled.div`
  margin: 2rem 0;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;
