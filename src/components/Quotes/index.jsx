import { useEffect, useState } from 'react'

import { BsArrowBarRight, BsArrowRight, BsCaretLeftSquare, BsTwitter } from 'react-icons/bs'
import './index.scss'


export const Quotes = () => {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState('Follow your instincts. That is where true wisdom manifests itself.')
    const [author, setAuthor] = useState('Oprah Winfrey')
    const [color, setColor] = useState('')
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        fetch('https://type.fit/api/quotes')
            .then(response => response.json())
            .then(data => setQuotes(data))
    }, [])






    const getNextQuote = () => {
        setLoading(true)
        const random = Math.floor(Math.random() * quotes.length)
        const randomQuote = quotes[random]
        setQuote(randomQuote.text)
        setAuthor(randomQuote.author)
        setColor(getRandomColor())
        setLoading(false)

    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }



    return (
        <>
            <div className="quote-container" style={{ backgroundColor: color }}>
                <div id="quote-box" className="quotes-box">
                    <h1 className="quotes-title">Random Quotes</h1>
                    <div className="quotes-container">
                        <div className="quotes">
                            <p id="text" className="quotes-text">{quote}</p>
                            <p id="author" className="quotes-author">- {author}</p>
                        </div>
                    </div>
                    <div className="quotes-btns">
                        <a id="tweet-quote" className="quotes-btn" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer"><BsTwitter /></a>
                        <button id="new-quote" className="quotes-btn" onClick={getNextQuote}> <BsArrowRight /></button>


                    </div>

                </div>
            </div>
        </>
    )
}

