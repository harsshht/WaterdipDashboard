import React, { useState, useEffect } from "react";
import TimeSeriesChart from "./TimeSeriesChart";
import ColumnChart from "./ColumnChart";
import hotelData from "../data/hotelData.json";
import SparklineChart from "./SparklineChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  useEffect(() => {
    setFilteredData(hotelData);
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = hotelData.filter((booking) => {
        const bookingDate = new Date(
          booking.arrival_date_year,
          getMonthNumber(booking.arrival_date_month),
          booking.arrival_date_day_of_month
        );
        return (
          bookingDate >= new Date(startDate) && bookingDate <= new Date(endDate)
        );
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(hotelData);
    }
  }, [startDate, endDate]);

  const handleApplyFilter = () => {
    setIsFilterApplied(true);
  };

  const getMonthNumber = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.indexOf(month);
  };

  return (
    <div className="p-6 text-center">
      <div className="text-center py-12 pb-16">
        <h1 className="text-4xl font-bold text-blue-500">WaterDip Dashboard</h1>
      </div>
      <p className="text-gray-500 m-4">
        Enter date ranging between 01/07/2023 to 09/08/2023
      </p>
      p{" "}
      <div className="flex flex-wrap gap-3 space-x-4 mb-4 justify-center pb-10">
        <DatePicker
          className="bg-gray-800 border border-gray-500 p-2 rounded-2xl focus:outline-none focus:border-blue-500"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Start Date"
        />
        <DatePicker
          className="bg-gray-800 border border-gray-500 rounded-2xl p-2 focus:outline-none focus:border-blue-500"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="End Date"
        />
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full p-3 hover:bg-gradient-to-r from-blue-700 to-blue-500 focus:outline-none transform transition-transform hover:scale-105 duration-300 border border-blue-600 hover:border-blue-700"
          onClick={handleApplyFilter}
        >
          Select Date Range
        </button>
      </div>
      {isFilterApplied && (
        <div className="space-y-4">
          <TimeSeriesChart data={filteredData} />
          <ColumnChart data={filteredData} />
          <SparklineChart
            adultsData={filteredData.map((booking) =>
              parseInt(booking.adults, 10)
            )}
            childrenData={filteredData.map((booking) =>
              parseInt(booking.children, 10)
            )}
          />
        </div>
      )}
    </div>
  );
};

export default DateSelector;
