import User from '../src/user';
import React from 'react'

test('User が DB 登録に必要な情報を持っている', () => {
    const user = new User('onojun', 26);
    expect(user.hasRequiredInfo()).toBeTruthy();
});

test('User が DB 登録に必要な情報を持っていない', () => {
    const user = new User();
    expect(user.hasRequiredInfo()).toBeFalsy();
});

test('UserがDBに登録できる', () => {
    const user = new User('ぴっける', 25);
    expect(user.register()).toBe(true);

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    fetch('http://localhost:8000/list.php', {method: 'GET', headers})
        .then((res) => {
            const result = res.json;
            expect(result.some(element => {
                return (element.name === user.name) && (element.age === user.age);
            })).toBe(true)
        })
});
