from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    answers = data.get('answers', {})
    response = {}

    # Logika untuk memberikan trik
    if answers.get('kategori') == 'meluluhkan hati wanita':
        pendekatan = answers.get('pendekatan', '').lower()
        if pendekatan == 'romantis':
            response['result'] = "Berikan perhatian kecil setiap hari, seperti mengingat detail kecil tentang dirinya dan mengungkapkan rasa terima kasih."
        elif pendekatan == 'misterius':
            response['result'] = "Jadilah sedikit tertutup tentang diri Anda, biarkan dia penasaran, dan fokus pada membangun daya tarik emosional."
        else:
            response['result'] = "Pendekatan ini kurang spesifik, coba gunakan metode romantis atau misterius."
    elif answers.get('kategori') == 'membangun rasa percaya':
        strategi = answers.get('strategi', '').lower()
        if strategi == 'kejujuran':
            response['result'] = "Jadilah jujur bahkan dalam hal-hal kecil, karena ini membangun fondasi rasa percaya."
        elif strategi == 'dukungan':
            response['result'] = "Berikan dukungan emosional, jadilah pendengar yang baik, dan tawarkan bantuan saat dibutuhkan."
        else:
            response['result'] = "Strategi ini tidak jelas, cobalah pendekatan kejujuran atau dukungan."
    else:
        response['result'] = "Kategori tidak dikenali, coba gunakan kategori seperti 'meluluhkan hati wanita' atau 'membangun rasa percaya'."

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)