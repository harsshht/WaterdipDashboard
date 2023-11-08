

```markdown
# Waterdip AI Front End Assignment

This is a single-page dashboard created using React.js for visualizing hotel booking data. The dashboard includes various charts and a date selector for data filtering. The charts are updated based on the selected date range.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Data Description](#data-description)
- [Charts](#charts)
- [Screenshots](#screenshots)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd waterdip-frontend-assignment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- Visit the application at [http://localhost:3000](http://localhost:3000).
- Use the date selector to filter the data based on the desired date range.
- Explore the various charts on the dashboard.

## Data Description

The dataset used in this project contains hotel booking information. The dataset includes the following columns:

- **arrival_date_year**: The year of arrival.
- **arrival_date_month**: The month of arrival.
- **arrival_date_day_of_month**: The day of the month of arrival.
- **adults**: Number of adults for the booking.
- **children**: Number of children for the booking.
- **babies**: Number of babies for the booking.
- **country**: The country from which the travelers are from.

The dataset is provided in the `hotel_bookings_1000.csv` file.

## Charts

The dashboard includes the following charts:

1. **Time Series Chart**: This chart shows the number of visitors per day. The total number of visitors is calculated as the sum of adults, children, and babies.

2. **Column Chart**: This chart displays the number of visitors per country.

3. **Sparkline Charts**: These sparkline charts show the total number of adult visitors and children visitors. The sparkline chart includes both the total number and a line chart for aggregation.

## Screenshots
1
![Screenshot 0](/public/screenshots/wd0.png)
2
![Screenshot 1](/public/screenshots/wd1.png)
3
![Screenshot 2](/public/screenshots/wd2.png)
4
![Screenshot 3](/public/screenshots/wd3.png)

## License

This project is licensed under the [MIT License](LICENSE).

```
