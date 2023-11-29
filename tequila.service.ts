import { TequilaServiceConfig } from "./tequila.type";
import { TequilaLocationService } from "./tequilaLocation.service";

export class TequilaService {
  _tequilaServiceConfig: TequilaServiceConfig;
  constructor(tequilaServiceConfig: TequilaServiceConfig) {
    if (!tequilaServiceConfig.baseUrl)
      tequilaServiceConfig.baseUrl = "https://api.tequila.kiwi.com";
    this._tequilaServiceConfig = tequilaServiceConfig;
  }

  get location() {
    return new TequilaLocationService(this._tequilaServiceConfig);
  }
}
