import noresult from "../../images/noresult.svg";
import { IMGWrapper, NoResultIMG, NoResultText } from "./styled";

export default () => (
    <div>
        <NoResultText>
            Sorry, there are no results for{" "}
            <span>“{ }”</span>
        </NoResultText>
        <IMGWrapper>
            <NoResultIMG src={noresult} alt="noresult" />
        </IMGWrapper>
    </div>
);