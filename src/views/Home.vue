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
$text-blue: #302ea7;

.home {
  .container {
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    margin-top: 4rem;
    padding: 0 15px;
  }
} 
  .results {
    padding: 3rem;
    border-radius: 3rem 3rem 0 0;
    background: $text-blue;
    color: #fff;
  }
</style>


