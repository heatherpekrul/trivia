-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Database: trivia_app
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--
USE trivia;

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `question_id` int unsigned NOT NULL,
  `answer` varchar(255) NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_answers_questions_idx` (`question_id`),
  CONSTRAINT `fk_answers_questions` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (6,2,'question 1 answer 1',1,1),(7,2,'question 1 answer 2',0,2),(8,2,'question 1 answer 3',0,3),(9,2,'question 1 answer 4',0,4),(10,2,'question 1 answer 5',0,5),(11,3,'question 2 answer 1',1,1),(12,3,'question 2 answer 2',0,2),(13,3,'question 2 answer 3',0,3),(14,3,'question 2 answer 4',0,4),(15,3,'question 2 answer 5',0,5),(16,4,'question 3 answer 1',1,1),(17,4,'question 3 answer 2',0,2),(18,4,'question 3 answer 3',0,3),(19,4,'question 3 answer 4',0,4),(20,4,'question 3 answer 5',0,5),(21,5,'question 1 answer 1',1,1),(22,5,'question 1 answer 2',0,2),(23,5,'question 1 answer 3',0,3),(24,5,'question 1 answer 4',0,4),(25,5,'question 1 answer 5',0,5),(26,6,'question 2 answer 1',1,1),(27,6,'question 2 answer 2',0,2),(28,6,'question 2 answer 3',0,3),(29,6,'question 2 answer 4',0,4),(30,6,'question 2 answer 5',0,5),(31,7,'question 3 answer 1',1,1),(32,7,'question 3 answer 2',0,2),(33,7,'question 3 answer 3',0,3),(34,7,'question 3 answer 4',0,4),(35,7,'question 3 answer 5',0,5);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_participants`
--

DROP TABLE IF EXISTS `game_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_participants` (
  `game_participant_id` int unsigned NOT NULL AUTO_INCREMENT,
  `game_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`game_participant_id`),
  UNIQUE KEY `game_id` (`game_id`,`user_id`),
  KEY `fk_game_participants_games1_idx` (`game_id`),
  KEY `fk_game_participants_users1_idx` (`user_id`),
  CONSTRAINT `fk_game_participants_games1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_game_participants_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_participants`
--

LOCK TABLES `game_participants` WRITE;
/*!40000 ALTER TABLE `game_participants` DISABLE KEYS */;
INSERT INTO `game_participants` VALUES (5,5,14),(27,5,31),(23,9,14),(24,9,31);
/*!40000 ALTER TABLE `game_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `entry_key` varchar(10) DEFAULT NULL,
  `owner_user_id` int unsigned NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `current_question_id` int unsigned DEFAULT NULL,
  `current_round_id` int unsigned DEFAULT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_games_questions1_idx` (`current_question_id`),
  KEY `fk_games_users1_idx` (`owner_user_id`),
  KEY `fk_games_rounds1_idx` (`current_round_id`),
  CONSTRAINT `fk_games_questions1` FOREIGN KEY (`current_question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_games_rounds1` FOREIGN KEY (`current_round_id`) REFERENCES `rounds` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_games_users1` FOREIGN KEY (`owner_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (5,'David Game','DAVID_GAME',14,NULL,NULL,2,0),(9,'New Years Eve Trivia 2021','NYE2021',31,'Everyone shut the fuck up and don’t jinx this one',NULL,NULL,0);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `generator_16`
--

DROP TABLE IF EXISTS `generator_16`;
/*!50001 DROP VIEW IF EXISTS `generator_16`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `generator_16` AS SELECT 
 1 AS `n`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `generator_256`
--

DROP TABLE IF EXISTS `generator_256`;
/*!50001 DROP VIEW IF EXISTS `generator_256`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `generator_256` AS SELECT 
 1 AS `n`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `round_id` int unsigned NOT NULL,
  `sort` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_questions_rounds1_idx` (`round_id`),
  CONSTRAINT `fk_questions_rounds1` FOREIGN KEY (`round_id`) REFERENCES `rounds` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (2,'r1 question 1 text','https://media0.giphy.com/media/l1KUvnGPmDLIzGAEw/giphy.gif?cid=ecf05e476ig9o9so2e8gi5evu0fvg7dwiurpfrsizp9nktcq',2,1),(3,'r1 question 2 text','https://media0.giphy.com/media/l1KUvnGPmDLIzGAEw/giphy.gif?cid=ecf05e476ig9o9so2e8gi5evu0fvg7dwiurpfrsizp9nktcq',2,2),(4,'r1 question 3 text','https://media0.giphy.com/media/l1KUvnGPmDLIzGAEw/giphy.gif?cid=ecf05e476ig9o9so2e8gi5evu0fvg7dwiurpfrsizp9nktcq',2,3),(5,'r2 question 1 text','https://media0.giphy.com/media/l1KUvnGPmDLIzGAEw/giphy.gif?cid=ecf05e476ig9o9so2e8gi5evu0fvg7dwiurpfrsizp9nktcq',3,1),(6,'r2 question 2 text','https://media0.giphy.com/media/l1KUvnGPmDLIzGAEw/giphy.gif?cid=ecf05e476ig9o9so2e8gi5evu0fvg7dwiurpfrsizp9nktcq',3,2),(7,'r2 question 3 text','https://media0.giphy.com/media/l1KUvnGPmDLIzGAEw/giphy.gif?cid=ecf05e476ig9o9so2e8gi5evu0fvg7dwiurpfrsizp9nktcq',3,3);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responses`
--

DROP TABLE IF EXISTS `responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responses` (
  `id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  `answer_id` int unsigned NOT NULL,
  `question_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `responses_UN` (`user_id`,`question_id`),
  KEY `fk_responses_users1_idx` (`user_id`),
  KEY `fk_responses_answers1_idx` (`answer_id`),
  CONSTRAINT `fk_responses_answers1` FOREIGN KEY (`answer_id`) REFERENCES `answers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_responses_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responses`
--

LOCK TABLES `responses` WRITE;
/*!40000 ALTER TABLE `responses` DISABLE KEYS */;
/*!40000 ALTER TABLE `responses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rounds`
--

DROP TABLE IF EXISTS `rounds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rounds` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `game_id` int unsigned NOT NULL,
  `sort` int unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_rounds_games1_idx` (`game_id`),
  CONSTRAINT `fk_rounds_games1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rounds`
--

LOCK TABLES `rounds` WRITE;
/*!40000 ALTER TABLE `rounds` DISABLE KEYS */;
INSERT INTO `rounds` VALUES (2,9,1,'Round 1',NULL,0),(3,9,2,'Round 2',NULL,0);
/*!40000 ALTER TABLE `rounds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'dbighead77@gmail.com','David','https://lh3.googleusercontent.com/a-/AOh14GgcOy3PBih8yoMifTbtiEc94LlKxcbtrb5KcaiD5w=s96-c','2021-12-29 09:38:55',0),(31,'heather.pekrul@gmail.com','Heather','https://lh3.googleusercontent.com/a-/AOh14Gj0nzg3TMWzc7TW3nzbsIZHJ7uRWYPY7Zj-gSDY1g=s96-c','2021-12-29 19:49:52',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'trivia_app'
--
/*!50003 DROP PROCEDURE IF EXISTS `progressGame` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `progressGame`(in gameId INT, in userId INT)
sp: BEGIN
	
	DECLARE allowed INT DEFAULT 0;
    DECLARE currentRound INT DEFAULT NULL;
    DECLARE currentQuestion INT DEFAULT NULL;

    DECLARE nextRound INT DEFAULT NULL;
    DECLARE nextQuestion INT DEFAULT NULL;
    DECLARE roundComplete INT DEFAULT 0;

    DECLARE lastQuestionInRound INT;
    DECLARE lastRoundInGame INT;
    
   
   
   	select 
		case when exists (select 1 from games where id = gameId and owner_user_id = userId) then 1 else 0 end into allowed
	from dual;

	if allowed = 0 then
		leave sp;
	end if;

    select current_question_id, current_round_id into currentQuestion, currentRound
    from games
    where games.id = gameId;

    if currentRound is null then
        
        update games
        set current_round_id = (
            select rounds.id
            from rounds
            where game_id = gameId
            order by rounds.sort asc
            limit 1
        );
        leave sp;
    end if;

    select is_completed into roundComplete
    from rounds
    where id = currentRound;
   
   	if roundComplete = 0 and currentQuestion is null then 
   		
   		update games 
   		set current_question_id = (
   			select id 
   			from questions q
   			where round_id = current_round_id 
   			and sort = 1
   		)
   		where games.id = gameId;
   	
   		leave sp;
   	end if;

    if roundComplete = 0 and currentQuestion is not null then 
        
                

        select q1.id into lastQuestionInRound
        from questions q1
        where round_id = currentRound
        order by sort desc
        limit 1;

        if currentQuestion = lastQuestionInRound then 
            
            update games
            set current_question_id = null
            where games.id = gameId;

            update rounds
            set is_completed = 1
            where rounds.id = currentRound;

            leave sp;
        end if;

        
        update games
        set current_question_id = (
            select questions.id
            from questions
            where round_id = currentRound
            and sort = 
                (select sort + 1
                 from questions q1
                 where q1.id = currentQuestion
                 )
        )
        where games.id = gameId;

        leave sp;

    end if;
   
   
   	

    
    select r1.id into lastRoundInGame
    from rounds r1	
    where r1.game_id = gameId
    order by sort desc
    limit 1;

    if currentRound != lastRoundInGame then
        
        update games
        set current_question_id = null,
            current_round_id = (
                select r1.id
                from rounds r1
                where game_id = gameId
                and sort = (select sort +1
                            from rounds r2
                            where r2.id = currentRound)
            )
        where id = gameId;

        leave sp;
    end if;


    

    update rounds
    set is_completed = 1
    where id = currentRound;

    update games
    set is_completed = true, current_question_id = null, current_round_id = null
    where id = gameId;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `rollbackGame` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `rollbackGame`(in gameId INT, in userId INT)
sp: BEGIN
	
	DECLARE allowed INT DEFAULT 0;
    DECLARE currentRound INT DEFAULT NULL;
    DECLARE currentQuestion INT DEFAULT NULL;

    DECLARE nextRound INT DEFAULT NULL;
    DECLARE nextQuestion INT DEFAULT NULL;
    DECLARE roundComplete INT DEFAULT 0;

    DECLARE lastQuestionInRound INT;
    DECLARE lastRoundInGame INT;
    DECLARE firstQuestionInRound INT;
    DECLARE firstRoundInGame INT;
    DECLARE gameCompleted INT;
    DECLARE roundCompleted INT;
    

   	select 
		case when exists (select 1 from games where id = gameId and owner_user_id = userId) then 1 else 0 end into allowed
	from dual;

	if allowed = 0 then
		leave sp;
	end if;

    
    select is_completed into gameCompleted
    from games
    where id = gameId;
    
    select r1.id into lastRoundInGame
    from rounds r1	
    where r1.game_id = gameId
    order by sort desc
    limit 1;

    if gameCompleted = true then
        
        update games
        set current_round_id = lastRoundInGame, is_completed = false
        where id = gameId;

        leave sp;
    end if;

    

    select current_question_id, current_round_id into currentQuestion, currentRound
    from games
    where games.id = gameId;

    if currentRound is null and currentQuestion is null then
        
        leave sp;
    end if;

    if currentRound is null then
        
        leave sp;
    end if;

     
    
    
    select is_completed into roundCompleted
    from rounds
    where id = currentRound;

    if roundCompleted = true then
        
        update rounds
        set is_completed = false
        where id = currentRound;

        update games
        set current_question_id = (
            select id
            from questions
            where round_id = currentRound
            order by sort desc
            limit 1
        )
        where id = gameId;

        leave sp;
    end if;

    

    if currentQuestion is not null then
        
        select id into firstQuestionInRound
        from questions
        where round_id = currentRound
        and sort = 1;


        if currentQuestion = firstQuestionInRound then
            
            update games
            set current_question_id = null
            where id = gameId;

            leave sp;
        end if;

        
        update games
        set current_question_id = (
            select id
            from questions
            where round_id = currentRound
            and sort = (
                select sort -1
                from questions
                where id = currentQuestion
            )
        )
        where id = gameId;

        leave sp;
    end if;

    
    if currentRound = firstRoundInGame then 
        
        update games
        set current_question_id = null, current_question_id = null
        where id = gameId;

        leave sp;
    end if;

    
    update games
    set current_round_id = (
        select id
        from rounds
        where game_id = gameId
        and sort = (
            select sort - 1
            from rounds
            where id = currentRound
        )
    )
    where id = gameId;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `generator_16`
--

/*!50001 DROP VIEW IF EXISTS `generator_16`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`trivia_user`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `generator_16` AS select 0 AS `n` union all select 1 AS `1` union all select 2 AS `2` union all select 3 AS `3` union all select 4 AS `4` union all select 5 AS `5` union all select 6 AS `6` union all select 7 AS `7` union all select 8 AS `8` union all select 9 AS `9` union all select 10 AS `10` union all select 11 AS `11` union all select 12 AS `12` union all select 13 AS `13` union all select 14 AS `14` union all select 15 AS `15` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `generator_256`
--

/*!50001 DROP VIEW IF EXISTS `generator_256`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`trivia_user`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `generator_256` AS select ((`hi`.`n` * 16) + `lo`.`n`) AS `n` from (`generator_16` `lo` join `generator_16` `hi`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-06 19:02:37
