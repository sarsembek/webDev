import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../interface';
import { CompanyService } from '../company.service';
import { Vacancy } from '../interface';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  company!: Company;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    const companyId =+ this.route.snapshot.paramMap.get('id')!;
    this.companyService.getCompany(companyId).subscribe((company: Company) => {
      this.company = company;
      this.vacancyService.getVacanciesByCompany(company.id).subscribe((vacancies: Vacancy[]) => {
        this.vacancies = vacancies;
      });
    });
  }
}
