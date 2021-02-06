# Node.js REST API
This RESTful API was built with Node.js Express and MongoDB Atlas.

## Install Node.js Express
```
npm install express --save
```

## Deployment
```
git clone git@github.com:hannahkim7605/node-js-rest-api.git
cd node-js-rest-api
npm start
```


## 1. GET
```
curl --request GET localhost:3000/posts
```

output example:

> [{"_id":"601d67716a66165e8ba22bd1","title":"title3","description":"sample description","date":"2021-02-05T15:42:41.263Z","__v":0},{"_id":"601d677a6a66165e8ba22bd2","title":"New title","description":"sample description","date":"2021-02-05T15:42:50.097Z","__v":0}]

*-X GET* is an equivalent to *--request GET*.

## 2. POST
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"title":"title1","description":"sample description"}' \
  localhost:3000/posts
```

*--data (-d)* flag implies a POST request so *--request POST* is optional.



## 3. DELETE
```
curl -X DELETE localhost:3000/posts/601d6032574bf35e415c0ed7
```

Replace 601d6032574bf35e415c0ed7 with an appropriate post id.

output example:

> {"n":1,"opTime":{"ts":"6925811322315603990","t":4},"electionId":"7fffffff0000000000000004","ok":1,"$clusterTime":{"clusterTime":"6925811322315603990","signature":{"hash":"LsA2iLSmGD+tMB/huPo8VlKwv3c=","keyId":"6925324809895149570"}},"operationTime":"6925811322315603990","deletedCount":1}



## 4. UPDATE
```
curl --header "Content-Type: application/json" -X PATCH --data '{"title":"New title"}' localhost:3000/posts/601d677a6a66165e8ba22bd2
```

output example:

> {"n":1,"nModified":1,"opTime":{"ts":"6925814088274542613","t":4},"electionId":"7fffffff0000000000000004","ok":1,"$clusterTime":{"clusterTime":"6925814088274542613","signature":{"hash":"okbTKRUckNQghKl5m8HJQFjgayg=","keyId":"6925324809895149570"}},"operationTime":"6925814088274542613"}



References:
- https://mongoosejs.com/docs/guide.html
- https://docs.atlas.mongodb.com/security/add-ip-address-to-list/
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await