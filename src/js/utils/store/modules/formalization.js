import * as infosFormalizationService from '../../services/formalization.service'

export const namespaced = true

export const SORT_NAMES_DETAILS = 'sortNames'

export const state = {
  session: {},
  details: [],
}

export const mutations = {
  SET_INFOS_SESSION(state, session) {
    state.session = session
  },
  SET_INFOS_DETAILS(state, details) {
    state.details = details
  },
  [SORT_NAMES_DETAILS](state, { col, ascending }) {
    state.details.sort((a, b) => {
      if (a[col] > b[col]) return ascending ? 1 : -1
      if (a[col] < b[col]) return ascending ? -1 : 1
      return 0;
    })
  }
}

export const actions = {
  getInfosFormalization({ commit }) {
    return infosFormalizationService.getInfos()
      .then((infos) => {
        console.log(infos)
        commit('SET_INFOS_SESSION', infos.session)
        commit('SET_INFOS_DETAILS', infos.details)
      })
  },
}

export const getters = {
  allSessionValues(state) {
    if(!Object.values(state.session).length) return []
    return [state.session.financed, state.session.gross, state.session.acquisition]
  }
}