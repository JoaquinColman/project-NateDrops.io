export const products = [    
    {    
        id: '1',
        title: 'Versace Watches DOMINUS ',
        price: parseFloat('1.199,00'.replace(',', '.')), 
        category: 'Men Watches',
        img: 'https://img01.ztat.net/article/spp-media-p1/069a3c1b581e4fd8aaf6f5e28343d18a/48d4238c02ac4ff196f44f0782928837.jpg?imwidth=762&filter=packshot',
        stock: 3,
        description: 'This refined mens watch features a chronograph display and a date display, combining functionality with style. It offers 5 ATM water resistance for reliable performance in various conditions. The deployment clasp ensures a secure and comfortable fit, making it a versatile choice for both formal and casual settings.'
    }, 
    {
        id: '2',
        title: 'Q TIMEX CHRONOGRAPH ',
        price: parseFloat('219,00'.replace(',', '.')), 
        category: 'Men Watches',
        img: 'https://img01.ztat.net/article/spp-media-p1/be0a9ce8938346829047e9e708feaa34/930082abb4254f7e90fec4361d913e1e.jpg?imwidth=1800&filter=packshot',
        stock: 19,
        description: 'This stylish mens watch features a chronograph display for precise timing and a 5 ATM water resistance for added durability. The deployment clasp ensures a secure and comfortable fit, making it a practical yet elegant choice for any occasion.'
    },
    {
        id: '3',
        title: 'ACCELERATOR WATCH ',
        price: parseFloat('399,00'.replace(',', '.')), 
        category: 'Men Watches',
        img: 'https://img01.ztat.net/article/spp-media-p1/69b0948ffded414f8f45306f76532c4b/6185ca1d0c254f3480cfcfddba5f4d77.jpg?imwidth=762&filter=packshot',
        stock: 15,
        description: 'This distinguished men watch features a chronograph display and a date display, perfect for combining style with practicality. Designed with a robust 5 ATM water resistance, it offers reliability in various conditions. The fold-over clasp ensures a secure and comfortable fit, making it an ideal choice for any occasion.'
    },
    {
        id: '4',
        title: 'Versace Watches HERA ',
        price: parseFloat('1.490,00'.replace(',', '.')), 
        category: 'Woman Watches',
        img: 'https://img01.ztat.net/article/spp-media-p1/4783d2e6e079446b9ccaf0e53ee5247d/90835c0ee61d48b3835bad932ae61a31.jpg?imwidth=762&filter=packshot',
        stock: 4,
        description: 'This sophisticated watch boasts a chronograph display and includes a date display for added functionality. With a 5 ATM water resistance, it ensures durability and reliability. The fold-over clasp guarantees a secure and comfortable fit.'
    },
    {
        id: '5',
        title: 'LEXINGTON - Watch',
        price: parseFloat('179,00'.replace(',', '.')), 
        category: 'Woman Watches',
        img: 'https://img01.ztat.net/article/spp-media-p1/05ba0614442031549a2b0a07016b97ca/eb5b6c3b6938497ead7a6dd3fa0d784b.jpg?imwidth=1800&filter=packshot',
        stock: 8,
        description: 'This stylish watch features a chronograph function and a date display for added versatility. Its water resistance up to 5 ATM ensures durability, while the fold-over clasp provides a secure and comfortable fit. The sophisticated design is complemented by a stopwatch function for precise timing.'
    },
    {
        id: '6',
        title: 'LUNA - Watch ',
        price: parseFloat('199,00'.replace(',', '.')), 
        category: 'Woman Watches',
        img: 'https://img01.ztat.net/article/spp-media-p1/9e0bd6dc40df49a3a5c0ad55c8352357/7c77ae69ad7c42dca526235b8053e292.jpg?imwidth=1800&filter=packshot',
        stock: 23,
        description: 'This sophisticated watch boasts a chronograph display and includes a date display for added functionality. With a 5 ATM water resistance, it ensures durability and reliability. The fold-over clasp guarantees a secure and comfortable fit.'
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products); 
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === categoryId);
            resolve(filteredProducts); 
        }, 500);
    });
};