import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'zone.js';  // Importação corrigida para zone.js
import * as $ from 'jquery';

// Adiciona jQuery ao objeto window para garantir que esteja disponível globalmente
(window as any).$ = $;
(window as any).jQuery = $;

// Inicializa a aplicação com o componente raiz e a configuração da aplicação
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));