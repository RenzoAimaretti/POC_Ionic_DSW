import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonListHeader,
  IonInput,
  IonCard,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Todo } from '../interface/todo.interface';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonInput,
    IonListHeader,
    IonButton,
    IonLabel,
    IonItem,
    IonList,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    RouterLink,
    IonMenuButton,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MainPage {
  //inicializacion de la tarea nueva vacia
  newTodo: Todo = {
    title: '',
    description: '',
    status: false,
  };

  //inicializacion de la coleccion de tareas vacia
  todoCollection: Todo[] = [];

  constructor(private formBuilder: FormBuilder) {}

  async addTodo() {
    await Haptics.impact({ style: ImpactStyle.Light });
    console.log(this.newTodo);
    this.todoCollection.push(this.newTodo);
    this.newTodo = {
      title: '',
      description: '',
      status: false,
    };
    console.log('La tarea fue agregada y el formulario se limpio');
  }
  async checkTodo(item: Todo) {
    await Haptics.impact({ style: ImpactStyle.Medium });
    item.status = !item.status;
  }
}
