import React from 'react';
import './Card.css'

const Card = ({children, prod}) => {
    //console.log(prod.items[0].images[0].imageUrl)
    var urlImage = ''
    var descricao = ''
    var outrasInfo = ''
    var preco = ''
    var comprar = ''
    prod.items.map((item)=>{
        return(
            urlImage = item.images[0].imageUrl,
            descricao = item.name,
            outrasInfo =item.ean,
            preco = item.sellers[0].commertialOffer.Price,
            comprar = item.sellers[0].addToCartLink
            )
    })
    //console.log(prod)

    return(
        <div className='div-class-pricipal'>
            <div className='div-class-imagem'>
                <img alt='bot' src={urlImage} />
            {children}
            </div>
            <div className='div-class-detalhes'>
                <div className='div-class-descricao'>
                    <h5>{descricao}</h5>
                {children}
                </div>
                <div className='div-class-outras-info'>
                    <div className='div-class-info-extra'>
                        <h6 className='h6-class'>Código de Barras:{outrasInfo}</h6>
                    {children}
                    </div>
                    <div className='div-class-preco'>R$ {preco}</div>
                    <div className='div-class-comprar'>
                        <a href={comprar}>
                            Comprar
                        </a>
                    {children}
                    </div>
                {children}
                </div>
            {children}
            </div>
        {children}
        </div>

    );
};

export default Card;


