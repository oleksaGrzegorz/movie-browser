import { Link } from "react-router-dom";
import { PosterImage } from "../Poster";
import ProfilePlaceholder from "../../../images/profile.svg";
import { PersonTile as CardRoot, PosterBox, Body, Name, Subtitle } from "./styled";

export default function PersonCard({ id, name, profileUrl, subtitle, to = `/people/${id}` }) {
    return (
        <Link to={to} aria-label={`Open details of ${name}`}>
            <CardRoot>
                <PosterBox>
                    <PosterImage
                        src={profileUrl}
                        alt={name}
                        fallback={ProfilePlaceholder}
                        ratio="176/231"
                        size="small"
                    />
                </PosterBox>
                <Body>
                    <Name title={name}>{name}</Name>
                    {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
                </Body>
            </CardRoot>
        </Link>
    );
}
