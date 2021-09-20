<template>
  <div class="menu-container">
    <div class="logo">
      <router-link to="/">Running Planner</router-link>
    </div>
    <a class="burger-menu" @click="toggleNav" ref="button">
      <tasty-burger-button
        :type="buttonType"
        :active="isActive"
        :size="size"
        :color="color"
        :active-color="activeColor"
      />
    </a>
    <transition name="show">
      <div
        class="mobile-menu"
        v-show="showNav"
        v-closable="{
          exclude: ['button'],
          handler: 'checkWindow',
        }"
      >
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
        <ul class="social">
          <li class="social-item">
            <a class="social-link github" href="#">GitHub</a>
          </li>
          <li class="social-item">
            <a class="social-link medium" href="#">Medium</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

// This variable will hold the reference to
// document's click handler
let handleOutsideClick;

Vue.directive("closable", {
  bind(el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = (e) => {
      e.stopPropagation();
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude } = binding.value;

      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false;
      exclude.forEach((refName) => {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          const excludedEl = vnode.context.$refs[refName];
          // See if this excluded element
          // is the same element the user just clicked on
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });

      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]();
      }
    };
    // Register click/touchstart event listeners on the whole page
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },

  unbind() {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  },
});

export default {
  data() {
    return {
      buttonType: "elastic",
      isActive: false,
      size: "s",
      color: "#888AAD",
      activeColor: "#343AA8",
      showNav: window.innerWidth > 800,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    checkWindow() {
      this.showNav = window.innerWidth > 800;
    },
  },
  created() {
    this.checkWindow();
    window.addEventListener("resize", this.checkWindow);
  },
  mounted() {
    const button = this.$refs.button.querySelector(".hamburger");
    button.setAttribute("aria-label", "toggle-menu-button");
  },
  destroyed() {
    // Should remove listener
    window.removeEventListener("resize", this.checkWindow);
  },
};
</script>

<style lang="scss">
.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px;
  position: relative;

  .burger-menu {
    position: absolute;
    right: 15px;
    top: 12px;
    display: block;
    z-index: 11;
  }

  .mobile-menu {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5rem 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(210, 210, 215, 0.2);
  }
}

.logo,
nav {
  a {
    display: block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.logo {
  a {
    color: #5D5F8F;

    &:hover {
      color: #343AA8;
      text-decoration: none;
    }
  }
}

nav {
  margin-bottom: 2rem;

  a {
    margin-bottom: 2rem;
    color: #5D5F8F;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: -10px;
      right: -10px;
      bottom: -18px;
      height: 1px;
      background: #343AA8;
      visibility: hidden;
    }

    &:hover {
      text-decoration: none;
      color: #343AA8;

      &:after {
        visibility: visible;
      }
    }
  }
}

.social {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  &-item {
    margin: 0 1rem;
  }

  &-link {
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 0;
    width: 25px;
    height: 25px;

    &.github {
      background-image: url(../assets/github.svg);
    }

    &.medium {
      background-image: url(../assets/medium.svg);
    }
  }
}

@media (min-width: 800px) {
  .menu-container {
    padding: 13px 0;

    .burger-menu {
      display: none;
    }

    .mobile-menu {
      position: relative;
      width: calc(50% + 77px);
      padding: 0;
      flex-direction: row;
      justify-content: space-between;
      border: none;
    }
  }

  nav {
    display: flex;
    margin-bottom: 0;

    a {
      margin: 0 2rem 0 0;
    }
  }

  .social {
    &-item {
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.show-enter-active,
.show-leave-enter {
  transform: translateX(0);
  transition: all 0.5s ease-in-out;
}
.show-enter,
.show-leave-to {
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
}
</style>