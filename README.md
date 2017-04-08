[See demo](https://kanistra50.github.io/Smetner/)

# Smetner

Приложение представляет собой простой редактор списка с использованием библиотеки AngularJS .
Имеет два представления (окна):  'Интерфейс списка'  и 'Форма добавления/редактирования'.

Записи сохраняются в localStorage по уникальному автогенерируемому ID.
Для представлений Вывод списка, Добавление, Редактирование определены 3 состаяния (state): 
#/list 
#/list/add 
#/list/edit/:id.

localStorage реализован как сервис, взаимодействует со всем приложением (загрузка списка, сохранение/добавление/удаление
элемента).
Для примера, при первом старте приложения, единоразово закгружается подготовленный список из двух строк.

Области разметки 'Список записей' и 'Форма добавления/редактирования' вынесены в отдельные директивы.
Загрузка и сохранение данных производится в контроллере, данные передаются в
директивы через scopes.
