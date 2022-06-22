import { Component, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
episodes = new Array();
  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
this.episodeService.getEpisodes()
.subscribe((res) => {
  this.episodes = res.results;
  //console.log(res.results);
});
  }

}
