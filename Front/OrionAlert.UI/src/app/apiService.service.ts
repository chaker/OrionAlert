import { HttpClient, HttpHeaders, HttpErrorResponse, withFetch  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly apiHttpsUrl = 'https://localhost:7035/api/';
  private readonly apiUrl = 'http://localhost:5002/api/';

  constructor(private http: HttpClient) { }

  // Set up headers dynamically
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer my-token',
      'My-Custom-Header': 'foobar'
    });
  }

  // Handle errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error && error.error.message) {
      // A client-side or network error occurred.
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
      if (error.status === 0) {
        errorMessage += ' - Unable to connect to the server. Please check if the server is running and CORS is properly configured.';
      }
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // Department
  getLastAlerts(): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(this.apiUrl + 'Alert', { headers })
      .pipe(
        catchError(this.handleError)
      );
  }
}
