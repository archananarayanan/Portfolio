'use client';
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Skills() {

    const isMinScreen = useMediaQuery({ query: '(max-width: 400px)' })
    const isMinScreen2 = useMediaQuery({ query: '(max-width: 600px)' })

    const chartOptions = {
        series: [90, 100, 100, 85, 75, 60, 30],
            options: {
              chart: {
                height: '100%'
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: (isMinScreen || isMinScreen2 ) ? '6px' : '22px',
                    },
                    value: {
                      fontSize: (isMinScreen || isMinScreen2 ) ? '4px' : '16px',
                    },
                    total: {
                      show: true,
                      label: 'Engineering',
                      formatter: function (w: any) {
                        return ( (isMinScreen || isMinScreen2 ) ? ' ': 'Full-Stack' )
                      }
                    }
                  }
                }
              },
              labels: ['Frontend', 'Backend', 'Database', 'Devops', 'Infrastructure', 'Platform', 'Quantum'],
            },

      };

    return (
        <div className="w-full bg-transaprent [&_SvgjsText1285]:text-sm">
            {(typeof window !== 'undefined') && <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type="radialBar"
                height={(isMinScreen || isMinScreen2 ) ? 300 : 600}
                width={(isMinScreen || isMinScreen2 ) ? 300 : 600}
            />}
        </div>
    )
} 