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
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Flex>
  );
}

interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Flex = styled.div`
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 0.5rem;
  padding: 1rem;
  padding-top: 0;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) => props.isDraggingOver && "#219ebc"};
  min-height: 30rem;
  border-radius: 0.5rem;
  transition: background-color 0.1s ease;
`;

const Title = styled.div`
  margin: 2rem 0;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;
