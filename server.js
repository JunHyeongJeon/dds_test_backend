const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login/auth', (req, res) => {
  res.send({
    token: 'test123'
  });
  console.log(req.body);
});
app.use('/arbitrations/list', (req, res) => {
  res.send(
    {
      "status": "OK",
      "result": {
      "content": [
              {
                  "id": 1,
                  "createdDate": "2022-10-10",
                  "targetPerson": "김ㅇㅇ",
                  "birth": "2022-10-10",
                  "behaviorType": "달리기",
                  "observationStart": "2022-10-10",
                  "observationEnd": "2022-10-10",
                  "arbitrationStart": "2022-10-10",
                  "arbitrationEnd": "2022-10-10",
                  "reasonType": "달리기"
              }
          ],
          "pageable": {
          "sort": {
              "empty": false,
              "sorted": true,
              "unsorted": false
          },
          "offset": 0,
          "pageNumber": 0,
          "pageSize": 1,
          "paged": true,
          "unpaged": false
          },
          "totalPages": 5,
          "totalElements": 5,
          "last": false,
          "size": 1,
          "number": 0,
          "sort": {
              "empty": false,
              "sorted": true,
              "unsorted": false
          },
          "first": true,
          "numberOfElements": 1,
          "empty": false
      }
    }
  );
  console.log(req.body);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080'));
