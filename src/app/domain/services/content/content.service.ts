/**
 * CONTENT SERVICE
 * Handles http requests associated with dashboard configurations
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { Content } from '../../models/content';
import { contents } from '../../data/mock-content';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContentService {
  private contentsUrl = 'api/contents';

  constructor(private http: HttpClient) { }

  /**
   * Get all contents
   * @returns All contents as an observable
   */
  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentsUrl).pipe(
      tap(content => console.log(`fetched contents`)),
      catchError(this.handleError('getContents', []))
    );
  }

  /**
   * Get a single content
   * @param id ID of content
   * @returns The content as observable
   */
  getContent(id: number): Observable<Content> {
    const url = `${this.contentsUrl}/${id}`;
    return this.http.get<Content>(url).pipe(
      tap(_ => console.log(`fetched content id=${id}`)),
      catchError(this.handleError<Content>(`getContent id=${id}`))
    );
  }

  /**
   * Updates a single content
   * @param content New content to be updated
   */
  updateContent(content: Content): Observable<any> {
    return this.http.put(this.contentsUrl, content, httpOptions).pipe(
      tap(_ => console.log(`updated content id=${content.id}`)),
      catchError(this.handleError<any>('updateContent'))
    );
  }

  /**
   * Handles error on a http request
   * @param operation name of http operation to be performed
   * @param result request result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }

}
