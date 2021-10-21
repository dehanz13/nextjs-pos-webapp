import React from "react";
import { Bar, defaults, Doughnut } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["New", "Returning"],
          datasets: [
            {
              label: "# of votes",
              data: [6, 3],
              backgroundColor: ["rgb(168,85,247)", "rgb(61,130,246)"],
              borderColor: ["rgb(168,85,247)", "rgb(61,130,246)"],
              hoverOffset: 4,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
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

export default BarChart;
