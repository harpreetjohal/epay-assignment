import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";
import { DataView } from "../models/dataView.model";

@Injectable()
export class TaskService {
    public tasks: Array<Task>;

    public constructor() {
        this.tasks = [];
        this.addNewEmptyTask(-1);
    }


    public deleteTask(id: number): void {
        let alreadyExistingTask: Task = this.FindTaskById(id);
        if (alreadyExistingTask) {
            let index: number = this.tasks.findIndex((t: Task) => t === alreadyExistingTask);
            if (index !== -1) {
                this.tasks.splice(index, 1);
            }
        }

    }

    public getTasks(): Array<Task> {

        return this.tasks;
    }

    public addNewEmptyTask(index: number) {
        let initialTask: Task = new Task();
        let currentIndex: number = index + 1;
        initialTask.id = currentIndex;
        initialTask.value = "";
        for (let task of this.tasks.filter(i => i.id > index)) {
            task.id = currentIndex + 1;
        }
        this.tasks.push(initialTask);
    }

    public updateValue(id: number, value: string): void {

        let alreadyExistingTask: Task = this.FindTaskById(id);
        if (alreadyExistingTask) {
            alreadyExistingTask.value = value;
        }
    }

    private FindTaskById(id: number): Task {
        return this.tasks.find((t: Task) => t.id === id);
    }

    public getLatestTaskValueInJsonString(): DataView {

        let data = new DataView();
        data.data = this.tasks.map((t: Task) => t.value);
        return data;
    }

}