const express = require('express')
const app = express()
const router = require('./routes')
const path = require('path')
const PUBLISHABLE_KEY = "pk_test_51I4mY3Ln0MQyz2xR5tXPzrMB7gTypjrFFUgGFZN45fOB5eL0mF4RNAoNfvVti7cr5hIJpy72yu3JL8cNiC8ljU1M00Y3C8cxIJ"
const SECRET_KEY = "sk_test_51I4mY3Ln0MQyz2xRvHtB2Ru6aBOug5739E94zn8SsBTXb8mgkD9shlFE2WctK9CF6JMlmxtCEsGQJhYmwaLJh1BU00dex65rha"

const PORT = process.env.PORT || 3000
app.set("view engine" , "ejs")
app.use(express.json())
app.use('/',router)

app.listen(PORT , () => {
  console.log(`Server running on ${PORT}...`)
})