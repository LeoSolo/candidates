import {EnvironmentType, getCurrentEnvironment} from '../../diagnostics/EnvironmentType'

const API = {
  DEV: '',
  PROD: ''
}

export class EndpointNames {
  static SOME = 'some'
}

let DEV_ENDPOINTS_MAP = new Map()
DEV_ENDPOINTS_MAP.set(EndpointNames.SOME, API.DEV + '/fetch')

let PROD_ENDPOINTS_MAP = new Map()
PROD_ENDPOINTS_MAP.set(EndpointNames.SOME, API.PROD + '/api/fetch')

export const ENDPOINTS_MAP = getCurrentEnvironment() === EnvironmentType.PROD
  ? PROD_ENDPOINTS_MAP
  : DEV_ENDPOINTS_MAP
