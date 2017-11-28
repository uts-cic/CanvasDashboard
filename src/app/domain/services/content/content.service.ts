import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Content } from '../../models/content';
import { CONTENTS } from '../../data/mock-content';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContentService {
  private contentsUrl = 'api/contents';

  constructor(private http: HttpClient) { }

  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentsUrl).pipe(
      tap(contents => console.log(`fetched contents`)),
      catchError(this.handleError('getContents', []))
    );
  }

  getContent(id: number): Observable<Content> {
    const url = `${this.contentsUrl}/${id}`;
    return this.http.get<Content>(url).pipe(
      tap(_ => console.log(`fetched content id=${id}`)),
      catchError(this.handleError<Content>(`getContent id=${id}`))
    );
  }

  updateContent(content: Content): Observable<any> {
    return this.http.put(this.contentsUrl, content, httpOptions).pipe(
      tap(_ => console.log(`updated content id=${content.id}`)),
      catchError(this.handleError<any>('updateContent'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }

}
