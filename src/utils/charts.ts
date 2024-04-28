type ChartOptions = {
    plugins: object,
    responsive: boolean,
    scales: object | null,
    maintainAspectRatio: boolean
}


export class ChartOptionsBuilder {
    chartId: string
    options: ChartOptions
    data: {} = {labels: [], datasets:[]}
    key: number = 0
    updated: boolean = false;

    constructor(chartId: string, chartTitle: string) {
        this.chartId = chartId;
        this.options = {
            scales: {},
            plugins: {
                title: {
                    display: false,
                    text: chartTitle
                },
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }

    stacked() {
        this.options.scales = {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
        return this;
    }

    updateData(data) {
        this.updated = true;
        this.key = this.key + 1
        this.data = data;
    }


}
