<template>
  <div class="button-wrapper">
    <template v-if="link === ''">
      <button class="button">{{ label }}</button>
    </template>
    <template v-else>
      <router-link v-bind:to="link" class="button">{{ label }}</router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'button',
  props: {
    label: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.button-wrapper {
  width: 100%;
}

.button,
a {
  display: block;
  font-family: inherit;
  background: none;
  font-size: 1.25em;
  width: 100%;
  margin: 0;
  outline: none;
  cursor: pointer;
  border: 2px solid #0093fb;
  color: #0093fb;
  padding: 15px 0;
  border-radius: 100px;
  text-decoration: none;
  box-sizing: border-box;
}
</style>
