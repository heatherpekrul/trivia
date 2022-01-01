<template>
  <div class="game-presentation-view">
    <div class="game-presentation-view__wrapper" :class="{ 'game-presentation-view__wrapper--full' : isFullScreen}">
      <ProgressBar
        v-if="!isCurrentGameTitleScreen && currentGame.round_index"
        :currentRound="currentGame.round_index"
        :totalRounds="currentGame.total_rounds"
        :currentQuestion="currentGame.question_index"
        :totalQuestions="currentGame.current_round_total_questions"
      />

      <div class="game-presentation-view__wrapper__controls">
        <button @click="onToggleFullScreenClick()">
          Toggle Full Screen
        </button>

        <button @click="onNextClick()">
          Next
        </button>
      </div>

      <UsersBar
        v-if="isCurrentGameTitleScreen"
        :users="currentGameUsers"
      />

      <PresentationTitle
        v-if="isCurrentGameTitleScreen"
        :game="currentGame" 
      />

      <PresentationRound
        v-if="isCurrentGameRoundScreen"
        :round="currentRound"
      />

      <PresentationScores
        v-if="isCurrentGameScoreScreen"
        :scores="currentScores"
      />

      <PresentationQuestion
        v-if="isCurrentGameQuestionScreen"
        :question="currentQuestion"
        :answers="currentGameQuestionAnswers"
      />
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss">
  @import './style.scss';
</style>