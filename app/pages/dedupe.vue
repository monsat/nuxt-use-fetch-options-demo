<script setup lang="ts">
/**
 * SSR
 * 'defer' の場合、 SSR では1度のみAPIリクエストが行われる。
 * 'cancel' の場合、 SSR ではそれぞれのAPIリクエストが行われるが、 transform は最後の1度のみ実行。
 * 
 * クライアントサイドナビゲーション
 * 'defer' の場合、1度のみ（execute を使用すると1つ目のみ描画された transform は1度のみ実行）
 * 'cancel' の場合、 それぞれのAPIリクエストが行われる（execute を使用すると3つ目のみ描画された transform は最後の1度のみ実行）
 *
 * execute を使用する際は、キャッシュのコントロールが必要（クライアントサイドナビゲーションで描画が行われないコンポーネントがある）
*/

const dedupe = 'defer'
</script>

<template>
  <div>
    <h1>Dedupe: '{{ dedupe }}' - users list</h1>
    <div>
      <DedupeA :dedupe />
      <hr>
      <DedupeA :dedupe />
      <hr>
      <DedupeB :dedupe />
    </div>
  </div>
</template>
