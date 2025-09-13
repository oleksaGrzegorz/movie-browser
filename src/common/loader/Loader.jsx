import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { GateWrap, GateInner, Spinner, FadeSlideIn, TypingIndicator } from "./styled";

export default function Loader({
    ready,
    delayMs = 1000,
    children,
    isTyping = false,
    showTypingIndicator = false
}) {
    const [waited, setWaited] = useState(false);
    const [show, setShow] = useState(false);
    const timeoutRef = useRef(null);
    const location = useLocation();

    const isPeopleTab = location.pathname.includes("/people");

    useEffect(() => {
        if (!ready) {
            setShow(false);
            setWaited(false);
        }
    }, [ready]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setWaited(true);
        }, delayMs);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [delayMs, ready]);

    useEffect(() => {
        if (ready && waited) {
            setShow(true);
        }
    }, [ready, waited]);

    if (!show) {
        return (
            <GateWrap>
                <GateInner>
                    <Spinner $bounce={isTyping} />
                </GateInner>
            </GateWrap>
        );
    }

    return <FadeSlideIn>{children}</FadeSlideIn>;
}