import { Component, OnInit } from '@angular/core';
import API_KEY from 'src/app/keys';
import { ResultsService } from 'src/app/services/results.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: any;


  term: any;

  constructor(private result: ResultsService) { }

  hideButtons = true;
  print(string: any) {
    console.log(string);
    this.result.setTerm(string);
    this.fetchData();
  }

  data: any;
  


  async fetchData() {
    await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${this.result.CONTEXT_KEY}&q=${this.result.term}`

    ).then(res => res.json())
      .then(result => {
        this.data = result;
      });
  }

  ngOnInit(): void {
    // this.getData();
    this.fetchData();
  }

}
