const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
const app = require("./server");

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});
