<script setup lang="ts">
import Mount from "../components/Mount.vue"
import Counter from "../components/Counter.vue"
</script>

<template>
  <h1>Vue Test Utilsの使い方について</h1>
  <a href="https://test-utils.vuejs.org/guide/">公式doc</a>
  <p>紹介するメソッドごとにコンポーネント化しています。</p>
  <p>内部的にJestが使われているので、基本的にはJestの書き方と同じ。</p>
  <p>.vueファイルごとにテストをかく。</p>
  <a href="https://aimstogeek.hatenablog.com/entry/2020/09/14/080000">テストの項目の例</a>
  <p>参考サイト集</p>
  <a href="https://www.ragate.co.jp/blog/articles/10998">参考サイト1</a>&nbsp;
  <a href="https://www.ragate.co.jp/blog/articles/10228#h2-5">参考サイト2</a>&nbsp;
  <a href="https://www.codegrid.net/articles/2018-vue-testing-1/">参考サイト3</a>&nbsp;
  <a href="https://reffect.co.jp/vue/vue-jest-test">参考サイト4</a>&nbsp;
  <hr>
  <h3>shallowMountメソッド の使い方</h3>
  <Mount />
  <hr>
  <h3></h3>
  <Counter message="こんにちは"/>
</template>
