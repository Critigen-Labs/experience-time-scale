/** @jsx jsx */
import {
    AllWidgetProps,
    BaseWidget,
    jsx,
    React,
    IMState,
    MutableStoreManager,
} from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import Point = require("esri/geometry/Point");
import TimeSlider = require("esri/widgets/TimeSlider");
import TimeExtent = require("esri/TimeExtent");
import "../style/core.scss";
import BirdChartAndSlider from "./chartAndSlider";

export default class Widget extends BaseWidget<
    AllWidgetProps<{}> & {
        playing: boolean;
        speed: number;
        start: Date;
        end: Date;
        month: string;
    },
    {}
> {
    constructor(props) {
        super(props);

        //recover last known user input
        props.config.start =
            new Date(props.config.start) || new Date("01/01/2019");
        props.config.end = new Date(props.config.end) || new Date("01/08/2019");
        this.state = {
            mapView: null,
            extent: null,
            latitude: "",
            longitude: "",
        };
    }

    static mapExtraStateProps(state: IMState) {
        return {
            playing: state.myState2.playing,
            speed: state.myState2.speed,
            start: state.myState2.start,
            end: state.myState2.end,
            month: state.myState2.month
        };
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (
            nextProps.start.getTime() !== this.props.start.getTime() ||
            nextProps.end.getTime() !== this.props.end.getTime()
        ) {
            this.state.layer.timeExtent = new TimeExtent({
                start: nextProps.start,
                end: nextProps.end,
            });
            if (!this.state.layer.visible) {
                this.state.layer.visible = true;
            }
        }
        return true;
    };

    activeViewChangeHandler = (jmv: JimuMapView) => {
        if (jmv) {
            let prowar = jmv.view.map.layers.find(
                (l) => l.id.indexOf("Prowar") > -1
            );

            if (prowar) {
                //layer shows all data to start, need it to wait for slider to init
                prowar.visible = false;
                prowar.timeExtent = new TimeExtent({
                    start: new Date("01/01/2019"),
                    end: new Date("01/08/2019"),
                });

                setTimeout(() => {
                    prowar.visible = true;
                }, 2000);

                this.setState({
                    mapView: jmv.view,
                    layer: prowar,
                });

            }
        }
    };

  
    render() {
        return (
            <div className="widget-starter jimu-widget test">
                {this.props.hasOwnProperty("useMapWidgetIds") &&
                    this.props.useMapWidgetIds &&
                    this.props.useMapWidgetIds.length === 1 && (
                        <JimuMapViewComponent
                            useMapWidgetIds={this.props.useMapWidgetIds}
                            onActiveViewChange={this.activeViewChangeHandler}
                        />
                    )}
                <BirdChartAndSlider props={this.props} />
            </div>
        );
    }
}
