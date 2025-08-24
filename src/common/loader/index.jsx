import spinner from "../../images/spinner.svg";
import { Container, Box, Spinner, Text } from "./styled";

export default function Loading({ full = false, text = "Loading..." }) {
    const content = (
        <Box>
            <Spinner src={spinner} alt="Loading" />
            <Text>{text}</Text>
        </Box>
    );
    return full ? <Container>{content}</Container> : content;
}
