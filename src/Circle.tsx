import styled from "styled-components";

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

function Circle({bgColor, borderColor}: CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? "white"} />
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
`;

export default Circle;