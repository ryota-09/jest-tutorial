export {};
import { mount } from "@vue/test-utils";
// テスト対象のコンポーネントをインポートする
// import ShallowMount from "../../components/ShallowMount.vue";

const ShallowMount = {
  template: "<div>ハロー</div>",
};

describe.only("components/ShallowMount.vueのテスト", () => {
  test("ハローの表示のテスト", () => {
    // vueファイルを読み込むイメージ
    const wrapper = mount(ShallowMount);
    expect(wrapper.text()).toBe("ハロー");
  });
});
