import { createPostActions } from 'store/helpers'
import { BACKEND_CALL } from 'store/middleware/humaniqBackendApi'
import { ENDPOINT_PERSONAL_REFERRER } from 'constants/api'
import { SUCCESS, FETCH, BY_REFERENCE } from 'store/constants'

export function subscribeByReference (code, phone_number) {
  return ({
    [BACKEND_CALL]: {
      endpoint: ENDPOINT_PERSONAL_REFERRER + code,
      method: 'POST',
      payload: phone_number,
      types: createPostActions(BY_REFERENCE),
    }
  })
}

/**
 * TODO: change with real request
 */
export function fetchPersonalData (invitationCode) {
  return ({
    type: FETCH + BY_REFERENCE + SUCCESS,
    data: {
      invitationCode,
      name: {
        first_name: 'Anton',
        last_name: 'Anton'
      },
      phone_number: {
        country_code: '1',
        phone_number: '4164647135'
      },
      photo_url: 'https://storage.googleapis.com/production-tapatybe-facial-images/pe4Vnbfbui7MiDS20xxxtY?Expires=1501084818&GoogleAccessId=storage-manager%40humaniq-168420.iam.gserviceaccount.com&Signature=MO9X8ujUNNDHKekZ9cuEMMkDj%2FLBnxWU30w%2FKWU8RalWKLe5VL46ZRHKNMpAaLLUkllzeqPbVMmCOw5ugtKtq9qnG51wuT8rAIy0gcrmlsULQkqVjB2fQApzLBc0Cok5eRF%2FHAqmXpirnuQdaGIM8FkMTyGvz7NMArq4Yw%2FqMXHoq1BWKVB6%2BSW9F9adYaMylnjM4WtBlvFHqLcW2h8oWE6%2FSodRcQZlXSEDz7yEFmdRDNnPbD0KqzPp2BUizcU2%2F8rcKFBPpb9%2Bv2k4nEqSKgvUTLB%2FozZIGZtrnbXwepcb3pC0kyxjySOVfgFjaDan2BuPkkK8Se8QKuM0NChjnw%3D%3D'
    }
  })
}
