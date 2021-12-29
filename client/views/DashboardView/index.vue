<template>
  <div class="dashboard-view container">
    <h1>Dashboard</h1>

    <h2>My Games</h2>

    <table v-if="ownedGames && ownedGames.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Game</th>
          <th>Delete Game</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in ownedGames" v-bind:key="game.id">
          <td>
            {{ game.name }}
          </td>
          <td>
            <router-link :to="{ name: 'GamePresentationView', params: { id: game.id } }">
              Start / Resume
            </router-link>
          </td>
          <td>
            <a href="#" @click.prevent="onDeleteGameClick(game.id)">
              Delete
            </a>
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