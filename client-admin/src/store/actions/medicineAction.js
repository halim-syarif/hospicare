import appApi from "../config/instanceAxios"

export function setMedicineData(payload) {
    return {
        type: "medicine/setMedicineData",
        payload
    }
}

export function setIsLoading(payload) {
    return {
        type: "medicine/setLoading",
        payload
    }
}

export function setErrorMessage(payload) {
    return {
        type: "medicine/setErrorMessage",
        payload
    }
}

export function deleteMedicine(payload) {
    return {
        type: "medicine/deleteMedicine",
        payload
    }
}

export function editMed(payload) {
    return {
        type: "medicine/editMedicine",
        payload
    }
}

export function fetchMedicines() {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        appApi({
            method: "GET",
            url: "/medicines"
        })
            .then(({data}) => {
                dispatch(setMedicineData(data))
            })
            .catch(err => {
                setErrorMessage(err.response.data)
            })
            .finally(() => {
                dispatch(setIsLoading(false))
            })
    }
}

export function deleteMed(payload) {
    return (dispatch) => {
        appApi({
            method: "DELETE",
            url: `/medicines/${payload}`
        })
            .then(() => {
                dispatch(deleteMedicine(payload))
            })
            .catch(err => {
                console.log(err);
                // dispatch(setErrorMessage(err.reponse.data))
            })
    }
}

export function editMedicine(id, payload) {
    return (dispatch) => {
        appApi({
            method: "PUT",
            url: `/medicines/${id}`,
            data: payload
        })
            .then(({ data }) => {
                dispatch(editMed(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}