<template>
  <div class="results-list">
    <h2 class="results-list--title">Don't wait until a perfect Monday, start running today! Pick a date, to get your training plan ⬇️</h2>
    <div v-if="this.$store.state.dateSelected" class="results-tabs">
      <TabNav :tabs="['Week 1', 'Week 2', 'Week 3', 'Week 4']" :selected="selected" @selected="setSelected" >
      <transition name="slide-fade">
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
      <transition name="slide-fade">
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
      <transition name="slide-fade">
        <Tab :isSelected="selected === 'Week 3'" >
          <ul>
            <li>List test 1</li>
            <li>List test 2</li>
            <li>List test 3</li>
          </ul>
        </Tab>
      </transition>
      <transition name="slide-fade">
        <Tab :isSelected="selected === 'Week 4'" >
          <ul>
            <li>List test 1</li>
            <li>List test 2</li>
            <li>List test 3</li>
          </ul>
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

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
}
</style>