import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { userhome } from '../userhome/userhome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onuser(){
    this.navCtrl.push(userhome);
  }

}
