const data = [
    { date: "2018-01-01",temperatureHigh: 18.39 },
    { date: "2018-01-02",temperatureHigh: 25.79 },
    { date: "2018-01-03",temperatureHigh: 28.32 },
    { date: "2018-01-04",temperatureHigh: 24.09 },
    { date: "2018-01-05",temperatureHigh: 15.36 },
    { date: "2018-01-06",temperatureHigh: 13.02 },
    { date: "2018-01-07",temperatureHigh: 18.24},
    { date: "2018-01-08",temperatureHigh: 29.76},
    { date: "2018-01-09",temperatureHigh: 43.07},
    { date: "2018-01-10",temperatureHigh: 39.43},
    {date: "2018-01-11",temperatureHigh: 49.72},
    { date: "2018-01-12",temperatureHigh: 60.45},
    { date: "2018-01-13",temperatureHigh: 41.94},
    {  date: "2018-01-14",temperatureHigh: 24.71},
    { date: "2018-01-15",temperatureHigh: 29.56},
    {date: "2018-01-16",temperatureHigh: 35.26},
    {date: "2018-01-17",temperatureHigh: 34.08},
    {date: "2018-01-18",temperatureHigh: 31.84},
    {date: "2018-01-19",temperatureHigh: 37.48},
    {date: "2018-01-20",temperatureHigh: 50.89},
    {date: "2018-01-21",temperatureHigh: 50.08},
    {date: "2018-01-22",temperatureHigh: 47.98},
    {date: "2018-01-23",temperatureHigh: 58.21},
    {date: "2018-01-24",temperatureHigh: 41.48},
    {date: "2018-01-25",temperatureHigh: 34.21},
    {date: "2018-01-26",temperatureHigh: 37.98},
    {date: "2018-01-27",temperatureHigh: 53.32},
    {date: "2018-01-28",temperatureHigh: 49.2},
    {date: "2018-01-29",temperatureHigh: 43.24},
    {date: "2018-01-30",temperatureHigh: 35.45},






];
const dateParser = d3.timeParse("%Y-%m-%d");




    const width = 1600;
    const height = 600;
    const margin = {top: 50, bottom: 50, left: 50, right: 50};

    const svg = d3.select('#d3-container')
        .append('svg')
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)
        .attr("viewBox", [0, 0, width, height]);

    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.1)

    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height - margin.bottom, margin.top])

    svg
        .append("g")
        .attr("fill", 'pink')
        .selectAll("rect")
        .data(data.sort((a, b)  => d3.descending(a.temperatureHigh, b.temperatureHigh)))
        .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.temperatureHigh))
        .attr('title', (d) => d.temperatureHigh)
        .attr("class", "rect")
        .attr("height", d => y(0) - y(d.temperatureHigh))
        .attr("width", x.bandwidth());

    function yAxis(g) {
        g.attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).ticks(null, data.format))
            .attr("font-size", '20px')
    }

    function xAxis(g) {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => data[i].date))
            .attr("font-size", '7px')
    }

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
    svg.node();
