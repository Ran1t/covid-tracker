# 🦠 COVID-19 Dashboard

A modern and interactive **COVID-19 Dashboard** built using **React + Tailwind CSS**.
This application allows users to view **country-wise COVID statistics**, toggle between different views, and see a global summary — all in a clean,  and very responsive UI.

---

## 🚀 Features

* 🌍 **Global Summary**

  * Total Cases
  * Total Recovered
  * Total Deaths

* 🌐 **Country-wise Data**

  * Select any country from dropdown
  * View detailed stats instantly

* 🔄 **Toggle Views**

  * 🪪 Card View (visual + color-coded)
  * 📊 Table View (structured data)

* 🎨 **Modern UI**

  * World map background
  * Clean card design with shadows
  * Responsive layout

* ⚡ **Real-time Data**

  * Fetched from live API

---

## 🛠️ Tech Stack

* ⚛️ React (Functional Components + Hooks)
* 🎨 Tailwind CSS
* 🌐 Axios (API calls)

---

## 📡 API Used

* Country Data:
  https://disease.sh/v3/covid-19/countries

* Global Data:
  https://disease.sh/v3/covid-19/all

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── CountrySelector.jsx
 │    ├── StatsCard.jsx
 │    ├── StatsTable.jsx
 │    ├── ToggleView.jsx
 │
 ├── pages/
 │    └── Dashboard.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/covid-dashboard.git
```

2. Navigate to project folder

```
cd covid-dashboard
```

3. Install dependencies

```
npm install
```

4. Run the app

```
npm run dev
```

---

## 🧠 Key Concepts Used

* React Hooks (`useState`, `useEffect`)
* Conditional Rendering
* Component-Based Architecture
* API Integration
* Controlled Components
* Dynamic Styling with Tailwind

---

## 📸 Preview

A clean dashboard with:

* 🌍 Global stats at top
* 🔽 Country selector
* 🔄 Toggle between views
* 📊 Dynamic data display

---

