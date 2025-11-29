import { useEffect } from "react";

const SnapScroll = ({ sectionIds }) => {
  useEffect(() => {
    const sections = sectionIds.map(id => document.getElementById(id));
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;
      isScrolling = true;

      const currentScroll = window.scrollY;
      const direction = e.deltaY > 0 ? "down" : "up";

      // find closest section
      const currentIndex = sections.findIndex(sec =>
        currentScroll >= sec.offsetTop - 10 &&
        currentScroll < sec.offsetTop + sec.offsetHeight
      );

      let nextIndex = currentIndex;

      if (direction === "down" && currentIndex < sections.length - 1) {
        nextIndex = currentIndex + 1;
      }
      if (direction === "up" && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      window.scrollTo({
        top: sections[nextIndex].offsetTop,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling = false;
      }, 800); // how long to lock scroll
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [sectionIds]);

  return null;
};

export default SnapScroll;
