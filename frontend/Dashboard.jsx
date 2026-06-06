import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [message, setMessage] = useState("Welcome to TestMind AI");
  const generateHandover = () => {
  alert(
    "Current Task: Backend Development\nStatus: On Leave\nHandover Generated Successfully"
  );
};
const generateReport = () => {
             alert("Report Generated Successfully");
            };

  const [translatorText, setTranslatorText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("hi");
  const [translatedText, setTranslatedText] = useState("");

  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  const [taskInput, setTaskInput] = useState("");
  const [teamOnline, setTeamOnline] = useState("");
const [languages, setLanguages] = useState("");
const [totalTasks, setTotalTasks] = useState(0);
const [completedTasks, setCompletedTasks] = useState(0);
const [teamMembers, setTeamMembers] = useState(0);
const [report, setReport] = useState("");
  const [tasks, setTasks] = useState([
    "Frontend Development",
    "Backend API Integration",
    "Testing",
  ]);
  const handleTranslate = () => {
  if (!translatorText.trim()) {
    alert("Enter text to translate");
    return;
  }

  if (targetLanguage === "hi") {
    setTranslatedText("नमस्ते");
  } else if (targetLanguage === "ta") {
    setTranslatedText("வணக்கம்");
  } else if (targetLanguage === "fr") {
    setTranslatedText("Bonjour");
  } else if (targetLanguage === "es") {
    setTranslatedText("Hola");
  }
};
const handleAI = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: aiQuestion,
      }),
    }
);
const generateReport = () => {
  const reportText = `
Project Report

Total Tasks: ${totalTasks}
Completed Tasks: ${completedTasks}
Active Tasks: ${activeTasks}
Team Members: ${teamMembers}
Project Health: ${projectHealth}%

Report Generated Successfully
  `;

  setReport(reportText);
};
 const data = await response.json();
    setAiAnswer(data.answer);
 
} catch (error) {
    setAiAnswer("Backend not connected");
  }
};
  

  const addTask = () => {
    if (!taskInput.trim()) {
      alert("Enter task");
      return;
    }

    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  return (
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>🚀 TestMind AI</h2>

        <button onClick={() => setMessage("Dashboard Opened")}>
          Dashboard
        </button>

        <button onClick={() => alert("Projects Opened")}>
          Projects
        </button>

        <button onClick={() => alert("Tasks Opened")}>
          Tasks
        </button>

        <button onClick={() => alert("Translator Opened")}>
          Translator
        </button>

        <button onClick={() => alert("Reports Opened")}>
          Reports
        </button>
      </div>

      {/* Main */}
      <div className="main">

        <div className="topBar">
          <input placeholder="Search projects..." />

          <button
            className="notifyBtn"
            onClick={() =>
              alert("🔔 You have 3 new notifications")
            }
          >
            🔔
          </button>
        </div>

        <h1 className="glitterTitle">
          ✨ AI Project Dashboard ✨
        </h1>

        <p>{message}</p>
         <div className="section">
  <h2>📋 Project Inputs</h2>

  <input
    type="number"
    placeholder="Team Members Online"
    value={teamOnline}
    onChange={(e) => setTeamOnline(e.target.value)}
  />

  <input
    type="number"
    placeholder="Languages Supported"
    value={languages}
    onChange={(e) => setLanguages(e.target.value)}
  />
</div>
        {/* Cards */}
        <div className="cards">

          <div
            className="card purple"
            onClick={() => alert("Project Health: 82%")}
          >
            <h2>{Math.min(tasks.length * 20, 100)}</h2>
            <p>Project Health</p>
          </div>

          <div
            className="card blue"
            onClick={() => alert("24 Active Tasks")}
          >
          <h2>{tasks.length}</h2>
            <p>Active Tasks</p>
          </div>

          <div
            className="card green"
            onClick={() => alert("18 Team Members Online")}
          >
          <h2>{teamOnline || 0}</h2>
            <p>Team Online</p>
          </div>

          <div
            className="card orange"
            onClick={() => alert("12 Languages Supported")}
          >
          <h2>{languages || 0}</h2>
            <p>Languages</p>
          </div>

        </div>

        {/* Progress */}
        <div className="section">
          <h2>📊 Project Progress</h2>
<input
  type="number"
  placeholder="Total Tasks"
  onChange={(e) => setTotalTasks(Number(e.target.value))}
/>

<input
  type="number"
  placeholder="Completed Tasks"
  onChange={(e) => setCompletedTasks(Number(e.target.value))}
/>

<input
  type="number"
  placeholder="Team Members"
  onChange={(e) => setTeamMembers(Number(e.target.value))}
/>
          <div className="progressBar">
            <div className="progressFill"></div>
          </div>

          <p>75% Completed</p>
        </div>

        {/* Translator */}
        <div className="section">
          <h2>🌍 AI Translator</h2>

          <textarea
            rows="4"
            placeholder="Enter text"
            value={translatorText}
            onChange={(e) =>
              setTranslatorText(e.target.value)
            }
          />
<select
  value={targetLanguage}
  onChange={(e) => setTargetLanguage(e.target.value)}
>
  <option value="hi">Hindi</option>
  <option value="ta">Tamil</option>
  <option value="fr">French</option>
  <option value="es">Spanish</option>
</select>
          <button
            className="actionBtn"
            onClick={handleTranslate}
          >
            Translate
          </button>

          {translatedText && (
            <div className="outputBox">
              {translatedText}
            </div>
          )}
        </div>

        {/* AI Assistant */}
        <div className="section">
          <h2>🤖 AI Assistant</h2>

          <input
            type="text"
            placeholder="Ask AI..."
            value={aiQuestion}
            onChange={(e) =>
              setAiQuestion(e.target.value)
            }
          />

          <button
            className="actionBtn"
            onClick={handleAI}
          >
            Ask AI
          </button>

          {aiAnswer && (
            <div className="outputBox">
              {aiAnswer}
            </div>
          )}
        </div>

        {/* Task Manager */}
        <div className="section">
          <h2>✅ Task Manager</h2>

          <input
            placeholder="Add New Task"
            value={taskInput}
            onChange={(e) =>
              setTaskInput(e.target.value)
            }
          />
          
          <button
            className="actionBtn"
            onClick={addTask}
          >
            Add Task
          </button>
    
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        {/* Shadow Employee */}
        <div className="section">
          <h2>👨‍💻 AI Shadow Employee</h2>

          <p>Current Task: Backend Development</p>
          <p>Status: On Leave</p>
<button
  className="actionBtn"
  onClick={() => alert("Handover Generated Successfully")}
>
  Generate Handover
</button>
          
        </div>

        {/* Reports */}
        <div className="section">
          <h2>📑 Reports</h2>
         <button
  className="actionBtn"
  onClick={generateReport}
>
  Generate Report
</button>
          
        </div>

      </div>
    </div>
  );
}

export default Dashboard;