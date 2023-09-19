abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ) { }
    abstract getReelTime(): number
}

class SnapChat extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public username?: string
  ) {
    super(cameraMode, filter);
    }
    getReelTime() {
        return 10; // seconds
    }
}