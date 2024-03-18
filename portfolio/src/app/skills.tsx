'use client';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export interface ChartData {
    seriesIndex: number;
    dataPointIndex: number;
    w: any;
}

export default function Skills() {

    const isMinScreen = useMediaQuery({ query: '(max-width: 400px)' })
    const isMinScreen2 = useMediaQuery({ query: '(max-width: 600px)' })
    const isMinScreen3 = useMediaQuery({query: '(min-width: 768px)' })

    const [curTheme, setCurTheme] = useState<string | null>('');

    useEffect(() => {
        setCurTheme(localStorage.getItem("theme"));
    }, [localStorage.getItem("theme")])

    const chartOptions = {
            series: [90, 100, 100, 85, 75, 60, 30],
            options: { 
              chart: {
                height: '100%'
              },
            plotOptions: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: false,
                  },
                  value: {
                    show: false,
                  }
                }
              }
            },
            colors: ['#00476c','#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#4c9fcb', '#3292c3'],
            labels: ['Frontend', 'Backend', 'Database', 'Devops', 'Infrastructure', 'Platform', 'Quantum'],
            legend: {
              show: true,
              floating: true,
              fontSize: (isMinScreen || isMinScreen2 ) ? '6px' : '22px',
              offsetX: (isMinScreen || isMinScreen2 ) ? 130 : 300,
              offsetY: (isMinScreen || isMinScreen2 ) ? 3 : 15,
              labels: {
                useSeriesColors: true,
              },
              formatter: function(seriesName: string, opts: any) {
                return seriesName
              },
              itemMargin: {
                vertical: (isMinScreen || isMinScreen2 ) ? 0 : 3
              }
            },
            responsive: [{
              breakpoint: 100,
              options: {
                chart: {
                  width: (isMinScreen || isMinScreen2 || isMinScreen3) ? 200 : 400
                },
                legend: {
                  fontSize: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? '4px' : '14px',
                  position: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 'left' : 'left',
                  width: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 10 : 50,
                  height: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 10 : 50,
                }
              }
            }]
            }
          };

    const frontendChart =  {
          
        series: [60, 55, 41, 17, 15, 50, 50, 50],
        options: {
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              donut: {
                    size: (isMinScreen || isMinScreen2 || isMinScreen3) ? "85%" : "75%"
                }
            }
          },
          grid: {
            padding: {
              bottom: -80
            }
          },
          labels: ["React JS", "Angular JS", "Next JS", "Vue JS", "Vanilla JS", "Typescript", "HTML", "Tailwind CSS"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Front-End',
            style: {
                color: '#6b6d6e'
            },
          },
          responsive: [{
            breakpoint: 100,
            options: {
              chart: {
                width: (isMinScreen || isMinScreen2 || isMinScreen3) ? 50 : 200
              },
              legend: {
                fontSize: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? '10px' : '14px',
                position: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 'bottom' : '',
                width: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 10 : 50,
                height: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 20 : 50,
              }
            }
          }]
        }
    };

    const backendChart =  {
          
        series: [60, 80, 60, 70, 30, 40],
        options: {
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              donut: {
                size: (isMinScreen || isMinScreen2 || isMinScreen3) ? "85%" : "75%"
            }
            }
          },
          grid: {
            padding: {
              bottom: -80
            }
          },
          labels: ["C# .NET", "Python", "Go", "Node JS", "Java", "C++"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Back-End',
            style: {
                color: '#6b6d6e'
            },
          },
          responsive: [{
            breakpoint: 100,
            options: {
              chart: {
                width: (isMinScreen || isMinScreen2 || isMinScreen3) ? 50 : 200
              },
              legend: {
                fontSize: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? '10px' : '14px',
                position: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 'bottom' : '',
                width: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 10 : 50,
                height: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 20 : 50,
              }
            }
          }]
        }
    };

    const databaseChart =  {
          
        series: [60, 80, 60, 70, 30, 40],
        options: {
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              donut: {
                size: (isMinScreen || isMinScreen2 || isMinScreen3) ? "85%" : "75%"
            }
            }
          },
          grid: {
            padding: {
              bottom: -80
            }
          },
          labels: ["SQL server", "Mysql", "PostgreSQL", "MongoDB", "Neo4j", "NoSQL"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Database',
            style: {
                color: '#6b6d6e'
            },
          },
          responsive: [{
            breakpoint: 100,
            options: {
              chart: {
                width: (isMinScreen || isMinScreen2 || isMinScreen3) ? 50 : 200
              },
              legend: {
                fontSize: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? '10px' : '14px',
                position: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 'bottom' : '',
                width: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 10 : 50,
                height: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 20 : 50,
              }
            }
          }]
        }
    };

    const devopsChart =  {
          
        series: [80, 80, 60, 70, 50, 80, 80, 50, 80, 80, 80, 50, 40],
        options: {
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              donut: {
                size: (isMinScreen || isMinScreen2 || isMinScreen3) ? "85%" : "75%"
            }
            }
          },
          grid: {
            padding: {
              bottom: -80
            }
          },
          labels: ["Docker", "Kubernetes", "Rancher", "Nginx", "Consul", "Jenkins", "Octopus", "Teamcity", "RMQ", "Kafka", "AMQ", "Github Actions", "Datadog"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Dev-Ops Tools',
            style: {
                color: '#6b6d6e'
            },
          },
          responsive: [{
            breakpoint: 100,
            options: {
              chart: {
                width: (isMinScreen || isMinScreen2 || isMinScreen3) ? 50 : 200
              },
              legend: {
                fontSize: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? '10px' : '14px',
                position: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 'bottom' : '',
                width: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 10 : 50,
                height: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 20 : 50,
              }
            }
          }]
        }
    };

    const cloudChart =  {
          
        series: [120, 80, 30, 20],
        options: {
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10,
              donut: {
                size: (isMinScreen || isMinScreen2 || isMinScreen3) ? "85%" : "75%"
            }
            }
          },
          grid: {
            padding: {
              bottom: -80
            }
          },
          labels: ["AWS", "Azure", "GCP", "Oracle"],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Cloud',
            style: {
                color: '#6b6d6e'
            },
          },
          responsive: [{
            breakpoint: 100,
            options: {
              chart: {
                width: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 50 : 200
              },
              legend: {
                fontSize: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? '10px' : '14px',
                position: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 'bottom' : '',
                width: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 10 : 50,
                height: (isMinScreen || isMinScreen2 || isMinScreen3 ) ? 20 : 50,
              }
            }
          }]
        }
    };

    return (
        <div className="w-full bg-transaprent flex flex-col items-center">
            {(typeof window !== 'undefined') && <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type="radialBar"
                height={(isMinScreen || isMinScreen2 ) ? 300 : 600}
                width={(isMinScreen || isMinScreen2 ) ? 300 : 600}
            />}
            <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3 gap-2 justify-between border border-transparent rounded-xl shadow-lg">
                {(typeof window !== 'undefined') && <ReactApexChart
                    options={frontendChart.options}
                    series={frontendChart.series}
                    type="donut"
                    align='center'
                    height={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    width={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    className="p-2 dark:text-neutral-200"
                />}
                {(typeof window !== 'undefined') && <ReactApexChart
                    options={backendChart.options}
                    series={backendChart.series}
                    type="donut"
                    align='center'
                    height={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    width={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    className="p-2"
                />}
                {(typeof window !== 'undefined') && <ReactApexChart
                    options={databaseChart.options}
                    series={databaseChart.series}
                    type="donut"
                    align='center'
                    height={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    width={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    className="p-2"
                />}
                {(typeof window !== 'undefined') && <ReactApexChart
                    options={devopsChart.options}
                    series={devopsChart.series}
                    type="donut"
                    align='center'
                    height={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    width={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    className="p-2"
                />}
                {(typeof window !== 'undefined') && <ReactApexChart
                    options={cloudChart.options}
                    series={cloudChart.series}
                    type="donut"
                    align='center'
                    height={(isMinScreen || isMinScreen2 || isMinScreen3) ? 300 : 400}
                    width={(isMinScreen || isMinScreen2 || isMinScreen3 ) ? 300 : 400}
                    className="p-2"
                />}
            </div>
        </div>
    )
} 