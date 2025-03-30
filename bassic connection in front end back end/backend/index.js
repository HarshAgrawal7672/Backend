import express from 'express';


const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get("/api/jokes", (req, res) => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a duck that can't quack? A Mommy Duck!",
        "Why did the chicken cross the road? To get to the other side!"
    ];  
    res.send(jokes);
})

const port =process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});