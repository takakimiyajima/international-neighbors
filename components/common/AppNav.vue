<template>
  <header class="header wrapper">
    <nuxt-link :to='`/`'>
      <h1 class="title">
        International family App
      </h1>
    </nuxt-link>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  padding: 20px 4% 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  z-index: 10;
}

.wrapper {
  max-width: 100%;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  color: #fff;
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  line-height: 1.4em;
  justify-content: center;
  letter-spacing: 1px;
}
</style>
