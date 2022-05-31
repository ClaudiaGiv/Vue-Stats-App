<template>
  <div id="app" class="mx-4 mt-0">
    <ul class="flex border-b">
      <li class="-mb-px mr-1">
        <router-link
          class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold"
          exact-active-class="bg-blue-700 text-white"
          to="/"
          >Requirment
        </router-link>
      </li>
      <li class="mr-1">
        <router-link
          class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold"
          exact-active-class="bg-blue-700 text-white"
          to="/solution"
          >Solution
        </router-link>
      </li>
    </ul>
    <div class="mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

figure {
  margin: 0;
}
</style>
