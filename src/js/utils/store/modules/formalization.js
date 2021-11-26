import * as infosFormalizationService from '../../services/formalization.service'

export const namespaced = true;

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
  }
}

export const getters = {
  allSessionValues(state) {
    return [state.session.financed, state.session.gross, state.session.acquisition]
  }
}