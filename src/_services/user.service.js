
let API = "http://ec2-18-218-14-126.us-east-2.compute.amazonaws.com:8990/"

export const userService = {
    login,
    logout
};

function login(username, password) {
    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    
    const requestOptions = {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    };

    return fetch(`${API}/auth/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            window.alert(user);
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                window.alert("usdasda");
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    let text = response.text();
    return text.then(text => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = response.statusText;
            return Promise.reject(error);
        }
        return "OK";
    });
}
