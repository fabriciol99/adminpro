import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1sComponent } from './graficas1s/graficas1s.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule} from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1sComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
      ],
      exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1sComponent,
        PagesComponent
      ],
      imports: [
          SharedModule,
          PAGES_ROUTES,
          FormsModule,
          ChartsModule
      ]
})

export class PagesModule {}
