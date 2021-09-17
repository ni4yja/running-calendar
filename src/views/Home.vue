<template>
  <main class="home">
    <div class="container">
      <Calendar/>
      <div class="results">
        <Results/>
      </div>
    </div>
  </main>
</template>

<script>
import Calendar from '@/components/Calendar'
import Results from '@/components/Results'

export default {
  name: 'Home',
  components: {
    Calendar,
    Results
  }
}
</script>

<style lang="scss">
$text-blue: #343AA8;
$text-light: #EBEFF2;

.home {
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    padding: 0 15px;
  }
}

.results {
  box-sizing: border-box;
  margin-bottom: 3rem;
  padding: 24px;
  border-radius: 16px;
  background: $text-blue;
  color: $text-light;
}

@media (min-width: 800px) {
  .home {
    .container {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .results {
    width: 386px;
    margin-bottom: 0;
  }
}
</style>


