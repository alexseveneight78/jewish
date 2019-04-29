<template>
  <div>
    <h3>Изучение древнееврейского языка</h3>

    <global-keyboard></global-keyboard>
  </div>
</template>

<script>
  import Keyboard from './Keyboard.vue';
export default {
  name: 'app',
  components: {
    'global-keyboard': Keyboard
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  h3 {
    margin: 10px 0;
    position: fixed;
    width: 100%;
    text-align: center;
    border-bottom: 1px dashed blue;
  }
</style>
