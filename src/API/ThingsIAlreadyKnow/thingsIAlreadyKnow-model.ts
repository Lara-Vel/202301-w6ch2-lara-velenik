export interface ThingsIAlredyKnow {
  id: string;
  things: string;
}

const things: ThingsIAlredyKnow[] = [];

export const findAll = () => things;

export const findById = (id: string) => things.find(thing => thing.id === id);

export const createThing = (newThing: ThingsIAlredyKnow) => {
  if (things.some(thing => thing.id === newThing.id)) {
    throw new Error('The things exits');
  }

  things.push(newThing);
};
