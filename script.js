const url_routes = "http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes";
const api_key = "3ea63741-5beb-47ef-b438-68d6ab706134"; 


$.ajax(
    {
        url: 'http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=3ea63741-5beb-47ef-b438-68d6ab706134',
        method: 'GET',
        datatype: "json",
        success: function(result){
            let z = JSON.parse(result);
            console.log('z', z);
        }
    }
)