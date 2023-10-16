<script setup>
import { useUserStore } from "@/stores/use-user-store";
const store = useUserStore();
</script>

<template>
  <div>
    <form>
      <label>Id:</label><br />
      <input v-model="store.getSelectedUser.id" /><br />
      <label>Name:</label><br />
      <input v-model="store.getSelectedUser.name" /><br />
      <label>Age:</label><br />
      <input v-model="store.getSelectedUser.age" />
    </form>
  </div>
</template>
