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
import Datepicker from "vuejs-datepicker";

export default {
  name: "Schedule",
  components: {
    Datepicker,
  },
  data() {
    return {
      model: {
        date: "",
      },
      DatePickerFormat: "dd/MM/yyyy",
      disabledDates: {
        to: new Date(Date.now() - 8640000),
      },
      highlighted: {
        dates: [new Date(Date.now())],
      },
    };
  },
  methods: {
    dateSelected(date) {
      this.$store.commit("SET_SELECTED_DATE", true);
      this.$store.commit("SET_PROGRAM_TIME", date);
    },
  },
};
</script>

<style lang="scss">
$text-blue: #343aa8;
$text-light: #888aad;

.schedule {
  h1 {
    margin: 0;
    text-align: center;
  }

  .vdp-datepicker__calendar {
    width: 302px;
    min-height: 400px;
    margin: 3rem auto;
    padding: 10px;
    border: 1px solid #ebeff2;
    border-radius: 8px;
    box-shadow: 0px 0px 16px 2px rgba(136, 138, 173, 0.15);

    header {
      .prev,
      .next {
        &:after {
          display: block;
          margin: 0 auto;
          width: 24px;
          height: 24px;
          border: none;
        }
      }

      .prev {
        &:after {
          background-image: url(../assets/arrow-left.svg);
        }

        &.disabled {
          &:after {
            border: none;
          }
        }
      }

      .next {
        &:after {
          background-image: url(../assets/arrow-right.svg);
        }
      }
    }

    .cell {
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      border: none;
      margin-bottom: 0.5rem;

      &.disabled {
        color: $text-light;
      }

      &.day,
      &.day-header {
        width: 40px;
      }
    }

    .cell:not(.blank):not(.disabled).day:hover,
    .cell:not(.blank):not(.disabled).month:hover,
    .cell:not(.blank):not(.disabled).year:hover {
      border: none;
    }

    .cell.day-header {
      color: $text-light;
      font-size: 100%;
    }

    .cell.highlighted,
    .cell.day.selected {
      background: none;
      color: #fff;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      z-index: 10;

      &:after {
        content: "";
        width: 28px;
        height: 28px;
        background: $text-light;
        border-radius: 50%;
        position: absolute;
        z-index: -1;
      }
    }

    .cell.day.selected {
      &:after {
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
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    color: $text-blue;
    font-size: 18px;
  }
}

@media (min-width: 800px) {
  .schedule {
    h1 {
      font-size: 24px;
      text-align: left;
    }

    .vdp-datepicker__calendar {
      margin: 3rem 0;
    }
  }
}
</style>