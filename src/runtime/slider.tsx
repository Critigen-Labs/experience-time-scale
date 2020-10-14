/** @jsx jsx */
// React imports
import {
    AllWidgetProps,
    BaseWidget,
    jsx,
    React,
    IMState,
    WidgetJson,
    MutableStoreManager,
} from "jimu-core";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { any } from "prop-types";

const MySlider = withStyles({
    root: {
        color: "#3a8589",
        height: 3,
        padding: "13px 0",
    },
    thumb: {
        height: 100,
        width: 10,
        backgroundColor: "#fff",
        border: "1px solid currentColor",
        marginTop: -95,
        marginLeft: -13,
        boxShadow: "#ebebeb 0 2px 2px",
        "&:focus, &:hover, &$active": {
            boxShadow: "#ccc 0 2px 3px 1px",
        },
        "& .bar": {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: "currentColor",
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: "#d8d8d8",
        opacity: 1,
        height: 3,
    },
})(Slider);

function MyThumbComponent(props) {
    return (
        <span {...props}>
            <span className="bar" />
        </span>
    );
}

// Component definition
//const BirdSlider = () => {
    export default class BirdSlider extends BaseWidget<
    AllWidgetProps<WidgetJson>,
    any
> {
    state: { stVal: number; edVal: number; maxVal: number };
    props: any;
    timer: any;
    months: [any];
    constructor(props) {
        super(props.props);
        this.timer = null;
        this.months = props.months;
        this.state = {
            stVal: 1,
            edVal: 1,
            maxVal: 52
        };
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        const props = this.props?.props || this.props;
        
        if (nextProps.props.playing !== props.playing || nextProps.props.speed !== props.speed) {
            this.setTimer(nextProps.props.playing, 2000 / nextProps.props.speed);
        } else if (!nextProps.props.playing && this.timer){
            this.timer = clearInterval(this.timer);
        }
     
        if (nextProps.props.month !== props.month && this.months?.length) {
            //update start/end and stop the timer
            let index = this.months.indexOf(nextProps.props.month);
            //add bonus weeks
            if (index === 11) {
                index = index * 4 + 4;
            } else if (index >= 8) {
                index = index * 4 + 3;
            } else if (index >= 6) {
                index = index * 4 + 2;
            } else if (index >= 3) {
                index = index * 4 + 1;
            } else {
                index = index * 4;
            }
            this.state.stVal = index;
            this.state.edVal = index + 4;
            this.timer && clearInterval(this.timer);
            this.timer = null;

            if (nextProps.props.playing) {
                props.dispatch({
                    type: "CHANGE_BOOL",
                    val: false,
                });
            }

            this.setDate(this.state.stVal, this.state.edVal);
        }

        return true;
    };

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    setTimer = (isPlaying, speed) => {
        if (isPlaying) {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            this.timer = setInterval(this.incrementSlider, speed);
        } else {
            window.clearInterval(this.timer);
        }
    };

    incrementSlider = () => {
        let sd = this.state.stVal + 1;
        let ed = this.state.edVal + 1;

        if (ed > this.state.maxVal) {
            ed = ed - sd + 1;
            sd = 1;
        }

        this.setDate(sd, ed);
    };

    handleSliderChange = (event, newValue) => {
        this.setDate(newValue[0], newValue[1]);
    };

    setDate = (startDate, endDate) => {
        const props = this.props?.props || this.props;

        if (startDate <= endDate) {
            this.setState({
                "stVal": startDate,
                "edVal": endDate
            });

            props.dispatch({
                type: "CHANGE_START",
                val: this.getDateFromNumber(startDate, true),
            });

            props.dispatch({
                type: "CHANGE_END",
                val: this.getDateFromNumber(endDate, false),
            });
        }
    };

    getDateFromNumber = (val, isStart) => {
        // return 12/31 if last marker
        if (val === 52 && !isStart) {
            return new Date("12/31/2019");
        }

        let dt = new Date("1/1/2019");
        let days = val * 7;

        if (isStart) {
            days -= 7;
        }

        dt.setDate(dt.getDate() + days);

        return dt;
    };

    // const searchClicked = (e) => {
    //     let st = new Date('2020-01-01');
    //     let en = new Date('2020-03-01');
    // }
    render() {
        return (
            <div>
                <MySlider
                    ThumbComponent={MyThumbComponent}
                    // getAriaValueText={valuetext}
                    onChange={this.handleSliderChange}
                    step={1}
                    marks
                    min={1}
                    max={this.state.maxVal}
                    value={[this.state.stVal, this.state.edVal]}
                    valueLabelDisplay="auto"
                />
            </div>
        );
    }
}
