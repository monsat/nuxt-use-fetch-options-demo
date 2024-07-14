<script setup lang="ts">
/**
 * server オプションは初回リクエストにおいて server 側で fetch せず client のみで fetch するオプション
 * クライアントサイドのナビゲーション時は、通常通り fetch される
 */
const {
  user,
  status,
  // fetchUser,
} = await useFetchUserServerFalse('1002')

// await fetchUser()
// client or server
console.log(import.meta.client ? 'client' : 'server', !!user.value?.data)
// server は false, client でも false になる（userの有無を判定する必要あり）
</script>

<template>
  <div>
    <h1>server: false</h1>
    <FetchError :status />
    <FetchLoading :status idle />
    <div v-if="user">
      <AppUser :user="user.data" />
    </div>
  </div>
</template>
