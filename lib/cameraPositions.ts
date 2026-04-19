export const CAM = {
  DEFAULT: {
    position: [0, 22, 16] as [number, number, number],
    target:   [0, 0,  0]  as [number, number, number],
  },
  PROJECTS: {
    position: [-8, 4, 8]  as [number, number, number],
    target:   [-6, 0, 0]  as [number, number, number],
  },
  SKILLS: {
    position: [12, 7, 8]  as [number, number, number],
    target:   [16, 3, 0]  as [number, number, number],
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

export const ZONE_NUDGES = {
  PROJECTS: {
    position: [-4, 16, 13] as [number, number, number],
    target:   [-4,  0,  0] as [number, number, number],
  },
  SKILLS: {
    position: [8, 18, 14] as [number, number, number],
    target:   [8,  0,  0] as [number, number, number],
  },
  ABOUT: {
    position: [0, 16, 13] as [number, number, number],
    target:   [0,  0,  0] as [number, number, number],
  },
  CONTACT: {
    position: [4, 16, 13] as [number, number, number],
    target:   [4,  0,  0] as [number, number, number],
  },
} as const;
