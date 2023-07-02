# Student Affairs Website

The Student Affairs Website is a web application developed as our final project in the Web Technology course during our second year of Computer Science, It serves as a comprehensive system for managing student information and department-related tasks. This user-friendly website allows authorized users to perform various operations such as adding, updating, and deleting student data, as well as assigning departments and managing student statuses.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Customization](#customization)
- [Deployment](#deployment)
- [Teammates](#teammates)
- [License](#license)

## Prerequisites

- Python 3.7 or higher
- Django framework
- HTML, CSS, and JavaScript enabled web browser

## Installation

1. Install a virtual environment by running the following command:
```
python3 -m venv env
```

2. Clone the repository inside the virtual environment directory.


3. Activate the virtual environment:
- On Windows:
  ```
  env\Scripts\activate
  ```
- On macOS and Linux:
  ```
  source env/bin/activate
  ```
  
4. Install the project dependencies by running the following command:
```
pip install -r requirements.txt
```

5. Start the project by running the following commands:
```
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

> **Note:** Make sure you have Python and pip installed on your system before executing these commands. The `requirements.txt` file contains a list of all the required packages and versions for the project. The `pip install -r requirements.txt` command will install these packages in your virtual environment.
<br>

## Usage

The Student Affairs website is primarily designed for administrators who have already signed up in the database. As a user, you can log in to access the website's features. To test all the website's features, you can use the following login credentials:

- Username: mohamed
- Password: *********

1. Open a web browser and navigate to `http://localhost:8000`.
2. Click on the "Log In" button in the navigation bar.
3. Enter the provided login credentials (username: admin, password: *********) and click "Log In".
4. Explore the different pages like home, about, and student related pages.
5. Perform administrative actions such as add new student, displaying all students, updating info of selected student, and assign department to student .

Note: As a regular user, you will have limited access to certain features and administrative functionalities.

<details>
  <summary>Click here to reveal the password</summary>
  hesham123
</details>

## Configuration

- Database settings can be configured in `settings.py`.
- Set any required environment variables in a `.env` file.

## Customization

- To customize the website's appearance, modify CSS files in `static/css`.
- To customize the website's behavior, modify JavaScript files in `static/js`.

## Deployment


## Teammates
| <img src="https://media.licdn.com/dms/image/D4D03AQEfv34MkWhtuA/profile-displayphoto-shrink_800_800/0/1685306534441?e=1694044800&v=beta&t=SeVrvYKX1T4rL8ZAKuhx4MlJRkac64RpkbZHTDQBs5M" alt="Mohamed Hesham" width="150" height="150"> | <img src="https://media.licdn.com/dms/image/D4D03AQHZfqMXvtOjtw/profile-displayphoto-shrink_800_800/0/1662420256256?e=1694044800&v=beta&t=EY3HDDm3GsnRh5fsKtN_ZWAcuMvhemFjkDhau0XOsr8" alt="Fady Kamal" width="150" height="150"> |
| :---------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|                                   Mohamed Hesham                              |                                   Fady Kamal                              |

| <img src="https://media.licdn.com/dms/image/D4D03AQHrcCuqRT4b6Q/profile-displayphoto-shrink_800_800/0/1679827960594?e=1694044800&v=beta&t=C5GipELANOYfQqyFfUPcNxuaPiezCK2V1EG21x3ga6g" alt="Mazen Mahmoud" width="150" height="150"> | <img src="https://media.licdn.com/dms/image/C4E03AQFBXxE6d4cCdA/profile-displayphoto-shrink_800_800/0/1647123799660?e=1694044800&v=beta&t=jEALbI961BXssyWq_JxlmTql5WLvy0WkjiH0jVRTx78" alt="Adham Mahmoud" width="150" height="150"> |
| :------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
|                                    Mazen Mahmoud                                |                                   Adham Mahmoud                               |

| <img src="https://scontent.fcai21-4.fna.fbcdn.net/v/t39.30808-6/292327432_1477821669355093_1930203138948297359_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AAAaJr-dJ8QAX9vksGw&_nc_ht=scontent.fcai21-4.fna&oh=00_AfCHaBzrhIzJ5IAprcKMMCHkBLmKp1t06PI-NHjyDGN8FA&oe=64A62FA8" alt="Abdel Rahman Amer" width="150" height="150"> | <img src="https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/242030537_1287444148365574_1568412246518936340_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wu6FRhrXY9YAX_KAMW4&_nc_ht=scontent.fcai21-3.fna&oh=00_AfCcNdsBvzKBKchDPB3zzwyMax8Zcumpree7InaSLn8MbA&oe=64A6CC71" alt="George Ayman" width="150" height="150"> |
| :-------------------------------------------------------------------: | :---------------------------------------------------------------: |
|                          Abdel Rahman Amer                             |                          George Ayman                              |



## License

This project is licensed under the [MIT License](LICENSE).

