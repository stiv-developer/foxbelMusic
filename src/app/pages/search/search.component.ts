import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Data } from 'src/app/interfaces/album.interface';
import { MusicService } from 'src/app/services/music.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  ngOnInit(){
  }

  constructor(){}


}
