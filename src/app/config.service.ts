import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http.get('/assets/config.json').toPromise().then(cfg => {
      this.config = cfg;
    });
  }

  get apiUrl(): string {
    return this.config?.apiUrl;
  }
}
