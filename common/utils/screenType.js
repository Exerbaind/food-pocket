export const screenType = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth > 1024) {
      return "desktop";
    }

    if (window.innerWidth <= 1024 && window.innerWidth > 500) {
      return "tablet";
    }

    if (window.innerWidth < 500) {
      return "mobile";
    }

    return null;
  }

  return null;
};
