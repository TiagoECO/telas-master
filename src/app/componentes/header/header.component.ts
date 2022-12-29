import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ativo:Boolean = false;

  abrirMenu(){

  let menu = (document.getElementById("menu") as HTMLInputElement);

  let conteudo = (document.getElementById("conteudo") as HTMLInputElement);

  let footer = (document.getElementById("rodapee") as HTMLInputElement);



  if(!this.ativo){

      menu.style.width ='250px';

      conteudo.style.marginLeft = '250px';

      footer.style.marginLeft = '250px'

      this.ativo = true;

    }else{

     this.fecharMenu();
    }
      menu.addEventListener('click',this.fecharMenu);
    }

    fecharMenu(){
        let menu = (document.getElementById("menu") as HTMLInputElement);

        let conteudo = (document.getElementById("conteudo") as HTMLInputElement);

        let footer = (document.getElementById("rodapee") as HTMLInputElement);


        menu.style.width = '0px';

        conteudo.style.marginLeft = '0px';

        footer.style.marginLeft = '0px'

        this.ativo = false;

    }
}
