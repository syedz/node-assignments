# Idea Theorem Interview Assignment

# Project 1: Data Aggregation System

## Getting Started

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

## API Calls

### Get summary

An endpoint that provides summaries of the total number of students, the average age of students, and the number of classes offered.

**Request**

`GET /stats/summaries`

```
curl -i -H 'Accept: application/json' http://localhost:3002/stats/summaries
```

**Response**

```
{
   "status":"success",
   "data":{
      "totalStudents": 7,
      "averageAge": 20.714285714285715,
      "totalClasses": 7
   }
}
```

# Project 2: Real-Time Communication Feature

## Getting Started

Navigate to the project and install dependencies:

```
cd real-time-chat
```

```
npm install
```

Run the server:

```
npm run dev
```

## Usage

Navigate to [http://localhost:3000/](http://localhost:3000/) in 2 browser tabs

Notice the following on the server:

```
Client: <some-socket-id> has connected
Client: <some-other-socket-id> has connected
```

Notice similar messages in the console of each browser:

```
Client: <some-socket-id>
Server says: { data: "Welcome from the server" }
```

Send a message from one of the browser tabs by using the text box. After pressing "Send", notice the output on all open browser tabs.

# Project 3: Basic API with Scalability Considerations

## Getting Started

Navigate to the project and install dependencies:

```
cd basic-api
```

```
npm install
```

Run the server:

```
npm run dev
```

> Data is being loaded/saved in `basic-api/data/students.json`

## API Calls

### Add new student

**Request**

`POST /students`

Add a new student.

**Body**

```
{
  "first_name": "John",
  "last_name": "Smith",
  "email": "js@gmail.com"
}
```

### Get student

**Request**

`GET /students/{id}`

Retrieve student details.

**Response**

```
{
  "status": "success",
  "data": {
    "student": [
      {
        "id": 4,
        "first_name": "Emily",
        "last_name": "Smith",
        "email": "emily.smith@example.com"
      }
    ]
  }
}
```

### Get student

**Request**

`GET /students?cursor={cursor}`

After sending a number, response will contain the users from 1 - {cursor}. Example `/students?cursor=3` returns the first 3 users.

**Response**

```
{
  "status": "success",
  "data": {
    "students": [
      {
        "id": 1,
        "first_name": "Zeeshan",
        "last_name": "Syed",
        "email": "zs@gmail.com"
      },
      {
        "id": 2,
        "first_name": "Aisha",
        "last_name": "Khan",
        "email": "aisha.khan@example.com"
      },
      {
        "id": 3,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@gmail.com"
      }
    ]
  }
}
```

### Update student

**Request**

`PUT /students/{id}`

Update student information.

**Body**

```
{
  "first_name": "Emily Mary",
  "last_name": "Smith",
  "email": "emily.mary.smith@example.com"
}
```

### Delete student

**Request**

`DELETE /students/{id}`

Remove a student.
