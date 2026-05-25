export class UsersService {
    constructor(private apiClient: any) {}
  
    createUser(payload: any) {
      return this.apiClient.post('/users', payload);
    }
  
    getUser(id: string) {
      return this.apiClient.get(`/users/${id}`);
    }
  }