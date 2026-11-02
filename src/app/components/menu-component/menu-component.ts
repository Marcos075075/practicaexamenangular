import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Series } from '../../models/series';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  public series!: Series[];

  constructor(
    private _serviceSeries: ServiceSeries,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
      this.series = await this._serviceSeries.getSeries();
      this._cdr.detectChanges();
  }
}
