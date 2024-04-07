import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderOverlay = styled.div`
  position: relative;
  width: 100%;
`;

export const Slider = styled.div`
  position: relative;
`;

export const Contents = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  position: absolute;
  width: 100%;
  top: -200px;
  padding: 60px;
`;

export const MovieBox = styled(motion.div)<{ $posterPath: string }>`
  background-color: transparent;
  background-image: url(${(props) => props.$posterPath});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 0.5rem;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const MovieInfo = styled(motion.div)`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.black.lighter};
  position: absolute;
  opacity: 0;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const MoveSlideBtns = styled.div`
  position: absolute;
`;

export const NextPageBtn = styled.button``;

export const PrevpageBtn = styled.button``;

export const NowPlayingTitle = styled.p`
  position: absolute;
  top: -300px;
  font-size: 2vw;
  padding: 60px;
  width: 100%;
`;
