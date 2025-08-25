import danger from "../../images/danger.svg";
import { IMGWrapper, ErrorIMG, ErrorTitle, ErrorWrapper, ErrorText, TextBreaker, Button } from "./styled";

const ErrorPage = () => (
  <ErrorWrapper>
    <IMGWrapper>
      <ErrorIMG src={danger} alt="errorImage" />
    </IMGWrapper>
    <ErrorTitle>
      Ooops! Something went wrong...
    </ErrorTitle>
    <ErrorText>
      Please check your network connection <TextBreaker />and try again
    </ErrorText>
    <Button href="/">
      Back to home page
    </Button>
  </ErrorWrapper>
);

export default ErrorPage;