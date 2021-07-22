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
          nome: 'Tenis Kichute Original lindo demais',
          categoria: 'moda e vestimenta',
          uri: 'https://http2.mlstatic.com/D_NQ_NP_860763-MLB31658760704_082019-O.jpg/',
          fotoUrl: 'https://http2.mlstatic.com/D_NQ_NP_860763-MLB31658760704_082019-O.jpg',
          descricao: 'Extra é uma rede varejista brasileira, formada por lojas multiformato, que incluem supermercados, hipermercados e minimercados operados pela Multivarejo, divisão do GPA que também opera os supermercados da rede premium Pão de Açúcar.',
          preco: 179.90
        },
        {
          nome: 'Relógio do Corinthians analógico',
          categoria: 'moda e vestimenta',
          uri: 'https://www.extra.com.br/1',
          fotoUrl:  'https://static.netshoes.com.br/produtos/relogio-corinthians-technos-analogico-masculino/26/F61-1611-026/F61-1611-026_zoom1.jpg?ts=1611346666&ims=544x',
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
          nome: 'Salgadinho Lobitz sabor churrasco',
          categoria: 'Comida',
          uri: 'https://www.extra.com.br/3',
          fotoUrl: 'https://a-static.mlcdn.com.br/574x431/salgadinho-de-milho-sabor-churrarsco-50g-lobits/funchalfestas/1550360/09f6e4aa70b12c8de381ac3b57ce5db7.jpg',
          descricao: 'Nike, Inc. é uma empresa estadunidense de calçados, roupas, e acessórios fundada em 1972 por Bill Bowerman e Phillip Knight.',
          preco: 7.49
        },
      ]
    ).pipe(delay(1000)))
  }

}
