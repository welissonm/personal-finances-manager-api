import User from '../models/users';

test('it should be jest config is ok', () => {
  const user = new User();
  user.name = 'Welisson Moura';
  expect(user.name).toEqual('Welisson Moura');
});
