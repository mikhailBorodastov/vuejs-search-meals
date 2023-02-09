import axiosClient from "../axiosClient.js";

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
            console.log(data)
        })
}
export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealsByLetter', data.meals)
            console.log(data)
        })
}
export function searchMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
            commit('setMealsByIngredient', data.meals)
            console.log(data)
        })
}