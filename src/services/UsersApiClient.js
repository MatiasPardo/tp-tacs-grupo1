import axios from 'axios';

class UsersApiClient {
  constructor() {
    this.apiBaseUrl = 'http://localhost:8080/api/users';
  }

  async createUser(user) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}`, user);
      console.log("creado:", response.data);
      return response.data;
    } catch (error) {
        console.log("hubo un error:", error);
      throw error;
    }
  }

  async loginUser(credentials) {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersApiClient;
