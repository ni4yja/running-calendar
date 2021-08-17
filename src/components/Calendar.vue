<template>
  <div class="schedule">
    <h1>Run your first 5 km in 4 weeks</h1>
    <datepicker
      v-model="model.date"
      @selected="dateSelected"
      :inline="true"
      :format="DatePickerFormat"
      :full-month-name="true"
      :disabled-dates="disabledDates"
      :monday-first="true"
      :highlighted="highlighted"
    ></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'; 

export default {
  name: 'Schedule',
  components: {
    Datepicker
  },
  data() {
    return {
      model: {
        date: ""
      },
      DatePickerFormat: "dd/MM/yyyy",
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      },
      highlighted: {
        dates: [
          new Date(Date.now())
        ]
      }
    }
  },
  methods: {
    dateSelected(date) {
      this.$store.commit('SET_SELECTED_DATE', true)
      this.$store.commit('SET_PROGRAM_TIME', date)
    }
  }
}
</script>

<style lang="scss">
  $text-blue: #302ea7;
  $text-gray: #999;
  $bg-gray: #f6f6f9;

  .schedule {
    .vdp-datepicker__calendar {
      margin-top: 3rem;
      border: none;

      header {
        .prev {
          &:after {
            border-right: 10px solid $text-blue;
          }
        }

        .next {
          &:after {
            border-left: 10px solid $text-blue;
          }
        }
      }

      .cell {
        height: 42px;
        line-height: 42px;
        border: none;
        margin-bottom: .5rem;

        &.day {
          width: 42px;
        }
      }

      .cell:not(.blank):not(.disabled).day:hover, 
      .cell:not(.blank):not(.disabled).month:hover, 
      .cell:not(.blank):not(.disabled).year:hover {
        border: none;
      }

      .cell.day-header {
        color: $text-gray;
        font-size: 100%;
      }

      .cell.highlighted {
        background: $bg-gray;
        border-radius: 50%;
      }

      .cell.day.selected {
        background: $text-blue;
        color: #fff;
        border-radius: 50%;

        &:hover {
          background: $text-blue;
        }
      }

      .cell.month.selected,
      .cell.year.selected {
        background: $text-blue;
        color: #fff;
        border-radius: none;
      }
    }

    .day__month_btn {
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      color: $text-blue;
    }
  }
</style>