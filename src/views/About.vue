<template>
  <main class="about">
    <div class="container">
      <div class="about-text">
        <h1>About training plan</h1>
        <p>
          Surely you are familiar with the situation: you start running "from
          Monday", and a week later there is no trace of your previous desire.
          Oh, yes - we went through it ourselves. Many start to run often and
          quickly, suffocate, try to "break themselves", demonstrate willpower.
          And soon they quit, not understanding how this masochism can be liked
          by anyone.
        </p>
        <p>
          But the real willpower is to build up the load gradually and run as
          much as you can, without worrying about "what people think." At the
          same time, attention should be paid not to the speed of the run, but
          to its duration.
        </p>
        <p>
          This training plan is for those who want to start running and not
          quit, and it will take you on an exciting journey from the couch to
          your first 5km run. Put on your sneakers - and go!
        </p>
        <br>
        <hr>
        <p>
          Inspired by 🏃‍♀️<a target="a_blank" href="https://nogibogi.com/">nogibogi.com</a>. Design by 💚<a target="a_blank" href="https://dribbble.com/temnazirka">Anastasia Kynko</a>.
        </p>
      </div>
      <div class="about-image">
        <img
          src="../assets/woman-running-big.svg"
          alt="picture of a running woman"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.about {
  .container {
    padding: 0 15px;
    display: flex;
    flex-direction: column-reverse;
  }

  p {
    line-height: 1.6rem;
    color: #72738F;
    margin: 0 0 1rem;
  }

  &-image {
    img {
      width: 100%;
    }
  }
}

@media (min-width: 800px) {
  .about {
    margin-top: 60px;
    
    .container {
      flex-direction: row;
      align-items: center;
    }

    &-image {
      margin-left: 50px;
      img {
        width: 386px;
        height: 386px;
      }
    }
  }
}
</style>
