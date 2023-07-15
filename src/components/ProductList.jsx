import { data } from "../data"

export const ProductList = ({ allProducts, setProducts, countProducts, setCount, total, setTotal }) => {
    const onAdd = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            setCount(countProducts+product.cantidad);
            setTotal(total+product.precio * product.cantidad)
            return setProducts([...products])

        }
        setTotal(total+product.precio * product.cantidad)
        setCount(countProducts+product.cantidad);
        setProducts([...allProducts, product]);



    };





    return (<div className="container">
        {data.map(product => (
            <div className="item" key={product.id}>
                <figure>
                    <img
                        src={product.urlImg}
                        alt=""

                    />
                </figure>
                <div className="info-product">
                    <h2>{product.name}</h2>
                    <p className="price">{product.precio} Creditos</p>
                    <button className="btn-add-cart" onClick={() => { onAdd(product) }}>Añadir al carro</button>
                </div>
            </div>
        ))};

    </div>

    );

}