import {Component, OnDestroy, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart, ApexDataLabels, ApexFill, ApexLegend,
  ApexNonAxisChartSeries, ApexPlotOptions,
  ApexResponsive, ApexStroke,
  ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis,
  ChartComponent,
  NgApexchartsModule
} from "ng-apexcharts";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {IAnnouncement} from "../../../../core/models/announcement";
import {NgIf} from "@angular/common";
import {IStatistics} from "../../../../core/models/statistics";
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";

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
    NgApexchartsModule,
    NgIf,
    BlockUiComponent
  ],
  templateUrl: './data-statistic.component.html',
  styleUrl: './data-statistic.component.scss',
  providers: [ManagerService, ToastService]
})
export class DataStatisticComponent implements OnDestroy {

  private _subscriptions: Subscription = new Subscription();
  private _announcement: IAnnouncement = {
    nombre: '',
    convocatoria_servicio: [],
    fecha_fin: '',
    fecha_inicio: '',
    secciones: [],
    activo: false
  };

  @ViewChild("chart") chart!: ChartComponent;

  public chartBarrasHComedor: ChartOptionsBarra;
  public chartBarrasHInternado: ChartOptionsBarra;

  protected isLoading: boolean = false;
  protected statistics: IStatistics = {
    estados_solicitud: {
      pendiente: 0,
      rechazado: 0,
      aceptado: 0,
      aprobado: 0
    },
    escuelas_profesionales: {
      "ADMINISTRACION": 0,
      "AGRONOMIA": 0,
      "CONTABILIDAD": 0,
      "ECONOMIA": 0,
      "INGENIERIA AMBIENTAL": 0,
      "INGENIERIA EN CONSERVACION DE SUELOS Y AGUA": 0,
      "INGENIERIA EN INDUSTRIAS ALIMENTARIAS": 0,
      "INGENIERIA EN INFORMATICA Y SISTEMAS": 0,
      "INGENIERIA EN RECURSOS NATURALES RENOVABLES": 0,
      "INGENIERIA FORESTAL": 0,
      "INGENIERIA MECANICA ELECTRICA": 0,
      "ZOOTECNIA": 0
    },
    facultades: {
      "FACULTAD DE AGRONOMIA": 0,
      "FACULTAD DE CIENCIAS CONTABLES": 0,
      "FACULTAD DE CIENCIAS ECONOMICAS Y ADMINISTRATIVAS": 0,
      "FACULTAD DE INGENIERIA EN INDUSTRIAS ALIMENTARIAS": 0,
      "FACULTAD DE INGENIERIA EN INFORMATICA Y SISTEMAS": 0,
      "FACULTAD DE INGENIERIA MECANICA ELECTRICA": 0,
      "FACULTAD DE RECURSOS NATURALES RENOVABLES": 0,
      "FACULTAD DE ZOOTECNIA": 0
    },
    sexo: {
      num_hombres: 0,
      num_mujeres: 0
    }
  }

  constructor(
    private _managerService: ManagerService,
    private _toastService: ToastService
  ) {

    this.chartBarrasHComedor = {
      series: [],
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
          'AGRONOMIA',
          'CIENCIAS CONTABLES',
          'F.C.A',
          'F.I.I.A',
          'F.I.I.S',
          'F.I.M.E',
          'F.R.N.R',
          'ZOOTECNIA'
        ]
      },
      yaxis: {},
      fill: {
        opacity: 1
      },
      tooltip: {},
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      title: {
        align: "center",
        text: "Beneficiarios por Facultad Profesional"
      }
    };

    this.chartBarrasHInternado = {
      series: [],
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
          "ADMINISTRACION",
          "AGRONOMIA",
          "CONTABILIDAD",
          "ECONOMIA",
          "E.I.A",
          "E.I.C.S.A",
          "E.I.I.A",
          "E.I.I.S",
          "E.I.R.N.R",
          "E.I.F",
          "E.I.M.E",
          "ZOOTECNIA"
        ]
      },
      yaxis: {},
      fill: {
        opacity: 1
      },
      tooltip: {},
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      },
      title: {
        align: "center",
        text: "Beneficiarios por Escuela Profesional"
      }
    };

    this._getCurrentAnnouncement();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  private _getCurrentAnnouncement(): void {
    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.getCurrentAnnouncement().subscribe({
        next: (res) => {
          if (!res.detalle) {
            this.isLoading = false;
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this._announcement = res.detalle;

          this._getStatistic();
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this._toastService.add({type: 'error', message: 'No se pudo obtener la convocatoria actual'});
          console.error(err)
        }
      })
    );
  }

  private _getStatistic(): void {
    const code = this._announcement?.id || 0;
    this._managerService.getStatistics(code).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (!res.detalle) {
          this._toastService.add({type: 'error', message: res.msg});
          return;
        }

        this.statistics = res.detalle;

        this.chartBarrasHComedor.series = [];
        this.chartBarrasHComedor.series.push(
          {
            name: 'Postulantes',
            data: Object.values(this.statistics.facultades)
          }
        );

        this.chartBarrasHInternado.series = [];
        this.chartBarrasHInternado.series.push(
          {
            name: 'Postulantes',
            data: Object.values(this.statistics.escuelas_profesionales)
          }
        );

        console.log(this.chartBarrasHInternado)
      },
      error: (err: HttpErrorResponse) => {
        this._toastService.add({type: 'error', message: 'No se pudo obtener las estadísticas'});
        console.log(err);
        this.isLoading = false;
      }
    });
  }
}
