import requests

data = {
    "text": "Hello, how are you?",
    "target_language": "ja"
}

response = requests.post(
    "http://127.0.0.1:5000/translate",
    json=data
)

print(response.json())