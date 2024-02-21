const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors=require('cors');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:4200' }));
// Define your secret key. This should ideally be stored securely and not hard-coded.
const secretKey = '111';

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your HTML page


// Handle POST request to generate token
app.post('/generate-token', (req, res) => {
    // Retrieve username and password from the form
    const { username, password } = req.body;

    // Assuming some authentication logic here to validate username and password

    // Data to be encoded in the token
    const payload = {
        username: username
    };

    // Generate JWT token with a 30-minute expiration
    const token = jwt.sign(payload, secretKey, { expiresIn: '30m' });

    // Redirect user to an HTML page with the token as a query parameter
  console.log(token);

//   res.redirect(`/html-page?token=${token}`);
});





// Serve your HTML page with user data
app.post('/html-page', (req, res) => {
    try {
        // Retrieve the token from the query parameter
        const token = req.query.token;

  console.log(token);

        // Verify the token
        const decodedToken = jwt.verify(token, secretKey);

        // Extract user data from the token
        const { username } = decodedToken;

        // Render your HTML page with user data
    console.log(username);
      res.json({username});

    } catch (error) {
        console.error(error);
        res.status(401).send('Unauthorized');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
