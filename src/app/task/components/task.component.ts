import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.services';
import { Task } from '../models/task.model';
import { DataView } from "../models/dataView.model";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    public tasks: Array<Task> = [];
    constructor(private taskService: TaskService) { }
    public currentTaskValue: DataView;

    ngOnInit() {
        this.getTasks();
    }

    private getTasks(): void {
        this.tasks = this.taskService.getTasks().sort((a: Task, b: Task) => a.id - b.id);
    }

    public addNewTask(index: number): void {
        this.taskService.addNewEmptyTask(index);
        this.getTasks();
        this.getLatestTaskValues();
    }

    public onValueChange(id: number, $event: any): void {
        this.taskService.updateValue(id, $event.target.innerHTML);
        this.getLatestTaskValues();
        $event.preventDefault();
    }

    public getLatestTaskValues(): void {

        this.currentTaskValue = this.taskService.getLatestTaskValueInJsonString();
    }

    public deleteTask(id: number): void {
        this.taskService.deleteTask(id);
        this.getLatestTaskValues();
    }

}
