// ==================== DATA STORAGE ====================
let tasks = JSON.parse(localStorage.getItem('categoryTasks')) || [];
let currentFilter = 'all';

// Set today's date as default
document.getElementById('dateInput').valueAsDate = new Date();

// ==================== CORE FUNCTIONS ====================

function saveTasks() {
  localStorage.setItem('categoryTasks', JSON.stringify(tasks));
  updateStats();
  renderTasks();
}

// Add task using only category, date, and time
function addTask() {
  const categoryInput = document.getElementById('categoryInput');
  const dateInput = document.getElementById('dateInput');
  const timeInput = document.getElementById('timeInput');

  const task = {
    id: Date.now(),
    category: categoryInput.value,
    date: dateInput.value,
    time: timeInput.value,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.unshift(task);
  dateInput.valueAsDate = new Date();
  timeInput.value = '';
  saveTasks();
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
  }
}

function deleteTask(id) {
  if (confirm('Delete this task?')) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
  }
}

// Edit only allows changing category, date, time
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  const taskEl = document.getElementById(`task-${id}`);
  taskEl.classList.add('edit-mode');
  taskEl.innerHTML = `
    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} disabled>
    <div class="task-content">
      <div class="task-meta-inputs">
        <select id="edit-cat-${id}">
          <option value="Study" ${task.category==='Study'?'selected':''}>Study</option>
          <option value="Playing" ${task.category==='Playing'?'selected':''}>Playing</option>
          <option value="Exercise" ${task.category==='Exercise'?'selected':''}>Exercise</option>
          <option value="Sleeping" ${task.category==='Sleeping'?'selected':''}>Sleeping</option>
          <option value="Work" ${task.category==='Work'?'selected':''}>Work</option>
          <option value="Shopping" ${task.category==='Shopping'?'selected':''}>Shopping</option>
          <option value="Reading" ${task.category==='Reading'?'selected':''}>Reading</option>
          <option value="Other" ${task.category==='Other'?'selected':''}>Other</option>
        </select>
        <input type="date" id="edit-date-${id}" value="${task.date}">
        <input type="time" id="edit-time-${id}" value="${task.time}">
      </div>
    </div>
    <div class="task-actions">
      <button class="icon-btn btn-save" onclick="saveEdit(${id})" title="Save">✓</button>
      <button class="icon-btn btn-cancel" onclick="cancelEdit()" title="Cancel">✕</button>
    </div>
  `;
}

function saveEdit(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  task.category = document.getElementById(`edit-cat-${id}`).value;
  task.date = document.getElementById(`edit-date-${id}`).value;
  task.time = document.getElementById(`edit-time-${id}`).value;
  saveTasks();
}

function cancelEdit() {
  renderTasks();
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderTasks();
}

function formatDate(dateStr) {
  if (!dateStr) return 'No date';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(timeStr) {
  if (!timeStr) return 'No time';
  const [h, m] = timeStr.split(':');
  const hour = parseInt(h);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${m} ${ampm}`;
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  let filteredTasks = tasks;

  if (currentFilter === 'pending') {
    filteredTasks = tasks.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filteredTasks = tasks.filter(t => t.completed);
  } else if (currentFilter !== 'all') {
    filteredTasks = tasks.filter(t => t.category === currentFilter);
  }

  if (filteredTasks.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <div>No tasks found</div>
      </div>
    `;
    return;
  }

  taskList.innerHTML = filteredTasks.map(task => `
    <div class="task-item ${task.completed ? 'completed' : ''}" id="task-${task.id}">
      <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleComplete(${task.id})">
      <div class="task-content">
        <span class="task-category">${task.category}</span>
        <div class="task-meta">
          <span class="task-datetime">📅 ${formatDate(task.date)}</span>
          <span class="task-datetime">⏰ ${formatTime(task.time)}</span>
        </div>
      <div class="task-actions">
        <button class="icon-btn btn-edit" onclick="editTask(${task.id})" title="Edit">✏️</button>
        <button class="icon-btn btn-delete" onclick="deleteTask(${task.id})" title="Delete">🗑️</button>
      </div>
    </div>
  `).join('');
}

function updateStats() {
  document.getElementById('totalTasks').textContent = tasks.length;
  document.getElementById('pendingTasks').textContent = tasks.filter(t => !t.completed).length;
  document.getElementById('completedTasks').textContent = tasks.filter(t => t.completed).length;
}

// Initialize
updateStats();
renderTasks();