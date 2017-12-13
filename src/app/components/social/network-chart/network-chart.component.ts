import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

declare let d3: any;

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NetworkChartComponent implements OnInit {
  private options: any;
  private data: any;
  @Input() height;
  @Input() width;

  constructor() { }

  ngOnInit() {
    this.setupChart();
    this.generateMockData();
  }

  /**
   * Configure chart options
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

  /**
   * Generates mock data for the network chart
   */
  generateMockData(): void {
    this.data = {
      'nodes': [
        { 'name': 'Myriel', 'group': 1 },
        { 'name': 'Napoleon', 'group' : 1 },
        { 'name': 'Mlle.Baptistine', 'group': 1 },
        { 'name': 'Mme.Magloire', 'group': 1 },
        { 'name': 'CountessdeLo', 'group': 1 },
        { 'name': 'Geborand', 'group': 1 },
        { 'name': 'Champtercier', 'group': 1 },
        { 'name': 'Cravatte', 'group': 1 },
        { 'name': 'Count', 'group': 1 },
        { 'name': 'OldMan', 'group': 1 },
        { 'name': 'Labarre', 'group': 2 },
        { 'name': 'Valjean', 'group': 2 },
        { 'name': 'Marguerite', 'group': 3 },
        { 'name': 'Mme.deR', 'group': 2 },
        { 'name': 'Isabeau', 'group': 2 },
      ],
      'links': [
        { 'source': 1, 'target': 0, 'value': 1 },
        { 'source': 2, 'target': 0, 'value': 8 },
        { 'source': 3, 'target': 0, 'value': 10 },
        { 'source': 3, 'target': 2, 'value': 6 },
        { 'source': 4, 'target': 0, 'value': 1 },
        { 'source': 5, 'target': 0, 'value': 1 },
        { 'source': 6, 'target': 0, 'value': 1 },
        { 'source': 7, 'target': 0, 'value': 1 },
        { 'source': 8, 'target': 0, 'value': 2 },
        { 'source': 9, 'target': 0, 'value': 1 },
        { 'source': 11, 'target': 10, 'value': 1 },
        { 'source': 11, 'target': 3, 'value': 3 },
        { 'source': 11, 'target': 2, 'value': 3 },
        { 'source': 11, 'target': 0, 'value': 5 },
        { 'source': 12, 'target': 11, 'value': 1 },
        { 'source': 13, 'target': 11, 'value': 1 },
        { 'source': 14, 'target': 11, 'value': 1 },
      ]
    };
  }

}
