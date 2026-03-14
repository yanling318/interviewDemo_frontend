import React, {useEffect} from "react";
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import {useDispatch, useSelector} from "react-redux";
import {getPie} from "../action/chartAction";

export const PieRechartComponent = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    const dispatch = useDispatch();
    const interview = useSelector((state: any) => state.interview);
    useEffect(() => {
        //dispatch(getLine());
        dispatch(getPie());
    }, []);
    const pie = useSelector((state: any) => state.chart?.data);
    console.log(pie);

    const CustomTooltip = ({active, payload, label}: any) => {
        if (active) {
            return (
                <div className="custom-tooltip"
                     style={{backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc'}}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };
        return (
            <PieChart width={730} height={300}>
                <Pie data={pie} color="#000000" dataKey="number" nameKey="name" cx="50%" cy="50%"
                     outerRadius={120} fill="#8884d8">
                    {
                        pie?.map((entry:any, index:any) => <Cell key={`cell-${index}`}
                                                                 fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
            </PieChart>

        )
    }
