from flask import Flask, request
from flask_cors import CORS
from deep_translator import GoogleTranslator

app = Flask(__name__)
CORS(app)

tasks = []

@app.route("/")
def home():
    return {
        "message": "TestMind AI Backend Running"
    }

@app.route("/tasks", methods=["GET"])
def get_tasks():
    return tasks

@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.json
    tasks.append(data)

    return {
        "message": "Task Added Successfully"
    }

@app.route("/tasks/<int:index>", methods=["DELETE"])
def delete_task(index):

    if index < len(tasks):
        tasks.pop(index)

        return {
            "message": "Task Deleted Successfully"
        }

    return {
        "message": "Task Not Found"
    }
@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()

    text = data['text']
    target = data['target_language']

    translated = GoogleTranslator(
        source='auto',
        target=target
    ).translate(text)

    return jsonify({
        "translated_text": translated
    })

if __name__ == "__main__":
    app.run(debug=True)