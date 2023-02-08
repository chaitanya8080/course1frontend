import React from 'react';

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly views',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      { label: 'views' },
      { data: [1, 2, 2, 6] },
      { backgroundColor: '#6b46c1' },
    ],
  };

  return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {
  const data = {
    labels: ['Subscribe', 'Not Subscribed'],
    datasets: [
      {
        label: 'views',
        data: [5, 30],
        borderColor: ['rgba(62,12,171)', 'rgba(214,43,129,0.3)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getLastYearMonths() {

  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = new Date().getMonth();

  const remain = 11 - currentMonth;

  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i === 0) break;
  }



  for (let i = 11; i > remain ; i--){
    if (i === currentMonth) break;
    const element = months[i];
    labels.unshift(element);
  }

  return labels;
  
}
