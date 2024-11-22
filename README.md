
# Disease Prediction, Specialist Suggestion, and Hospital Finder

This project predicts diseases based on symptoms, suggests relevant specialists, and helps users find nearby hospitals. It combines **Node.js**, **Python**, **EJS**, **Machine Learning**, and **API Integration** to deliver an efficient and user-friendly solution.

---

## Features
- Predict diseases using a trained machine learning model.
- Suggest specialists based on the predicted disease.
- Fetch and display nearby hospitals using an API.
- Interactive and responsive front-end.

---

## Project Structure
```
project-folder/
│
├── index.js           # Main server file
├── predict.py         # Python file for disease prediction
├── Training.csv       # Trained dataset
├── filter.js          # Filters data fetched from APIs
├── run.js             # Runs the API integration
├── views/             # Contains all front-end EJS files
├── public/            # Contains photos and CSS files
│   ├── images/        # Photos used in the application
│   ├── styles.css     # CSS for styling
```

---

## Requirements

### Software
- [Node.js](https://nodejs.org/)
- [Python 3](https://www.python.org/)
- NPM (Node Package Manager)

### Python Libraries
- `pandas`
- `sklearn`

### Node.js Libraries
- `express`
- `body-parser`
- `axios`
- `ejs`

---

## Setup and Installation

### Install Node.js and NPM
1. **Download Node.js**  
   Visit [Node.js Download](https://nodejs.org/) and download the appropriate version for your system.  
   The installation also includes NPM (Node Package Manager).

2. **Verify Installation**  
   Open your terminal and run:
   ```bash
   node -v
   npm -v
   ```
   This will display the installed Node.js and NPM versions.

### Clone the Repository
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### Install Node.js Dependencies
Run the following command in the project directory:
```bash
npm install
```

This will install all required Node.js libraries specified in the `package.json` file.

### Install Python Dependencies
Ensure Python is installed and run:
```bash
pip install pandas sklearn
```

---

## Running the Project

1. **Start the Python Process**  
   Open a terminal, navigate to the project directory, and run:
   ```bash
   python predict.py
   ```

2. **Start the Node.js Server**  
   In another terminal, run:
   ```bash
   node index.js
   ```

3. **Access the Application**  
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Files Explained

### `index.js`
The main entry point of the Node.js application. Manages server setup, routes, and integrates with Python and APIs.

### `predict.py`
Executes the machine learning model using `DecisionTreeClassifier` from `sklearn.tree` to predict diseases based on input symptoms.

### `Training.csv`
Contains the training data for the ML model.

### `filter.js`
Filters the data fetched via APIs for hospital information or other details.

### `run.js`
Handles API integration, fetching relevant data for hospital locations and details.

### `views/`
Holds all the EJS files for rendering the front-end pages.

### `public/`
Contains static assets like images and CSS files.

---

## Usage

1. Enter symptoms in the application.
2. View the predicted disease and suggested specialist.
3. See nearby hospitals fetched via APIs.

---

## Future Enhancements
- Add real-time hospital availability updates.
- Improve the accuracy of predictions with advanced ML models.
- Implement user authentication for personalized suggestions.

