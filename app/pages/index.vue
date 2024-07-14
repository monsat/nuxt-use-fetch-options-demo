<script setup lang="ts">
console.log('index page')
</script>

<template>
  <div>
    <h1>index</h1>
    <ul class="">
      <li>
        <NuxtLink to="/immediate">page: immediate false</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/server">page: server false</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lazy">page: lazy true</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/usernames">page: transform</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/username/1001">page: username: 1001</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users">page: users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cache">page: cached usernames</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cache_forced">page: force cached usernames</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dedupe">page: dedupe 'defer'</NuxtLink>
      </li>
    </ul>
  </div>
</template>
