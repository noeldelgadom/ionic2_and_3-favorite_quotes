import { SettingsService } from './../../services/settings';
import { QuotePage } from './../quote/quote';
import { QuotesService } from '../../services/quotes';
import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalController: ModalController,
    private settingsService: SettingsService
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalController.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) { this.onRemoveFromFavorites(quote); }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
