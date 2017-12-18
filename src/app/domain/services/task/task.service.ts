import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { Task } from '../../models/task';

@Injectable()
export class TaskService {
  private tasksUrl = 'api/tasks';

  constructor(private http: HttpClient) { }

  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => console.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
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
