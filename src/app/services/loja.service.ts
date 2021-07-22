import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Loja } from '../pages/lojas-page/lojas-page-lista/lojas-page-lista.component';
import { getModelStateObservable, ModelState } from '../store/models/model-state';


@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(private http: HttpClient) {
  }

  getLojasPorNome(): Observable<ModelState<Loja[]>> {
    return getModelStateObservable(of(
      [
        {
          nome: 'Extra',
          atividade: 'Mercado varejista em geral',
          uri: 'https://www.extra.com.br/',
          fotoUrl: 'https://skyhub.com.br/wp-content/uploads/2017/09/como-vender-no-extra.png',
          descricao: 'Extra é uma rede varejista brasileira, formada por lojas multiformato, que incluem supermercados, hipermercados e minimercados operados pela Multivarejo, divisão do GPA que também opera os supermercados da rede premium Pão de Açúcar.'
        },
        {
          nome: 'Zelo',
          atividade: 'Cama mesa e banho',
          uri: 'https://www.extra.com.br/',
          fotoUrl: 'https://www.zelo.com.br/Custom/Content/Themes/Shared/Images/og-image.jpg',
          descricao: 'A Zelo é uma das maiores redes especializadas em cama, mesa e banho do Brasil, operados pela Multivarejo, divisão do GPA que também opera os supermercados da rede premium Pão de Açúcar.'
        },
        {
          nome: 'Poderoso Timão',
          atividade: 'Roupas e Tenis fodas do coringão',
          uri: 'https://www.extra.com.br/',
          fotoUrl: 'https://scontent.fcgh8-1.fna.fbcdn.net/v/t1.6435-9/118769660_2677287312491831_5905609893966923779_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH_YQhKZt64nvGSLBRaSzcipcBtDcxlAK2lwG0NzGUArbfM9hUgEShxMMWyjEVPG-DWAREJ3PCbTAzV_lsmspSu&_nc_ohc=JlQEgmF6320AX8Ubue7&tn=lFk602t1SzLRBmdE&_nc_ht=scontent.fcgh8-1.fna&oh=0a4b7f9f42b48eb7c403c063afce43e3&oe=60F69775',
          descricao: 'Somente uma torcida apaixonada do tamanho da que o Corinthians possui para ter uma rede de lojas exclusivas! Esta é a proposta da Rede Poderoso Timão, que traz produtos desenvolvidos especialmente para você, corinthiano de coração!'
        },
        {
          nome: 'Nike',
          atividade: 'Roupas e Tenis bregas',
          uri: 'https://www.extra.com.br/',
          fotoUrl: 'https://conteudo.imguol.com.br/c/noticias/69/2017/06/05/logo-da-nike-1496688780234_v2_450x450.png',
          descricao: 'Nike, Inc. é uma empresa estadunidense de calçados, roupas, e acessórios fundada em 1972 por Bill Bowerman e Phillip Knight.'
        },
      ]
    ).pipe(delay(1000)))
  }

}
