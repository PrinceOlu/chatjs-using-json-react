import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import income from '../database/incomedb.json';
import expenses from '../database/expensesdb.json';

function BarChart() {
  return (
    <div>
      <h1>A Simple Chart.js App</h1>
      <Bar
        data={{  
          labels: income.map((data) => data.label), // Assuming income and expenses share the same labels
          datasets: [
            {
              label: 'Income',
              data: income.map((data) => data.value),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
            {
              label: 'Expenses',
              data: expenses.map((data) => data.value),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
