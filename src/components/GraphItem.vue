<template>
  <div class="graph">
    <div>
      <img src="../assets/graph.jpg" />
    </div>
    <span class="label-graph">Gráfica cartón de huevo</span>
    <flat-button class="submit" label="VISUALIZAR" link="view-graph"></flat-button>
  </div>
</template>

<script>
import FlatButton from '../components/Button';

export default {
  name: 'graphElement',
  components: {
    FlatButton,
  },
};
</script>

<style scoped>
.label-graph {
  font-size: 1.25em;
  margin-top: 5px;
}

.submit {
  margin-top: 25px;
}
</style>
