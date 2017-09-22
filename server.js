const express = require('express'),
app = express();

const PORT = process.env.PORT || 3001

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("musicandme frontend running on port: ", PORT);
});
