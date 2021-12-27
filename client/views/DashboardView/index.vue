<template>
  <div class="dashboard-view container">
    <h1>Dashboard</h1>

    <h2>My Games</h2>

    <table v-if="games">
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Game</th>
          <th>Delete Game</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" v-bind:key="game.game_id">
          <td>
            {{ game.name }}
          </td>
          <td>
            Start
          </td>
          <td>
            Delete
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      Sorry, you have not created any games.
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>