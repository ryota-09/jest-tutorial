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
    })
  })
});
// npm run test でテストを動かす。
//常時動かしたい時は npm run test:watch
