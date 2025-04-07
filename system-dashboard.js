// system-dashboard.js
const os = require('os');
const fs = require('fs');
const path = require('path');

// Create logs directory if not exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Get formatted system information
function getSystemInfo() {
    return {
        OS_Type: os.type(),
        Platform: os.platform(),
        Release: os.release(),
        Total_Memory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        Free_Memory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        CPU_Cores: os.cpus().length,
        CPU_Model: os.cpus()[0].model,
        Uptime: `${(os.uptime() / 3600).toFixed(2)} hours`
    };
}

// Write system info to a log file
function saveLog(info) {
    const timestamp = new Date();
    const logFilename = `system-info-${timestamp.toISOString().split('T')[0]}.txt`;
    const logPath = path.join(logDir, logFilename);

    const logContent = [
        `=== System Info (${timestamp.toLocaleString()}) ===`,
        ...Object.entries(info).map(([key, val]) => `${key}: ${val}`),
        '\n'
    ].join('\n');

    fs.appendFileSync(logPath, logContent);
    return logPath;
}

// Main function
function runDashboard() {
    const systemInfo = getSystemInfo();

    console.log('🖥️ System Information:\n');
    console.table(systemInfo);

    const logPath = saveLog(systemInfo);
    console.log(`✅ System info logged to: ${logPath}`);
}

// Run the dashboard
runDashboard();