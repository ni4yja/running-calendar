import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs';
import { api_key, url_base } from '@/config';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather: {},
    dateSelected: false,
    tabSelected: '',
    program: {
      'Week 1': [
        {
          id: 1,
          distance: "2 km",
          time: "",
          completed: false
        },
        {
          id: 2,
          distance: "2 km",
          time: "",
          completed: true
        },
        {
          id: 3,
          distance: "3 km",
          time: "",
          completed: false
        },
        {
          id: 4,
          distance: "25-30 min",
          time: "",
          completed: false
        },
      ],
      'Week 2': [
        {
          distance: "2 km",
          time: ""
        },
        {
          distance: "3 km",
          time: ""
        },
        {
          distance: "3 km",
          time: ""
        },
        {
          distance: "25-30 min",
          time: "",
        },
      ],
      'Week 3': [
        {
          distance: "3 km",
          time: ""
        },
        {
          distance: "4 km",
          time: ""
        },
        {
          distance: "4 km",
          time: ""
        },
        {
          distance: "30-35 min",
          time: "",
        },
      ],
      'Week 4': [
        {
          distance: "3 km",
          time: ""
        },
        {
          distance: "4 km",
          time: ""
        },
        {
          distance: "have a rest",
          time: ""
        },
        {
          distance: "5 km",
          time: "",
        },
      ]
    }
  },
  getters: {
    program: (state) => state.program,
    dateSelected: (state) => state.dateSelected,
    weather: (state) => state.weather,
    tabSelected: (state) => state.tabSelected,
    thisDay: (state, dayId) => {
      return state.program['Week 1'].find(day => day.id === dayId);
    }
  },
  mutations: {
    'SET_SELECTED_DATE': (state, flag) => {
      state.dateSelected = flag;
    },
    'SET_PROGRAM_TIME': ({ program }, date) => {
      let currentDay = 0;

      for (const key in program) {
        const days = program[key];
        const lastIndex = days.length - 1;

        days.forEach((day, index) => {

          if (currentDay > 0 && index !== lastIndex) currentDay++;
          
          day.time = dayjs(date).add(currentDay, 'day').format("ddd, DD MMMM");
          currentDay++;
        });
      }
    },
    'SET_WEATHER': (state, weather) => {
      state.weather = weather
    },
    'SET_SELECTED_TAB': (state, tab) => {
      state.tabSelected = tab;
    },
    'SET_COMPLETED': ({getters}, dayId) => {
      let day = getters.thisDay(dayId);
      day.completed = !day.completed;
    }
  },
  actions: {
    getWeather (state, position) {
      return new Promise((resolve, reject) => {

        fetch(`${url_base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${api_key}`)
          .then(response => response.json())
          .then(data => {
            resolve(data);
            state.commit('SET_WEATHER', data);
          })
          .catch(err => reject(err));
      });
    }
  },
  modules: {
  }
})
