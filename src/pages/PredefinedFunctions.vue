<template>
  <div class="predefined-functions">
    <p class="label-section">SELECCIONA UNA GRÁFICA:</p>
    <ul>
      <li v-for="n in 10">
        <graph-item />
      </li>
    </ul>
  </div>
</template>

<script scoped>
import FlatButton from '../components/Button';
import GraphItem from '../components/GraphItem';

export default {
  name: 'predefinedFunctions',
  components: {
    FlatButton,
    GraphItem,
  },
};
</script>

<style scoped>
.predefined-functions {
  align-items: flex-start;
  width: 100%;
}

.label-section {
  font-size: 1.5em;
  margin-left: 15px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  overflow-x: auto;
}

li {
  display: flex;
  flex-direction: row;
  width: 250px;
  padding: 0 20px;
}
</style>
