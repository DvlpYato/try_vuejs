<template>
  <div class="row">
    <div class="col-12">
      <h1>Page1 {{ msg }}</h1>
      <img src="../assets/profiles.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "hey Vue",
    };
  },
};
</script>

<style></style>
