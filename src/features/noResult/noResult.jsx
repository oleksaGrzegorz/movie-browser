import noresult from "../../images/noresult.svg";
import { NoResultContainer, NoResultIMG } from "./styled";

export default function NoResult({ query }) {
  return (
    <NoResultContainer>
      <NoResultIMG src={noresult} alt="No results found" />
    </NoResultContainer>
  );
}