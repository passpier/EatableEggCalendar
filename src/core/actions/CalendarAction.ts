import {TypedAction} from "redoodle";
import {CalendarDay} from "../types/CalendarDay";

export enum CalendarActionType {
    INCREASE_DAY = "INCREASE_DAY",
    DECREASE_DAY = "DECREASE_DAY",
    UPDATE_DAY = "UPDATE_DAY",
}

export class CalendarAction {
    public static increaseDay = TypedAction.defineWithoutPayload(CalendarActionType.INCREASE_DAY)();
    public static decreaseDay = TypedAction.defineWithoutPayload(CalendarActionType.DECREASE_DAY)();
    public static updateDay = TypedAction.define(CalendarActionType.UPDATE_DAY)<CalendarDay>();
}
