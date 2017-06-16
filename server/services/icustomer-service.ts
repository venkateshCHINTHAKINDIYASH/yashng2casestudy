import InternetCustomer from '../models/internet-customer';

interface ICustomerService {
    getCustomers(noOfRecords: number): Promise<InternetCustomer[]>;
    getCustomer(customerId: number): Promise<InternetCustomer>;
    getCustomersByName(customerName: string): Promise<InternetCustomer[]>;
    addNewCustomer(customer: InternetCustomer): Promise<InternetCustomer>;
}

export default ICustomerService;
