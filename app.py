from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# --- Database setup ---
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# --- Routes ---
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)", (name, email, message))
    conn.commit()
    conn.close()
    return render_template('result.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
