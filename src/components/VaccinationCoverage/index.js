import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const Coverage = props => {
  const {send} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div>
      <h1 className="h">Vaccination Coverage</h1>
      <ResponsiveContainer width={1000} height={300}>
        <BarChart data={send} margin={{top: 5}}>
          <XAxis
            dataKey="vaccine_date"
            tick={{stroke: 'grey', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" BarChart="20%" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" BarChart="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Coverage
