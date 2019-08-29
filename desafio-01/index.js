const express = require('express');

const app = express();

var numberOfRequests = 0;
const projects = [];

/**
 * Recebendo corpo de requisições no
 * formato JSON
 */
app.use(express.json());

/**
 * Fazendo o log do número de requisições 
 * ao servidor
 */
app.use((req, res, next) => {
  console.log(`Number of requests: ${++numberOfRequests}`);
  return next();
});

/**
 * Middleware que checa a existência do objeto
 */
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id === id);

  if (projectIndex === -1) {
    return res.status(404).json({ message: 'Project not found.' });
  }

  req.project = projects[projectIndex];
  req.projectIndex = projectIndex;
  return next();
}

/**
 * Middleware que valida o campo `id` enviado na 
 * requisição
 */
function checkIdInRequest(req, res, next) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ 
      message: 'ID is required.' 
    });
  }
  if (projects.some(p => p.id === id)) {
    return res.status(400).json({ 
      message: 'Project with this ID already exists.' 
    });
  }
  return next();
}

/**
 * Middleware que valida o campo `title` enviado
 * na requisição
 */
function checkTitleInRequest(req, res, next) {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Title is required.' });
  }
  return next();
}

/**
 * Projects
 */
app.get('/projects', (req, res) => {
  return res.json(projects);
});

app.post('/projects', checkIdInRequest, checkTitleInRequest, (req, res) => {
  const { id, title } = req.body;

  const project = { id, title, tasks: [] };
  projects.push(project);

  return res.status(201).json(project)
});

app.get('/projects/:id', checkProjectExists, (req, res) => {
  return res.json(req.project);
});

app.put('/projects/:id', checkProjectExists, checkTitleInRequest, (req, res) => {
  const { title } = req.body;

  req.project.title = title;

  return res.json(req.project);
});

app.delete('/projects/:id', checkProjectExists, (req, res) => {
  delete projects.splice(req.projectIndex, 1);
  return res.status(204).send();
});

/**
 * Tasks
 */
app.post('/projects/:id/tasks', checkProjectExists, checkTitleInRequest, (req, res) => {
  const { title } = req.body;
  
  req.project.tasks.push(title);

  return res.status(201).json(req.project);
});

app.listen(3000);