import { AnswerService } from './answer.service.js';
import { MediaService } from './media.service.js';
import { QuizService } from './quiz.service.js';
import { UserQuizService } from './user-quiz.service.js';
import { UserService } from './user.service.js';

export const createServicesContainer = () => {
  const user = new UserService();
  const quiz = new QuizService();
  const userQuiz = new UserQuizService();
  const answer = new AnswerService();
  const media = new MediaService();

  return Object.freeze({
    user,
    media,
    answer,
    quiz,
    userQuiz,
  });
};

export type Services = ReturnType<typeof createServicesContainer>;
