# Владельцу: начни отсюда

Это официальный релиз документации Whale CeFi от **29 июля 2026 года**.

- Версия: `5.0.0`
- Статус: `official-release`
- Продуктовый домен: `https://whale-cefi.com`
- Документация: `https://docs.whale-cefi.com`
- Официальное юридическое имя stewardship entity: **Whale Foundation**
- Источник истины: GitHub, ветка `main`
- Публичная витрина: GitBook

## Как загрузить через GitHub Desktop

1. Войди в GitHub Desktop под аккаунтом, который имеет доступ к организации
   `Whale-CeFI`.
2. Выбери **File → Clone repository** и клонируй
   `Whale-CeFI/docs.whale-cefi.com`.
3. Открой **Repository → Show in Explorer**.
4. Распакуй содержимое
   `Whale_CeFi_Official_Release_v5.0_GitHub_Desktop.zip` прямо в открытую
   корневую папку репозитория. Сам ZIP в репозиторий не копируй.
5. Убедись, что `.gitbook.yaml`, `README.md` и `SUMMARY.md` находятся рядом
   с папкой `.git`, а не внутри дополнительной родительской папки.
6. Вернись в GitHub Desktop, укажи commit message
   `docs: publish Whale CeFi official documentation v5.0` и нажми
   **Commit to main**.
7. Нажми **Push origin**.
8. На GitHub открой **Actions** и проверь зелёный workflow
   **Validate documentation**.

## Как опубликовать в GitBook

1. В GitBook открой официальный Docs Site Whale CeFi.
2. В основном section нажми **Set up** рядом с **Git Sync**.
3. Выбери GitHub и репозиторий `Whale-CeFI/docs.whale-cefi.com`.
4. Branch: `main`.
5. Project directory: `/`.
6. Направление первого импорта: **GitHub → GitBook**.
7. Проверь навигацию, изображения, таблицы и мобильное отображение.
8. Опубликуй site как официальный релиз и привяжи
   `docs.whale-cefi.com`.

Полная инструкция:
[GitHub → GitBook runbook](control/OWNER_GITHUB_GITBOOK_RUNBOOK_RU.md).

## Проверка релиза

Если доступны Node.js 22 и Python 3:

```bash
npm run build:indexes
npm run check
```

Нормальный результат: 224 reader routes, 72 controlled specifications,
288 failure-mode controls, 360 release-evidence records, 0 errors и 0
warnings.
