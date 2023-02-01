import React, { useRef } from 'react'
import "../../css/Fashion/main.css"
import { fashionPage } from '../../data/data'
import { FiSearch } from 'react-icons/fi';


const Main = () => {
    const { main } = fashionPage
    const mainTitleArr = main.title.split(" Quality")
    const mainSubtitleArr = main.subtitle.split("Demographic ")
    const searchFormRef = useRef(null)

    function handleSearch(e) {
        e.preventDefault()
        const searchValue = searchFormRef.current.value
        console.log(searchValue.toLowerCase());
    }

    return (
        <main className='main'>
            <h1>{mainTitleArr[0]}<br />{`Quality ${mainTitleArr[1]}`}</h1>
            <h4>{`${mainSubtitleArr[0]} Demographic`}<br />{`${mainSubtitleArr[1]}`}</h4>
            <form id="fashionSearchForm" className='rounded' onSubmit={handleSearch}>
                <div>
                    <FiSearch className='form-search-icon' />
                    <input ref={searchFormRef} type={main.input.type} placeholder={main.input.placeholder} className='search-input' />
                </div>
                <button>{main.buttonText}</button>
            </form>
            <div className='achievements'>
                <span>
                    <h1>{main.achievements.order.count}</h1>
                    {main.achievements.order.title}
                </span>
                <span>
                    <h1>{main.achievements.customers.count}</h1>
                    {main.achievements.customers.title}
                </span>
            </div>
        </main>
    )
}

export default Main