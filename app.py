from flask import Flask, render_template, request, jsonify
from deep_translator import GoogleTranslator

app = Flask(__name__)

LANGUAGES = {
    "auto": "Detect Language",
    "en": "English",
    "si": "Sinhala",
    "ta": "Tamil",
    "fr": "French",
    "de": "German",
    "es": "Spanish",
    "it": "Italian",
    "ja": "Japanese",
    "ko": "Korean",
    "zh-CN": "Chinese Simplified",
    "ar": "Arabic",
    "hi": "Hindi"
}


@app.route("/")
def home():
    return render_template("index.html", languages=LANGUAGES)


@app.route("/translate", methods=["POST"])
def translate_text():
    try:
        data = request.get_json()

        text = data.get("text", "").strip()
        source_language = data.get("source_language", "auto")
        target_language = data.get("target_language", "en")

        if not text:
            return jsonify({
                "success": False,
                "message": "Please enter text to translate."
            })

        if source_language == target_language:
            return jsonify({
                "success": True,
                "translated_text": text,
                "message": "Source and target languages are the same."
            })

        translated_text = GoogleTranslator(
            source=source_language,
            target=target_language
        ).translate(text)

        return jsonify({
            "success": True,
            "translated_text": translated_text
        })

    except Exception as error:
        return jsonify({
            "success": False,
            "message": "Translation failed. Please check your internet connection and try again.",
            "error": str(error)
        })


if __name__ == "__main__":
    app.run(debug=True)