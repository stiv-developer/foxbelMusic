import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  termino: string = 'mi';

  constructor( private musicService: MusicService ) { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino)
    this.musicService.buscarCancion(this.termino).subscribe( resp =>{
      console.log(resp);
    })
  }

}
