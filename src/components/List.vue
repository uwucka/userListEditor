<script setup>
import { useUserStore } from "@/stores/use-user-store";
const { users, setSelectedUser } = useUserStore();
</script>

<template>
  <div
    class="list"
    v-for="user of users"
    :key="user.id"
    @click="setSelectedUser(user.id)"
  >
    <p>{{ user.id }}</p>
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  width: 300px;
  border-bottom: 1px solid #1d1d1d;
  cursor: pointer;
}

.list:hover {
  background: #e9e9e9;
}
</style>
