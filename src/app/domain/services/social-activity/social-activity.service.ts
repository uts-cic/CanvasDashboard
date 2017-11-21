import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { SocialActivity } from '../../models/socialActivity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SocialActivityService {
  private socialActivityUrl= 'api/socialActivity';

  constructor(private http: HttpClient) { }

  getSocialActivity(): Observable<SocialActivity[]> {
    return this.http.get<SocialActivity[]>(this.socialActivityUrl)
      .pipe(
        tap(socialActivity => console.log('fetched social activity')),
        catchError(this.handleError('getSocialActivity', []))
      );
  }

  addSocialActivity(socialActivity: SocialActivity): Observable<SocialActivity> {
    return this.http.post<SocialActivity>(this.socialActivityUrl, socialActivity, httpOptions)
      .pipe(
        tap((activity: SocialActivity) => console.log(`Added activity: ${activity}`)),
        catchError(this.handleError<SocialActivity>('addSocialActivity'))
      );
  }

  deleteSocialActivity(socialActivity: SocialActivity | number): Observable<SocialActivity> {
    const id = typeof socialActivity === 'number' ? socialActivity : socialActivity.id;
    const url = `${this.socialActivityUrl}/${id}`;

    return this.http.delete<SocialActivity>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted social activity id=${id}`)),
      catchError(this.handleError<SocialActivity>('deleteSocialActivity'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
