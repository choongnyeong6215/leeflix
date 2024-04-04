import { useQuery } from "react-query";
import { getNowPlayingMovies } from "../api";
import { INowPlayingMovies } from "../interfaces/nowPlayingMvInterface";
import { Thumbnail, Overview, Title, Wrapper } from "../styles/homeStyle";
import { ClipLoader } from "react-spinners";
import { makeThumbnailPath } from "../makeThumbnail";

const Home = () => {
  // 현재 상영중인 영화
  const { data, isLoading } = useQuery<INowPlayingMovies>({
    queryKey: ["nowPlayingMovie"],
    queryFn: getNowPlayingMovies,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <ClipLoader color="#E50915" loading={isLoading} size={150} />
      ) : (
        <>
          <Thumbnail
            $backdropPath={makeThumbnailPath(
              data?.results[0].backdrop_path || ""
            )}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Thumbnail>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
