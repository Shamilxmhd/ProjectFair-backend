   ----------Mongo DB-------------

1. Open Source document db
2. NoSQL Database
3. Collection used to hold documents
4. Document : set of key-value pair JSON, dynamic schema

          ---------RDBMS-----------          -----------MONGODB--------------
          -  Database                                   Database
          -  Table                                      Collection
          -  Tuple/Row                                  Document
          -  Column                                     Field
          -  Primary key                                _id key (12 bytes hexadecimal number  )

5. Advantages of MongoDB
     - Schemaless
     - Faster
     - Scalable


  --------Mongoose : ODM Library-----------

  1. Object Data Modeling Library for MongoDB And Nodejs
  2. Used to translate between object in node app and representation of those object in MongoDB
  3. Define Schema for storing documents in a collection 
      - Schema type (String,Number,Boolean...)
      - Option (required,default...)
  4. Create Model similar to collection where we can store documents
  5. Install mongoose : npm i mongoose
  7. Define connection between mongoDB and Node using mongoose
      - create a new folder in server : DB
      - create a js file to define connection
      - import mongoose
