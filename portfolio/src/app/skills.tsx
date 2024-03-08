'use client';
import ReactApexChart from 'react-apexcharts';
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Skills() {
    const chartOptions = {
        series: [90, 100, 100, 85, 75, 60, 30],
            options: {
              chart: {
                height: '100%',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Engineering',
                      formatter: function (w) {
                        return 'Full-Stack'
                      }
                    }
                  }
                }
              },
              labels: ['Frontend', 'Backend', 'Database', 'Devops', 'Infrastructure', 'Platform', 'Quantum'],
            },

      };

    return (
        <div className="w-full bg-transaprent">
            <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type="radialBar"
                height={600}
                width={600}
            />
        </div>
    )
} 