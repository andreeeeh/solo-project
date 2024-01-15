import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceResultService } from '../service-result.service';
import { ServiceClientService } from '../service-client.service';
import { Product } from '../product';
import { InfoAnimal } from '../infoAnimal';
import { Result } from '../result';
import { Client } from '../client';

@Component({
  selector: 'app-new-sale-form',
  templateUrl: './new-sale-form.component.html',
  styleUrl: './new-sale-form.component.css'
})
export class NewSaleFormComponent {

  constructor(private serviceResult: ServiceResultService,
    private serviceClient: ServiceClientService) { }

  @ViewChild('nutriForm') nutriForm: NgForm = {} as NgForm;

  product: Product[] = [
    { prodId: 866431, name: "Proteinado Plus" },
    { prodId: 607860, name: "Proteinado 30" },
    { prodId: 607851, name: "Proteinado 40" },
    { prodId: 607843, name: "Proteinado 50" },
    { prodId: 854395, name: "Energético Plus" },
    { prodId: 607835, name: "Energético" },
    { prodId: 806510, name: "Águas" },
    { prodId: 992674, name: "Secas" },
    { prodId: 607886, name: "Altofos 40" },
    { prodId: 607908, name: "Altofos 65" },
    { prodId: 607894, name: "Altofos 90" },
    { prodId: 806528, name: "Reprodução" },
  ]
  model: InfoAnimal = {
    clientId: null,
    name: '',
    prodId: null,
    season: '',
    period: null,
    quantity: null,
    initialWeight: null,
    priceProduct: null,
    priceWeight: 240
  }
  clients: Client[] = [];

  formSubmitted = false;


  ngOnInit(): void {
    this.serviceClient.clients$.subscribe(res => this.clients = res)
  }

  addName(): void {
    if (this.model.prodId)
      this.model.name = this.product.filter((item) => item.prodId == this.model.prodId)[0].name
  };

  onSubmit() {
    this.formSubmitted = true;
    if (this.nutriForm.valid) {
      this.addName();
      this.model.clientId = Number(this.model.clientId);
      this.model.prodId = Number(this.model.prodId);
      console.log(this.model);
      this.serviceResult.addInfoAnimal(this.model)
      this.nutriForm.resetForm();
    }
  }

}

