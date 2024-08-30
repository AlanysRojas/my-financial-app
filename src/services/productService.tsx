export interface Product {
    id: string;
    name: string;
    description: string;
    logo: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};