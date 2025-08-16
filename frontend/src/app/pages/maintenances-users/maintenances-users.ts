import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maintenances-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './maintenances-users.html',
  styleUrl: './maintenances-users.scss',
})
export class MaintenancesUsers {
  users: User[] = [
    {
      name: 'Walter',
      documentNumber: '12345',
      documentType: 'CC',
      email: 'walter@email.com',
      password: '1234',
      rol: 'admin',
    },
    {
      name: 'Ana',
      documentNumber: '67890',
      documentType: 'TI',
      email: 'ana@email.com',
      password: '5678',
      rol: 'user',
    },
  ];

  selectedUser: User = {} as User;
  selectedIndex: number = -1;

  openEditModal(user: User, index: number) {
    this.selectedUser = { ...user };
    this.selectedIndex = index;

    const modal = new (window as any).bootstrap.Modal(document.getElementById('editUserModal'));
    modal.show();
  }

  saveUser() {
    if (this.selectedIndex > -1) {
      this.users[this.selectedIndex] = { ...this.selectedUser };
    }
    const modalEl = document.getElementById('editUserModal');
    const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
