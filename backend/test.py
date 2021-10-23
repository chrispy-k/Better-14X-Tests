import requests

BASE = "http://127.0.0.1:5000/"

response = requests.post(BASE + "/register/carter/c@c.com/123")
print(response.json())