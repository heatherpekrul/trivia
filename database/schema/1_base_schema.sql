-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trivia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trivia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trivia` DEFAULT CHARACTER SET utf8 ;
USE `trivia` ;

-- -----------------------------------------------------
-- Table `trivia`.`rounds`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trivia`.`rounds` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `game_id` INT UNSIGNED NOT NULL,
  `sort` INT UNSIGNED NOT NULL DEFAULT 0,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_rounds_games1_idx` (`game_id` ASC) VISIBLE,
  CONSTRAINT `fk_rounds_games1`
    FOREIGN KEY (`game_id`)
    REFERENCES `trivia`.`games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trivia`.`questions` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `image_url` VARCHAR(255) NULL,
  `round_id` INT UNSIGNED NOT NULL,
  `sort` INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_questions_rounds1_idx` (`round_id` ASC) VISIBLE,
  CONSTRAINT `fk_questions_rounds1`
    FOREIGN KEY (`round_id`)
    REFERENCES `trivia`.`rounds` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia`.`users`
-- -----------------------------------------------------
	CREATE TABLE IF NOT EXISTS `trivia`.`users` (
	  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	  `email` VARCHAR(255) NOT NULL,
	  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
	  PRIMARY KEY (`id`))
	ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia`.`games`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trivia`.`games` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `owner_user_id` INT UNSIGNED NOT NULL,
  `description` VARCHAR(255) NULL,
  `current_question_id` INT UNSIGNED NULL,
  `current_round_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_games_questions1_idx` (`current_question_id` ASC) VISIBLE,
  INDEX `fk_games_users1_idx` (`owner_user_id` ASC) VISIBLE,
  INDEX `fk_games_rounds1_idx` (`current_round_id` ASC) VISIBLE,
  CONSTRAINT `fk_games_questions1`
    FOREIGN KEY (`current_question_id`)
    REFERENCES `trivia`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_users1`
    FOREIGN KEY (`owner_user_id`)
    REFERENCES `trivia`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_games_rounds1`
    FOREIGN KEY (`current_round_id`)
    REFERENCES `trivia`.`rounds` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia`.`answers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trivia`.`answers` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `question_id` INT UNSIGNED NOT NULL,
  `answer` VARCHAR(255) NOT NULL,
  `isCorrect` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_answers_questions_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_answers_questions`
    FOREIGN KEY (`question_id`)
    REFERENCES `trivia`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia`.`game_participants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trivia`.`game_participants` (
  `game_participant_id` INT UNSIGNED NOT NULL,
  `game_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  INDEX `fk_game_participants_games1_idx` (`game_id` ASC) VISIBLE,
  INDEX `fk_game_participants_users1_idx` (`user_id` ASC) VISIBLE,
  PRIMARY KEY (`game_participant_id`),
  CONSTRAINT `fk_game_participants_games1`
    FOREIGN KEY (`game_id`)
    REFERENCES `trivia`.`games` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_game_participants_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `trivia`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia`.`responses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trivia`.`responses` (
  `id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `answers_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_responses_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_responses_answers1_idx` (`answers_id` ASC) VISIBLE,
  CONSTRAINT `fk_responses_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `trivia`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_responses_answers1`
    FOREIGN KEY (`answers_id`)
    REFERENCES `trivia`.`answers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
