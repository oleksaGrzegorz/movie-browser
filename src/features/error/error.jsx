import danger from "../../images/danger.svg";
import { IMGWrapper, ErrorIMG, ErrorTitle, ErrorWrapper, ErrorText, Button } from "./styled";

export default () => (
  <ErrorWrapper>
    <IMGWrapper>
      <ErrorIMG src={danger} alt="danger" />
    </IMGWrapper>
    <ErrorTitle>
      Ooops! Something went wrong...
    </ErrorTitle>
    <ErrorText>
      Please check your network connection <br /> and try again
    </ErrorText>
    <Button href="/">
      Back to home page
    </Button>
  </ErrorWrapper>
);