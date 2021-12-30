<template>
  <div class="users">
    <User
      v-for="user in users"
      v-bind:key="user.id"
      :name="user.name"
      :image_url="user.image_url"
    />
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>