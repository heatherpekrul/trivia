<template>
  <div class="dashboard-view container">
    <h1>Dashboard</h1>

    <h2>My Games</h2>

    <table v-if="ownedGames && ownedGames.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in ownedGames" v-bind:key="game.id">
          <td>
            {{ game.name }}
          </td>
          <td>
            <button @click="$router.push({ name: 'GamePresentationView', params: { id: game.id } })">
              Start / Resume
            </button>

            <button @click.prevent="onDeleteGameClick(game.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      Sorry, you have not created any games yet.
    </div>

    <h2>Joined Games</h2>

    <table v-if="joinedGames && joinedGames.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in joinedGames" v-bind:key="game.id">
          <td>
            {{ game.name }}
          </td>
          <td>
            <button @click="$router.push({ name: 'GameParticipantView', params: { id: game.id } })">
              Rejoin
            </button>

            <button @click="onRemoveJoinedGameClick(game.id)">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      Sorry, you have not joined any games.
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>