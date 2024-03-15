import {Component, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart, ApexDataLabels, ApexFill, ApexLegend,
  ApexNonAxisChartSeries, ApexPlotOptions,
  ApexResponsive, ApexStroke,
  ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis,
  ChartComponent,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;
};

export type ChartOptionsBarra = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-data-statistic',
  standalone: true,
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './data-statistic.component.html',
  styleUrl: './data-statistic.component.scss'
})
export class DataStatisticComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartComedor: ChartOptions;
  public chartInternado: ChartOptions;
  public chartBarrasComedor: ChartOptionsBarra;
  public chartBarrasInternado: ChartOptionsBarra;

  public chartBarrasHComedor: ChartOptionsBarra;
  public chartBarrasHInternado: ChartOptionsBarra;

  constructor() {
    this.chartComedor = {
      series: [44, 55],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Rechazado", "Aprobado"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        align: "center",
        text: "Solicitantes de Comedor Universitario"
      }
    };
    this.chartInternado = {
      series: [44, 55],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Rechazado", "Aprobado"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        align: "center",
        text: "Solicitantes de Internado Universitario"
      }
    };

    this.chartBarrasComedor = {
      series: [
        {
          name: "Postulantes",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 60]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width: 500
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2019 I",
          "2019 II",
          "2020 I",
          "2020 II",
          "2021 I",
          "2021 II",
          "2022 I",
          "2022 II",
          "2023 I",
          "2023 II",
        ]
      },
      yaxis: {
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Postulantes";
          }
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      title: {
        align: "center",
        text: "Usuarios por Semestre del Comendor Universitario"
      }
    };
    this.chartBarrasInternado = {
      series: [
        {
          name: "Postulantes",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 60]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width: 500
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2019 I",
          "2019 II",
          "2020 I",
          "2020 II",
          "2021 I",
          "2021 II",
          "2022 I",
          "2022 II",
          "2023 I",
          "2023 II",
        ]
      },
      yaxis: {
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Postulantes";
          }
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      title: {
        align: "center",
        text: "Usuarios por Semestre del Internado Universitario"
      }
    };

    this.chartBarrasHComedor = {
      series: [
        {
          name: "Alumnos",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 60, 22, 26]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width: 500
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "F.I.I.S",
          "F.I.M.E",
          "AGRONOMIA",
          "CONTABILIDAD",
          "ZOOTECNIA",
          "R.N.R",
          "C.S.A",
          "F.I.A",
          "AMBIENTAL",
          "ECONOMÍA",
          "ADMINISTRACIÓN",
          "FORESTALES"
        ]
      },
      yaxis: {
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Alumnos";
          }
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      title: {
        align: "center",
        text: "Beneficiarios del Comedor Universitario por Facultad"
      }
    };
    this.chartBarrasHInternado = {
      series: [
        {
          name: "Postulantes",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 60, 30, 67]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width: 500
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "F.I.I.S",
          "F.I.M.E",
          "AGRONOMIA",
          "CONTABILIDAD",
          "ZOOTECNIA",
          "R.N.R",
          "C.S.A",
          "F.I.A",
          "AMBIENTAL",
          "ECONOMÍA",
          "ADMINISTRACIÓN",
          "FORESTALES"
        ]
      },
      yaxis: {
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Postulantes";
          }
        }
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      title: {
        align: "center",
        text: "Beneficiarios del Comedor Universitario por Facultad"
      }
    };
  }
}
