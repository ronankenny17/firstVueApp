<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You Did it ">

      </HelloWorld>
    </div>
  </header>
    <main>
      <TheWelcome/>
    </main>
</template>

<style scoped>

</style>