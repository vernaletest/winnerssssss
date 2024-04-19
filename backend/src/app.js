const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Define a route for the root URL
app.get('/', (req, res) => {
    // res.json({ message: "Hello from the backend!" });
    res.send('Hello from Express backend!');

});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
``
