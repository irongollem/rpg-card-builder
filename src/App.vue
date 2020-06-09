<template>
  <div id="app">
    <div id="nav" class="noprint">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Bolton', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/paper.jpg");
  background-repeat: repeat;
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

@font-face {
  font-family: "Bolton";
  src: url("assets/fonts/Bolton.ttf") format("ttf");
}

@font-face {
  font-family: "JOURNAL";
  src: url("assets/fonts/JOURNAL.TTF") format("ttf");
}

@media print { 
  @page {
    size: auto;   /* auto is the initial value */
    margin: 0;  /* this affects the margin in the printer settings */
  }
  .noprint { 
    display: none;
  } 
}
</style>
