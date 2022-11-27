import {AnswerOptionsSet} from "./answer-options-set";
import {CorrectAnswer} from "./correct-answer";

export interface Question {
    questionId: number;
    description: string;
    givenAnswer: string;
    answerOptionsSet: AnswerOptionsSet;
    correctAnswer: CorrectAnswer;
}
