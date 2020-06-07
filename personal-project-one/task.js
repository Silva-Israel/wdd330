export class Task {
    constructor(task) {
        this.Id = Date.now();
        this.Task = task;
        this.Complete = false;
    }
}