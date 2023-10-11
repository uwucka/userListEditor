<script setup>
import { useUserStore } from "@/stores/use-user-store";
const { getSelectedUser } = useUserStore();
</script>

<template>
  <div v-if="getSelectedUser() !== undefined">
    <form>
      <label>Id:</label><br />
      <input v-model="getSelectedUser().id" /><br />
      <label>Name:</label><br />
      <input v-model="getSelectedUser().name" /><br />
      <label>Age:</label><br />
      <input v-model="getSelectedUser().age" />
    </form>
  </div>
</template>
