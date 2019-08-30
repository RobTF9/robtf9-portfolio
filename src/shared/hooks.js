import React, { useState, useEffect } from "react";

export function useDistance() {
  const [distance, setDistance] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDistance(window.pageYOffset);
    });
    return distance;
  }, []);
}
