<script setup lang="ts">
/**
 * getCachedData handlerはキャッシュの使用をコントロール可能にするもの
 * immediate: false にせず、直接 fetch する
 */
const {
  userNames,
  status,
} = await useFetchCachedUserNames()
</script>

<template>
  <div>
    <h1>Cached users list</h1>
    <div>
      <div
        v-for="(name, index) in userNames"
        :key="index"
        class="my-2 p-2 rounded-lg border border-green-400 bg-green-900"
      >
        📛 {{ name }}
      </div>
    </div>
  </div>
</template>
