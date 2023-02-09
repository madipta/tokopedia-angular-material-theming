import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatCardModule, MatTableModule],
  selector: 'ui-stock-info-empty',
  standalone: true,
  template: `
    <mat-card>
      <mat-card-title>Tambahkan stok produkmu</mat-card-title>
      <mat-card-content>
        <table mat-table [dataSource]="dataSource">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Nama produk</th>
            <td mat-cell *matCellDef="let field">{{ field.name }}</td>
          </ng-container>

          <ng-container matColumnDef="stock">
            <th mat-header-cell *matHeaderCellDef>Sisa stok</th>
            <td mat-cell *matCellDef="let field">{{ field.stock }}</td>
          </ng-container>

          <tr
            mat-header-row
            *matHeaderRowDef="displayedColumns; sticky: true"
          ></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
      </mat-card-content>
      <mat-card-actions>
        <button color="primary" mat-button>Lihat selengkapnya</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class EmptyComponent {
  displayedColumns: string[] = ['name', 'stock'];
  dataSource = [
    { name: 'TableSaw Runner stanley STST 1825', stock: 'habis' },
    {
      name: 'Tiang Kayu Patung Manekin Anak + Besi bisa bongkar pasang',
      stock: 'habis',
    },
    { name: 'Gantungan baju / Hanger Kayu', stock: 'habis' },
    {
      name: 'Patung Manekin Wanita tanpa kepala Setengah Badan / half body',
      stock: 'habis',
    },
    {
      name: 'Tiang Kayu Patung Manekin + Besi bisa bongkar pasang',
      stock: 'habis',
    },
  ];
}
