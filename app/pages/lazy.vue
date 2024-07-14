<script setup lang="ts">
/**
 * lazy オプションは Suspense によりデータ取得を待つことなく、コンポーネントを描画する
 * await は必要ない（使用しない）
 * SSR においては SEO に必要のない要素では server: false と組み合わせ使用する
 */
const {
  user,
  status,
  // fetchUser,
} = useLazyFetchUser('1003')

// await fetchUser()
// client or server
console.log(import.meta.client ? 'client' : 'server', !!user.value?.data)
// server は false, client は true になるが user の有無を判定する必要あり
</script>

<template>
  <div>
    <h1>lazy: true</h1>
    <FetchError :status />
    <FetchLoading :status />
    <div v-if="user">
      <AppUser :user="user.data" />
    </div>
  </div>
</template>
