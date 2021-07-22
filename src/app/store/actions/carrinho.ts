import { createAction, props } from "@ngrx/store";
import { Produto } from "src/app/pages/produtos-page-lista/produtos-page-lista.component";

export const ADICIONAR_ITEM = createAction(
  '[carrinho] ADICIONAR ITEM',
  props<{payload: Produto}>()
);

export const ATUALIZAR_ITEM = createAction(
  '[carrinho] ATUALIZAR ITEM',
  props<{payload: number, id: string}>()
);

export const REMOVER_ITEM = createAction(
  '[carrinho] REMOVER ITEM',
  props<{payload: string}>()
);

export const LIMPAR = createAction(
  '[carrinho] LIMPAR',
);
