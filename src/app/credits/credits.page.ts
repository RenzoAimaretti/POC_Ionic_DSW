import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonList,
  IonLabel,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonCard,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
  ],
})
export class CreditsPage {
  constructor() {}

  async openRepository() {
    await Haptics.impact({ style: ImpactStyle.Light });
    const url = 'https://github.com/RenzoAimaretti/POC_Ionic_DSW'; // Reemplaza con tu URL
    window.open(url, '_blank'); // Abre el repositorio en una nueva pestaña
  }
}
