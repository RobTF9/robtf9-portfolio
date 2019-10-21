import { useSpring, config } from "react-spring";

export const transitions = {
  quickSnap: `
    transition: all 0.222s;
    transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);
  `,

  mediumSnap: `
    transition: all 0.444s;
    transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);
  `,

  satanSnap: `
  transition: all 0.666s;
  transition-timing-function: cubic-bezier(0.060, 0.975, 0.195, 0.985);
`,
};

export const animations = {
  verticleSlide: (from, duration) =>
    useSpring({
      opacity: 1,
      transform: "translate3d(0, 0rem, 0)",
      from: { opacity: 0, transform: `translate3d(0, ${from}, 0)` },
      config: config.snap,
      delay: duration,
    }),
};
