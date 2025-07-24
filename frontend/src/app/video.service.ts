import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  constructor(private http: HttpClient) {}

  getFrontPageRibbons(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(response => {
          if (response?.data?.category?.frontPage) {
            return response.data.category.frontPage;
          }
          console.warn('Expected data structure not found');
          return [];
        })
      );
  }
}