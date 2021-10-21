import React from "react";
import { Pie, defaults, Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Last 7 days",
              data: [12, 19, 3, 5, 2, 3, 11],
              backgroundColor: "rgb(168,85,247)",
              borderColor: "rgb(168,85,247)",
              borderWidth: 1,
            },
            {
              label: "Last 14 days",
              data: [47, 52, 67, 58, 27, 41, 74],
              backgroundColor: "rgb(61,130,246)",
              borderColor: "rgb(61,130,246)",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
