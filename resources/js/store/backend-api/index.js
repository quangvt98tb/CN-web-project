"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
function getData(url, body = {}) {
    let token = document.getElementById("csrf-token").getAttribute("content");
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": token,
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(body),
        })
            .then(response => {
            resolve(response.json());
        })
            .catch(e => {
            reject(e);
        });
    });
}
exports.getData = getData;
__export(require("./user.api"));
__export(require("./bank.api"));
__export(require("./friend.api"));
__export(require("./services.api"));
__export(require("./notification.api"));
