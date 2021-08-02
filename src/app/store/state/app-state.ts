import { createReducer, on } from '@ngrx/store';
import { Produto } from 'src/app/pages/produtos-page-lista/produtos-page-lista.component';
import * as carrinho from '../actions/carrinho';
import * as login from '../actions/login';

export interface ProdutoCarrinho extends Produto {
  quantidade?: number;
}

export interface Login {
  nome: string;
  token: string;
  logado: boolean;
}

export interface AppState {
  carrinho: ProdutoCarrinho[];
  login: Login;
};

const initialState: AppState = {
  carrinho: [],
  login: {
    nome: '',
    logado: false,
    token: '',
  }
};

export const appReducer = createReducer(
  initialState,
  on(
    carrinho.ADICIONAR_ITEM,
    (state, { payload }) => ({ ...state, carrinho: adicionaProduto(state.carrinho, payload) }),
  ),
  on(
    carrinho.ATUALIZAR_ITEM,
    (state, { payload, id }) => ({ ...state, carrinho: atualizaProduto(state.carrinho, payload, id) }),
  ),
  on(
    carrinho.REMOVER_ITEM,
    (state, { payload }) => ({ ...state, carrinho: state.carrinho.filter(e => e.uri !== payload) }),
  ),
  on(
    carrinho.LIMPAR,
    (state) => ({ ...state, carrinho: [] }),
  ),
  on(
    login.SET_LOGIN,
    (state, { payload }) => ({ ...state, login: payload})
  ),
  on(
    login.DESLOGAR,
    (state,) => ({ ...state, login: initialState.login})
  )
);


function adicionaProduto(arr: ProdutoCarrinho[], produto: Produto) {
  const indexProduto = arr.findIndex(e => e.uri === produto.uri)
  let produtoJaLa = arr[indexProduto];
  let newArr = [];
  if (produtoJaLa) {
    const produtoAtualizado = { ...produtoJaLa, quantidade: (produtoJaLa.quantidade ?? 1) + 1 }
    newArr = arr.filter(e => e.uri !== produtoJaLa!.uri)
    newArr = [...arr.slice(0, indexProduto), produtoAtualizado, ...arr.slice(indexProduto + 1)]
  } else {
    newArr = [...arr, produto]
  }
  return newArr;
}

function atualizaProduto(arr: ProdutoCarrinho[], valor: number, id: string) {
  const indexProduto = arr.findIndex(e => e.uri === id)
  let produtoJaLa = arr[indexProduto];
  let newArr = [...arr];
  if (produtoJaLa) {
    const produtoAtualizado = { ...produtoJaLa, quantidade: valor };
    newArr = arr.filter(e => e.uri !== produtoJaLa!.uri)
    newArr = [...arr.slice(0, indexProduto), produtoAtualizado, ...arr.slice(indexProduto + 1)]
  }
  return newArr;
}
