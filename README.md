# CodeAlpha Language Translation Tool

A simple and user-friendly web application that allows users to translate text between multiple languages. This project was developed as part of the CodeAlpha Artificial Intelligence task to demonstrate API integration, Flask backend development and a clean frontend interface.

## Project Overview

The Language Translation Tool allows users to enter text, select a source language, choose a target language and receive the translated output instantly. The application uses a Python Flask backend and a translation service through the `deep-translator` library.

The main goal of this project is to understand how a web application communicates with a backend service and processes user input to generate meaningful output.

## Features

* Enter text for translation
* Select source language
* Select target language
* Translate text using a Python backend
* Display translated text clearly
* Copy translated output to clipboard
* Clear input and output fields
* Responsive and professional user interface

## Technologies Used

* Python
* Flask
* HTML
* CSS
* JavaScript
* deep-translator

## Project Structure

```text
CodeAlpha_Language_Translation_Tool/
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/CodeAlpha_Language_Translation_Tool.git
cd CodeAlpha_Language_Translation_Tool
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

### 3. Activate the Virtual Environment

For Windows:

```bash
venv\Scripts\activate
```

For macOS/Linux:

```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the Flask Application

```bash
python app.py
```

### 6. Open the Application

```text
http://127.0.0.1:5000
```

## Usage

1. Enter the text you want to translate.
2. Select the source language.
3. Select the target language.
4. Click the **Translate** button.
5. View the translated result.
6. Click the **Copy Text** button to copy the translated output.
7. Use the **Clear** button to reset the text fields.

## Learning Outcomes

Through this project, I learned:

* How to build a Flask web application
* How to connect frontend and backend using JavaScript fetch requests
* How to process user input from a web interface
* How to integrate a translation service into a Python project
* How to create a clean and responsive UI
* How to organize and document a project for GitHub

## Future Improvements

* Add text-to-speech support
* Add more languages
* Add translation history
* Improve error handling
* Add dark mode

## Internship Task

This project was developed as **Task 1: Language Translation Tool** for the CodeAlpha Artificial Intelligence program.
