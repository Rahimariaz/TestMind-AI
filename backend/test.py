import requests

task = {
    "title": "Login Page",
    "assigned_to": "Rahul",
    "status": "Pending"
}

response = requests.post(
    "http://127.0.0.1:5000/tasks",
    json=task
)

print(response.json())