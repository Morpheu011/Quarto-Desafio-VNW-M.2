 import React, {Component} from "react";
 import alface from "./imagens/section/alface.png"
 import laranja from "./imagens/section/laranja.png"
 import cereja from "./imagens/section/cereja.png"
 import cenoura from "./imagens/section/cenoura.png"
 import manga from "./imagens/section/manga.png"
 import limao from "./imagens/section/limao.png"
 import beterraba from "./imagens/section/beterraba.png"
 import tomate from "./imagens/section/tomate.png"
 import plus from "./imagens/aside/botaoMais.png"
 import minus from "./imagens/aside/botaoMenos.png"
 import carrinho from "./imagens/aside/carrinhoCompra.png"
 class App extends Component {
 state = {
  produtos: [
    {imagem: `${alface}`},
    {imagem: `${laranja}`},
    {imagem: `${cereja}`},
    {imagem: `${cenoura}`},
    {imagem: `${manga}`},
    {imagem: `${limao}`},
    {imagem: `${beterraba}`},
    {imagem:`${tomate}`}
  ],
  asideImages: [
    {imagem: `${carrinho}`},
    {imagem: `${plus}`},
    {imagem: `${minus}`}
  ]
 };
 render() { 
 return (
    <>
    <header>
     <h1>HORTIFRUTI</h1>
     <h2>VnW</h2>
    </header>
    <main>
      <div class="container-productsAndTitle">
      <h3>Nossos Produtos</h3>
      <section>
        <div class="colum-1">
        {this.state.produtos.slice(0, 4).map((item) => (<img src={item.imagem} alt="produtos do hortifruti"/>))}
        </div>
       <div class="colum-2">
        {this.state.produtos.slice(4, 8).map((item) => (<img src={item.imagem} alt="produtos do hortifruti"/>))}
       </div>
        </section>
      </div>
      <aside>
      <div class="box-carrinho"> 
      <figure>
      <img src={this.state.asideImages[0].imagem} alt="carrinho"/>
      </figure>
      <figcaption>
      Arraste o seu produto aqui para colocar no carrinho
      </figcaption>
      </div>
      <div class="box-bottons">
<button class="plus">
<img class="plus" src={this.state.asideImages[1].imagem} alt="botão para diminuir"/>
</button>
<button class="minus">
<img class="minus" src={this.state.asideImages[2].imagem} alt="botão para aumentar"/>
</button>
      </div>
      </aside>
    </main>
    </>
  );
}
 }
export default App; 
