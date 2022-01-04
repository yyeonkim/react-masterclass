import styled from "styled-components";

interface CircleProps {
    bgColor: string;
}

function Circle({bgColor}: CircleProps) {
    return <Container bgColor={bgColor} />
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor}
`;

export default Circle;