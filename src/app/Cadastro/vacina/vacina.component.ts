import { Component, OnInit } from '@angular/core';
import { Vacina } from './models/vacina';
import { Animal } from '../animal/models/animal';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { VacinaService } from './vacina.service';
import { AnimalService } from '../animal/animal.service';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {

  vacina:Vacina;
  vacinas:Vacina[];
  animais:Animal[];
  edit:boolean;

  dataSource: any;
  displayedColumns: string[] = ['actionsColumn','codigo', 'data','peso','dosagem','aplicador','descricao','animal'];


  paginator: MatPaginator;
  sort: MatSort;

  constructor(private service:VacinaService, private services:AnimalService) { }

  ngOnInit() {
    this.vacina = new Vacina();
    this.vacinas = new Array<Vacina>();
    this.animais = new Array<Animal>();
    this.services.findAll().subscribe(subscibe =>{
      this.animais = subscibe;
      console.log(subscibe);
    })
    this.listAll();
  }

  listAll(){
    console.log(this.vacina);
    this.service.findAll().subscribe(response => {
      if (response)
        this.loadTable(response);
        console.log(response);
    }, error => {
      console.log(error);
    });
  }

  loadTable(classes: any){
    this.dataSource = new MatTableDataSource<Animal>(classes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  save(){
    this.service.save(this.vacina).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.vacina = new Vacina();
  }

  update(){
    this.service.update(this.vacina).subscribe(response =>{
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.vacina = new Vacina();
      }        
    }, error => {
      console.log(error);
    });
  }

  excluir(localId: number){
    this.service.remove(localId).subscribe(response => {
      if (response)
        this.listAll();
    }, error => {
      console.log(error);
    });
  }

  markEdit(local: any){
    this.vacina = local;
    this.edit = true;
  }

}
