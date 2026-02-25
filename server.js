const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let notes = [];

app.get("/notes", (req, res) => {
  console.log("Notes in server memory (GET):", notes);
  res.json(notes);
});

app.post("/notes", (req, res) => {
  const note = req.body?.note;
  if (typeof note !== "string" || note.trim().length === 0) {
    return res.status(400).json({ message: "note is required" });
  }

  notes.push(note.trim());

  console.log("Notes in server memory (POST):", notes);
  res.json({ message: "Added" });
});

app.delete("/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (!Number.isFinite(id) || id < 0 || id >= notes.length) {
    return res.status(404).json({ message: "Not found" });
  }

  notes.splice(id, 1);

  console.log("Notes in server memory (DELETE):", notes);
  res.json({ message: "Deleted" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));

