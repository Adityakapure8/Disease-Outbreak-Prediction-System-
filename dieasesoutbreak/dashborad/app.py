from flask import Flask, request, jsonify, render_template
from flask import render_template
import pickle
import numpy as np

app = Flask(__name__)

# Load models
diabetes_model = pickle.load(open('C:/Users/adity/OneDrive/Desktop/dieasesoutbreak/dashborad/models/diabetes_model.sav', 'rb'))
heart_model = pickle.load(open('C:/Users/adity/OneDrive/Desktop/dieasesoutbreak/dashborad/models/Heart_model.sav', 'rb'))
parkinson_model = pickle.load(open('C:/Users/adity/OneDrive/Desktop/dieasesoutbreak/dashborad/models/parkinson_model.sav', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    data = request.get_json()
    input_data = np.array([[data['pregnancies'], data['glucose'], data['bloodPressure'], 
                             data['skinThickness'], data['insulin'], data['bmi'], 
                             data['diabetesPedigree'], data['age']]])
    prediction = diabetes_model.predict(input_data)
    result = 'The person is not diabetic' if prediction[0] == 1 else 'The person has Diabetes'
    return jsonify({'message': result})



@app.route('/predict_heart_disease', methods=['POST'])
def predict_heart_disease():
    data = request.get_json()
    input_data = np.array([[data['age'], data['sex'], data['cp'], data['trestbps'], 
                             data['chol'], data['fbs'], data['restecg'], 
                             data['thalach'], data['exang'], data['oldpeak'], 
                             data['slope'], data['ca'], data['thal']]])
    prediction = heart_model.predict(input_data)
    result = 'The person has heart disease' if prediction[0] == 1 else 'The person is healthy'
    return jsonify({'message': result})


@app.route('/predict_parkinsons', methods=['POST'])
def predict_parkinsons():
    data = request.get_json()
    if any(value == '' for value in data.values()):
        return jsonify({'message': 'All fields must be filled out.'}), 400

    input_data = np.array([[data['MDVP:Fo(Hz)'], data['MDVP:Fhi(Hz)'], data['MDVP:Flo(Hz)'],
                             data['MDVP:Jitter(%)'], data['MDVP:Jitter(Abs)'], 
                             data['MDVP:RAP'], data['MDVP:PPQ'], data['Jitter:DDP'], 
                             data['MDVP:Shimmer'], data['MDVP:Shimmer(dB)'], 
                             data['Shimmer:APQ3'], data['Shimmer:APQ5'], 
                             data['MDVP:APQ'], data['Shimmer:DDA'], 
                             data['NHR'], data['HNR'], data['RPDE'], 
                             data['DFA'], data['spread1'], data['spread2'], 
                             data['D2'], data['PPE']]])
    prediction = parkinson_model.predict(input_data)
    return jsonify({'message': 'The person has Parkinson\'s disease' if prediction[0] == 1 else 'The person is healthy'})


if __name__ == '__main__':
    app.run(debug=True)