import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacina } from './models/vacina';
import { Observable } from 'rxjs-compat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

constructor(private http:HttpClient) { }
save(local: Vacina): Observable<any>{
  return this.http.post(environment.urlApi+"vacinas/", local)
  .catch((error: any) => Observable.throw(error));
}

update(local: Vacina): Observable<any>{
  return this.http.put(environment.urlApi+"vacinas/"+local.idVacina, local)
  .catch((error: any) => Observable.throw(error));
}

findAll(): Observable<any>{
  return this.http.get(environment.urlApi+"vacinas/")
  .catch((error: any) => Observable.throw(error));
}

remove(id: number): Observable<any> {
  return this.http.delete(environment.urlApi+"vacinas/"+id)
  .catch((error: any) => Observable.throw(error));
  }
}
