import appApi from "../config/instanceAxios"

export function setDoctor(payload) {
    return {
        type: "doctor/setDoctor",
        payload
    }
}

export function setLoading(payload) {
    return {
        type: "doctor/setLoading",
        payload
    }
}

export function setErrorMessage(payload) {
    return {
        type: "doctor/setErrorMessage",
        payload
    }
}

export function setPoli(payload) {
    return {
        type: "poli/setPoli",
        payload
    }
}

export function setNewDoctor(payload) {
    return {
        type: "doctor/addDoctor",
        payload
    }
}

export function setSuccessMessage(payload) {
    return {
        type: "doctor/deleteDoctor",
        payload
    }
}

export function setOneDoctor(payload) {
    return {
        type: "doctor/fetchOneDoctor",
        payload
    }
}

export function fetchDoctor() {
    return (dispatch) => {
        dispatch(setLoading(true))
        appApi({
            method: "GET",
            url: "/employees/doctors"
        })
            .then(response => {
                dispatch(setDoctor(response.data))
            })
            .catch(err => {
                dispatch(setErrorMessage(err.response.data))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export function fetchPoli() {
    return (dispatch) => {
        dispatch(setLoading(true))
        appApi({
            method: "GET",
            url: "/poli"
        })
            .then(response => {
                dispatch(setPoli(response.data))
            })
            .catch(err => {
                dispatch(setErrorMessage(err.response.data))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export function addDoctor(payload) {
    return (dispatch) => {
        appApi({
            method: "POST",
            url: "/employees",
            headers: {
                access_token: localStorage.getItem("access_token")
            },
            data: payload
        })
            .then(response => {
                dispatch(setNewDoctor(response.data))
            })
            .catch(err => {
                dispatch(setErrorMessage(err?.response?.data))
            })
    }
}

export function deleteDoctor(payload) {
    return (dispatch) => {
        appApi({
            method: "DELETE",
            url : `/employees/${payload}`,
            headers: {
                access_token: localStorage.getItem("access_token")
            }
        })
            .then(response => {
                dispatch(setSuccessMessage(response.data))
            })
            .then(() => {
                dispatch(fetchDoctor())
            })
            .catch(err => {
                dispatch(setErrorMessage(err?.response?.data))
            })
    }
}

export function fetchOneDoctor(payload) {
    return (dispatch) => {
        dispatch(setLoading(true))
        appApi({
            method: "GET",
            url: `/employees/${payload}`,
            headers: {
                access_token: localStorage.getItem("access_token")
            }
        })
            .then(response => {
                dispatch(setOneDoctor(response.data))
            })
            .catch(err => {
                dispatch(setErrorMessage(err?.response?.data))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export function editDoctor(payload, id) {
    return (dispatch) => {
        appApi({
            method: "PUT",
            url: `/employees/${id}`,
            headers: {
                access_token: localStorage.access_token
            },
            data: payload
        })
            .then(response => {
                dispatch(setSuccessMessage(response.data))
            })
            .then(() => {
                dispatch(fetchDoctor())
            })
            .catch(err => {
                dispatch(setErrorMessage(err?.response?.data))
            })
    }
}