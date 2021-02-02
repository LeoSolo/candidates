import { getUuid } from '../utils/getUuid'
import { EnvironmentType, getCurrentEnvironment } from '../diagnostics/EnvironmentType'

const uuid = getCurrentEnvironment() === EnvironmentType.PROD ? getUuid() : ''

export const ROUTES = {
  ROOT: '/',
  DEMO_PAGE: uuid + '/demo',
  AUTH_PAGE: uuid + '/demo/authorization',
  CREATE_USER_PAGE: uuid + '/demo/create-user',
  CANDIDATE_PAGE: uuid + '/demo/candidate'
}

export const SUB_ROUTES = {}

export const HIDDEN_ROUTES = {}
