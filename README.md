# 🌿 EcoPages – Public Diary Website

EcoPages is a minimal, public diary platform that lets users share short diary entries anonymously or with a username. Built with **HTML**, **CSS**, and **JavaScript**, the project uses **Google Sheets as a backend** via **Google Apps Script**, providing a free, serverless way to store and fetch diary entries.

---

## 🚀 Features

- 📝 Submit diary entries with a **title**, **body**, and **username**
- 🌍 All entries are shown on a public feed in real-time
- 📄 Data is stored in a Google Sheet acting as a lightweight backend
- 📱 Fully responsive design – works on mobile, tablet, and desktop
- ⏰ Timestamps are automatically recorded with every entry

---

## 🛠️ Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | HTML, CSS                     |
| Interactivity | JavaScript (Vanilla JS)       |
| Backend     | Google Sheets + Apps Script   |

---

## 📂 File Structure

EcoPages/
├── index.html # Main diary submission page
├── styles.css # Custom CSS styling
├── script.js # JavaScript for sending/receiving data
└── README.md # Project documentation


---

## 🧠 How It Works

### 📝 Submitting an Entry

- A form captures `username`, `title`, and `diary entry` text.
- JavaScript captures the form data and sends it to a **Google Apps Script Web App** using a `POST` request.

```js
fetch(SCRIPT_URL, {
  method: "POST",
  body: JSON.stringify({
    username: "Atul",
    title: "My Day",
    entry: "Today was awesome!",
  }),
});
```

## 📥 Displaying Entries
- The public feed uses a GET request to the same script endpoint.

- JSON data is parsed and dynamically added to the DOM to show all entries.

## 📄 Google Sheets Backend
- The backend is powered by a Google Sheet connected to a deployed Google Apps Script.

- Each diary entry is appended as a new row with:

  - Timestamp

  - Username

  - Title

  - Diary Body

## 🗂 Sheet Format
| Timestamp |	Username | Title | Entry |
|-----------|----------|-------|-------|
|           |          |       |       |

## 🌈 Future Improvements
- 🔐 Add login or anonymous user session system

- 🔎 Search/filter through diary entries

- 💬 Add support for comments or likes

- 🌙 Dark mode toggle

- 📦 Export entries as PDF or TXT
