/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-30 15:16:57
 * @LastEditTime: 2021-11-30 15:29:09
 * @LastEditors: rodchen
 */
test('test common matcher', ()=> {
  expect(2 + 2).toBe(4)
})

test('test true or false', ()=> {
  expect(1).toBeTruthy();
})

test('test number', ()=> {
  expect(1).toBeGreaterThan(0)
})

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});