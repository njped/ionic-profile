import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { Badge } from '@awesome-cordova-plugins/badge/ngx'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  providers: [Badge]
})

export class Tab1Page implements OnInit {

  group = "friends"
  badgeCount = 3

  constructor(private modal: ModalController, private badge: Badge) {

  }

  ngOnInit(): void {
    this.setBadgeCount()
  }

  async openAbout() {
    const modal1 = await this.modal.create({
      component: AboutPage
    })

    modal1.present()
  }

  async setBadgeCount() {
    try {
      await this.badge.set(this.badgeCount)
    }
    catch(e) {

    }
  }

  async clearBadgeCount() {
    this.badgeCount = 0;
    await this.badge.clear()
  }
}
