"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class SnapChat extends TakePhoto {
    constructor(cameraMode, filter, username) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.username = username;
    }
    getReelTime() {
        return 10; // seconds
    }
}
