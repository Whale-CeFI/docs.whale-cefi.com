# Владельцу: начни отсюда

Это официальный релиз документации Whale CeFi от **28 августа 2026 года**.

- Версия: `5.2.0`
- Статус: `official-release`
- Продуктовый домен: `https://whale-cefi.com`
- Документация: `https://whale-cefi.com/docs`
- Основной customer-facing контрагент и оператор: **Pulpo Fintech, S.A. de C.V. (PSAD-0023), El Salvador**
- Источник истины: GitHub, ветка `main`
- Публичная витрина: GitBook

## Как загрузить через GitHub Desktop

1. Войди в GitHub Desktop под аккаунтом, который имеет доступ к организации `Whale-CeFI`.
2. Выбери **File -> Clone repository** и клонируй `Whale-CeFI/docs.whale-cefi.com`.
3. Открой **Repository -> Show in Explorer**.
4. Помести файлы релиза прямо в корень репозитория. Архив релиза в репозиторий не добавляй.
5. Убедись, что `.gitbook.yaml`, `README.md` и `SUMMARY.md` находятся рядом с папкой `.git`.
6. Создай ветку и pull request с описанием полного diff.
7. Проверь зелёный workflow **Validate documentation**.
8. После проверки объедини pull request в `main`.

## Как опубликовать в GitBook

1. В GitBook открой официальный Docs Site Whale CeFi.
2. В основном section нажми **Set up** рядом с **Git Sync**.
3. Выбери GitHub и репозиторий `Whale-CeFI/docs.whale-cefi.com`.
4. Branch: `main`.
5. Project directory: `/`.
6. Направление синхронизации: **GitHub -> GitBook**.
7. Проверь навигацию, PDF-аудит, изображения, таблицы и мобильное отображение.
8. Проверь публикацию `whale-cefi.com/docs`.

Полная инструкция: [GitHub -> GitBook runbook](control/OWNER_GITHUB_GITBOOK_RUNBOOK_RU.md).

## Проверка релиза

```bash
npm run build:indexes
npm run check
```

Нормальный результат: 227 reader routes, 72 controlled specifications, 288 failure-mode controls, 360 release-evidence records, 0 errors и 0 warnings.
