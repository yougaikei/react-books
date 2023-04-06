import React from 'react'
import Layout from '../../../widgets/Layout'
import { useSelector } from 'react-redux'

function Shop() {
    const testing = useSelector(state => state)
    return (
        <Layout>
            <div>Shop {JSON.stringify(testing)}</div>
        </Layout>
    )
}

export default Shop