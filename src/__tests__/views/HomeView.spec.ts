// グローバルファイルとして認識させる必要がある。
export {};
//describe("ここにテスト名", () => { テストの処理 })
describe("HomeView.vueの単体テスト", () => {
  // test関数またはit関数が使える。
  test("num2に入る値のテスト", () => {
    const num1 = 1;
    const num2 = num1 + 4;
    // expect( 対象の変数、値のを確認したいもの ).toBe( 期待する値 );
    expect(num2).toBe(5);
  });

  describe("not関数のサンプル", () => {
    test("num1に入る値のテスト", () => {
      const num1 = 1;
      const num2 = num1 + 4;
      // 100じゃなかったらテストがPassする。
      expect(num2).not.toBe(100);
    });
  });

  describe("toContain関数のサンプル", () => {
    test("textに山田が含まれている。", () => {
      const text = "山田たろう";
      expect(text).toContain("山田");
    });

    test("arrayに2が含まれている。", () => {
      const array = [0, 1, 2, 3];
      expect(array).toContain(2);
    });
  });

  describe("toEqual関数のサンプル", () => {
    const object1 = {
      name: "山田たろう",
      age: 18,
    };
    const object2 = {
      name: "山田たろう",
      age: 18,
    };
    // オブジェクトの一致を確認するのはtoEqualを使う。全てのプロパティで===を確認している。
    test("toEqualの挙動", () => {
      expect(object1).toEqual(object2);
    });
    // test("toBeの挙動", () => {
    //   expect(object1).toBe(object2);
    // });
  });
});
// npm run test でテストを動かす。
//常時動かしたい時は npm run test:watch
