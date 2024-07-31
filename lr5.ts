import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
  links = [
    {path:'/main',label:'���������',active:"button-active"},
    {path:'/item1',label:'��������',active:"button-active"},
    {path:'/item2',label:'��������',active:"button-active"}
  ]
}

˳����� ����:app.componenet.html
<div class="background-image">
  <div class="container d-flex justify-content-center">
    <div>
      <h1>������� �����</h1> 
      <div class="buttons-container"> 
        <button routerLink="/main" class="nav-button">��������</button>
        <button routerLink="/item1" class="nav-button">��������</button>
        <button routerLink="/item2" class="nav-button">���������</button>
      </div>
      
    </div>
  </div>
</div>
<router-outlet></router-outlet>


˳����� ����: app-routs.ts.
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

export const routes: Routes = [
    {path:"main",component:MainComponent},
    {path:"item1",component:Item1Component},
    {path:"item2",component:Item2Component},
    
];


˳����� ����: main.component.html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="card">
        <img src="https://funduk.ua/upload/medialibrary/d94/d94caaea202db4c522b6bd152b341e25.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">������� Acer Aspire 5</h5>
          <p class="card-text">ֳ��: $700</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="card">
        <img src="https://funduk.ua/upload/medialibrary/d94/d94caaea202db4c522b6bd152b341e25.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">������� ASUS VivoBook 15</h5>
          <p class="card-text">ֳ��: $800</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="card">
        <img src="https://funduk.ua/upload/medialibrary/d94/d94caaea202db4c522b6bd152b341e25.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">������� Lenovo IdeaPad 3</h5>
          <p class="card-text">ֳ��: $600</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="card">
        <img src="https://funduk.ua/upload/medialibrary/d94/d94caaea202db4c522b6bd152b341e25.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">������� Dell Inspiron 15</h5>
          <p class="card-text">ֳ��: $900</p>
        </div>
      </div>
      
    </div>
    <div class="col-12">
      <p class="text-center">�������� �����: ${{ total }}</p>
  </div>
</div>
˳����� ����: item2.component.html
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-3 mb-8">
        <div class="card">
          <img src="https://yu.com.ua/image/cache/catalog/B7/16-3-700x700.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� Google Pixel Buds</h5>
            <p class="card-text">ֳ��: $200</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <img src="https://yu.com.ua/image/cache/catalog/B7/16-3-700x700.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� Apple AirPods Pro</h5>
            <p class="card-text">ֳ��: $250</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <img src="https://yu.com.ua/image/cache/catalog/B7/16-3-700x700.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� Samsung Galaxy Buds</h5>
            <p class="card-text">ֳ��: $150</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <img src="https://yu.com.ua/image/cache/catalog/B7/16-3-700x700.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� Lenovo LP1</h5>
            <p class="card-text">ֳ��: $50</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <p class="text-center">�������� �����: ${{ total }}</p>
    </div>
    </div>
</div>
˳����� ����: item1.component.html
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <img src="https://www.aks.ua/images/categories/5-1675495284.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� Samsung Galaxy S21</h5>
            <p class="card-text">ֳ��: $1000</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <img src="https://www.aks.ua/images/categories/5-1675495284.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� iPhone 13</h5>
            <p class="card-text">ֳ��: $1200</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <img src="https://www.aks.ua/images/categories/5-1675495284.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� Xiaomi Mi 11</h5>
            <p class="card-text">ֳ��: $800</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <img src="https://www.aks.ua/images/categories/5-1675495284.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">�������� Huawei P40</h5>
            <p class="card-text">ֳ��: $700</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <p class="text-center">�������� �����: ${{ total }}</p>
    </div>
    </div>
</div>
˳����� ����: ��� ��� ����������  main , item1, item2
.card {
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
˳����� ����: main.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  total: number = 0; 

  notebooks: any[] = [
    {  price: 700 },
    {  price: 800 },
    {  price: 600 },
    {  price: 900 }
  ];

  constructor() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.notebooks.reduce((sum, notebook) => sum + notebook.price, 0);
  }
}
˳����� ����: item1.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-item1',
  standalone: true,
  imports: [],
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.css'
})
export class Item1Component {
  total: number = 0; 

  phone: any[] = [
    {  price: 1000 },
    {  price: 1200 },
    {  price: 800 },
    {  price: 700 }
  ];

  constructor() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.phone.reduce((sum, phone) => sum + phone.price, 0);
  }
}

˳����� ����: item2.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component {
  total: number = 0; 

  item: any[] = [
    {  price: 200 },
    {  price: 250 },
    {  price: 150 },
    {  price: 50 }
  ];

  constructor() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this. item.reduce((sum,  item) => sum +  item.price, 0);
  }
}

