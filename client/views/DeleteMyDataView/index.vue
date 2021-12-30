<template>
  <div class="container delete-my-data-view">
    <h1>Delete My Data</h1>

    <p>
      Using the button below will <strong>permanently</strong> delete all data associated with your user in the Trivia database.
    </p>

    <p>
      Once your data has been deleted, it <strong>cannot be recovered</strong>.
    </p>

    <Message v-if="message" :type="message.type">
      {{ message.message }}
    </Message>

    <button @click="onDeleteClick()">
      Delete my data
    </button>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>