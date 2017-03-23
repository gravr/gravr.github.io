<template>
  <div class="write-function">
    <p class="label-section">ESCRIBE UNA FUNCIÓN:</p>
    <input class="text-field" type="text" name="function" />
    <flat-button class="submit" label="ESCRIBIR UNA FUNCIÓN" link="view-graph"></flat-button>
  </div>
</template>

<script>
import FlatButton from '../components/Button';

export default {
  name: 'writeFunction',
  components: {
    FlatButton,
  },
};
</script>

<style scoped>
.write-function {
  align-items: flex-start;
  justify-content: flex-start;
}

.label-section {
  font-size: 1.5em;
  text-align: left;
}

.text-field {
  font-size: 3em;
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid;
  outline: none;
  color: #2c3e50;
  margin-top: 25px;
}

.submit {
  margin-top: 50px;
}
</style>
