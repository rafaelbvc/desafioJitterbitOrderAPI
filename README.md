# Order API - Technical Challenge

Simple REST API developed with Node.js and MongoDB to manage orders.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose

## Project Structure

order-api
src/
controllers/
models/
routes/
app.js
server.js

## Installation

1. Install dependencies

npm install

2. Start MongoDB locally

3. Run the project

npm start

Server will run on:

http://localhost:3000

## Endpoints

Create Order

POST /order

Get Order

GET /order/:orderId

List Orders

GET /order/list

Update Order

PUT /order/:orderId

Delete Order

DELETE /order/:orderId

## Example Request

POST http://localhost:3000/order

{
"numeroPedido":"v10089015vdb-01",
"valorTotal":10000,
"dataCriacao":"2023-07-19T12:24:11.5299601+00:00",
"items":[
{
"idItem":"2434",
"quantidadeItem":1,
"valorItem":1000
}
]
}

## Author

Rafael Vendramini