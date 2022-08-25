import axios from "axios";
import { createElement } from "react";
try {
    const basket = async (array) => {

        const pizzaCheese = document.querySelector('.main__pizza-cheese')

        pizzaCheese.innerHTML = ''

        array.forEach((item, index) => {
            const pizzaAbout = document.createElement('div')
            pizzaAbout.classList.add('main__pizza-aboutCheese')
            pizzaAbout.innerHTML = `
            <div class="main__pizza-aboutPizza">
            <img class="main__pizza-img" src="${item[4]}" alt="">
            <div class="main__pizza-desctibtion">
                <h3 class="main__pizza-title">${item[0]} </h3>
                <p class="main__pizza-describe">${item[2]}, <span>${item[3]}</span></p>
            </div>
            </div>
            <div class="main__pizza-cart">
            <p class="main__pizza-number">1</p>
        </div>
        <p class="main__pizza-price"> <span>${item[1]}</span> ₽ </p>
        <a href="" class="main__pizza-cross"><img src="./images/cross.svg" alt=""></a>
            `

            pizzaCheese.appendChild(pizzaAbout)
        })

        const total = () => {
            const parentAmount = document.querySelectorAll('.main__pizza-number')
            const parentPrice = document.querySelectorAll('.main__pizza-price span')

            let totalAmount = document.querySelector('.main__check-span')
            let totalPrice = document.querySelector('.main__check-spanPrice')

            let index = 0
            let amount = 0

            parentAmount.forEach(num => {
                let amountNumber = Number(num.textContent)
                index += amountNumber
            })

            let element = index
            totalAmount.innerHTML = `${element}`


            parentPrice.forEach(num => {
                let priceNumber = Number(num.textContent)
                amount += priceNumber
            })

            let priceElement = amount
            totalPrice.innerHTML = `${priceElement}`

            if(element == '0'){
                location.href = 'basket.html'
            }
            
        }
        total()




    }
    const getData = async () => {
        const arr = await axios.get('https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza')
        const data = arr.data
        basket(data)
        for (const key in data) {
            const crossPay = document.querySelector('.main__check-pay')
            const crossPizza = document.querySelectorAll('.main__pizza-cross')
            const pizzaAbout = document.querySelectorAll('.main__pizza-aboutCheese')
            const backPizza = document.querySelector('.main__check-back') 
            crossPizza.forEach((item, i) => {
                crossPizza[i].addEventListener('click', (e) => {
                    e.preventDefault()
                    axios.delete(`https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza/${data[i].id}`)
                    pizzaAbout[i].style.display = 'none'
                    setTimeout(() => {
                        window.location.reload()
                    }, 400);
                })
            })
            backPizza.addEventListener('click', (e) =>{
                e.preventDefault()
                axios.delete(`https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza/${data[key].id}`)
                setTimeout(() => {
                    location.href = 'index.html'
                }, 300);

            })
            crossPay.addEventListener('click', (e) => {
                e.preventDefault()
                axios.delete(`https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza/${data[key].id}`)

                const message = document.querySelector('.main__message')
                
                message.style.display = 'flex'

                setTimeout(() => {
                    message.style.display = 'none'
                    location.href = 'index.html'

                }, 4000);
            
            })
   
        }
    }
    getData()


} catch (e) { }     