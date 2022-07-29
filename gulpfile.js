//імпорт головного модуля
import gulp from "gulp";
//історія шляхів
import { path } from "./gulp/config/path.js";
//Передаємо значення в глобальну змінну
global.app = {
    path: path,
    gulp: gulp
}

//імпорт задач
import { copy } from "./gulp/tasks/copy.js";

//виконання задачі за завмовчуванням
gulp.task('default', copy);