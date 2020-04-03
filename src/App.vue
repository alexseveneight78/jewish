<template>
  <div>
    <app-menu></app-menu>
    <keyboard></keyboard>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./menu/Menu";

export default {
  components: {
    appMenu: Menu
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
h3 {
  margin: 10px 0;
  position: fixed;
  width: 100%;
  text-align: center;
  border-bottom: 1px dashed blue;
}
#keyboard {
  position: absolute;
  right: 10px;
  top: 5px;
  outline: 1px dashed #ccc;
  width: auto;
}
#keyboard span {
  cursor: pointer;
  display: block;
  padding: 3px 0;
  text-align: center;
  transition: all ease 1s;
}
#keyboard span:hover {
  background-color: #6697cc;
}
.abc {
  font-size: 35px;
  font-weight: bold;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  background-color: #e6e6e6;
  opacity: 0.7;
}
.displayed + div {
  display: none;
}
.displayed + div:before {
  content: "&#8593;";
}
.abc div {
  padding: 5px;
  width: 23px;
  height: 40px;
  cursor: pointer;
  box-shadow: 1px 1px 10px white;
  text-align: center;
  transition: all linear 0.5s;
  border-radius: 5px;
}
.abc div:hover {
  background-color: #808080;
  color: white;
}
p {
  border: 1px solid black;
  height: 25px;
  font-size: 66px;
}
</style>
