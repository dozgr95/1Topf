<template>
  <div id="app">
    <div id="nav">
      Willkommen zu 1Topf - einkaufen, kochen und essen <br><br>
      <router-link to="/start">Hilf mir Einkaufen (Die Ernährung beginnt beim Einkaufen!)
        </router-link> <br> <br>
      <router-link to="/cooking">Hilf mir kochen (Ich stehe in der Küche)</router-link> <br> <br>
       <router-link to="/home">Ich will mehr wissen über 1Topf wissen</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
