<template>
  <div>
    <nav>
      <ol>
        <router-link tag="li" to="/alphabet">
          <a>Алфавит</a>
        </router-link>
        <router-link tag="li" to="/lesson1">
          <a>Lesson 1</a>
        </router-link>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  color: green;
  background-color: rgba(0, 0, 0, 0.1);
  width: 150px;
  display: flex;
  flex-direction: column;
}
</style>
