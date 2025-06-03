# Disease Outbreak Prediction System

## 🌐 Overview
The **Disease Outbreak Prediction System** is a Flask-based web application that predicts the likelihood of three major medical conditions using machine learning models:

- **Diabetes**
- **Heart Disease**
- **Parkinson's Disease**

Users can input health-related parameters, and the system returns predictions instantly through a simple and intuitive web interface.

---

## ✨ Features
- 🔍 **Diabetes Prediction** using 8 health parameters
- ❤️ **Heart Disease Prediction** using 13 health indicators
- 🧠 **Parkinson's Disease Prediction** based on 22 voice measurements
- 🖥️ Web interface for easy interaction and usage

---

## 🛠️ Installation

### Prerequisites
- Python 3.6 or above
- pip (Python package manager)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/disease-outbreak-prediction.git
   cd disease-outbreak-prediction
**2. Create a virtual environment (recommended)**
  ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
  ```

**3. Install required packages**
```bash
pip install -r requirements.txt
```
If requirements.txt is missing, manually install:
```bash
pip install flask numpy scikit-learn pickle-mixin
```
**4. Download and place pre-trained models**
Add these files to the models/ directory:
diabetes_model.sav
Heart_model.sav
parkinson_model.sav
Ensure their paths are correctly referenced in app.py

**5. Run the application**
```bash
python app.py
```
**6. Access the application**
Open your web browser and go to:
```bash
http://localhost:5000
```
**File Structure**
```bash
disease-outbreak-prediction/
├── app.py                # Main Flask application
├── models/               # Directory for machine learning models
│   ├── diabetes_model.sav
│   ├── Heart_model.sav
│   └── parkinson_model.sav
├── static/               # Static files (CSS, JS, images)
├── templates/            # HTML templates
│   └── index.html
├── requirements.txt      # Python dependencies
└── README.md             # This file
```
**🧪 Usage Guide**

Launch the app at 
```bash
http://localhost:5000
```

Choose a disease to predict
Fill in the health parameters
Click Predict
View the prediction result displayed on the screen
**🧩 API Endpoints**
**Endpoint	Method	Description**
/predict_diabetes	POST	Predicts diabetes
/predict_heart_disease	POST	Predicts heart disease
/predict_parkinsons	POST	Predicts Parkinson's disease

**📦 Dependencies**
Flask – Web framework
NumPy – Numerical computations
scikit-learn – ML model building and loading
pickle / pickle-mixin – Model serialization

**❗ Troubleshooting**
Model not found: Check if model files are in models/ and paths are correct in app.py
Missing libraries: Run pip install -r requirements.txt
Port in use: Change the port in app.py using app.run(debug=True, port=5001)
Empty form errors: Parkinson's prediction requires all fields to be filled

**🤝 Contributing**
Contributions are welcome!
To contribute:
Fork the repository
Create a new branch
Commit your changes
Submit a pull request


