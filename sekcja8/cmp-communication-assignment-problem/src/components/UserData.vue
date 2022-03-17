<template>
  <section>
    <form action="">
      <input type="text" placeholder="Your name" v-model="enteredName" />
      <input type="text" placeholder="Your age" v-model="enteredAge" />
      <button>Set User Data</button>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
};
</script>