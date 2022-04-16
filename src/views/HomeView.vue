<script setup lang="ts">

</script>

<template>
  <h1>\ Jest Tutorial ! /</h1>
  <h2>~ Vite, Vue3, TypeScript ~</h2>
  <br />
  <hr>
  <h3>そもそもテストって？</h3>
  <p>・総合テスト</p>
  <p>・結合テスト</p>
  <p>・単体テスト</p>
  <p> <b>単体テスト</b>でJestを利用する</p>
  <a href="https://pm-rasinban.com/ut-it-st">引用サイト</a>
  <hr>
  <h3>テストの必要性</h3>
  <p>開発中の簡易テストはconsole.logで行っている。</p>
  <p>しかし、この方法では問題がある。</p>
  <p>コードの変更を加えた時、不具合がないか確認するために行うリグレッションテストができない。</p>
  <a href="https://hnavi.co.jp/knowledge/blog/regression-test/">引用サイト</a>
  <p></p>
  <hr>
  <h3>Vueの単体テスト</h3>
  <p><b>・scriptタグのメソッドのテスト</b></p>
  <p>基本的に全てのメソッドに関するテスト。ここでJestを使う。</p>
  <p><b>・templateタグの表示のテスト</b></p>
  <p>全ての表示に関するテスト。ここでVue公式のテストフレームワークであるVue Test Utilsを使う。</p>
  <a href="https://jestjs.io/ja/">Jest公式doc</a> &nbsp;
  <a href="https://v1.test-utils.vuejs.org/guides/#getting-started">VueTestUtils公式doc</a>
  <hr>
  <h3>Jestの仕組み</h3>
  <p>srcフォルダ直下の<b>「__tests__」</b>フォルダ(アンダーバー2つ)の中の</p>
  <p><b>「◯◯.spec.ts」</b>というファイルの中をテストファイルと認識している。</p>
  <P>テストファイルは.vueファイルではなく、全て<b>tsファイル</b>ということに注意。</P>
  <br>
</template>
