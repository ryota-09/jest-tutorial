export{};
import axios from "axios";

describe("AboutView.vueの単体テスト", () => {
  test("Implementation関数のサンプル", () => {
    // モック化
    const myMock = jest.fn();
    // 任意の戻り値を返すダミーの関数を作る。
    const dummyFunction = myMock.mockImplementation(() => {
      return "ダミーの戻り値を返す。"
    });
    // 省略もできる。dummyFunction = myMock(() => { return "ダミー" })
    // 関数なので()が必要。
    expect(dummyFunction()).toBe("ダミーの戻り値を返す。")
  });

  // http://demo8969917.mockable.io/jest-mock
  // 外部ライブラリーをまるっとmockにする。jest.fn()でモック化された状態になる。
  // ここがビミョー。
  jest.mock("axios")
  test("axiosなどの外部のライブラリーを含むメソッドのテスト", async () => {
    // axiosがモック化されるはずだが。。。
    const asyncMock = jest.fn();
    const expectData = asyncMock.mockResolvedValue({ name: "鈴木たろう" });
    const userList = [{ name: "鈴木たろう" }];

    await expect(expectData()).resolves.toEqual(userList[0]);
  });
})
