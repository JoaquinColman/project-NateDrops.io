import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from './main'; 


export const getProductsFromFirestore = async () => {
    const productsCollection = collection(db, "products"); 
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return productsList;
};


export const getProductByIdFromFirestore = async (productId) => {
    const productRef = doc(db, "products", productId); 
    const productSnapshot = await getDoc(productRef);

    if (productSnapshot.exists()) {
        return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
        throw new Error("Product not found");
    }
};


export const getProductsByCategoryFromFirestore = async (categoryId) => {
    const productsCollection = collection(db, "products"); 
    const q = query(productsCollection, where("category", "==", categoryId));
    const productsSnapshot = await getDocs(q);
    const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return productsList;
};
