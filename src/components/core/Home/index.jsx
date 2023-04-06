import React from 'react'
import Layout from '../../../widgets/Layout'
import { useSelector } from 'react-redux'


function Home() {
    const testing = useSelector(state => state)
    const toStr = JSON.stringify(testing)
    return (
        <Layout>
            <div>Home {toStr}</div>
        </Layout>
    )
}

export default Home