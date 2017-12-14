/**
 * NETWORK CHART
 * Shows force directed graph of a user's social connections
 */
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { network } from '../../domain/data/mock-network';

declare let d3: any;

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NetworkChartComponent implements OnInit {
  private options: any;
  private data = network;
  @Input() height;
  @Input() width;

  constructor() { }

  ngOnInit() {
    this.setupChart();
  }

  /**
   * Builds a network chart by configuring nvd3 chart options
   */
  setupChart(): void {
    const color = d3.scale.category20();
    this.options = {
      chart: {
        type: 'forceDirectedGraph',
        height: this.height,
        width: this.width,
        margin: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        color: d => color(d.group),
        nodeExtras: function(node) {
          node
            .append('text')
            .attr('dx', 8)
            .attr('dy', '.35em')
            .text(d => d.name)
            .style('font-size', '10px');
        }
      }
    };
  }
}
