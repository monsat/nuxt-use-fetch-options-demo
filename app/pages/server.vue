<script setup lang="ts">
/**
 * server オプションは初回リクエストにおいて server 側で fetch せず client のみで fetch するオプション
 * クライアントサイドのナビゲーション時は、通常通り fetch される
 */
const {
  user,
  isAdult,
  status,
  // fetchUser,
} = await useFetchUserServerFalse('1001')

const appUser = computed(() => {
  if (user.value?.data == null) {
    return null
  }
  return {
    ...user.value.data,
    isAdult: isAdult.value,
  }
})

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
    <div v-if="appUser">
      <AppUser :user="appUser" />
    </div>
  </div>
</template>
