start_command =
    .description = Старт
language_command =
    .description = Сменить язык
setcommands_command =
    .description = Установить команды

welcome = Добро пожаловать в <b>Dualboot Quiz Bot</b>.

onboarding =
    .email = Для начала работы введите корпоративный e-mail.
    .email-invalid = Неверный e-mail адрес. Введите свой корпоративный e-mail.
    .email-exists = Этот e-mail уже используется. Введите свой корпоративный e-mail.
    .name = Введите имя как в корпоративном Slack'e.
    .name-invalid = Неверное имя. Введите имя как в корпоративном Slack'e.
    .done = Теперь вы можете использовать /profile для просмотра и редактирования профиля. И /quiz для просмотра доступных квизов.

profile =
    .message = <i>{$name}</i>, добро пожаловать!
    .answers = Мои ответы
    .change-language = Сменить язык
    .quizzes = Доступные квизы

quiz =
    .list = Доступные квизы:
        {$quizzes}
    .not-found = Квиз не найден.
    .start = Начать квиз
    .stop = Выйти из квиза
    .leaderboard = Таблица лидеров
    .continue = Продолжить
    .time-limit = Вам нужно подождать { $time ->
        [one] одну секунду
        *[few] {$time} секунды
        [many] {$time} секунд
    }, прежде чем ответить снова.
    .notify-about-quiz = Новый вопрос доступен в квизе <b>{$name}</b>. /quiz_{$slug}

media =
    .not-found = Медиа не найдено.

question =
    .new-not-found = Пока новых вопросов нет.
    .next = <b>Введите ответ на следующий вопрос:</b>
        {$question}

answer =
    .correct = Верно!
    .incorrect = Неверно. Попробуйте еще раз.

language =
    .select = Пожалуйста, выберите язык:
    .changed = Язык изменен.
    .unknown = Неизвестный язык.

admin =
    .commands-updated = Команды обновлены.
unhandled = Нераспознанная команда. Попробуйте /start