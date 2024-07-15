<script setup lang="ts">
/**
 * getCachedData handlerはキャッシュの使用をコントロール可能にするもの
 * immediate: false にする場合 execute を変更する必要がある
 */
 const {
  userNames,
  status,
  fetchUserNames,
} = useCachedUserNames()

await fetchUserNames()
</script>

<template>
  <div>
    <h1>Cache Forced users list</h1>
    <div>
      <AppUserName
        v-for="(name, index) in userNames"
        :key="index"
        :name
      />
    </div>
  </div>
</template>
