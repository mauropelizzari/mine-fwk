import { ReflectiveInjector } from '@angular/core';
import { Http, Response, Headers,
  RequestOptions, ResponseOptions,
  BrowserXhr, BaseRequestOptions, BaseResponseOptions,
  ConnectionBackend, XHRBackend, XSRFStrategy, CookieXSRFStrategy } from '@angular/http'

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { MnDataSource } from './mn-ds.service';

const HTTP_PROVIDERS = [
    {provide: Http, useFactory:
      (xhrBackend: XHRBackend, requestOptions: RequestOptions): Http =>
          new Http(xhrBackend, requestOptions),
          deps: [XHRBackend, RequestOptions]},
    BrowserXhr,
    {provide: RequestOptions, useClass: BaseRequestOptions},
    {provide: ResponseOptions, useClass: BaseResponseOptions},
    XHRBackend,
    {provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
];

export class MnRemoteDataSource implements MnDataSource {

  public url: string;
  public params: any;

  private http:Http;

  constructor(cfg:any) {

    let resolvedProviders = ReflectiveInjector.resolve(HTTP_PROVIDERS);
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, /* this.injector (parent injector if any) */ );
    this.http = injector.get(Http);

    if (cfg.url)
      this.url = cfg.url;

    if (cfg.params)
      this.params = cfg.params;

  }

  public getData() : Promise<any> {
    let urlParams = (this.params ? this.params.reduce( (pre,cur) => pre +"/"+cur ) : "");
    return this.http.get(`${this.url}/${urlParams}`)
      .toPromise()
      .then(result => result.json());
  }

  public setData(data:any) : void {
    //nothing to do
  }

}
