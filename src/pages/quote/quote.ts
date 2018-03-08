import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text:   string;

  constructor(
    private navParams: NavParams,
    private viewController: ViewController
  ) {}

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text   = this.navParams.get('text');
  }
  
  onClose() {
    this.viewController.dismiss();
  }
}
