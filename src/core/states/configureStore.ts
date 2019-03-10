import {combineReducers, compoundActionsEnhancer, createStore, loggingMiddleware, Store, StoreEnhancer} from "redoodle";
import {applyMiddleware, compose} from "redux";
import {calendarDay} from "../reducers/CalendarReducer";
import {AppDataState} from "../types/AppDataState";
import {initAppDataState} from "./initAppDataState";

export function configureStore(initialState: AppDataState = initAppDataState()): Store<AppDataState> {
    const middlewares = [
        loggingMiddleware({
            enableInProduction: false,
        }),
    ];
    const enhancers: StoreEnhancer = compose(
        applyMiddleware(...middlewares),
        compoundActionsEnhancer(),
    );
    const reducers = combineReducers<AppDataState>({
        calendarDay,
    });
    return createStore(reducers, initialState, enhancers);
}
