<script setup lang="ts">
const props = defineProps<{
  status?: ReturnType<typeof useFetch>['status']
  error?: boolean
}>()

const isError = computed(() => props.error === true || props.status === 'error' || props.status == null)
</script>

<template>
  <div v-if="isError">
    Something wrong...
  </div>
</template>
