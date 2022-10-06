import { selector } from 'recoil';
import { count } from '../atoms/countAtom';
export const countSelector = selector({
  key: 'countSelector',
  get: ({ get }) => get(count),
});
