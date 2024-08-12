# Bank of Flatiron by Aron Kipkorir Bii

Welcome to the Bank of Flatiron application, a simple React app for managing transactions. This application allows users to add, view, and delete transactions while also offering search and sort functionalities.

**Here is the** [Demo link](https://bank-of-flatiron-iota-livid.vercel.app/)

## Features

- **Add Transactions**: Users can add new transactions with date, description, category, and amount.
- **View Transactions**: Toggle the visibility of the transaction history with a button.
- **Search Transactions**: Filter transactions by description using a search input.
- **Sort Transactions**: Sort transactions by date, category, or description.
- **Delete Transactions**: Remove transactions from the list.

## Getting Started

### Prerequisites

- Node.js (>= 14.x.x)
- npm 

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KipkorirA/bank-of-Flatiron
   ```

2. **Navigate to the project directory**:

   ```bash
   cd bank-of-flatiron
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```
   This will start the application and open it in your default web browser.

## Usage

1. **Adding Transactions**:
   - Fill out the form with date, description, category, and amount.
   - Click the "Add Transaction" button to submit.

2. **Viewing Transactions**:
   - Click the "Show Transactions History" button to view the list of transactions.
   - Click the "Hide Transactions History" button to hide the list.

3. **Searching Transactions**:
   - Use the search input to filter transactions by description.

4. **Sorting Transactions**:
   - Select a sort option (Date, Category, or Description) from the dropdown menu.

5. **Deleting Transactions**:
   - Click the "Delete" button next to a transaction to remove it from the list.

## API Endpoints

The application interacts with the following API endpoints:

- **GET** `/transactions`: Retrieve all transactions.
- **POST** `/transactions`: Add a new transaction.
- **DELETE** `/transactions/:id`: Delete a transaction by ID.

## Code Structure

- **`src/components/`**: Contains React components such as `TransactionList`, `TransactionForm`, `Search`, and `Sort`.
- **`src/App.js`**: The main application component.
- **`src/styles.css`**: CSS styles for the application.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to me through my [email account](mailto:aron.kipkorir@student.moringaschool.com).
