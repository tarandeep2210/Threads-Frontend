import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Thread } from './thread.model'

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  private threadsUrl = 'http://localhost:3000/threads';

  constructor(private http: HttpClient) { }


  getThreads(): Observable<Thread[]> {
    return this.http.get<Thread[]>(this.threadsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addThread(thread) {
    return this.http.post(this.threadsUrl, thread);
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
