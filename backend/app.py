from flask import Flask, request
from flask_cors import CORS
from deep_translator import GoogleTranslator
from flask import Flask,request,jsonify


app = Flask(__name__)

@app.route("/")
def home():
    return "TestMind AI Backend Running"


@app.route("/dashboard")
def dashboard():
    return {
        "project_health": 91,
        "active_tasks": 37,
        "team_online": 22,
        "languages": 8
    }


@app.route("/translate", methods=["POST"])
def translate():

    data = request.json

    text = data.get("text", "")

    return {
        "translated": f"Translated: {text}"
    }


@app.route("/ai", methods=["POST"])
def ai():

    data = request.json

    question = data.get("question", "")

    return {
        "answer": f"AI Response: {question}"
    }


if __name__ == "__main__":
    app.run(debug=True)