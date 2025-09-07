import { Poster } from "./styled";

export function PosterImage({
    src,
    alt,
    ratio = "2/3",
    fallback,
    size = "small",
}) {
    const isFallback = !src;
    return (
        <Poster $ratio={ratio} $isFallback={isFallback} $size={size}>
            <img src={isFallback ? fallback : src} alt={alt} />
        </Poster>
    );
}

export { Poster };
