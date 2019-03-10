import {List, Range} from "immutable";
import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {CalendarAction} from "./core/actions/CalendarAction";
import {AppDataState} from "./core/types/AppDataState";
import {CalendarDay} from "./core/types/CalendarDay";

interface EggCalendarProps {
    calendarDay: CalendarDay;
}

interface EggCalendarDispatchProps {
    updateDay: (day: number) => void;
    add: () => void;
    minus: () => void;
}

class EggCalendar extends Component<EggCalendarProps & EggCalendarDispatchProps> {
    render() {
        const weekStrings: List<string> = List(["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"]);
        return (
            <View style={styles.container}>
                <Text style={styles.monthTitle}>11</Text>
                <View style={styles.weekContainer}>
                    {
                        weekStrings.map((value, key) => {
                            return <Text key={key} style={styles.dayTitle}>{value}</Text>
                        }).toArray()
                    }
                </View>
                {
                    Range(0, 5).map((value, key) => this.renderWeek(value, key))
                }
                <View style={styles.weekContainer}>
                    <TouchableOpacity style={styles.clickItem} onPress={this.props.minus}>
                        <Text style={styles.dayTitle}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clickItem} onPress={this.props.add}>
                        <Text style={styles.dayTitle}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    private renderWeek(weekSeq: number, key: number) {
        return (
            <View key={key} style={styles.weekContainer}>
                {
                    Range(-4 + 7 * weekSeq, 3 + 7 * weekSeq).map((value, key) => this.renderDay(key, value)).toArray()
                }
            </View>
        );
    }

    private renderDay(key: number, day: number) {
        const {calendarDay, updateDay} = this.props;
        const isSelected = calendarDay.day === day;
        return (
            <TouchableOpacity
                key={key}
                style={[styles.dayItem, {backgroundColor: isSelected ? "blue" : "transparent"}]}
                onPress={day > 0 ? () => updateDay(day) : undefined}
            >
                <Text style={styles.dayTitle}>{day < 1 ? "" : String(day)}</Text>
            </TouchableOpacity>
        );
    }
}

function mapStateToProps(state: AppDataState): EggCalendarProps {
    const {calendarDay} = state;
    return {
        calendarDay
    }
}

function mapDispatchToProps(dispatch: Dispatch): EggCalendarDispatchProps {
    return {
        updateDay: (day) => dispatch(CalendarAction.updateDay({day})),
        add: () => dispatch(CalendarAction.increaseDay()),
        minus: () => dispatch(CalendarAction.decreaseDay()),
    };
}

export const EggCalendarContainer = connect(mapStateToProps, mapDispatchToProps)(EggCalendar);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    monthTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    weekContainer: {
        flexDirection: 'row',
    },
    dayItem: {
        flex: 1,
        height: 30
    },
    dayTitle: {
        height: 30,
        textAlign: 'center',
        fontSize: 14,
        flex: 1
    },
    clickItem: {
        margin: 2,
        flex: 1,
        height: 30,
        backgroundColor: "#F5FC00"
    },
});
