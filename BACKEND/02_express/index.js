import express from "express";

const app = express();

const port = 3000;
app.use(express.json());

let teaData = [];
let nextId = 1;

//add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

//route get all tea
app.get("/teas", (req, res) => {
  res.status(200).send(newTea);
});
//get with ID
app.get("/teas/:id"),
  (req, res) => {
    const tea = teaData.find((t) => t.id === parseInt(req.params.id));
    if (!tea) {
      return res.status(404).send("Tea not found");
    }
    res.status(200).send(tea);
  };
//update
app.put("/teas", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.send(200).send(tea);
});
//delete
app.delete("/teas/:id"), (req,res) => {
    const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).send('tea not found')
    }
    teaData.splice(index, 1)
    return res.status(204).send('deleted')
}

//other routes:
app.get("/", (req, res) => {
  res.send("Hello from Hitesh and his tea!");
});
app.get("/ice-tea", (req, res) => {
  res.send("Which ice tea would you like?");
});
app.get("/twitter", (req, res) => {
  res.send("hiteshdotcom");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
