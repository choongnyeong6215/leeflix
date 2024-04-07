import { useQuery } from "react-query";
import { getNowPlayingMovies } from "../api";
import { INowPlayingMovies } from "../interfaces/nowPlayingMvInterface";
import { Thumbnail, Overview, Title, Wrapper } from "../styles/homeStyle";
import { ClipLoader } from "react-spinners";
import { makeThumbnailPath } from "../makeThumbnail";
import ThumbnailSlider from "../components/ThumbnailSlider";

const Home = () => {
  // 현재 상영중인 영화
  const { data, isLoading } = useQuery<INowPlayingMovies>({
    queryKey: ["nowPlayingMovie"],
    queryFn: getNowPlayingMovies,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <ClipLoader color="#E50915" loading={true} size={200} />
        </div>
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
          <ThumbnailSlider nowPlayingMovies={data?.results as []} />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
