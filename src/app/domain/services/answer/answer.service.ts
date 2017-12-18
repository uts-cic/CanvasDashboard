import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { Answer } from '../../models/answer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AnswerService {
  private answersUrl = 'api/answers';

  constructor(private http: HttpClient) { }

  /**
   * Gets a single answer
   * @param id ID of answer to be retrieved
   * @returns the retrieved answer as an Observable
   */
  getAnswer(id: number): Observable<Answer> {
    const url = `${this.answersUrl}/${id}`;
    return this.http.get<Answer>(url).pipe(
      tap(_ => console.log(`fetched answer id=${id}`)),
      catchError(this.handleError<Answer>(`getAnswer id=${id}`))
    );
  }

  /**
   * Updates a single answer
   * @param answer Answer to be updated
   */
  updateAnswer(answer: Answer): Observable<any> {
    return this.http.put(this.answersUrl, answer, httpOptions).pipe(
      tap(_ => console.log(`updated answer id=${answer.id}`)),
      catchError(this.handleError<any>('updateAnswer'))
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
