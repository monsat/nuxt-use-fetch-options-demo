<script setup lang="ts">
import type {
  User,
} from '@/types/index'

const props = defineProps<{
  name: User['name']
}>()
</script>

<template>
  <div class="my-2 p-2 rounded-lg border border-green-400 bg-green-900">
    <div>
      📛 {{ name }}
    </div>
  </div>
</template>
