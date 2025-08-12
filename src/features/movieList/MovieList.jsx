import { useEffect, useState } from "react";
import { fetchGenres, fetchPopularMovies } from "./fetchMovieApi";

import {
  Container,
  Description,
  Genre,
  GenreButton,
  List,
  MainHeader,
  MovieCard,
  Poster,
  Title,
  Vote,
  VoteAverage,
  VoteInfo,
  Year,
  PaginationWrapper,
  PaginationButton,
  PageInfo,
  Page,
  ButtonParagraph,
  PosterPlaceholder,
  StyledVideoIcon,
} from "./styled";
import StarIcon from "./StarIcon";
import ArrowIcon from "./ArrowIcon";
import VideoIcon from "./video.svg";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w300";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [genresData, moviesData] = await Promise.all([
          fetchGenres(),
          fetchPopularMovies(currentPage),
        ]);

        const genresMap = {};
        genresData.forEach(({ id, name }) => {
          genresMap[id] = name;
        });

        setGenres(genresMap);
        setMovies(moviesData.movies);
        setTotalPages(
          moviesData.totalPages > 500 ? 500 : moviesData.totalPages
        );

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setTimeout(() => {
          setError(err.message);
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [currentPage]);

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <MainHeader>Popular Movies</MainHeader>
      <List>
        {movies.map(
          ({
            id,
            poster_path,
            title,
            release_date,
            genre_ids,
            vote_average,
            vote_count,
          }) => (
            <MovieCard key={id}>
              {poster_path ? (
                <Poster src={`${IMG_BASE_URL}${poster_path}`} alt={title} />
              ) : (
                <PosterPlaceholder>
                  <StyledVideoIcon src={VideoIcon} alt="No poster available" />
                </PosterPlaceholder>
              )}

              <Description>
                <Title>{title}</Title>
                <Year>
                  {release_date ? new Date(release_date).getFullYear() : "N/A"}
                </Year>

                <Genre>
                  {genre_ids.length
                    ? genre_ids.map((genreId) => (
                        <GenreButton key={genreId}>
                          {genres[genreId]}
                        </GenreButton>
                      ))
                    : "No genres"}
                </Genre>
              </Description>

              <Vote>
                <StarIcon />
                <VoteAverage>
                  {vote_average.toFixed(1).replace(".", ",")}
                </VoteAverage>{" "}
                <VoteInfo>{vote_count} votes</VoteInfo>
              </Vote>
            </MovieCard>
          )
        )}
      </List>
      <PaginationWrapper>
        <PaginationButton onClick={goToFirstPage} disabled={currentPage === 1}>
          <ArrowIcon direction="left" />{" "}
          <ButtonParagraph>First</ButtonParagraph>
        </PaginationButton>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <ArrowIcon direction="left" />{" "}
          <ButtonParagraph>Previous</ButtonParagraph>
        </PaginationButton>
        <PageInfo>
          Page <Page>{currentPage}</Page> of <Page>{totalPages}</Page>
        </PageInfo>
        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <ButtonParagraph>Next</ButtonParagraph>{" "}
          <ArrowIcon direction="right" />
        </PaginationButton>
        <PaginationButton
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
        >
          <ButtonParagraph>Last</ButtonParagraph>{" "}
          <ArrowIcon direction="right" />
        </PaginationButton>
      </PaginationWrapper>
    </Container>
  );
};

export default MovieList;
