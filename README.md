````md
<div align="center">

# 🚀 Debouncing in React

<p>
A simple React project demonstrating <b>Debouncing</b> using
<b>useState</b> and <b>useEffect</b>.
</p>

<p>
The application fetches posts from an API and filters them only after the
user stops typing for <b>500ms</b>.
</p>

<img src="https://img.shields.io/badge/React-19-blue?logo=react" />
<img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" />
<img src="https://img.shields.io/badge/Fetch%20API-Used-success" />
<img src="https://img.shields.io/badge/Debounce-500ms-orange" />

</div>

---

## ✨ Features

- 🔍 Live Search
- ⏳ 500ms Debouncing
- 🌐 Fetch API
- 📄 Search by Title
- 📝 Search by Body
- 👤 Search by User ID
- ⚛️ React Hooks

---

## 🛠️ Tech Stack

<table>
<tr>
<td>⚛️ React</td>
<td>JavaScript (ES6+)</td>
</tr>

<tr>
<td>🌐 Fetch API</td>
<td>useState</td>
</tr>

<tr>
<td>useEffect</td>
<td>Debouncing</td>
</tr>
</table>

---

## 📂 Folder Structure

```text
src/
│
├── App.jsx
└── Debounce.jsx
```

---

## ⚡ How Debouncing Works

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);

  return () => clearTimeout(timer);
}, [search]);
```

### Flow

```text
User Types
    │
    ▼
500ms Timer Starts
    │
    ▼
Typing Again?
   │
 ┌─┴─────────────┐
 │ Yes           │ No
 ▼               ▼
Clear Timer   Update debouncedSearch
                  │
                  ▼
            Filter Posts
                  │
                  ▼
           Display Results
```

---

## 🌐 Fetch API

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data));
}, []);
```

---

## 🔍 Filtering Logic

```jsx
const filteredPosts = posts.filter(
  (post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    post.body.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    post.userId.toString().includes(debouncedSearch)
);
```

---

## 📋 Application Workflow

| Step | Description |
|------|-------------|
| 1️⃣ | Fetch posts from API |
| 2️⃣ | Store posts in state |
| 3️⃣ | User types in search box |
| 4️⃣ | Wait 500ms |
| 5️⃣ | Update `debouncedSearch` |
| 6️⃣ | Filter posts |
| 7️⃣ | Display matching results |

---

## ▶️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

---

## 📚 Concepts Covered

- ✅ React Hooks
- ✅ useState
- ✅ useEffect
- ✅ Fetch API
- ✅ Debouncing
- ✅ Search Filtering
- ✅ Array.filter()

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a star!

Made with ❤️ using React

</div>
````
