// ...existing code...
app.use(express.static(path.join(__dirname, 'hello-world-app', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'hello-world-app', 'public', 'index.html'));
});
// ...existing code...