import { Injectable } from '@angular/core';
import { SortAndFilterOptions } from '../_interfaces/sortAndFilterOptions';

@Injectable()
export class SettingsService {

  constructor() { }

  private _filterMediaTypeOptions: SortAndFilterOptions = [
    {
      name: 'images all',
      value: 'images',
    },
    {
      name: '-creative images',
      value: 'images/creative'
    },
    {
      name: '-editorial images',
      value: 'images/editorial'
    }
  ];

  get filterMediaTypeOptions(): SortAndFilterOptions { return this._filterMediaTypeOptions; }

  private _sortByOptions: SortAndFilterOptions = [
    {
      name: 'Best Match',
      value: 'best_match'
    },
    {
      name: 'Most Popular',
      value: 'most_popular'
    },
    {
      name: 'Newest',
      value: 'newest'
    }
  ];

  get sortByOptions(): SortAndFilterOptions { return this._sortByOptions; }

}
