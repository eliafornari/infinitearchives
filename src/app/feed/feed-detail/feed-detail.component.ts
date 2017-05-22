import { Component, OnInit } from '@angular/core';
import {PrismicService} from '../../shared/prismic.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {

  detail: Object;
  error: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedService: PrismicService
  ) { }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    let type = this._route.snapshot.url["0"].path;
    console.log(type);

     this._feedService.getSingle(type,id)
     .subscribe(
       data=>this.detail=data,
       error=>this.error=<any>error
     );
  }

}
