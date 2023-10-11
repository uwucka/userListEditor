import { defineStore } from "pinia";

export const useUserStore = defineStore("users", {
  state: () => {
    return {
      users: [
        {
          id: 1,
          name: "John",
          age: 20,
          isSelected: false,
        },
        {
          id: 2,
          name: "Smith",
          age: 38,
          isSelected: false,
        },
        {
          id: 3,
          name: "Bob",
          age: 29,
          isSelected: false,
        },
        {
          id: 4,
          name: "Leslie",
          age: 45,
          isSelected: false,
        },
      ],
    };
  },
  actions: {
    getSelectedUser() {
      return this.users.find((user) => user.isSelected);
    },
    setSelectedUser(id) {
      this.users.map((user) => {
        if (user.id === id) {
          user.isSelected = true;
          return;
        }
        user.isSelected = false;
      });
    },
  },
});
