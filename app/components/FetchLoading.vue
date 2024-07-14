<script setup lang="ts">
const props = defineProps<{
  status: ReturnType<typeof useFetch>['status']
  idle?: boolean
}>()

const loading = computed(() => props.status === 'pending' || (props.idle && props.status === 'idle'))
</script>

<template>
  <div v-if="loading">
    Loading...
  </div>
</template>
