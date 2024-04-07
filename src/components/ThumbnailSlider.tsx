import { AnimatePresence } from "framer-motion";
import {
  Contents,
  MoveSlideBtns,
  MovieInfo,
  NextPageBtn,
  NowPlayingTitle,
  SliderOverlay,
} from "../styles/thumnailSliderStyle";
import { MovieBox, Slider } from "../styles/thumnailSliderStyle";
import { useState } from "react";
import { INowPlayingMovieProps } from "../interfaces/nowPlayingMvInterface";
import { makeThumbnailPath } from "../makeThumbnail";

const ThumbnailSlider = ({ nowPlayingMovies }: INowPlayingMovieProps) => {
  const [page, setPage] = useState(0);
  const [slideMovie, setSlideMovie] = useState(false);

  const offset = 5; // 보여줄 목록 개수

  const handleNextPage = () => {
    // 슬라이드 겹침 방지
    if (slideMovie) return;

    setSlideMovie(true);

    const totalNowPlayingMovies = nowPlayingMovies.length;
    const lastPage = Math.floor(totalNowPlayingMovies / offset) - 1;

    setPage((prevPage) => (prevPage === lastPage ? 0 : prevPage + 1));
  };

  const toggleSliding = () => setSlideMovie((prevLocation) => !prevLocation);

  const contentsVariants = {
    initial: {
      x: window.innerWidth + 40,
    },
    next: {
      x: 0,
    },
    exit: {
      x: -window.innerWidth - 40,
    },
  };

  const movieBoxVariants = {
    normal: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      y: -50,
      zIndex: 99,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
  };

  const movieInfoVariants = {
    hover: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
      },
    },
  };

  return (
    <SliderOverlay>
      <Slider>
        <NowPlayingTitle>현재 상영중인 영화</NowPlayingTitle>
        <MoveSlideBtns style={{ marginTop: "20rem" }}>
          <NextPageBtn onClick={handleNextPage}>next</NextPageBtn>
        </MoveSlideBtns>
        <AnimatePresence initial={false} onExitComplete={toggleSliding}>
          <Contents
            key={page}
            variants={contentsVariants}
            initial="initial"
            animate="next"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
          >
            {nowPlayingMovies
              .slice(offset * page, offset * page + offset)
              .map((movie) => (
                <MovieBox
                  key={movie.id}
                  variants={movieBoxVariants}
                  initial="normal"
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  $posterPath={makeThumbnailPath(movie.poster_path, "w500")}
                >
                  <MovieInfo variants={movieInfoVariants}>
                    <h4>{movie.title}</h4>
                  </MovieInfo>
                </MovieBox>
              ))}
          </Contents>
        </AnimatePresence>
      </Slider>
    </SliderOverlay>
  );
};

export default ThumbnailSlider;
