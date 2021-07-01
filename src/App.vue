<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="logo">Running Calendar</div>
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <div class="social">Like</div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
$text-blue: #302ea7;
$bg-light: #f7f7fb;

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
  }

  h1 {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    color: $text-blue;
  }

  #app {
    height: 100%;
    position: relative;
    z-index: 10;

    &:after {
      content: '';
      width: 30rem;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      background: $bg-light;
      z-index: -1;
    }
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
  }

  .header {
    padding: 3rem 0;

    .container {
      display: flex;
      justify-content: space-between;
    }
  }

  #nav {
    a {
      padding: 0 1rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>