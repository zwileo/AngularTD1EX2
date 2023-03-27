import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1ex2';

  nomImage:String="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="

  

  
  onClick():void
  {
      console.log("Bouton cliqué");
  }

  etudiant:any[] = [
    {"nom":"Dupond", "prenom":"Jean", "email":"Dupond.d@gmail.com", "age":20,"telephone":"0645255532"},
    {"nom":"Dupont", "prenom":"Fred", "email":"Dupond.t@gmail.com", "age":24,"telephone":"0654877622"},
    {"nom":"Unknown", "prenom":"Constancia", "email":"constancia@unknown.com", "age":31,"telephone":"0678365849"},
    {"nom":"Astier", "prenom":"Alexandre", "email":"alex.a@gmail.com", "age":25,"telephone":"0614628597"}
  ]


  bouton:boolean=true;

  utilisateur:any[] = [
    {"nom":"Dupont", "prenom":"Jean","email":"info.ezf@email.com","tel":"06954582545","age":25},
    {"nom":"Javier", "prenom":"Justine","email":"izeziopàmezf@email.com","tel":"061512545","age":28},
    {"nom":"Durant", "prenom":"Paul","email":"infxaszf@email.com","tel":"06145582545","age":22},
    {"nom":"Delpra", "prenom":"Joris","email":"infozrgf@email.com","tel":"06154586549","age":30},

  ]

  detailBouton:boolean = true;

  cacherDetails():void
  {
      // if(this.detailBouton)
      // {
      //   this.detailBouton = false;
      // }
      // else
      // {
      //     this.detailBouton = true;
      // }

      this.detailBouton = !this.detailBouton
  }


  message: string = "";

  //definir valeur par defaut pour ajouter utilisateur
  oUtil: {nom:string, prenom: string, email: string, tel: string, age:number;} = 
  {"nom":"test", "prenom":"test", "email":"test", "tel":"test", "age":24}

  ajouterUser():void
  {
    this.oUtil.nom = this.message;
    this.utilisateur.push(this.oUtil);
  }
 
}
