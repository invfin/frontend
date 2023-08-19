export const useUser = () => useState('user', () => ({
  id: 3,
  name: 'Michael',
  profile: '...',
  loged: true,
  hasFavs: false,
  isFull: false
}));

export const useVisits = () => useState('visits', () => []);
