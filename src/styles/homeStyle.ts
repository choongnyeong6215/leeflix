import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
`;

export const Thumbnail = styled.div<{ $backdropPath: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$backdropPath});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

export const Overview = styled.p`
  font-size: 2rem;
  width: 50%;
`;
