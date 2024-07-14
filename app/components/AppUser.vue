<script setup lang="ts">
import type {
  User,
  AppUser,
} from '@/types/index'

const props = defineProps<{
  user: User | AppUser
}>()

const isAdult = computed(() => props.user.isAdult ?? props.user.age >= 18)
</script>

<template>
  <div class="p-2 rounded-lg border border-gray-400 bg-gray-900 flex gap-4">
    <div>
      {{ user.id }}:
      {{ user.name }}
    </div>
    <div>
      {{ user.age }}
      {{ isAdult ? '✅' : '' }}
    </div>
  </div>
</template>
