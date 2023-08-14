export const useUser = () => useState('user', () => ({
  id: 3,
  name: 'Michael',
  profile: '...',
  loged: true,
  isFull: false
}));
