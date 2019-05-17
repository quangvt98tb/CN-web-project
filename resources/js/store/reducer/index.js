"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const login_reducer_1 = require("./login.reducer");
const register_reducer_1 = require("./register.reducer");
const alert_reducer_1 = require("./alert.reducer");
const modify_reducer_1 = require("./modify.reducer");
const router_reducer_1 = require("./router.reducer");
const rootReducer = redux_1.combineReducers({
    login: login_reducer_1.login,
    register: register_reducer_1.register,
    alert: alert_reducer_1.alert,
    router: router_reducer_1.router,
    modify: modify_reducer_1.modify
});
exports.default = rootReducer;