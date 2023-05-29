import './App.css';
import MyTable from "./components/MyTable";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import MySelect from "./components/MySelect";
import State from "./components/State";

function App() {
    const product1 = {name: "Mouse"};
    const product2 = {name: "Keyboard"};

    const LastViewed = [
        {id: 1, name: "Портативна рація Baofeng BF-888S", price: "2 198", currency: "₴", image:"images/1.jpg", sale: true, saleprice: "1 999"},
        {id: 2, name: "Рація Baofeng UV-6R", price: "1 799", currency: "₴", image:"images/2.jpg", sale: true, saleprice: "1 599"},
        {id: 3, name: "Рація Baofeng BF-888S", price: "965", currency: "₴", image:"images/3.jpg", sale: true, saleprice: "749"},
        {id: 4, name: "Рація AGENT AR-T6 Yellow PMR446", price: "918", currency: "₴", image:"images/4.jpg", sale: false, saleprice: ""},
        {id: 5, name: "Рація AGENT AR-UV10", price: "2 032", currency: "₴", image:"images/5.jpg", sale: true, saleprice: "1 899"},
        {id: 6, name: "Рація портативна Baofeng T-57", price: "2 198", currency: "₴", image:"images/6.png", sale: true, saleprice: "1 999"}
    ]
    const Ad = [
        {id: 7, name: "Квадрокоптер DJI Mini SE Fly More Combo", price: "23517", currency: "₴", image:"images/7.jpg", sale: true, saleprice: "18 999"},
        {id: 8, name: "Квадрокоптер Autel EVO Lite+ Orange", price: "61 999", currency: "₴", image:"images/8.jpg", sale: false, saleprice: ""},
        {id: 9, name: "Квадрокоптер Xiaomi FIMI X8SE 2022 White", price: "29 999", currency: "₴", image:"images/9.jpg", sale: true, saleprice: "749"},
        {id: 10, name: "Квадрокоптер Skytech M76 6 Axis 2.4 ГГц Blue", price: "2 145", currency: "₴", image:"images/10.jpg", sale: true, saleprice: "1 499"},
        {id: 11, name: "Квадрокоптер Snaptain A15H Black", price: "4 999", currency: "₴", image:"images/11.jpg", sale: false, saleprice: ""},
        {id: 12, name: "Квадрокоптер Snaptain S5C Black (SN-S5C-BK)", price: "4 999", currency: "₴", image:"images/12.jpg", sale: false, saleprice: ""}
    ]

    const cities = [{id: 1, name: "Chicago"}, {id: 2, name: "Los Angeles"}, {id: 3, name: "New York"}]

    const color = [{id: 1, color: "red"}, {id: 2, color: "green"}, {id: 3, color: "blue"},]
    return (<div className="App">
        <header className="App-header">
            <MyTable/>
            <Product product={product1}/>
            <Product product={product2}/>
            <ProductList products={LastViewed} listName={"Останні переглянуті товари"}/>
            <ProductList products={Ad} listName={"Реклама"}/>
            <MySelect cities={cities}/>
            <State color={color}/>
        </header>
    </div>);
}

export default App;
