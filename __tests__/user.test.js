import User from '../src/user';
const user = new User();

test('User が DB 登録に必要な情報を持っている', () => {
    expect(user.hasRequiredInfo()).toBe(true);
});
