import logo from "./logo.svg";
import "./App.css";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td> {name} </td>
      <td> {product.price} </td>
    </tr>
  );
}

function ProductTable({ products }) {
  const fruits = products
    .filter((product) => (product.category = "Fruits"))
    .map((product) => <ProductRow product={product} />);
  const vegetables = products
    .filter((product) => (product.category = "vegetables"))
    .map((product) => <ProductRow product={product} />);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow category={"Fruits"} />
        {fruits}
        <ProductCategoryRow category={"Vegetables"} />
        {vegetables}
      </tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label for="checkbox">Only show products in stock</label>
      <input id="checkbox" type="checkbox" />
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
