/** @jsx jsx */
// React imports
import {
    AllWidgetProps,
    BaseWidget,
    jsx,
    React,
    IMState,
    appActions,
    WidgetJson,
    MutableStoreManager,
} from "jimu-core";
import { IMConfig } from "../config";
import BirdChart from "./chart";
import BirdSlider from "./slider";
import { configData } from "../data";

import PlayIcon from "calcite-ui-icons-react/PlayIcon";
import PauseIcon from "calcite-ui-icons-react/PauseIcon";
import IconButton from "@material-ui/core/IconButton";
import Select from "calcite-react/Select";
import { MenuItem } from "calcite-react/Menu";

//global?
// Component definition
export default class BirdChartAndSlider extends BaseWidget<
    AllWidgetProps<WidgetJson>,
    any
> {
    config: any;
    month: any;
    isPlaying: boolean;
    birdName: string;
    dataset: string;
    speed: any;
    isMapbox: boolean;
    months: string[];
    bird: any;
    locations: any;
    data: { _links: { type: { href: string; }; }; type: { target_id: string; }; title: { value: string; }; };
    constructor(props) {
        super(props.props);

        this.state = {
            src: null,
        };
        this.isPlaying = false;
        this.config = configData;

        this.birdName = "Prothonotary Warbler";
        this.bird = this.config.birds
            ? this.config.birds.find((b) => b.name === this.birdName)
            : null;
        this.dataset = "annual";
        this.isMapbox = false;
        this.months = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];
        this.locations = this.bird.locations || [];

        this.data = {
            _links: {
                type: {
                    href: "http://example.com/rest/type/node/article",
                },
            },
            type: {
                target_id: "article",
            },
            title: {
                value: "Example node title",
            },
        };

        
        this.init();
    }

    /**
     * Map the state your widget needs
     * @param state
     */

    monthChange = (value, item) => {
        const props = this.props.props || this.props;
        props.dispatch({
            type: "CHANGE_MONTH",
            val: value,
        });
    };

    playClicked = (e) => {
        const props = this.props.props || this.props;
        this.isPlaying = !this.isPlaying;

        props.dispatch({
            type: "CHANGE_BOOL",
            val: this.isPlaying,
        });
    };

    pauseClicked = (e) => {
        const props = this.props.props || this.props;
        this.isPlaying = !this.isPlaying;
        props.dispatch({
            type: "CHANGE_BOOL",
            val: this.isPlaying,
        });
    };

    speedClicked = (e) => {
        const props = this.props?.props || this.props;
        if (props.speed === 1) {
            props.dispatch({
                type: "CHANGE_NUM",
                val: 2,
            });
        } else if (props.speed === 2) {
            props.dispatch({
                type: "CHANGE_NUM",
                val: 4,
            });
        } else if (props.speed === 4 && !this.isMapbox) {
            props.dispatch({
                type: "CHANGE_NUM",
                val: 8,
            });
        } else if (props.speed === 8 && !this.isMapbox) {
            props.dispatch({
                type: "CHANGE_NUM",
                val: 16,
            });
        } else {
            props.dispatch({
                type: "CHANGE_NUM",
                val: 1,
            });
        }
        if (!props.playing) {
            props.dispatch({
                type: "CHANGE_BOOL",
                val: true,
            });
        }
    };

    init = async () => {
        try {
            const result = await this.getContent(
                null,
                "http://critdrupalbox.eastus2.cloudapp.azure.com/site/warbler?_format=json"
            );
            if (
                result &&
                result.field_birdimage &&
                result.field_birdimage.length
            ) {
                this.setState({
                    src: result.field_birdimage[0].url,
                });
            }

            const token = await this.getToken();
            console.log(token);
            const content = await this.addContent(
                token,
                "http://critdrupalbox.eastus2.cloudapp.azure.com/site/articles?_format=json",
                this.data
            );
            
        } catch (err) {
            console.error(err); // Failed to fetch
        }
    };

    getUser = (userName, password) => {
        var basicAuthCredential = userName + ":" + password;
        var bace64 = btoa(basicAuthCredential);
        return "Basic " + bace64;
    };
    getToken = () =>
        fetch(
            "http://critdrupalbox.eastus2.cloudapp.azure.com/site/session/token",
            {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
            }
        )
            .then((response) => response.text())
            .then((token) => token);

    getContent = (token, url) =>
        fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
        })
            .then((response) => response.json())
            .then((result) => result);

    addContent = (token, url, data) =>
        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => result);

    render() {
        const props = this.props?.props || this.props;
        return (
            <div className="bird-chart-slider-container">
                {this.state.src && (
                    <div className="bird-image">
                        <img src={this.state.src}></img>
                    </div>
                )}
                <div className="play-buttons">
                    <p className="animate-control">Controls</p>
                    {!props.playing && (
                        <IconButton
                            color="primary"
                            title="Play slider"
                            aria-label="Play slider"
                            onClick={this.playClicked}
                        >
                            <PlayIcon filled={true} />
                        </IconButton>
                    )}
                    {props.playing && (
                        <IconButton
                            color="secondary"
                            title="Pause slider"
                            aria-label="Pause slider"
                            onClick={this.pauseClicked}
                        >
                            <PauseIcon filled={true} />
                        </IconButton>
                    )}
                    <IconButton
                        icon="circle"
                        color="primary"
                        title="Speed"
                        aria-label="Speed"
                        onClick={this.speedClicked}
                    >
                        {props.speed + "x"}
                    </IconButton>
                    <div className="month-picker">
                        <Select
                            className="month-dropdown"
                            placeholder="Go to..."
                            onChange={this.monthChange}
                            selectedValue={this.month}
                            value={this.month}
                        >
                            {this.months.map((month) => {
                                return (
                                    <MenuItem key={month} value={month}>
                                        {month}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </div>
                </div>
                <div className="bird-chart-slider-wrapper">
                    <div className="bird-chart-slider-wrapper">
                        <div className="bird-chart big-chart">
                            <BirdChart props={props} />
                        </div>
                        <div className="bird-slider">
                            <BirdSlider
                                props={props}
                                speed={props.speed}
                                months={this.months}
                                isPlaying={this.isPlaying}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
