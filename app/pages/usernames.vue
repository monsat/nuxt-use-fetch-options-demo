<script setup lang="ts">
const {
  userNames,
  status,
  fetchUserNames,
} = useUserNames()

await fetchUserNames()
</script>

<template>
  <div>
    <h1>user name list</h1>
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
