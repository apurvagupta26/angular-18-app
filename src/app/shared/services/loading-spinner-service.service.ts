import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerServiceService {

  private loading=signal(false);

  constructor() { }

  setLoader(value: boolean) {
    this.loading.set(value);
  }

  getLoading(): boolean {
    return this.loading();
  }
}
