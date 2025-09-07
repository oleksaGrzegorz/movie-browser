import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  display: grid;
  place-items: center;
  background: rgba(150, 150, 150, 1);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity ${({ $fade }) => $fade}ms ease;
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
`;

export default function DelayedLoader({ active, minDuration = 500, fadeDuration = 300, text }) {
    const [mounted, setMounted] = useState(active);
    const [visible, setVisible] = useState(active);
    const [start, setStart] = useState(null);

    useEffect(() => {
        if (active) {
            setStart(Date.now());
            if (!mounted) setMounted(true);
            setVisible(true);
            return;
        }
        const elapsed = start ? Date.now() - start : 0;
        const hold = Math.max(0, minDuration - elapsed);
        const t1 = setTimeout(() => setVisible(false), hold);
        const t2 = setTimeout(() => setMounted(false), hold + fadeDuration);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [active]);

    if (!mounted) return null;
    return (
        <Backdrop $visible={visible} $fade={fadeDuration}>
            <Loader full text={text} />
        </Backdrop>
    );
}
