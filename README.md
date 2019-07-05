# node-express-website

This is a train project builded with Node.js + Express + BrowserSync + GULP + SAAS.

## Quick Start

### First steps

1. Install latest version of Node.js.
2. Install yarn package manager (recommended).
3. Download repository(using git or manual)
4. Open unziped repository in terminal

### Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn dev    - launch app in development mode
yarn start  - launch app in prod mode
yarn gulp   - launch gulp server
```

## Design and Development

For design was used:

- SASS with Gulp module thta convert SASS to CSS (gulp-sass)
- EJS for design templates

For development was used:

- Node.js
- Express
- BrowserSync
- Gulp

### Database

As database was used MongoDB ([MLab](https://mlab.com/)) with models:

1. Comment
2. Post
3. User
4. Upload

### Functionality

- LogIn/LogOut
- SignUp
- Add/Edit post
- upload images for post
  