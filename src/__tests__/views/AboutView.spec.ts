export{};
describe("AboutView.vueの単体テスト", () => {
  test("Implementation関数のサンプル", () => {
    // モック化
    const myMock = jest.fn();
    // ダミーの関数を作る。
    const dummyFunction = myMock.mockImplementation(() => {
      return "ダミーの戻り値を返す。"
    });
    // 省略もできる。dummyFunction = myMock(() => { return "ダミー" })
    // 関数なので()が必要。
    expect(dummyFunction()).toBe("ダミーの戻り値を返す。")
  });
})
