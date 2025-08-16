import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Loan } from '../../interfaces/loan';

@Component({
  selector: 'app-maintenances-loans',
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenances-loans.html',
  styleUrl: './maintenances-loans.scss',
})
export class MaintenancesLoans {
  loans: Loan[] = [
    {
      bookId: 'B001',
      documentNumberUser: '1039886502',
      bookName: 'Clean Code',
      userName: 'Walter Zapata',
      loanDate: '2025-08-15',
      loanTime: 7,
    },
  ];

  showModal = false;
  isEdit = false;
  selectedIndex: number | null = null;

  form: Loan = this.emptyForm();

  private emptyForm(): Loan {
    const today = new Date().toISOString().slice(0, 10);
    return {
      bookId: '',
      documentNumberUser: '',
      bookName: '',
      userName: '',
      loanDate: today,
      loanTime: 1,
    };
  }

  openCreate() {
    this.isEdit = false;
    this.form = this.emptyForm();
    this.selectedIndex = null;
    this.showModal = true;
  }

  openEdit(loan: Loan, index: number) {
    this.isEdit = true;
    this.form = { ...loan };
    this.selectedIndex = index;
    this.showModal = true;
  }

  save() {
    if (this.isEdit && this.selectedIndex !== null) {
      this.loans[this.selectedIndex] = { ...this.form };
    } else {
      this.loans.push({ ...this.form });
    }
    this.close();
  }

  remove(index: number) {
    this.loans.splice(index, 1);
  }

  close() {
    this.showModal = false;
    this.selectedIndex = null;
  }
}
