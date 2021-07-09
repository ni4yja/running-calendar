<template>
  <div class="results-list">
    <h2 class="results-list--title">Don't wait until a perfect Monday, start running today! Pick a date, to get your training plan ⬇️</h2>
    <div v-if="this.$store.state.dateSelected" class="results-tabs">
      <TabNav :tabs="['Week 1', 'Week 2', 'Week 3', 'Week 4']" :selected="selected" @selected="setSelected" >
      <transition
        name="fade"
        mode="out-in"
        appear
        :duration="500"
      >
        <Tab :isSelected="selected === 'Week 1'" >
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
        </Tab>
      </transition>
      <transition
        name="fade"
        mode="out-in"
        appear
        :duration="500"
      >
        <Tab :isSelected="selected === 'Week 2'" >
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
        </Tab>
      </transition>
      <transition
        name="fade"
        mode="out-in"
        appear
        :duration="500"
      >
        <Tab :isSelected="selected === 'Week 3'" >
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
        </Tab>
      </transition>
      <transition
        name="fade"
        mode="out-in"
        appear
        :duration="500"
      >
        <Tab :isSelected="selected === 'Week 4'" >
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
        </Tab>
      </transition>
    </TabNav>
    </div>
  </div>
</template>

<script>
import TabNav from '@/components/TabNav'
import Tab from '@/components/Tab'

export default {
  components: { 
    TabNav, 
    Tab 
  },
  data() {
    return {
      selected: 'Week 1'
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  & > * {
    transition-duration: 200ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(.6,.15,.35,.8);
  }
  
}

$delay: 100ms;
$delayStep: 100ms;

.fade-enter,
.fade-leave-to {
  & > p {
    opacity: 0;
    transform: translateY(40px);
  }
}
.fade-enter-active {
  & > p {
    &:nth-child(2) {
      transition-delay: $delay;
    }
    &:nth-child(3) {
      transition-delay: $delay + $delayStep;
    }
    &:nth-child(4) {
      transition-delay: $delay + $delayStep*2;
    }
  }
}
.fade-leave-active {
  & > p {
    &:nth-child(1) {
      transition-delay: $delay + $delayStep*2;
    }
    &:nth-child(2) {
      transition-delay: $delay + $delayStep;
    }
    &:nth-child(3) {
      transition-delay: $delay;
    }
  }
}

$text-yellow: #ffcf25;

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
    padding: 0 0 1rem;
    display: flex;
    border-bottom: 1px solid #fff;

    &-item {
      padding: 0 1rem;
    }

    &-link {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;

      &.active {
        color: $text-yellow;
      }
    }
  }

  .tab-item {
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