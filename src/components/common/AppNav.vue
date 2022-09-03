<template>
  <header class="header wrapper">
    <NuxtLink to="/">
      <h1 class="title">International family App</h1>
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 20px 4% 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $background;
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
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  line-height: 1.4em;
  justify-content: center;
  letter-spacing: 1px;
}
</style>
