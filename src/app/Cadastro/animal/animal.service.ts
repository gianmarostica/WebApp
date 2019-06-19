import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './models/animal';
import { Observable } from 'rxjs-compat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

constructor(private http:HttpClient) { }
save(local: Animal): Observable<any>{
  return this.http.post(environment.urlApi+"animals/", local)
  .catch((error: any) => Observable.throw(error));
}

update(local: Animal): Observable<any>{
  return this.http.put(environment.urlApi+"animals/"+local.idAnimal, local)
  .catch((error: any) => Observable.throw(error));
}

findAll(): Observable<any>{
  return this.http.get(environment.urlApi+"animals/")
  .catch((error: any) => Observable.throw(error));
}

remove(id: number): Observable<any> {
  return this.http.delete(environment.urlApi+"animals/"+id)
  .catch((error: any) => Observable.throw(error));
  }
}
