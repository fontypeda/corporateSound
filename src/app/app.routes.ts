import { Routes } from '@angular/router';
import { ScriptComponent } from './script/script.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TextComponent } from './text/text.component';

export const routes: Routes = [
  { path: '', component: PresentationComponent, pathMatch: 'full' },
  { path: 'script', component: ScriptComponent },
  { path: 'text', component: TextComponent },
];
