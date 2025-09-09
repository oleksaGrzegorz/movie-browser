import { useEffect, useRef, useState } from "react";
import { GateWrap, GateInner, Spinner, FadeSlideIn } from "./styled";

export default function Loader({ ready, delayMs = 2000, children }) {
    const [waited, setWaited] = useState(false);
    const [show, setShow] = useState(false);
    const t = useRef(null);

    useEffect(() => {
        t.current = setTimeout(() => setWaited(true), delayMs);
        return () => clearTimeout(t.current);
    }, [delayMs]);

    useEffect(() => {
        if (ready && waited) setShow(true);
    }, [ready, waited]);

    if (!show) {
        return (
            <GateWrap>
                <GateInner>
                    <Spinner />
                </GateInner>
            </GateWrap>
        );
    }

    return <FadeSlideIn>{children}</FadeSlideIn>;
}
