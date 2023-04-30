import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const Age = props => {
  const {rent} = props
  return (
    <div>
      <h1 className="h">Vaccination by age</h1>
      <ResponsiveContainer className="ten" width={1000} height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={rent}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="10-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="botton"
            align="center"
            wrapperStyle={{padding: 10}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Age
