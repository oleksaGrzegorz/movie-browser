import noresult from "../../images/noresult.svg";
import { IMGWrapper, NoResultIMG, NoResultText } from "./styled";

export default function NoResult({ query }) {
  return (
    <div>
      <NoResultText>
        Sorry, there are no results for <span>“{query}”</span>
      </NoResultText>
      <IMGWrapper>
        <NoResultIMG src={noresult} alt="noresult" />
      </IMGWrapper>
    </div>
  );
}