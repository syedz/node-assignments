# Idea Theorem Interview Assignment

## Project 1: Data Aggregation System

### Getting Started

Navigate to the project and install dependencies:

```
cd student-summaries
```

```
npm install
```

Copy `sample.config.env` to `config.env` and configure your MongoDB details as needed.

```
PORT=3002
DATABASE=mongodb+srv://<change-to-your-username>:<PASSWORD>@<change-to-your-url>
DATABASE_LOCAL=mongodb://localhost:27017/
DATABASE_PASSWORD=<change-to-your-password>
```

Import data into MongoDB (optional):

```
node dev-data/import-dev-data.js --import
```

Delete data from MongoDB (optional):

```
node dev-data/import-dev-data.js --delete
```

Run the server:

```
npm run dev
```

###

## API Calls

### Get summary

An endpoint that provides summaries like the total number of students, the average age of students, and the number of classes offered.

**Request**

`GET /stats/summaries`

```
curl -i -H 'Accept: application/json' http://localhost:3002/stats/summaries
```

**Response**

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 96
ETag: W/"60-cNgqEu11uNPotRtjBcf4L/McLa4"
Date: Thu, 23 Nov 2023 15:14:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
   "status":"success",
   "data":{
      "totalStudents": 7,
      "averageAge": 20.714285714285715,
      "totalClasses": 7
   }
}
```

## Project 2: Real-Time Communication Feature

## Project 3: Basic API with Scalability Considerations
