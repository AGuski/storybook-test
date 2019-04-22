import { Component, Input } from '@angular/core';

enum BannerTypes {
  ALERT = 'ALERT',
  WARNING = 'WARNING',
  INFO = 'INFO'
}

/**
 * A configurable component to display and emphasize information.
 * The content can be defined by an optional text or content projection.
 * 
 * @example
 * ```
<banner
  type="WARNING"
  text="Default text to be used within banner"
></banner>
```
 */
@Component({
  selector: 'banner',
  template: `
    <div class="icon-container" [ngClass]="type"></div>
    <div class="content-container">
      <p *ngIf="text">{{text}}</p>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      border-radius: 5px;
      box-shadow: 0px 0px 5px 0px #00000066;
      overflow: hidden;
    }

    .content-container {
      padding: 0 10px;
    }

    .icon-container {
      display: flex;
      width: 40px;
      min-width: 40px;
      align-items: center;
      justify-content: center;
      background-position: center center;
      background-repeat: no-repeat;
    }

    /* banner type coloring */

    .ALERT {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDMgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPmV4Y2xhbWF0aW9uPC90aXRsZT4KPGcgdHJhbnNmb3JtPSJyb3RhdGUoMCwgMS41LCA4KSIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxLjUiIGN5PSIxNC41IiByPSIxLjUiLz48cGF0aCBkPSJNMCAuOTk2QzAgLjQ0Ni40NDMgMCAxIDBoMWMuNTUzIDAgMSAuNDQ1IDEgLjk5NnY4LjQ5OEMzIDEwLjMyNiAyLjMzNCAxMSAxLjUgMTEgLjY3MiAxMSAwIDEwLjMyOCAwIDkuNDk0Vi45OTZ6Ii8+PC9nPjwvc3ZnPg==");
      background-color: #FF3144;
    }

    .WARNING {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UGF0aCAzPC90aXRsZT48cGF0aCBkPSJNOCAybDYgMTAuNUgyeiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZT0iI0ZGRiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=");
      background-color: #FFBB00;
    }

    .INFO {
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDMgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPmV4Y2xhbWF0aW9uPC90aXRsZT48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODAsIDEuNSwgOCkiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iMS41IiBjeT0iMTQuNSIgcj0iMS41Ii8+PHBhdGggZD0iTTAgLjk5NkMwIC40NDYuNDQzIDAgMSAwaDFjLjU1MyAwIDEgLjQ0NSAxIC45OTZ2OC40OThDMyAxMC4zMjYgMi4zMzQgMTEgMS41IDExIC42NzIgMTEgMCAxMC4zMjggMCA5LjQ5NFYuOTk2eiIvPjwvZz48L3N2Zz4=");
      background-color: #378AD7;
    }
  `],

})
export class BannerComponent  {

  /** 
   * A string of text that is displayed in the banner.
   * @type(string)
   */
  @Input() text: string;

  /** 
   * An enum of different types of the banner to change the visual.
   * @type(BannerTypes)
   */
  @Input() type: BannerTypes;
}
