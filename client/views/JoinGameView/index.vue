<template>
  <div class="container join-game-view">
    <h1>Join Game</h1>

    <Message v-if="message" :type="message.type">
      {{ message.message }}
    </Message>

    <form @submit.prevent="onFormSubmit()">
      <fieldset>
        <input type="text" placeholder="Game Code" v-model="entryKey" required>
      </fieldset>

      <fieldset>
        <input type="submit" value="Join Game">
      </fieldset>
    </form>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>