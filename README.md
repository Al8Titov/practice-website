1. Настройка проекта
   -линтер, притер, editorconfig
   -установка и настройка пакетов
   -установка и настройка иконочного шрифта

2. Структура данных приложения

Области хранения данных:

- база данных на json-server
- BFF
- Redux Store

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего), store (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью) , store (использование на клиенте)
- тех. карты: БД (Список тех. карт), store (отображение в браузере)

Таблицы БД:

- Пользователи - users: id / login / password / registed_at / role_id
- Роли - roles: id / name
- Тех карты technologicalMaps: id / title / image_url / content / published_at

Схему состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для Redux Store (на клиенте):

- user: id / login / roleId
- technologicalMaps: массив technologicalMap: id / title / imageUrl / publishedAt
- technologicalMap: id / title / imageUrl / publishedAt

3. Сделать набросок дизайна экранов:
