DROP PROCEDURE IF EXISTS createTestGame;

CREATE PROCEDURE createTestGame(
    in gameId LONG, 
    in rounds INT, 
    in questions INT, 
    in answers INT
)
BEGIN
    DECLARE currentRound INT DEFAULT 1;
    DECLARE currentRoundId INT DEFAULT 1;
    DECLARE currentQuestion INT DEFAULT 1;
    DECLARE currentQuestionId INT DEFAULT 1;
    DECLARE currentAnswer INT DEFAULT 1;
    
    roundLoop: LOOP
        
        insert into rounds (game_id, name, sort) values (gameId, CONCAT('Round #',currentRound), currentRound);
        
        select id INTO currentRoundId
        from rounds r1
        where r1.sort = currentRound
        and r1.game_id = gameId;
        
        set currentQuestion = 1;
        
        questionLoop: LOOP
        
            insert into questions (round_id, question, image_url, sort)
            select currentRoundId, 
                   CONCAT('Round: ',currentRound,' Q:',currentQuestion), 
                   'https://media0.giphy.com/media/GYAiZdntWJE1zyNOLp/giphy.gif', 
                   currentQuestion;
            
            select q1.id into currentQuestionId
            from questions q1 
            where q1.round_id = currentRoundId
            and q1.sort = currentQuestion;
        
            set currentAnswer = 1;
            
            answerLoop: LOOP
            
                insert into answers (question_id, answer, is_correct)
                select currentQuestionId, CONCAT('Q:',currentQuestion,' A:',currentAnswer), currentAnswer=1;
                
                set currentAnswer = currentAnswer + 1;
                if currentAnswer > answers then
                    leave answerLoop;
                end if;
            
            END LOOP answerLoop;
            
            set currentQuestion = currentQuestion + 1;
            if currentQuestion > questions then
                leave questionLoop;
            end if;
        
        END LOOP questionLoop;
        
        set currentRound = currentRound + 1;
        
        if currentRound > rounds then
            LEAVE roundLoop;
        end if;
    END LOOP roundLoop;
END;