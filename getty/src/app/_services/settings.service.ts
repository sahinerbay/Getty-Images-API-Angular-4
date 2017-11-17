import { Injectable } from '@angular/core';
import { FilterOptions } from '../_interfaces/filterOptions';

@Injectable()
export class SettingsService {

  constructor() { }

  private _sortOptions: FilterOptions = [
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
    },
    {
      name: 'videos all',
      value: 'videos'
    },
    {
      name: '-creative videos',
      value: 'videos%2Fcreative'
    },
    {
      name: '-editorial videos',
      value: 'videos/editorial'
    },
    {
      name: 'events',
      value: 'events'
    }
  ];

  get sortOptions(): FilterOptions { return this._sortOptions; }

  private _filterOptions: FilterOptions = [
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

  get filterOptions(): FilterOptions { return this._filterOptions; }



}
