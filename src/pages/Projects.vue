<script setup>

</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary" style = "position: absolute; top: 10px ; left: 10px">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ronan's page</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/home"> Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/calendar"> Calendar</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  <div class="wrapper">
  <h1>Projects </h1>
  </div>

</template>

<style scoped>

</style>