import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Produto } from '../pages/produtos-page-lista/produtos-page-lista.component';
import { getModelStateObservable, ModelState } from '../store/models/model-state';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Observable<ModelState<Produto[]>> {
    return getModelStateObservable(of(
      [
        {
          nome: 'Extra',
          categoria: 'Mercado varejista em geral',
          uri: 'https://www.extra.com.br/',
          fotoUrl: 'https://skyhub.com.br/wp-content/uploads/2017/09/como-vender-no-extra.png',
          descricao: 'Extra é uma rede varejista brasileira, formada por lojas multiformato, que incluem supermercados, hipermercados e minimercados operados pela Multivarejo, divisão do GPA que também opera os supermercados da rede premium Pão de Açúcar.',
          preco: 299.90
        },
        {
          nome: 'Zelo',
          categoria: 'Cama mesa e banho',
          uri: 'https://www.extra.com.br/1',
          fotoUrl: 'https://www.zelo.com.br/Custom/Content/Themes/Shared/Images/og-image.jpg',
          descricao: 'A Zelo é uma das maiores redes especializadas em cama, mesa e banho do Brasil, operados pela Multivarejo, divisão do GPA que também opera os supermercados da rede premium Pão de Açúcar.',
          preco: 99.90
        },
        {
          nome: 'Panelas anti-aderentes Tramontina',
          categoria: 'Cozinha',
          uri: 'https://www.extra.com.br/2',
          fotoUrl: 'https://d2figssdufzycg.cloudfront.net/Custom/Content/Products/13/45/13451023_jogo-de-panelas-tramontina-paris-28599706-6-pecas-298425_m1_637164908093255038.jpg',
          descricao: 'Jogo de panela',
          preco: 199.90
        },
        {
          nome: 'Nike',
          categoria: 'Roupas e Tenis bregas',
          uri: 'https://www.extra.com.br/3',
          fotoUrl: 'https://conteudo.imguol.com.br/c/noticias/69/2017/06/05/logo-da-nike-1496688780234_v2_450x450.png',
          descricao: 'Nike, Inc. é uma empresa estadunidense de calçados, roupas, e acessórios fundada em 1972 por Bill Bowerman e Phillip Knight.',
          preco: 59.90
        },
      ]
    ).pipe(delay(1000)))
  }

}
