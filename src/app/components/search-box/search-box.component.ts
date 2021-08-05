import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from '../../services/results.service';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private router: Router, private result: ResultsService) { }

  @Input() hideButtons = false;

  ngOnInit(): void {
  }

  print(string: any) {

    console.log(string);
    this.result.setTerm(string);

    this.router.navigateByUrl('/search');
  }

}
