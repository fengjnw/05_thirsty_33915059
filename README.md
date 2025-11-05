
# 05_thirsty_33915059

A brief Express and EJS demo showcasing a dynamic website for a bar named "The Thirsty Student." The site includes pages such as index, about, register, search, and survey.

## Requirements

- Node.js 18+ recommended

## Run

1. Install:  npm install
2. Start:    node index.js
3. Open:     http://localhost:8000/

## Files

- `index.js` — server
- `routes/main.js` — route handlers
- `views/` — EJS templates
- `views/partials/header.ejs` — site header
- `public/styles.css` — CSS

## Routes

- GET `/` -> home (renders `index.ejs`)
- GET `/about` -> renders `about.ejs`
- GET `/search` -> renders `search.ejs`
- GET `/search_result` -> returns search query result
- GET `/register` -> renders `register.ejs`
- POST `/registered` -> handles registration form
- GET `/survey` -> renders `survey.ejs`
- POST `/survey_result` -> renders `survey_result.ejs` to show survey responses

## Edit

- Styles: edit `public/styles.css`
- Templates: edit files under `views/`