class SupplierService {
  static getSupplier() {
    return fetch('http://localhost:8082/get-supplier').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getSupplierById(id) {
    return fetch('http://localhost:8080/get-supplier/' + id).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getSuppliers() {
    return fetch('http://localhost:8082/get-suppliers', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        limit: 15,
        offset: 5,
      })
    }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SupplierService;
