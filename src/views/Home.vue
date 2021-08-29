<template>
  <div class="home">
    <div class="image-div">
      <label class="name">Familiysize Restaurant</label>
      <label class="mote">Portions as big as your grandma makes them!</label>
    </div>
    <div class="card-container">
      <div class="card">
        <h3>
          Not your traditional restaurant!
        </h3>
        <p>
          We love eating, and we want to share the experience!
        </p>
        Our plates get to your table as full as you will leave!
      </div>

      <div class="card">
        <h3>
          You will surely come back!
        </h3>
        <p>
          We have a wide range of dishes from many cultures!
        </p>
        This is the 21st century, you deserve to eat more and better!
      </div>

      <div class="card">
        <h3>
          Affordable prices!
        </h3>
        <p>
          We have dishes for the kids and the parents alike!
        </p>
        If your family doesn't enjoy the food, we failed you!
      </div>

      <div class="card">
        <h3>
          Every day is special if you want it!
        </h3>
        <p>
          We work hard to help you enjoy the experience!
        </p>
        Friday night, birthday lunch, romantic dinner, doesn't matter!
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
label
  display: inline-block

.card-container
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr))
  gap: 1rem
  justify-content: space-between
  margin: 2rem
  padding-bottom: 2rem

.card
  display: flex
  justify-content: space-between
  padding: 1rem .6rem
  border: 1px solid gray
  -webkit-box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5)
  -moz-box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5)
  box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5)

.image-div
  font-family: "Lobster", cursive
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100vw
  height: 40vh
  background-image: linear-gradient(to right bottom, rgba(2,0,36,1) 0%, rgba(63,176,182,0.3309698879551821) 39%, rgba(0,212,255,1) 100%), url('../assets/restaurant.jpg')
  background-repeat: no-repeat
  background-size: cover
  background-attachment: fixed
  background-position: center

.name
  font-size: max(3rem, 5vw)
  font-weight: bolder
  text-decoration: underline

.mote
  font-size: max(1.5rem, 2.75vw)
  transform: skew(15deg) rotate(-5deg)
</style>
