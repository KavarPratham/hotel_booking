# Hotel Booking System

This is a Hotel Booking System built using Django for the backend and React for the frontend.

## Installation Instructions

### Backend (Django)
1. Clone the repository.
2. Create a virtual environment and install dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```
3. Run migrations:
    ```bash
    python manage.py migrate
    ```
4. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

### Frontend (React)
1. Navigate to the frontend folder:
    ```bash
    cd client
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```