<script setup lang="ts">
const {
  users,
  status,
  refreshUsers,
} = await useRefreshUsers()

const refresh = async () => {
  await refreshUsers({ dedupe: 'defer' })
}

</script>

<template>
  <div>
    <h1>refresh users list</h1>
    <div>
      <button @click="refresh">Refresh!</button>
    </div>
    <div>
      <AppUser
        v-for="user in users"
        :key="user.id"
        :user="user"
        class="my-2"
      />
    </div>
  </div>
</template>
