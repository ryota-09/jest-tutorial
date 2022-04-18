<script setup lang="ts">
import { useCountProvider } from "@/providers/useCountProvider"

const countUp = ():number => {
  return 1
}

</script>

<template>
  <h1>mock関数について</h1>
  <p>テスト対象のメソッドの中にさらに、メソッドがあるとき、</p>
  <p>それはテスト対象のメソッドではないので、その場合、mock関数を使う。</p>
  <p>ダミーのメソッドのような使い方。</p>
  <p>引用:ただ出力をテストするだけでなく、他のコードから間接的に呼び出された関数の振る舞いを見張ることができるので、モック関数は "スパイ"とも呼ばれます。</p>
  <a href="https://jestjs.io/ja/docs/mock-function-api">mock関数公式doc</a>
</template>

<style>
</style>
