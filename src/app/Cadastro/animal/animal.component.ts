import { Component, OnInit } from '@angular/core';
import { Animal } from './models/animal';
import { AnimalService } from './animal.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animal: Animal;
  animais: Animal[];
  edit: boolean;
  dataSource: any;
  displayedColumns: string[] = ['actionsColumn','codigo', 'descricao'];

  paginator: MatPaginator;
  sort: MatSort;
  constructor(private service:AnimalService) { }

  ngOnInit() {
    this.animal = new Animal();
    this.animais = new Array<Animal>();
    this.listAll();
  }

  listAll(){
    console.log(this.animal);
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
    this.service.save(this.animal).subscribe(response => {
      if (response){
        alert('Salvou!!!!');
        this.listAll();
      }
    }, error => {
      console.log(error);
    });
    this.animal = new Animal();
  }

  update(){
    this.service.update(this.animal).subscribe(response =>{
      if (response){
        alert('Atualizou!!!!');
        this.listAll();
        this.edit = false;
        this.animal = new Animal();
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
    this.animal = local;
    this.edit = true;
  }

}
