<template>
  <div class="Page">
    <h1>test text</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Pages",
  props: {
    msg: String,
  },
};
</script>

<style></style>
