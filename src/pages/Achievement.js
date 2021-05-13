import React from 'react'
import {Card, Table} from 'antd'

function Achievement() {
    const data = [
        {
          key: '1',
          Name: 'Cassava Leaf Disease Classification',
          Category: 'AI/ML/Deep Leaning',
          Organization: 'Kaggle',
          Rank: '240/3900 (Top 7%)',
        },
        {
            key: '2',
            Name: 'HuBMAP - Hacking the Kidney',
            Category: 'AI/ML/Deep Leaning',
            Organization: 'Kaggle',
            Rank: '158/1216 (Top 13%)',
          },
        
      ];

    const  columns = [
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
        },
        {
          title: 'Category',
          dataIndex: 'Category',
          key: 'Category',
        },
        {
            title: 'Organization',
            dataIndex: 'Organization',
            key: 'Organization',
        },
        {
            title: 'Rank',
            dataIndex: 'Rank',
            key: 'Rank',
        },
    ]

    return (
        
        <Card title="Competition" >
            <Table columns={columns} dataSource={data} />
        </Card>
        
    )
}

export default Achievement