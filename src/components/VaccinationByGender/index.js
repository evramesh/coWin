import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const Gender = props => {
  const {way} = props
  return (
    <div>
      <h1 className="h">Vaccination by gender</h1>
      <ResponsiveContainer width={1000} height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={way}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Gender
