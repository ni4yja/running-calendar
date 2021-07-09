<template>
  <div class="results-list">
    <h2 class="results-list--title">Don't wait until a perfect Monday, start running today! Pick a date, to get your training plan ⬇️</h2>
    <div v-if="this.$store.state.dateSelected" class="results-tabs">
      <ul class="nav">
          <li class="nav-item">
            <a href="#" 
            class="nav-link"
            :class="{'active': current_step >= 1}"
            @click.prevent="goToStep(1)"
          >Week One</a>
          </li>
          <li class="nav-item">
            <a href="#" 
            class="nav-link"
            :class="{'active': current_step >= 2}"
            @click.prevent="goToStep(2)"
          >Week Two</a>
          </li>
          <li class="nav-item">
            <a href="#" 
            class="nav-link"
            :class="{'active': current_step >= 3}"
            @click.prevent="goToStep(3)"
            >Week Three</a>
          </li>
          <li class="nav-item">
            <a href="#" 
            class="nav-link"
            :class="{'active': current_step >= 4}"
            @click.prevent="goToStep(4)"
            >Week Four</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-item" v-show="current_step == 1">
            <p>
              <span>{{ this.$store.state.day1.time }}</span>
              <span>{{ this.$store.state.day1.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day2.time }}</span>
              <span>{{ this.$store.state.day2.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day3.time }}</span>
              <span>{{ this.$store.state.day3.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day4.time }}</span>
              <span>{{ this.$store.state.day4.distance }}</span>
            </p>
          </div>
          <div class="tab-item" v-show="current_step == 2">
            <p>
              <span>{{ this.$store.state.day5.time }}</span>
              <span>{{ this.$store.state.day5.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day6.time }}</span>
              <span>{{ this.$store.state.day6.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day7.time }}</span>
              <span>{{ this.$store.state.day7.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day8.time }}</span>
              <span>{{ this.$store.state.day8.distance }}</span>
            </p>
          </div>
          <div class="tab-item" v-show="current_step == 3">
              <p>
                <span>{{ this.$store.state.day9.time }}</span>
                <span>{{ this.$store.state.day9.distance }}</span>
              </p>
              <p>
                <span>{{ this.$store.state.day10.time }}</span>
                <span>{{ this.$store.state.day10.distance }}</span>
              </p>
              <p>
                <span>{{ this.$store.state.day11.time }}</span>
                <span>{{ this.$store.state.day11.distance }}</span>
              </p>
              <p>
                <span>{{ this.$store.state.day12.time }}</span>
                <span>{{ this.$store.state.day12.distance }}</span>
              </p>
          </div>
          <div class="tab-item" v-show="current_step == 4">
            <p>
              <span>{{ this.$store.state.day13.time }}</span>
              <span>{{ this.$store.state.day13.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day14.time }}</span>
              <span>{{ this.$store.state.day14.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day15.time }}</span>
              <span>{{ this.$store.state.day15.distance }}</span>
            </p>
            <p>
              <span>{{ this.$store.state.day16.time }}</span>
              <span>{{ this.$store.state.day16.distance }}</span>
            </p>
          </div>
          <div class="tab-item" v-show="current_step == 5">Congratulations! You've completed the challenge.</div>
          <button v-if="current_step > 1 && current_step < 5" class="button" @click="prevStep()">Back</button>
          <button v-if="current_step < 5" class="button" @click="nextStep()">Next</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_step: 1,
      max_step: 1
    }
  },
  methods: {
    goToStep(value) {
      if (value - this.current_step >= 2) {
        return
      } else {
        this.current_step = value;
      }
    },
    nextStep() {
      this.current_step++;
      if (this.max_step < this.current_step) {
        this.max_step = this.current_step;
      }
    },
    prevStep() {
      this.current_step--;
      if (this.max_step > this.current_step) {
        this.max_step = this.current_step;
      }
    }
  }
}
</script>

<style lang="scss">
  $text-blue: #302ea7;
  $text-yellow: #ffcf25;
  $text-yellow--hover: #ec6637;

  .results-list {
    &--title {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.5;
      text-align: center;
    }
  }

  .results-tabs {
    margin-top: 3rem;

    .nav {
      list-style: none;
      margin: 2rem 0;
      padding: 0;
      display: flex;
      justify-content: space-between;

      &-link {
        color: #fff;
        text-decoration: none;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 1.2rem;

        &.active {
          color: $text-yellow;
        }
      }
    }

    .tab-content {
      button {
        border: none;
        outline: none;
        color: $text-blue;
        background: $text-yellow;
        padding: .6rem 2rem;
        border-radius: 1.6rem;
        margin: 3rem 1rem 0 0;

        &:hover {
          color: #fff;
          background: $text-yellow--hover;
        }
      }
    }

    .tab-item {
      &:last-child {
        text-align: center;
      }

      p {
        span {
          display: block;

          &:first-child {
            font-family: 'Ubuntu', sans-serif;
            font-weight: 300;
            font-size: 1.4rem;
            margin-bottom: .8rem;
          }
        }
      }
    }
  }
</style>