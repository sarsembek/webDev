// src/app/company.ts
export interface Company {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
  vacancies?: Vacancy[];
}

// src/app/vacancy.ts
export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company?: Company;
}
