<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <Menu/>  
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: "app",
  components: {
    Menu
  }
}
</script>


<style lang="scss">
$text-blue: #343AA8;

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    color: $text-blue;
  }

  .header {
    border: 1px solid rgba(210, 210, 215, 0.2);
  }

  @media (min-width: 800px) {
    .container {
      max-width: 796px;
      margin: 0 auto;
    }
}
</style>