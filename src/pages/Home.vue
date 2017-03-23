<template>
  <div class="home">
    <h1 class="logo">GRA<span>VR</span></h1>
    <p class="label-section">SELECCIONA UNA OPCIÓN:</p>

    <flat-button class="option" label="ESCRIBIR UNA FUNCIÓN" link="write-function"></flat-button>
    <p class="help">Describe la función que deseas visualizar.</p>

    <flat-button class="option" label="VER FUNCIONES PREDEFINIDAS" link="predefined-functions"></flat-button>
    <p class="help">Visualiza gráficas populares.</p>
  </div>
</template>

<script>
import FlatButton from '../components/Button';

export default {
  name: 'home',
  components: {
    FlatButton,
  },
};
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-size: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.logo span {
  color: #0093fb;
  font-size: 1.25em;
  margin-left: -45px;
}

.label-section {
  font-size: 1.5em;
}

.option {
  width: 90%;
  margin: 20px auto 0;
  max-width: 500px;
}

.help {
  margin: 10px 0 15px 0;
}
</style>
