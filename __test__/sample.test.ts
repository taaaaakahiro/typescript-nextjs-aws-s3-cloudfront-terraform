import { Test } from "./sample";

describe("Test class のテスト", () => {
  const testClass = new Test("エンジニア", 82);

  test("生成されたインスタンスは Test クラスのものである", () => {
    expect(testClass).toBeInstanceOf(Test);
  });

  test("年齢は 82 歳です", () => {
    expect(testClass.age).toBe(82);
  });
});
// yran test を実行してみてください !