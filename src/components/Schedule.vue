<template>
  <div class="schedule">
    <h1>Run your first 5 km in 4 weeks</h1>
    <datepicker
      v-model="model.date"
      @selected="dateSelected()"
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
import dayjs from 'dayjs';

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
    dateSelected(e) {
      this.$nextTick(() => this.$store.state.day1.time = dayjs(this.model.date).format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day2.time = dayjs(this.$store.state.day1.time).add(2,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day3.time = dayjs(this.$store.state.day2.time).add(4,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day4.time = dayjs(this.$store.state.day3.time).add(5,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day5.time = dayjs(this.$store.state.day4.time).add(7,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day6.time = dayjs(this.$store.state.day5.time).add(9,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day7.time = dayjs(this.$store.state.day6.time).add(11,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day8.time = dayjs(this.$store.state.day7.time).add(12,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day9.time = dayjs(this.$store.state.day8.time).add(14,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day10.time = dayjs(this.$store.state.day9.time).add(16,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day11.time = dayjs(this.$store.state.day10.time).add(18,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day12.time = dayjs(this.$store.state.day11.time).add(19,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day13.time = dayjs(this.$store.state.day12.time).add(21,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day14.time = dayjs(this.$store.state.day13.time).add(23,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day15.time = dayjs(this.$store.state.day14.time).add(25,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.$store.state.day16.time = dayjs(this.$store.state.day15.time).add(26,'day').format("ddd, DD MMMM"))
      this.$store.state.day1.distance = this.$store.state.program[0]
      this.$store.state.day2.distance = this.$store.state.program[1]
      this.$store.state.day3.distance = this.$store.state.program[2]
      this.$store.state.day4.distance = this.$store.state.program[3]
      this.$store.state.day5.distance = this.$store.state.program[4]
      this.$store.state.day6.distance = this.$store.state.program[5]
      this.$store.state.day7.distance = this.$store.state.program[6]
      this.$store.state.day8.distance = this.$store.state.program[7]
      this.$store.state.day9.distance = this.$store.state.program[8]
      this.$store.state.day10.distance = this.$store.state.program[9]
      this.$store.state.day11.distance = this.$store.state.program[10]
      this.$store.state.day12.distance = this.$store.state.program[11]
      this.$store.state.day13.distance = this.$store.state.program[12]
      this.$store.state.day14.distance = this.$store.state.program[13]
      this.$store.state.day15.distance = this.$store.state.program[14]
      this.$store.state.day16.distance = this.$store.state.program[15]
    }
  }
}
</script>

<style lang="scss">
  $text-blue: #302ea7;
  $text-gray: #999;
  $bg-gray: #f6f6f9;

  .schedule {
    margin-top: 5rem;

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
        width: 42px;
        height: 42px;
        line-height: 42px;
        border: none;
        margin-bottom: .5rem;
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

      .cell.selected {
        background: $text-blue;
        color: #fff;
        border-radius: 50%;

        &:hover {
          background: $text-blue;
        }
      }
    }

    .day__month_btn {
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      color: $text-blue;
    }
  }
</style>