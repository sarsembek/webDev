import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Company } from '../interface';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }
}

