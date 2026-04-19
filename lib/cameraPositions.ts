export const CAM = {
  DEFAULT: {
    position: [0, 18, 12] as [number, number, number],
    target:   [0, 0,  0]  as [number, number, number],
  },
  PROJECTS: {
    position: [-8, 4, 8]  as [number, number, number],
    target:   [-6, 0, 0]  as [number, number, number],
  },
  SKILLS: {
    position: [10, 6, 6]  as [number, number, number],
    target:   [6,  0, 0]  as [number, number, number],
  },
  ABOUT: {
    position: [0, 3, 10]  as [number, number, number],
    target:   [0, 0,  0]  as [number, number, number],
  },
  CONTACT: {
    position: [12, 5, 4]  as [number, number, number],
    target:   [8,  0, 2]  as [number, number, number],
  },
} as const;

export type ZoneName = keyof typeof CAM;
