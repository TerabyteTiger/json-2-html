<template>
  <div class="dialog-background">
    <div class="card dialog">
      <h2 class="card-title">
        {{ title }}
      </h2>
      <slot></slot>
      <div class="card-actions m-top">
        <button
          @click.prevent="$emit('close-dialog', 'done')"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: ["title"]
};
</script>

<style>
.card {
  background-color: hsl(280, 10%, 95%);
  max-width: 50vw;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
  padding: 0 0 5px;
}

pre {
  overflow: auto;
  padding-left: 15px;
}

.card-title {
  text-align: left;
  margin: 0;
  border-radius: 7px 7px 0 0;
  padding: 5px 10px;
  color: hsl(280, 10%, 95%);
  background-color: hsl(251, 17%, 50%);
  font-size: 1.17em;
}

.card-actions {
  text-align: right;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
}

.card-actions > button {
  padding: 0.2rem 1rem;
}

.dialog {
  position: fixed;
  top: 15%;
  left: 25%;
  width: 50%;
  box-shadow: 0 0 5px #000000;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.dialog-background {
  background: hsla(252, 10%, 20%, 60%);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.bounce-enter-active {
  -webkit-animation: bounce-in 0.5s;
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@-webkit-keyframes bounce-in {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes bounce-in {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

/* Smaller Screens */

@media only screen and (max-width: 1150px) {
  .dialog {
    max-width: 70%;
    width: 70%;
    left: 15%;
  }
}

@media only screen and (max-width: 900px) {
  .dialog {
    max-width: 90%;
    width: 90%;

    left: 5%;
  }
}
</style>
