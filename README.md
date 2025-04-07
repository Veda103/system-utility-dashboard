# 🛠️ System Utility Dashboard
A Node.js command-line application that displays detailed system information and logs it to a file. Great for practicing Node.js core modules and building a basic monitoring tool.

## 📌 Features
- Displays:
  - OS type and platform
  - OS release version
  - Total and free memory (in GB)
  - CPU model and core count
  - System uptime (in hours)
- Logs system info to a `logs/system-info-YYYY-MM-DD.txt` file
- Uses modern JavaScript and modular structure
- Leverages Node.js core modules (`os`, `fs`, `path`)

## 🚀 Technologies Used
- Node.js
- JavaScript (ES6+)
- Core Modules:
  - `os`
  - `fs`
  - `path`

## 📁 Project Structure
system-utility-dashboard/ ├── logs/ # Directory for saved logs │ └── system-info-YYYY-MM-DD.txt ├── system-dashboard.js # Main application logic └── README.md # Project documentation

## SAMPLE OUTPUT

🖥️ System Information:
┌───────────────┬────────────────────────────────────────────┐
│   (index)     │                  Values                    │
├───────────────┼────────────────────────────────────────────┤
│   OS_Type     │                Linux                       │
│   Platform    │               linux                        │
│   Release     │              5.15.0-91-generic             │
│ Total_Memory  │               15.62 GB                    │
│ Free_Memory   │                4.32 GB                    │
│ CPU_Cores     │                  8                         │
│ CPU_Model     │     Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz │
│   Uptime      │              1.23 hours                   │
└───────────────┴────────────────────────────────────────────┘
✅ System info logged to: /logs/system-info-2025-04-07.txt
