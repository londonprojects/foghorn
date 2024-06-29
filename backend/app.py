from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import json

app = Flask(__name__)

# Load user data from file
def load_user_data():
    try:
        with open('user_data.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

# Save user data to file
def save_user_data(users):
    with open('user_data.json', 'w') as f:
        json.dump(users, f)

users = load_user_data()

@app.route('/authenticate', methods=['POST'])
def authenticate():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user = users.get(username)
    if user and user['password'] == password:
        return jsonify({"status": "success", "user": user}), 200
    else:
        return jsonify({"status": "failure"}), 401

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    speed = data.get('speed')
    weight = data.get('weight')
    # Example calculation (replace with your own logic)
    result = speed * weight * 0.1
    return jsonify({"result": result}), 200

if __name__ == '__main__':
    app.run(debug=True)
