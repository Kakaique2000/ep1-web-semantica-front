import { asyncScheduler, concat, MonoTypeOperatorFunction, Observable, of, OperatorFunction, pipe, scheduled, UnaryFunction } from "rxjs";
import { catchError, concatAll, map, startWith } from "rxjs/operators";

export class ModelState<Data, Error = any> {

  constructor(
    public loading = false,
    public data?: Data,
    public error?: Error,
  ) { }



  get isLoaded() {
    return !!this.data;
  }

}

export function getModelStateObservable<Data, Error = any>(obs: Observable<Data>): Observable<ModelState<Data, Error>> {
  return concat(of(new ModelState<Data, Error>(true)), obs.pipe(toModelState<Data, Error>()))


}

function toModelState<Data, Error = any>(): OperatorFunction<Data, ModelState<Data, Error>> {
  return pipe(
    map(res => new ModelState<Data, Error>(false, res),
      catchError(err => of(new ModelState<Data, Error>(false, undefined, err))
      ))
  )
}
