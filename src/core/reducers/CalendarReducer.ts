import {setWith, TypedReducer} from "redoodle";
import {CalendarAction} from "../actions/CalendarAction";
import {CalendarDay} from "../types/CalendarDay";

function buildCalendarReducer() {
    const calendarReducer = TypedReducer.builder<CalendarDay>();

    calendarReducer.withHandler(CalendarAction.increaseDay.TYPE, (state) => {
        const nextDay = state.day == 30 ? state.day : state.day + 1;
        return setWith(state, Object.assign({}, state, {day: nextDay}))
    });

    calendarReducer.withHandler(CalendarAction.decreaseDay.TYPE, (state) => {
        const nextDay = state.day == 1 ? state.day : state.day - 1;
        return setWith(state, Object.assign({}, state, {day: nextDay}))
    });

    calendarReducer.withHandler(CalendarAction.updateDay.TYPE, (state, action) => {
        return setWith(state, Object.assign({}, state, action))
    });

    calendarReducer.withDefaultHandler((state) => state);

    return calendarReducer;
}

export const calendarDay = buildCalendarReducer().build();
