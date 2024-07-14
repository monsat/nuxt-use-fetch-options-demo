<script setup lang="ts">
const props = defineProps<{
  dedupe: 'cancel' | 'defer'
}>()

const {
  userNames,
  status,
  fetchUserNames,
} = await useDedupeUserNames(props.dedupe)
</script>

<template>
  <div>
    <h1>dedupe: a</h1>
    <div>
      <AppUserName
        v-for="(name, index) in userNames"
        :key="index"
        :name
      />
    </div>
  </div>
</template>
