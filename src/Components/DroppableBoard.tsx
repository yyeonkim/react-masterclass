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
        <Board ref={provided.innerRef} {...provided.droppableProps}>
          {toDos.map((toDo, index) => (
            <DraggableCard key={toDo} toDo={toDo} index={index} />
          ))}
          {provided.placeholder}
        </Board>
      )}
    </Droppable>
  );
}

const Board = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 0.5rem;
  min-height: 40rem;
`;
