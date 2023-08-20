from flask import Flask, render_template, request, jsonify
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        data = request.get_json('body')
        text = data['text']
        lang = data['language']
        det_text = translator.detect(text)
        res = translator.translate(text, src=det_text.lang, dest=lang)
        return jsonify({"result": res.text})
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)