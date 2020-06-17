<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <div id="nav">
      <router-link to="/" class="text-dark" style="font-size:40px">
        <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
      </router-link>|
      <router-link to="/list" class="text-dark" style="font-size:40px">
        <font-awesome-icon :icon="['fas', 'list']"></font-awesome-icon>
      </router-link>|
      <router-link to="/settings" class="text-dark" style="font-size:40px">
        <font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>
      </router-link>
    </div>
  </div>
</template>
