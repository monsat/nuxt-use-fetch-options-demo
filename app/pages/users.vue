<script setup lang="ts">
const {
  users,
  adultUsers,
  status,
  fetchUsers,
} = useUsers()

await fetchUsers()
</script>

<template>
  <div>
    <h1>users list</h1>
    <div>
      <AppUser
        v-for="user in users"
        :key="user.id"
        :user="user"
        class="my-2"
      />
    </div>
    <h2>adult users</h2>
    <div>
      <AppUser
        v-for="user in adultUsers"
        :key="user.id"
        :user="user"
        class="my-2"
      />
    </div>
  </div>
</template>
