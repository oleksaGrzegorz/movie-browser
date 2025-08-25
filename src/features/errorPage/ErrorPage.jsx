import danger from "../../images/danger.svg";
import { ImageWrapper, ErrorImage, ErrorTitle, ErrorWrapper, ErrorText, TextBreaker, HomeLink } from "./styled";

const ErrorPage = () => (
  <ErrorWrapper>
    <ImageWrapper>
      <ErrorImage src={danger} alt="errorImage" />
    </ImageWrapper>
    <ErrorTitle>
      Ooops! Something went wrong...
    </ErrorTitle>
    <ErrorText>
      Please check your network connection <TextBreaker />and try again
    </ErrorText>
    <HomeLink to="/">
      Back to home page
    </HomeLink>
  </ErrorWrapper>
);

export default ErrorPage;