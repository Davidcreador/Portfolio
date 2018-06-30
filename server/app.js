require('dotenv').config()
require('ignore-styles')
const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const medium = require('medium-sdk')

require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})

// routes
const index = require('./routes/index')
const api = require('./routes/api')

const app = express()

const client = new medium.MediumClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
})

const redirectURL = 'https://hdev.tech/callback/medium'

let url = client.getAuthorizationUrl('secretState', redirectURL, [
  medium.Scope.BASIC_PROFILE,
  medium.Scope.PUBLISH_POST
])

console.log(url)

client.exchangeAuthorizationCode('ed49f993d3c9', redirectURL, function(err, token) {
  client.getUser(function(err, user) {
    client.createPost(
      {
        userId: user.id,
        title: 'A new post',
        contentFormat: medium.PostContentFormat.HTML,
        content: '<h1>A New Post</h1><p>This is my new post.</p>',
        publishStatus: medium.PostPublishStatus.DRAFT
      },
      function(err, post) {
        console.log(token, user, post)
      }
    )
  })
})

// Support Gzip
app.use(compression())

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

app.use('/', index)

app.use('/api', api)

module.exports = app
