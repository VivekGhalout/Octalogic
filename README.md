# Octalogic

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Description

This Web Application is a comprehensive online platform designed to facilitate learning and teaching music courses. This project aims to streamline the process of course management, student enrollment, and financial tracking for both instructors and students. The application is built using React.js, Redux for state management, json server for backend, and features two key components: "Courses" and "Overview."

## Features

## Courses Component

The "Courses" component is at the heart of our platform, providing users with a user-friendly interface to explore and enroll in music courses. Its features include:

- Course Listing: A dynamic course list showcasing various music courses, including details such as course name, description, instructor, instrument, day of the week, number of students, price, and status.

- Search Functionality: Users can search for specific courses using keywords, making it easy to find the courses that match their interests.

- Course Details: Clicking on a course provides detailed information about it, helping students make informed decisions.

- Course Enrollment: Users can enroll in courses directly from the component.

## Overview Component

The "Overview" component offers a high-level snapshot of the platform's performance and financial metrics. It provides:

- Student Count: A count of the total number of students currently enrolled in courses, allowing administrators to gauge the platform's popularity.

- Course Count: An overview of the total number of courses offered on the platform, showing the diversity of course offerings.

- Revenue Tracking: Information on the total earnings generated by the platform, helping administrators assess the financial health of the educational platform.

- Course Analytics: Highlights the best and worst performing courses, assisting instructors and administrators in optimizing course offerings.

## Technologies Used

- React
- Redux
- Axios
- JavaScript
- Tailwind CSS
- HTML/CSS
- json server

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/VivekGhalout/Octalogic.git
   ```

2. Navigate to the project directory:

   ```bash
   cd octalogic-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start json server:

   ```bash
   json-server --watch db.json --port 8000
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. The application will be available at [http://localhost:3000](http://localhost:3000) in your web browser.
