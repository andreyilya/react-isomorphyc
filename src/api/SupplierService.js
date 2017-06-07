class SupplierService {

  static getSupplier(id) {
    if (id !== null && id !== undefined) {
      return fetch('http://localhost:8082/get-supplier/' + id).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
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
