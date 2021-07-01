<template>
  <div class="home">
    <div class="container">
      <Schedule/>
      <div class="results">
        <Results/>
      </div>
    </div>
  </div>
</template>

<script>
import Schedule from '@/components/Schedule'
import Results from '@/components/Results'

export default {
  name: 'Home',
  components: {
    Schedule,
    Results
  }
}
</script>

<style lang="scss">
$text-blue: #302ea7;

.home {
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
  }
} 
  .results {
    min-height: calc(100vh - 10rem);
    width: 30rem;
    padding: 3rem;
    border-radius: 3rem 3rem 0 0;
    background: $text-blue;
    color: #fff;
  }
</style>


