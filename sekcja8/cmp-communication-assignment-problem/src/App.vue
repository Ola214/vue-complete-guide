<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data></user-data>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "Max Schwarzmuller",
        age: 31,
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>