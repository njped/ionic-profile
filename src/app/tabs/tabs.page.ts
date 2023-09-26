import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  badgeCount = 3

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('badgeCount', (e: any) => {
      this.badgeCount = e['detail'];
    })
  }

}
