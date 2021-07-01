<template>
  <div class="home">
    <div class="container">
      <div class="schedule">
        <h1>Run your first 5 km in 4 weeks</h1>
        <h2>{{ this.model.date }}</h2>
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
      <div class="results">
        <p>
          <span>{{ day1.time }}</span>
          <span>{{ day1.distance }}</span>
        </p>
        <p>
          <span>{{ day2.time }}</span>
          <span>{{ day2.distance }}</span>
        </p>
        <p>
          <span>{{ day3.time }}</span>
          <span>{{ day3.distance }}</span>
        </p>
        <p>
          <span>{{ day4.time }}</span>
          <span>{{ day4.distance }}</span>
        </p>
        <p>
          <span>{{ day5.time }}</span>
          <span>{{ day5.distance }}</span>
        </p>
        <p>
          <span>{{ day6.time }}</span>
          <span>{{ day6.distance }}</span>
        </p>
        <p>
          <span>{{ day7.time }}</span>
          <span>{{ day7.distance }}</span>
        </p>
        <p>
          <span>{{ day8.time }}</span>
          <span>{{ day8.distance }}</span>
        </p>
        <p>
          <span>{{ day9.time }}</span>
          <span>{{ day9.distance }}</span>
        </p>
        <p>
          <span>{{ day10.time }}</span>
          <span>{{ day10.distance }}</span>
        </p>
        <p>
          <span>{{ day11.time }}</span>
          <span>{{ day11.distance }}</span>
        </p>
        <p>
          <span>{{ day12.time }}</span>
          <span>{{ day12.distance }}</span>
        </p>
        <p>
          <span>{{ day13.time }}</span>
          <span>{{ day13.distance }}</span>
        </p>
        <p>
          <span>{{ day14.time }}</span>
          <span>{{ day14.distance }}</span>
        </p>
        <p>
          <span>{{ day15.time }}</span>
          <span>{{ day15.distance }}</span>
        </p>
        <p>
          <span>{{ day16.time }}</span>
          <span>{{ day16.distance }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'; 
import dayjs from 'dayjs';

export default {
  name: 'Home',
  components: {
    Datepicker
  },
  data() {
    return {
      program: [
        '2 km', '2 km', '3 km', '25 minutes',
        '2 km', '3 km', '3 km', '30 minutes',
        '3 km', '4 km', '4 km', '35 minutes',
        '3 km', '4 km', 'have a rest', '5 km'
      ],
      day1: {
        time: "",
        distance: ""
      },
      day2: {
        time: "",
        distance: ""
      },
      day3: {
        time: "",
        distance: ""
      },
      day4: {
        time: "",
        distance: ""
      },
      day5: {
        time: "",
        distance: ""
      },
      day6: {
        time: "",
        distance: ""
      },
      day7: {
        time: "",
        distance: ""
      },
      day8: {
        time: "",
        distance: ""
      },
      day9: {
        time: "",
        distance: ""
      },
      day10: {
        time: "",
        distance: ""
      },
      day11: {
        time: "",
        distance: ""
      },
      day12: {
        time: "",
        distance: ""
      },
      day13: {
        time: "",
        distance: ""
      },
      day14: {
        time: "",
        distance: ""
      },
      day15: {
        time: "",
        distance: ""
      },
      day16: {
        time: "",
        distance: ""
      },
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
      this.$nextTick(() => this.day1.time = dayjs(this.model.date).format("ddd, DD MMMM")),
      this.$nextTick(() => this.day2.time = dayjs(this.day1.time).add(2,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day3.time = dayjs(this.day1.time).add(4,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day4.time = dayjs(this.day1.time).add(5,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day5.time = dayjs(this.day1.time).add(7,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day6.time = dayjs(this.day1.time).add(9,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day7.time = dayjs(this.day1.time).add(11,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day8.time = dayjs(this.day1.time).add(12,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day9.time = dayjs(this.day1.time).add(14,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day10.time = dayjs(this.day1.time).add(16,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day11.time = dayjs(this.day1.time).add(18,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day12.time = dayjs(this.day1.time).add(19,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day13.time = dayjs(this.day1.time).add(21,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day14.time = dayjs(this.day1.time).add(23,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day15.time = dayjs(this.day1.time).add(25,'day').format("ddd, DD MMMM")),
      this.$nextTick(() => this.day16.time = dayjs(this.day1.time).add(26,'day').format("ddd, DD MMMM"))
      this.day1.distance = this.program[0]
      this.day2.distance = this.program[1]
      this.day3.distance = this.program[2]
      this.day4.distance = this.program[3]
      this.day5.distance = this.program[4]
      this.day6.distance = this.program[5]
      this.day7.distance = this.program[6]
      this.day8.distance = this.program[7]
      this.day9.distance = this.program[8]
      this.day10.distance = this.program[9]
      this.day11.distance = this.program[10]
      this.day12.distance = this.program[11]
      this.day13.distance = this.program[12]
      this.day14.distance = this.program[13]
      this.day15.distance = this.program[14]
      this.day16.distance = this.program[15]
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
