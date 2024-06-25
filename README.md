# Phone Call Simulation App

This project is a React-based phone call simulation app built with Vite. It features three main screens: Dialer, Outgoing Call, and Incoming Call.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository: git clone https://github.com/Tnmy1996/phone-app

2. Navigate to the project directory: cd phone-app

3. Install dependencies: npm install

### Running the Project

1. Start the development server: npm run dev

2. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## Features

### Dialer Screen

- Input phone numbers using keyboard or on-screen dialpad
- Call button activates when at least 4 digits are entered
- Click the call button to initiate a call

### Outgoing Call Screen

- Displays contact details and "Calling..." text for 2 seconds
- Shows call duration after the initial 2 seconds
- Keyboard button reveals number pad
- Mute and speaker buttons available
- End call button returns user to the Dialer screen

### Incoming Call Screen

- Accessible via the call button at the bottom of the screen
- Options to accept or reject the call
- Accepting redirects to the Outgoing Call screen
- Rejecting redirects to the Dialer screen
