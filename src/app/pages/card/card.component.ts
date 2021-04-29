import { Component, Input, OnInit } from '@angular/core';
import { Artist, IAlbum } from 'src/app/interfaces/album.interface';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private musicService: MusicService){}


  ngOnInit(): void {
   
  }
  
}
