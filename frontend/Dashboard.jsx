import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [message, setMessage] = useState("Welcome to TestMind AI");
  const [translatorText, setTranslatorText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  const [taskInput, setTaskInput] = useState("");
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

    setTranslatedText("Translated Output: " + translatorText);
  };

  const handleAI = () => {
    if (!aiQuestion.trim()) {
      alert("Ask something");
      return;
    }

    setAiAnswer("AI Response: " + aiQuestion);
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

        {/* Cards */}
        <div className="cards">

          <div
            className="card purple"
            onClick={() => alert("Project Health: 82%")}
          >
            <h2>82</h2>
            <p>Project Health</p>
          </div>

          <div
            className="card blue"
            onClick={() => alert("24 Active Tasks")}
          >
            <h2>24</h2>
            <p>Active Tasks</p>
          </div>

          <div
            className="card green"
            onClick={() => alert("18 Team Members Online")}
          >
            <h2>18</h2>
            <p>Team Online</p>
          </div>

          <div
            className="card orange"
            onClick={() => alert("12 Languages Supported")}
          >
            <h2>12</h2>
            <p>Languages</p>
          </div>

        </div>

        {/* Progress */}
        <div className="section">
          <h2>📊 Project Progress</h2>

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
            onClick={() =>
              alert("AI Handover Generated")
            }
          >
            Generate Handover
          </button>
        </div>

        {/* Reports */}
        <div className="section">
          <h2>📑 Reports</h2>

          <button
            className="actionBtn"
            onClick={() =>
              alert("Report Generated Successfully")
            }
          >
            Generate Report
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;