markdown# 📋 Category Task Manager - Web App

**SkillCraft Technology Web Development Task**

A clean to-do manager that organizes tasks by category + date/time. No task names needed — just pick a category and schedule it. Built with vanilla HTML, CSS, and JavaScript.

## 🚀 Live Demo
https://mounikainturi.github.io/SCT_WD_4/

## 📂 GitHub Repository
https://github.com/mounikainturi/SCT_WD_4

## 📸 Preview
*Blue gradient UI with category filters, stats dashboard, and localStorage*

## 📋 Features & Task Requirements

| Requirement | How I Implemented It |
| --- | --- |
| **Add/Edit/Delete Tasks** | Add by category/date/time, inline edit mode, delete with confirm |
| **Task Status** | Checkbox toggle for completed/pending with visual feedback |
| **Filter Tasks** | Filter by All, Pending, Completed, or specific category |
| **Local Storage** | All tasks persist in browser using `localStorage` |
| **Responsive Design** | CSS Grid + Flexbox, works on mobile and desktop |

## ✨ Key Features

1. **Category-Based System**: 8 preset categories - Study, Playing, Exercise, Sleeping, Work, Shopping, Reading, Other
2. **No Task Names**: Fast scheduling — just category + date + time
3. **Smart Filters**: One-click filter by status or category type
4. **Live Stats Dashboard**: Total, Pending, and Completed task counters
5. **Inline Editing**: Edit category, date, and time without popup modals
6. **Date/Time Formatting**: Auto-converts to readable format - `Oct 15, 2026` + `2:30 PM`
7. **Default Date**: Today's date pre-filled for quick task creation
8. **Empty States**: Friendly message when no tasks match filter

## 🛠️ Tech Stack

- **HTML5**: Semantic structure, form controls
- **CSS3**: CSS Grid, Flexbox, gradients, hover animations
- **Vanilla JavaScript**: CRUD operations, localStorage API, DOM manipulation, event handling
- **Zero Dependencies**: Pure JS for better performance

## 📁 Project Structure
SCT_WD_3/
├── index.html      # App structure + form + task list
├── styles.css      # Blue gradient theme + card UI + responsive grid
├── script.js       # Task logic: add/edit/delete/filter + localStorage
└── README.md       # Documentationjavascript

# Open in browser
cd SCT_WD_3
start index.html  # Windows
open index.html   # Mac🎮 How to Use
Add Task: Select category → pick date/time → click "+ Add Task"Complete Task: Click checkbox to mark done — task gets strikethroughEdit Task: Click ✏️ → change category/date/time → click ✓ to saveDelete Task: Click 🗑️ → confirm deletionFilter: Click filter buttons to view All, Pending, Completed, or specific categoriesTrack Progress: Stats update automatically at the top🎯 What I Learned
localStorage API: Persisting JSON data between browser sessionsArray Methods: .filter(), .find(), .map() for task managementEvent Delegation: Handling dynamic button clicks with onclickDate Handling: valueAsDate, formatting with toLocaleDateString()State Management: Managing tasks array and currentFilter without frameworksConditional Rendering: Different UI for empty state vs task list🎨 Design Decisions
Color Palette: Blue gradient #74b9ff → #0984e3 = productivity/calm themeNo Input Field: Removing task name reduces friction — faster schedulingCategory Pills: Large colored badges make category scanning easyHover Effects: translateX(5px) on tasks for tactile feedbackMobile First: Stacked form layout on mobile, grid on desktop🔮 Future Enhancements
Add reminder notifications using Notification APIExport tasks to CSV/PDFDark mode toggleDrag-and-drop to reorder tasksWeekly calendar view👩‍💻 Author
Mounika InturiTask: SCT_WD_3 @ SkillCraft Technology
