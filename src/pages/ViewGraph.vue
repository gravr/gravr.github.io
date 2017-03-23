<template>
  <div class="view-graph">
    <flat-button class="back" label="REGRESAR" link="/"></flat-button>
    <img src="../assets/graph.jpg" class="preview" />
    <img src="../assets/vr-icon.png" class="vr-icon" />
  </div>
</template>

<script>
import FlatButton from '../components/Button';

export default {
  name: 'viewGraph',
  components: {
    FlatButton,
  },
};
</script>

<style scoped>
.view-graph {
  position: relative;
}

.back {
  font-size: 0.85em;
  width: 150px;
  position: absolute;
  top: 15px;
  left: 0;
}

.preview {
  height: 200px;
}

.vr-icon {
  position: absolute;
  opacity: 0.15;
  top: 0;
  right: 0;
  height: 75px;
}
</style>
