<template>
  <div class="results-list">
    <WeatherWidget></WeatherWidget>
    <p v-if="!dateSelected" class="results-list--title">
      Don't wait until a perfect Monday, start running today! Pick a date, to
      get your training plan.
    </p>
    <img
      v-if="!dateSelected"
      class="results-list--image"
      src="../assets/woman-running.svg"
      alt="picture of a running woman"
    />
    <div v-if="dateSelected" class="results-tabs">
      <h2>Your training plan</h2>
      <TabNav :tabs="weeks" :selected="tabSelected" @selected="setSelected">
        <template v-for="(week, indexWeek) in weeks">
          <transition
            name="fade"
            mode="out-in"
            appear
            :duration="500"
            :key="indexWeek"
          >
            <Tab :isSelected="tabSelected === week">
              <p v-for="(day, index) in program[tabSelected]" :key="index" @click="toggleComplete">
                <span>{{ day.time }}</span>
                <span>{{ day.distance }}</span>
                <span class="mark"></span>
              </p>
            </Tab>
          </transition>
        </template>
      </TabNav>
    </div>
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget";
import TabNav from "@/components/TabNav";
import Tab from "@/components/Tab";
import { mapGetters } from "vuex";

export default {
  components: {
    WeatherWidget,
    TabNav,
    Tab,
  },
  methods: {
    setSelected(tab) {
      this.$store.commit("SET_SELECTED_TAB", tab);
    },
    toggleComplete(event) {
      event.currentTarget.classList.toggle("completed");
    },
  },
  computed: {
    ...mapGetters(["program", "dateSelected", "tabSelected"]),
    weeks() {
      return Object.keys(this.program);
    },
  },
  watch: {
    program: {
      deep: true,
      handler(newProgram, oldProgram) {
        this.$store.commit("SET_SELECTED_TAB", this.weeks[0]);
      },
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  & > * {
    transition-duration: 200ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.6, 0.15, 0.35, 0.8);
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
      transition-delay: $delay + $delayStep * 2;
    }
  }
}
.fade-leave-active {
  & > p {
    &:nth-child(1) {
      transition-delay: $delay + $delayStep * 2;
    }
    &:nth-child(2) {
      transition-delay: $delay + $delayStep;
    }
    &:nth-child(3) {
      transition-delay: $delay;
    }
  }
}

$gray-bg: #ebeff2;
$blue-dark: #343aa8;
$blue-light: #5d5f8f;

.results-list {
  &--title {
    font-size: 18px;
    margin: 0 0 66px;
    line-height: 1.5;
  }

  &--image {
    display: block;
    width: 240px;
    margin: 0 auto;
  }
}

.results-tabs {
  margin-top: 3rem;

  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 20px;
    margin: 0 0 17px;
  }

  .nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    &-item {
      cursor: pointer;
      width: 25%;
    }

    &-link {
      display: block;
      width: 100%;
      background: rgba(235, 239, 242, 0.75);
      border: 1px solid #6166c5;
      box-sizing: border-box;
      padding: 5px 0 3px;
      text-align: center;
      border-radius: 4px 4px 0px 0px;
      color: $blue-dark;
      text-decoration: none;
      font-size: 14px;

      &.active {
        background: $gray-bg;
        border: 1px solid $gray-bg;
      }
    }
  }

  .tab-item {
    background: $gray-bg;
    padding: 18px 21px;
    border-radius: 0px 0px 8px 8px;

    p {
      display: block;
      position: relative;
      margin: 0;
      padding: 4px 8px;
      border-radius: 4px;
      background: #fff;
      margin-bottom: 16px;

      &.completed {
        .mark {
          background-image: url("../assets/done-green.svg");
        }
      }

      .mark {
        cursor: pointer;
        position: absolute;
        right: 11px;
        bottom: 11px;
        width: 15px;
        height: 15px;
        background-repeat: no-repeat;
        background-size: 15px;
        background-image: url("../assets/done.svg");
      }

      &:last-child {
        margin-bottom: 0;
      }

      span {
        color: $blue-dark;
        display: block;
        font-size: 18px;

        &:first-child {
          color: $blue-light;
          margin-bottom: 9px;
          font-size: 16px;
        }
      }
    }
  }
}

@media (min-width: 800px) {
  .results-list {
    &--title {
      margin-left: 42px;
    }
  }
}
</style>