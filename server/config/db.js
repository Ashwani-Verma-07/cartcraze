const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ashverma017:5TpvweTiUzlxcZr9@cluster0.nx8yyug.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
