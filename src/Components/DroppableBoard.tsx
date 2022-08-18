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
    <Flex>
      <Title>{boardId}</Title>
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
    </Flex>
  );
}

const Flex = styled.div`
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 0.5rem;
`;

const Board = styled.div`
  padding: 1rem;
  padding-top: 0;
  /* background-color: ${(props) => props.theme.boardColor}; */
  min-height: 30rem;
  border-radius: 0.5rem;
`;

const Title = styled.div`
  margin: 2rem 0;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;
