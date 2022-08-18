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
  );
}

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export default React.memo(DraggableCard);
