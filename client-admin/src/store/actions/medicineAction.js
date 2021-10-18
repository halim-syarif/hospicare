import appApi from "../config/instanceAxios";

export function setMedicineData(payload) {
    return {
        type: "medicine/setMedicineData",
        payload,
    };
}

export function setIsLoading(payload) {
    return {
        type: "medicine/setLoading",
        payload,
    };
}

export function setErrorMessage(payload) {
    return {
        type: "medicine/setErrorMessage",
        payload,
    };
}

export function deleteMedicine(payload) {
    return {
        type: "medicine/deleteMedicine",
        payload,
    };
}

export function editMed(payload) {
    return {
        type: "medicine/editMedicine",
        payload,
    };
}

export function fetchOneMedicine(payload) {
    return {
        type: "medicine/fetchOneMedicine",
        payload,
    };
}

export function setEditMessage(payload) {
    return {
        type: "medicine/setEditMessage",
        payload
    }
}

export function fetchMedicines() {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        appApi({
            method: "GET",
            url: "/medicines",
        })
            .then(({ data }) => {
                dispatch(setMedicineData(data));
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(err.response.data);
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            });
    };
}

export function deleteMed(payload) {
    return (dispatch) => {
        appApi({
            method: "DELETE",
            url: `/medicines/${payload}`,
        })
            .then(() => {
                dispatch(deleteMedicine(payload));
            })
            .catch((err) => {
                console.log(err);
                // dispatch(setErrorMessage(err.reponse.data))
            });
    };
}

export function editMedicine(id, payload) {
    return (dispatch) => {
        appApi({
            method: "PUT",
            url: `/medicines/${id}`,
            data: payload,
        })
            .then(({ data }) => {
                dispatch(editMed(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export function fetchMedicineById(id) {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        appApi({
            method: "GET",
            url: `/medicines/${id}`,
        })
            .then(({ data }) => {
                dispatch(fetchOneMedicine(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export function editMedicineData(payload, id) {
    return (dispatch) => {
        appApi({
            method: "PUT",
            url: `/medicines/${id}`,
            data: payload,
        })
            .then(({data}) => {
                dispatch(setEditMessage(data))
            })
            .then(() => {
                dispatch(fetchMedicines())
            })
            .catch((err) => {
                console.log(err);
            });
    };
}
