/** @jsx jsx */
// React imports
import {
    AllWidgetProps,
    BaseWidget,
    jsx,
    React,
    IMState,
    WidgetJson,
    appActions,
    MutableStoreManager,
} from "jimu-core";
//import { useSelector } from "react-redux";9
import { configData } from "../data";
import * as Chart from "./lib/Chart.bundle.min";

interface ExtraProps {
    playing: boolean;
    speed: number;
    start: Date;
    end: Date;
    month: string;
}

// Component imports
//import { actions as filterActions } from "../../redux/reducers/filter";
// Component definition
export default function BirdChart(
    props: AllWidgetProps<WidgetJson> & ExtraProps
) {
    const birdName = "Prothonotary Warbler";
    const dataset = "annual";
    const config = configData;
    const isSmall = false;
    var chartReference = React.createRef();
    var mainRef = React.createRef<HTMLDivElement>();
    var bar = null;
    const resize = () => {
        setTimeout(() => {
            if (bar && window.$) {
                let container = window
                    .$(".bird-chart-slider-container")
                    .width();
                let playWidth = window.$(".play-buttons").width();
                let imageWidth = window.$(".bird-image").width();
                window
                    .$("#myChart")
                    .width(container - playWidth - imageWidth - 20);
                bar.chart.update();
            }
        });
    };

    React.useEffect(() => {
        if (birdName) {
            let bird =
                props?.bird || config.birds.find((b) => b.name === birdName);
            var options = {
                legend: { display: false },
                animation: {
                    duration: 0,
                },
                // This chart will not respond to mousemove, etc
                events: ["click"],
                responsive: true,
                maintainAspectRatio: false,
                tooltips: { enabled: false },
                title: {
                    display: ![
                        ...bird.data[props?.source || dataset || "annual"],
                    ].length,
                    text: "***Under Development***",
                },
                scales: {
                    yAxes: [
                        {
                            display: false,
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                        },
                    ],
                    xAxes: [
                        {
                            id: "time",
                            type: "category",
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                            scaleLabel: {
                                display: true,
                                fontSize: 15,
                            },
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 12,
                                callback: (label) => {
                                    if (
                                        !isSmall ||
                                        label === "JAN" ||
                                        label === "DEC"
                                    ) {
                                        return label;
                                    }

                                    return null;
                                },
                            },
                        },
                    ],
                },
            };

            var data = {
                labels: [
                    "JAN",
                    "JAN",
                    "JAN",
                    "JAN",
                    "FEB",
                    "FEB",
                    "FEB",
                    "FEB",
                    "MAR",
                    "MAR",
                    "MAR",
                    "MAR",
                    "APR",
                    "APR",
                    "APR",
                    "APR",
                    "APR",
                    "MAY",
                    "MAY",
                    "MAY",
                    "MAY",
                    "JUN",
                    "JUN",
                    "JUN",
                    "JUN",
                    "JUL",
                    "JUL",
                    "JUL",
                    "JUL",
                    "JUL",
                    "AUG",
                    "AUG",
                    "AUG",
                    "AUG",
                    "SEP",
                    "SEP",
                    "SEP",
                    "SEP",
                    "SEP",
                    "OCT",
                    "OCT",
                    "OCT",
                    "OCT",
                    "NOV",
                    "NOV",
                    "NOV",
                    "NOV",
                    "DEC",
                    "DEC",
                    "DEC",
                    "DEC",
                    "DEC",
                ],
                datasets: [
                    {
                        backgroundColor: "rgba(255,99,132,.8)",
                        borderWidth: 0,
                        hoverBackgroundColor: "rgba(255,99,132,1)",
                        data: [
                            ...bird.data[props.source || dataset || "annual"],
                        ],
                    },
                ],
            };
            bar = new Chart(document.getElementById("myChart"), {
                type: "bar",
                data: data,
                options: options,
            });

            colorData(bar);
        }
    });

    const colorData = (chart) => {
        // Update the document title using the browser API
        if (chart) {
            let barColors = [],
                hoverColors = [];
            chart.data.datasets.forEach((ds) => {
                ds.data.forEach((num) => {
                    if (num === 1) {
                        barColors.push("rgba(166, 188, 202, 0.8)");
                        hoverColors.push("rgba(166, 188, 202, 1)");
                    } else if (num > 1 && num <= 3) {
                        barColors.push("rgba(205, 211, 163, 0.8)");
                        hoverColors.push("rgba(205, 211, 163, 1)");
                    } else {
                        barColors.push("rgba(232, 143, 63, 0.8)");
                        hoverColors.push("rgba(232, 143, 63, 1)");
                    }
                });

                ds.backgroundColor = barColors;
                ds.hoverBackgroundColor = hoverColors;
            });
            chart.update();
            resize();
        }

        //fix chart size, particularly when resizing map.
        let win = $(window);

        win && win.bind("resize", resize);
        return () => {
            // remove resize listener
            let win = $(window);
            win && win.unbind("resize", resize);
        };
    };

    if (birdName) {
        // try {
        //     return <Bar ref={chartReference} data={data} options={options} />;
        // } catch (error) {
        //     console.log(error);
        return (
            <div id="mainRef" ref={mainRef}>
                <canvas id="myChart"></canvas>
            </div>
        );
        //}
    } else {
        return <div></div>;
    }
}

BirdChart.mapExtraStateProps = (
    state: IMState,
    ownProps: AllWidgetProps<WidgetJson>
): ExtraProps => {
    return {
        playing: state.myState2.playing,
        speed: state.myState2.speed,
        start: state.myState2.start,
        end: state.myState2.end,
        month: state.myState2.month,
    };
};
