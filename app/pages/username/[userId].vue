<script setup lang="ts">
const route = useRoute()
const userId = computed(() => useRoute().params.userId)
const {
  username,
  status,
  fetchUserName,
} = useUserNameById(userId)

useIntervalFn(async () => {
  await navigateTo({
    params: {
      userId: userId.value === '1003' ? '1001' : '1003'
    }
  })
}, 3000)

await fetchUserName()
</script>

<template>
  <div>
    <h1>user name: {{ userId }}</h1>
    <div>
      <div
        class="my-2 p-2 rounded-lg border border-green-400 bg-green-900"
      >
        📛 {{ username }}
      </div>
    </div>
  </div>
</template>
