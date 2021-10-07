import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs';
import { api_key, url_base } from '@/config';
import createPersistedState from "vuex-persistedstate" 

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    weather: {},
    dateSelected: false,
    tabSelected: '',
    defaultWeek: 'Week 1',
    defaultSelected: false,
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
          completed: false
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
          time: "",
          completed: false
        },
        {
          distance: "3 km",
          time: "",
          completed: false
        },
        {
          distance: "3 km",
          time: "",
          completed: false
        },
        {
          distance: "25-30 min",
          time: "",
          completed: false
        },
      ],
      'Week 3': [
        {
          distance: "3 km",
          time: "",
          completed: false
        },
        {
          distance: "4 km",
          time: "",
          completed: false
        },
        {
          distance: "4 km",
          time: "",
          completed: false
        },
        {
          distance: "30-35 min",
          time: "",
          completed: false
        },
      ],
      'Week 4': [
        {
          distance: "3 km",
          time: "",
          completed: false
        },
        {
          distance: "4 km",
          time: "",
          completed: false
        },
        {
          distance: "have a rest",
          time: "",
          completed: false
        },
        {
          distance: "5 km",
          time: "",
          completed: false
        },
      ]
    }
  },
  getters: {
    program: (state) => state.program,
    dateSelected: (state) => state.dateSelected,
    weather: (state) => state.weather,
    tabSelected: (state) => state.tabSelected,
    defaultWeek: (state) => state.defaultWeek,
    defaultSelected: (state) => state.defaultSelected
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
    'SET_COMPLETED': (state, day) => {
      day.completed = !day.completed;
    },
    'SET_UNCOMPLETED': ({ program }, flag) => {
      for (const key in program) {
        const days = program[key];  
        days.forEach((day) => {
          return day.completed = flag;
        });
      }
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
    },
    resetWeeks ({ commit, getters }) {
      commit("SET_SELECTED_TAB", getters.defaultWeek);
      // Then should reset 'completed' flag for each day
      commit("SET_UNCOMPLETED", getters.defaultSelected);
    }
  },
  modules: {
  }
})
