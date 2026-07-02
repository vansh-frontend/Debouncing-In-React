````md
<div align="center">

# ⚡ Debouncing in React

<img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" width="120"/>

### Master Debouncing with React Hooks 🚀

<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=24&duration=3000&pause=1000&color=61DAFB&center=true&vCenter=true&width=700&lines=React+Debouncing+Tutorial;Fetch+API+%2B+Search+Filtering;Performance+Optimization;React+Hooks+in+Action" />

</div>

---

# 📖 About

This project demonstrates one of the most important optimization techniques in modern React applications — **Debouncing**.

Instead of executing expensive operations on **every keystroke**, the application waits until the user pauses typing before performing the search.

The project combines **React Hooks**, **Fetch API**, and **Client-side Filtering** to build a clean and efficient search experience.

---

# ✨ Features

<table>
<tr>

<td align="center" width="25%">

### 🌐 Fetch API

Loads data from a public REST API.

</td>

<td align="center" width="25%">

### ⚡ Debouncing

Search executes after **500ms**.

</td>

<td align="center" width="25%">

### 🔍 Smart Search

Search by **Title**, **Body**, and **User ID**.

</td>

<td align="center" width="25%">

### ⚛️ React Hooks

Built using **useState** and **useEffect**.

</td>

</tr>
</table>

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ React | UI Library |
| 📜 JavaScript (ES6+) | Programming Language |
| 🌐 Fetch API | Retrieve Data |
| 🎣 useState | State Management |
| 🔄 useEffect | Side Effects |
| 🔍 Array.filter() | Search Functionality |

---

# 📂 Project Structure

```text
src
│
├── Debounce.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

# ⚙️ Application Workflow

```text
Application Starts
        │
        ▼
Fetch Posts From API
        │
        ▼
Store Posts in State
        │
        ▼
Render All Posts
        │
        ▼
────────────────────────────────────

User Starts Typing
        │
        ▼
Update search State
        │
        ▼
Start 500ms Timer
        │
        ▼
User Typing Again?
      ┌───────┴────────┐
      │                │
     Yes              No
      │                │
Clear Previous      Update
Timer               debouncedSearch
      │                │
      └───────┬────────┘
              ▼
        Filter Posts
              │
              ▼
      Display Results
```

---

# 🧠 What is Debouncing?

Debouncing is a technique that **delays** the execution of a function until the user has stopped performing an action for a specified amount of time.

Instead of executing on every event, it waits until the events stop.

---

# 📊 Without Debouncing

```text
User Types:

R
Re
Rea
Reac
React

↓

Search()
Search()
Search()
Search()
Search()

5 Executions
```

---

# ⚡ With Debouncing

```text
User Types:

R
Re
Rea
Reac
React

↓

Wait 500ms

↓

Search()

Only 1 Execution
```

---

# 🌐 Fetching Data

<details>

<summary><b>📥 Fetch Posts</b></summary>

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data));
}, []);
```

The API is called **once** when the component mounts.

</details>

---

# ⏳ Debounce Logic

<details>

<summary><b>⚡ Debounce Implementation</b></summary>

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);

  return () => clearTimeout(timer);
}, [search]);
```

### How it works

- User types
- Timer starts
- User types again
- Previous timer is cancelled
- New timer starts
- User stops typing
- Search runs once

</details>

---

# 🔍 Search Filtering

<details>

<summary><b>Search Logic</b></summary>

```jsx
const filteredPosts = posts.filter(
  (post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    post.body.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    post.userId.toString().includes(debouncedSearch)
);
```

The search checks:

- Title
- Body
- User ID

</details>

---

# 📈 Performance Comparison

| Without Debounce | With Debounce |
|-----------------|---------------|
| Search on every key press | Search after delay |
| More renders | Fewer renders |
| More CPU usage | Optimized |
| More API calls | Reduced API calls |
| Poor UX | Smooth UX |

---

# 💼 Real-World Use Cases

- 🔍 Search Bars
- 🤖 AI Chat Applications
- 📧 Email Search
- 🛒 Product Search
- 🎵 Music Search
- 🎬 Movie Search
- 🌍 Location Search
- 📚 Documentation Search
- 🏢 Admin Dashboards
- 📦 Inventory Systems

---

# ⚠️ Common Mistakes

❌ Forgetting to clear the timer

```jsx
clearTimeout(timer);
```

---

❌ Calling the API on every key press

```text
R
Re
Rea
Reac
React
```

---

❌ Missing dependency array in `useEffect`

```jsx
useEffect(() => {
}, []);
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/vansh-frontend/Debouncing-In-React.git
```

Navigate to the project

```bash
cd debounce-react
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# 🎯 Learning Outcomes

After completing this project, you'll understand:

- ✅ React Hooks
- ✅ useState
- ✅ useEffect
- ✅ Fetch API
- ✅ Debouncing
- ✅ Search Optimization
- ✅ Array.filter()
- ✅ Client-side Search
- ✅ Performance Optimization
- ✅ Clean React Patterns

---

# 🚀 Future Improvements

- Custom `useDebounce` Hook
- API-based Search
- Pagination
- Infinite Scroll
- Loading Spinner
- Error Handling
- Search Highlighting
- Recent Searches
- Dark Mode
- TypeScript Support

---

# 🤝 Contributing

Contributions are always welcome.

If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a Pull Request.

---

<div align="center">

## ⭐ If you found this project helpful, consider giving it a star!

<img src="https://readme-typing-svg.demolab.com?font=Poppins&size=18&pause=1000&color=61DAFB&center=true&vCenter=true&width=500&lines=Learn+React.;Optimize+Performance.;Build+Better+Applications." />

### Happy Coding 🚀

</div>
````
