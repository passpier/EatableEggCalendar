import {Store} from "redux";
import {configureStore} from "./states/configureStore";
import {AppDataState} from "./types/AppDataState";

let store: any;

export class AppContext {
    public static getStore(): Store<AppDataState> {
        if (!store) {
            store = configureStore()
        }
        return store
    }
}
