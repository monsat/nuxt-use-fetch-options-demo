<script setup lang="ts">
/**
 * immediate オプションはコンポーザブルを呼び出した段階では fetch をせず execute(refresh) により fetch するオプション
 * fetch をコントロールしたいときは指定する
 * コンポーネント側で明示的に fetch したい場合は、基本的に使用するのもあり
 */
const {
  user,
  status,
  fetchUser,
} = useUserImmediateFalse('1001')

await fetchUser()
// client or server
console.log(import.meta.client ? 'client' : 'server', !!user.value?.data)
// server, client とも true になる
</script>

<template>
  <div>
    <h1>immediate: false</h1>
    <FetchError :status />
    <FetchLoading :status />
    <div>
      <AppUser :user="user.data" />
    </div>
  </div>
</template>
