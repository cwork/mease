# MEASE

**M**ongoose **E**xpress **API** **S**etup **E**ngine

A custom framework bundle of modules and code to create a starting point for an API using Mongo and Express.

## Packaged Modules

- Core
  - express
  - mongoose
  - cors
- Dev
  - nodemon
- Util
  - dotenv
  - colors
  - morgan
  - slugify
  - express-fileupload
  - nodemailer
- Security
  - helmet
  - xss-clean
  - express-rate-limit
  - hpp
  - express-mongo-sanitize
- Auth
  - jswonwebtoken
  - bcryptjs
  - cookie-parser

## Features

- Server file
  - main entry point that loads necessary modules and middleware, including router files
  - loads and connects to the mongo database
  - provides a graceful exit if unable to connect to the database
- Folder structure
  - config - env configuration, database loader
  - resources - each resource will have its own folder for model, controllers and route
  - middlewares - custom middlewares
  - utils - utility files (custom error, etc...)
- Error handling
