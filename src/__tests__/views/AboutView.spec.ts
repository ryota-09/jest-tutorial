export {};
import axios, { Axios } from "axios";
import * as useCountProvider from "../../providers/useCountProvider";

describe("AboutView.vueの単体テスト", () => {
  test("Implementation関数のサンプル", () => {
    // モック化
    const myMock = jest.fn();
    // 任意の戻り値を返すダミーの関数を作る。
    const dummyFunction = myMock.mockImplementation(() => {
      return "ダミーの戻り値を返す。";
    });
    // 省略もできる。dummyFunction = myMock(() => { return "ダミー" })
    // 関数なので()が必要。
    expect(dummyFunction()).toBe("ダミーの戻り値を返す。");
  });

  // test("countメソッドのテスト", () => {
  //   const expected = {
  //     count: 1,
  //   };
  //   const mockedIncrement = jest.spyOn(useCountProvider, "useCountProvider");
  //   // expect(useCountProvider.useCountProvider().increment).toHaveBeenCalled();
  //   expect(useCountProvider.useCountProvider().countState).toEqual(expected);
  // });

  // http://demo8969917.mockable.io/jest-mock
  // 外部ライブラリーをまるっとmockにする。jest.fn()でモック化された状態になる。
  // ここがビミョー。
  jest.mock("axios");
  test("axiosなどの外部のライブラリーを含むメソッドのテスト", async () => {
    // axiosがモック化されるはずだが。。。
    const mockedAxios = axios as jest.Mocked< typeof axios >
    const mockData = mockedAxios.get.mockResolvedValue({ name: "鈴木たろう" });
    const userList = [{ name: "鈴木たろう" }];

    await expect(mockData).resolves.toEqual(userList[0]);
  });
});
