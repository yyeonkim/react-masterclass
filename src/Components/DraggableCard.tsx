import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  return (
    <Draggable draggableId={toDo} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div<{ isDragging: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${(props) =>
    props.isDragging ? "#ffb703" : props.theme.cardColor};
  border-radius: 0.5rem;
  padding: ${(props) => (props.isDragging ? "4rem 2rem" : "2rem 2rem")};
  box-shadow: ${(props) =>
    props.isDragging
      ? "1.7px 1.6px 3.3px rgba(0, 0, 0, 0.04), 4.3px 4.2px 8.3px rgba(0, 0, 0, 0.058), 8.9px 8.5px 17px rgba(0, 0, 0, 0.072), 18.3px 17.5px 35px rgba(0, 0, 0, 0.09), 50px 48px 96px rgba(0, 0, 0, 0.13) "
      : 0};

  transition: all 0.1s ease;
  transition: padding 2s ease-in;
`;

export default React.memo(DraggableCard);
