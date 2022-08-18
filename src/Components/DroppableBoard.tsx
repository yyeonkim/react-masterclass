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
          <Area ref={provided.innerRef} {...provided.droppableProps}>
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

const Flex = styled.div`
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 0.5rem;
  padding: 1rem;
  padding-top: 0;
`;

const Area = styled.div`
  background-color: #219ebc;
  min-height: 30rem;
  border-radius: 0.5rem;
`;

const Title = styled.div`
  margin: 2rem 0;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;
