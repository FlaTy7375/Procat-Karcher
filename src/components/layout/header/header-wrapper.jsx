import React, { useEffect, useState } from "react";
import { StyledWrapper } from "./style";
import Nav from "../nav/nav";

export default function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledWrapper $scrolled={isScrolled}>
      <Nav />
    </StyledWrapper>
  );
}
