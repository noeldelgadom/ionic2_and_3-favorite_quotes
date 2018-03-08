import { QuotesService } from './../../service/quotes';
import { Quote } from './../../data/quote.interface';
import { NavParams, AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(
    private alertController: AlertController,
    private navParams: NavParams,
    private quotesService: QuotesService
  ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('OK');
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
